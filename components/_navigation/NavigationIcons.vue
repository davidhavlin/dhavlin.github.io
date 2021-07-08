<template>
	<div class="navigation-links">
		<!-- ***********    HOME link  ****************** -->
		<div class="link home-icon" :class="{ disabled: loading }">
			<nuxt-link to="/">
				<HomeIcon />
				<div class="link-name">Home</div>
			</nuxt-link>
		</div>

		<!-- ***********    ABOUT ME link  ****************** -->
		<div class="link about-icon" :class="{ disabled: loading }">
			<nuxt-link to="/about">
				<AboutIcon />
				<div class="link-name">About</div>
			</nuxt-link>
		</div>

		<!-- ***********    PROJECTS link  ****************** -->
		<div class="link projects-icon" :class="{ disabled: loading }">
			<nuxt-link to="/projects">
				<ProjectsIcon />
				<div class="link-name">projects</div>
			</nuxt-link>
		</div>

		<!-- ***********    CONTACT link  ****************** -->
		<div class="link contact-icon" :class="{ disabled: loading }">
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
	props: {
		loading: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_colors';
.disabled {
	pointer-events: none;
	opacity: 0.7;
	filter: grayscale(50%);
}
.navigation-links {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: transparent;
	height: 100%;
	width: 4.4rem;
	pointer-events: all;
	position: fixed;
	transform: translate3D(0, 0, 0);
	left: 0;

	.link {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 1.3rem;

		svg {
			width: 35px;
			height: auto;
		}
	}
	.contact-icon svg {
		width: 31px;
	}
	.link:last-child {
		margin-bottom: 0;
	}

	.link-name {
		// font-family: 'Press Start 2P', cursive;
		// font-family: 'IBM Plex Mono', monospace;
		font-family: 'Rubik', sans-serif;
		font-weight: 500;
		font-size: 13px;
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
		color: #fff;
		opacity: 1;
	}
}

/* --------- HOVERY----------- */
.link:hover,
.link:focus {
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
		background: var(--navbar-color);

		width: 100%;
		height: 4.4rem;
		bottom: 0;
		left: unset;

		.link {
			position: relative;
			margin-bottom: 0rem;
			margin-right: 2rem;

			&:last-child {
				margin-right: 0rem;
			}
		}
		.link-name {
			position: absolute;
			top: 87%;
			padding-top: 6px;
			// opacity: 0;
		}
		.home-icon .link-name {
			left: 4px;
		}
		.about-icon .link-name {
			left: 0;
		}
		.projects-icon .link-name {
			left: -11px;
		}
		.contact-icon .link-name {
			left: -8px;
		}
		.link-name::after {
			display: none;
		}
	}
}
</style>
