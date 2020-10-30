<template>
	<div class="navigation-links">
		<!-- ***********    HOME link  ****************** -->
		<div class="link">
			<nuxt-link to="/">
				<svg
					width="42"
					height="29"
					viewBox="0 0 42 38"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="home-icon icon-path"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M35.067 6.13659H27.9856V1H20.9043H13.823V6.13659H6.74162V11.2732H1V18.3122H6.74162V27.2537V36.5H11.3349V21.3561H17.8421V36.5H23.9665H28.9426H31H35.067V33V28.8683V18.3122H41V11.2732H35.067V6.13659ZM22.6268 21.3415H30.0909V28H22.6268V21.3415Z"
						fill="#34B1F8"
						stroke="#110019"
						stroke-width="2"
					/>
				</svg>

				<div class="link-name">Home</div>
			</nuxt-link>
		</div>

		<!-- ***********    ABOUT ME link  ****************** -->
		<div class="link">
			<nuxt-link to="/about">
				<!-- <svg
					width="41"
					height="28"
					viewBox="0 0 41 35"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="about-icon icon-path"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M34.4019 1H6.78469V6.00562H1V22.691H6.78469V34H12.756V28.4382H17.6077V34H23.5789V28.4382H28.8038V34H34.4019V22.691H40V6.00562H34.4019V1ZM7.3445 11.9382H17.6077V17.1292H7.3445V11.9382ZM33.8421 11.9382H23.5789V17.1292H33.8421V11.9382Z"
						fill="#9212F8"
						stroke="#110019"
						stroke-width="2"
					/>
				</svg> -->
				<svg
					width="115"
					height="27"
					viewBox="0 0 115 90"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="about-icon icon-path"
						d="M15.4332 77.2341H18.4332V74.2341V57.4488H22.2488V74.2341V77.2341H25.2488H31.427V84V87H34.427H52.146H55.146V84V74.2341V71.2341H52.146H37.427V67.2146H77.7005V71.2341H61.9616H58.9616V74.2341V84V87H61.9616H80.7005H83.7005V84V77.2341H90.3886H93.3886V74.2341V57.4488H96.8218V74.2341V77.2341H99.8218H109H112V74.2341V44.1756V41.1756H109H102.822V34.4098V31.4098H99.8218H93.3886V24.8976V21.8976H90.3886H83.7005V17.878H90.3886H93.3886V14.878V6V3H90.3886H80.7005H77.7005V6V11.878H71.5223H68.5223V14.878V21.8976H47.1151V14.878V11.878H44.1151H37.427V6V3H34.427H25.2488H22.2488V6V14.878V17.878H25.2488H31.427V21.8976H25.2488H22.2488V24.8976V31.4098H15.4332H12.4332V34.4098V41.1756H6H3V44.1756V74.2341V77.2341H6H15.4332ZM37.427 37.4098H41.1151V41.1756H37.427V37.4098ZM74.5223 37.4098H77.7005V41.1756H74.5223V37.4098Z"
						fill="#C4C4C4"
						stroke="black"
						stroke-width="6"
					/>
				</svg>

				<div class="link-name">About</div>
			</nuxt-link>
		</div>

		<!-- ***********    PROJECTS link  ****************** -->
		<div class="link">
			<nuxt-link to="/projects">
				<!-- prettier-ignore -->
				<svg width="37"	height="32" viewBox="0 0 37 37" fill="none">
					<path class="projects-icon-under icon-path" d="M31.5 2H2V35H35V5.5H31.5V2Z" stroke="#100317" stroke-width="4"/>
					<path class="projects-icon-color-darker" d="M29 31H8V35H29V31Z" fill="#0A6DA5" />
					<path d="M28.4151 18.5598H8.80273V31.7136H28.4151V18.5598Z" fill="white" />
					<path class="projects-icon-color" fill-rule="evenodd" clip-rule="evenodd"
						d="M2.12329 1.9873V34.9904H8.80288V18.6076H28.4153V34.9904H35.0475V5.5013H31.7788V1.9873H2.12329Z"
						fill="#34B1F8" />
					<path class="projects-icon-color-darker"
						d="M28.4625 15.2359H8.56592V2.03467H28.4625V15.2359Z"
						fill="#0A6DA5" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M11.9768 2.03467V15.2359H28.4626V2.03467H11.9768ZM25.2038 5.37072H21.8012V12.0905H25.2038V5.37072Z"
						fill="#12021C" />
				</svg>

				<div class="link-name">Projects</div>
			</nuxt-link>
		</div>

		<!-- ***********    CONTACT link  ****************** -->
		<div class="link">
			<nuxt-link to="/contact">
				<!-- prettier-ignore -->
				<svg width="43" height="22"	viewBox="0 0 43 29" fill="none">
					<rect class="contact-icon-under" width="43"	height="29"	fill="#7E0CEF"/>
					<path class="contact-icon" fill-rule="evenodd" clip-rule="evenodd"
						d="M2 2H41V27H2V2ZM8.53757 5.07018V8.14035H5.26879V5.07018H8.53757ZM8.65029 8.35965H11.8064V11.2105H8.65029V8.35965ZM15.0751 11.4298H12.0318V14.5H15.0751V11.4298ZM18.4566 14.6096H15.3006V17.7895H18.4566V20.75H24.6561V17.7895H18.4566V14.6096ZM24.9942 14.6096H28.1503V17.7895H24.9942V14.6096ZM31.5318 11.4298H28.1503V14.5H31.5318V11.4298ZM31.5318 8.35965H34.5751V11.2105H31.5318V8.35965ZM34.5751 8.14035V5.07018H37.8439V8.14035H34.5751Z"
						fill="#E9D41A"/>
					<path class="contact-icon-under-stroke icon-path"
						d="M18.4566 17.7895H24.6561V20.75H18.4566V17.7895ZM18.4566 17.7895V14.6096H15.3006V17.7895H18.4566ZM2 2H41V27H2V2ZM8.53757 8.14035V5.07018H5.26879V8.14035H8.53757ZM34.5751 5.07018V8.14035H37.8439V5.07018H34.5751ZM8.65029 8.35965H11.8064V11.2105H8.65029V8.35965ZM12.0318 11.4298H15.0751V14.5H12.0318V11.4298ZM24.9942 14.6096H28.1503V17.7895H24.9942V14.6096ZM28.1503 11.4298H31.5318V14.5H28.1503V11.4298ZM31.5318 8.35965H34.5751V11.2105H31.5318V8.35965Z"
						stroke="#7E0CEF"/>
				</svg>

				<div class="link-name">Contact</div>
			</nuxt-link>
		</div>
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
	background: #0b020f;
	height: 100%;
	width: 4.4rem;
	pointer-events: all;
	position: fixed;
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
	border-right: 4px solid #ffffff;
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
		opacity: 1;
	}
}
// --------- FARBY IKONY
.home-icon {
	fill: #086aa6;
	stroke: #110019;
}
.about-icon {
	fill: #9212f8;
	// fill: #ff076e;
	stroke: #110019;
}
.projects-icon-color {
	fill: #34b1f8;
}
.projects-icon-color-darker {
	fill: darken(#34b1f8, 20);
}
.contact-icon {
	fill: #ffd60a;
	// fill: #0aff61;
}
.contact-icon-under {
	fill: #110019;
}
.contact-icon-under-stroke {
	stroke: #110019;
}

/* --------- HOVERY----------- */
.link:hover .icon-path,
.link:focus .icon-path {
	stroke: #0af0f0;
}

.link:hover .link-name {
	color: #0af0f0;
	opacity: 1;
}
// pri hoverovani nech neblika to lomitko
.link:hover .link-name::after {
	display: none;
}
.link:hover .contact-icon-under {
	fill: #0af0f0;
}

// MEDIA QUERIES -------------
@media (max-width: 800px) {
	.navigation-links {
		flex-direction: row;
		width: 100%;
		height: 4.4rem;
		bottom: 0;
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
