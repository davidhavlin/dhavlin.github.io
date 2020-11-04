<template>
	<div class="navigation-links">
		<!-- ***********    HOME link  ****************** -->
		<div class="link">
			<nuxt-link to="/">
				<HomeIcon />
				<div class="link-name">Home</div>
			</nuxt-link>
		</div>

		<!-- ***********    ABOUT ME link  ****************** -->
		<div class="link">
			<nuxt-link to="/about">
				<AboutIcon />
				<div class="link-name">About</div>
			</nuxt-link>
		</div>

		<!-- ***********    PROJECTS link  ****************** -->
		<div class="link">
			<nuxt-link to="/projects">
				<ProjectsIcon />
				<div class="link-name">Projects</div>
			</nuxt-link>
		</div>

		<!-- ***********    CONTACT link  ****************** -->
		<div class="link contact-icon">
			<nuxt-link to="/contact">
				<ContactIcon />
				<div class="link-name">Contact</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
import HomeIcon from '~/assets/images/svg/HomeIcon.svg'
import AboutIcon from '~/assets/images/svg/AboutIcon.svg'
import ProjectsIcon from '~/assets/images/svg/ProjectsIcon.svg'
import ContactIcon from '~/assets/images/svg/ContactIcon.svg'

export default {
	components: {
		HomeIcon,
		AboutIcon,
		ProjectsIcon,
		ContactIcon,
	},
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_colors';

.navigation-links {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #0b020f;
	background: var(--navbar-color);
	height: 100%;
	width: 4.4rem;
	pointer-events: all;
	position: fixed;
	transform: translateZ(0) translateX(0);
	left: 0;

	.link {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 1.3rem;

		svg {
			width: 32px;
		}
	}
	.link:last-child {
		margin-bottom: 0;
	}

	.link-name {
		font-family: 'Press Start 2P', cursive;
		font-size: 0.45em;
		text-transform: uppercase;
		color: #fff;
		padding-top: 0.2rem;
		opacity: 0;
	}
}

.link-name::after {
	content: '';
	position: absolute;
	width: 3px;
	margin-top: -1px;
	margin-left: 1px;
	height: 1.1em;
	border-right: 4px solid #0af0f0;
	opacity: 0;
	-webkit-animation: type 1s steps(2, jump-none) infinite;
	animation: type 1s steps(2, jump-none) infinite;
}
@keyframes type {
	to {
		opacity: 100%;
	}
}

// ------- AKTIV KLASSA
.nuxt-link-exact-active {
	.link-name {
		color: #0af0f0;
		opacity: 1;
	}
}

/* --------- HOVERY----------- */
.link:hover,
.link:focus {
	.home-stroke {
		stroke: var(--highlight-color);
	}
	.icon-path {
		stroke: #0af0f0;
	}
	.link-name {
		color: #0af0f0;
		opacity: 1;
	}
}
// pri hoverovani nech neblika to lomitko
.link:hover .link-name::after {
	display: none;
}

// MEDIA QUERIES -------------
@media (max-width: 800px) {
	.navigation-links {
		flex-direction: row;
		width: 100%;
		height: 4.4rem;
		// bottom: 0;
		top: calc(100% - 4.4rem);
		left: unset;

		.link {
			margin-bottom: 0rem;
			margin-right: 2rem;

			&:last-child {
				margin-right: 0rem;
			}
		}
		.link-name {
			display: none;
		}
	}
}
</style>
