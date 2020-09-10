<template>
	<div class="navigation-links">
		<!-- ***********    HOME link  ****************** -->
		<nuxt-link to="/">
			<div class="link">
				<svg
					width="42"
					height="41"
					viewBox="0 0 42 41"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="home-icon"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M35.067 6.13659H27.9856V1H20.9043H13.823V6.13659H6.74162V11.2732H1V18.3122H6.74162V27.2537V40H11.3349V27.2537H17.8421V40H23.9665H28.9426H35.067V30.8683V18.3122H41V11.2732H35.067V6.13659ZM22.6268 21.3561H30.0909V28.0146H22.6268V21.3561Z"
						fill="#C807A9"
						stroke="#110019"
						stroke-width="2"
					/>
				</svg>

				<div class="link-name">Home</div>
			</div>
		</nuxt-link>

		<!-- ***********    ABOUT ME link  ****************** -->
		<nuxt-link to="/about">
			<div class="link">
				<svg
					width="41"
					height="35"
					viewBox="0 0 41 35"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="about-icon"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M34.4019 1H6.78469V6.00562H1V22.691H6.78469V34H12.756V28.4382H17.6077V34H23.5789V28.4382H28.8038V34H34.4019V22.691H40V6.00562H34.4019V1ZM7.3445 11.9382H17.6077V17.1292H7.3445V11.9382ZM33.8421 11.9382H23.5789V17.1292H33.8421V11.9382Z"
						fill="#9212F8"
						stroke="#110019"
						stroke-width="2"
					/>
				</svg>

				<div class="link-name">About</div>
			</div>
		</nuxt-link>

		<!-- ***********    PROJECTS link  ****************** -->
		<nuxt-link to="/projects">
			<div class="link">
				<svg
					width="37"
					height="37"
					viewBox="0 0 37 37"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="projects-icon-under"
						d="M31.5 2H2V35H35V5.5H31.5V2Z"
						stroke="#100317"
						stroke-width="5"
					/>
					<path
						class="projects-icon-color-darker"
						d="M29 31H8V35H29V31Z"
						fill="#0A6DA5"
					/>
					<path
						d="M28.4151 18.5598H8.80273V31.7136H28.4151V18.5598Z"
						fill="white"
					/>
					<path
						class="projects-icon-color"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M2.12329 1.9873V34.9904H8.80288V18.6076H28.4153V34.9904H35.0475V5.5013H31.7788V1.9873H2.12329Z"
						fill="#34B1F8"
					/>
					<path
						class="projects-icon-color-darker"
						d="M28.4625 15.2359H8.56592V2.03467H28.4625V15.2359Z"
						fill="#0A6DA5"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M11.9768 2.03467V15.2359H28.4626V2.03467H11.9768ZM25.2038 5.37072H21.8012V12.0905H25.2038V5.37072Z"
						fill="#12021C"
					/>
				</svg>

				<div class="link-name">Projects</div>
			</div>
		</nuxt-link>

		<!-- ***********    CONTACT link  ****************** -->
		<nuxt-link to="/contact">
			<div class="link">
				<svg
					width="43"
					height="29"
					viewBox="0 0 43 29"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						class="contact-icon-under"
						width="43"
						height="29"
						fill="#7E0CEF"
					/>
					<path
						class="contact-icon"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M2 2H41V27H2V2ZM8.53757 5.07018V8.14035H5.26879V5.07018H8.53757ZM8.65029 8.35965H11.8064V11.2105H8.65029V8.35965ZM15.0751 11.4298H12.0318V14.5H15.0751V11.4298ZM18.4566 14.6096H15.3006V17.7895H18.4566V20.75H24.6561V17.7895H18.4566V14.6096ZM24.9942 14.6096H28.1503V17.7895H24.9942V14.6096ZM31.5318 11.4298H28.1503V14.5H31.5318V11.4298ZM31.5318 8.35965H34.5751V11.2105H31.5318V8.35965ZM34.5751 8.14035V5.07018H37.8439V8.14035H34.5751Z"
						fill="#E9D41A"
					/>
					<path
						class="contact-icon-under-stroke"
						d="M18.4566 17.7895H24.6561V20.75H18.4566V17.7895ZM18.4566 17.7895V14.6096H15.3006V17.7895H18.4566ZM2 2H41V27H2V2ZM8.53757 8.14035V5.07018H5.26879V8.14035H8.53757ZM34.5751 5.07018V8.14035H37.8439V5.07018H34.5751ZM8.65029 8.35965H11.8064V11.2105H8.65029V8.35965ZM12.0318 11.4298H15.0751V14.5H12.0318V11.4298ZM24.9942 14.6096H28.1503V17.7895H24.9942V14.6096ZM28.1503 11.4298H31.5318V14.5H28.1503V11.4298ZM31.5318 8.35965H34.5751V11.2105H31.5318V8.35965Z"
						stroke="#7E0CEF"
					/>
				</svg>

				<div class="link-name">Contact</div>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_colors';

.navigation-links {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 0.5rem;

		svg {
			width: 38px;
		}
	}

	.link-name {
		font-family: 'Press Start 2P', cursive;
		font-size: 0.45em;
		text-transform: uppercase;
		color: $text-color;
		padding: 0.5rem;
		padding-top: 0.3rem;
		opacity: 0;
	}

	a {
		// cursor: none;
	}
}

.link-name::after {
	content: '';
	position: absolute;
	width: 3px;
	margin-top: -1px;
	margin-left: 1px;
	height: 1.1em;
	border-right: 4px solid #ffffff;
	opacity: 0;
	-webkit-animation: type-data-v-523b4402 1s steps(2, jump-none) infinite;
	animation: type-data-v-523b4402 1s steps(2, jump-none) infinite;
}
@keyframes type {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 100%;
	}
}

//icona DISKETA a jej farby
.projects-icon {
	.icon-main-color-darker {
		fill: darken($main-color, 15);
	}
	.icon-disk-color {
		fill: #212121;
	}
	.icon-disk-bottom-color {
		fill: #e7e7e7;
	}
	.icon-bottom-color {
		fill: $second-color;
	}
}

// ------- AKTIV KLASSA
.nuxt-link-exact-active {
	.icon-main-color {
		fill: $second-color;
	}
	.icon-second-color {
		fill: lighten($second-color, 10);
	}

	.icon-highlight-color {
		fill: $main-color;
	}

	.icon-bottom-color {
		fill: $main-color;
	}
	.icon-main-color-darker {
		fill: darken($second-color, 15);
	}

	.link-name {
		opacity: 1;
	}
}

.home-icon {
	fill: #c807a9;
	stroke: #110019;
}

.about-icon {
	fill: #9212f8;
	stroke: #110019;
}

.projects-icon-color {
	fill: #34b1f8;
}
.projects-icon-color-darker {
	fill: darken(#34b1f8, 20);
}

.contact-icon {
	fill: #e9d41a;
}
.contact-icon-under {
	fill: #110019;
}
.contact-icon-under-stroke {
	stroke: #110019;
}

/* --------- HOVERY----------- */
.link:hover .home-icon,
.link:hover .link-name {
	stroke: #fff;
	opacity: 1;
}
.link:hover .link-name::after {
	display: none;
}
.link:hover .about-icon {
	stroke: #e9d41a;
}
.link:hover .projects-icon-under {
	stroke: #fff;
}

.link:hover .contact-icon-under {
	fill: #fff;
}
.link:hover .contact-icon-under-stroke {
	stroke: #fff;
}

// .link:hover svg {
// 	transform: scale(0.9) rotate(5deg);
// }
</style>
