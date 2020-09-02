<template>
	<div class="navigation-links">
		<nuxt-link to="/">
			<div class="link">
				<svg
					width="41"
					height="39"
					viewBox="0 0 41 39"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="icon-second-color"
						d="M18.6316 16L10 17.522V31.0293H19.6124V23.039L18.6316 16Z"
						fill="#0FD7D7"
					/>
					<path
						class="icon-main-color"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.08134 5.13659H13.3397V0H20.5981H27.8565V5.13659H35.1148V10.2732H41V17.3122H35.1148V26.2537V39H30.4067V26.2537H23.7368V39H17.4593H12.3589H6.08134V29.8683V17.3122H0V10.2732H6.08134V5.13659ZM18.8325 20.3561H11.1818V27.0146H18.8325V20.3561Z"
						fill="#0FD7D7"
					/>
				</svg>

				<div class="link-name">Home</div>
			</div>
		</nuxt-link>
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
						class="icon-second-color"
						d="M22.658 18.5938V9.84375H34.5264L35.6053 18.5938H22.658Z"
						fill="#0FD7D7"
					/>
					<path
						class="icon-main-color"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M35.1148 0H6.08134V5.30899H0V23.0056H6.08134V35H12.3589V29.1011H17.4593V35H23.7368V29.1011H29.2297V35H35.1148V23.0056H41V5.30899H35.1148V0ZM6.66986 11.6011H17.4593V17.1067H6.66986V11.6011ZM34.5263 11.6011H23.7368V17.1067H34.5263V11.6011Z"
						fill="#0FD7D7"
					/>
				</svg>

				<div class="link-name">About</div>
			</div>
		</nuxt-link>
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
						class="icon-disk-bottom-color"
						d="M28.8165 19.0653H7.42114V33.4149H28.8165V19.0653Z"
						fill="#E7E7E7"
					/>
					<path
						class="icon-bottom-color"
						d="M29.2299 33.3632H7.21436V36.8858H29.2299V33.3632Z"
						fill="#9212F8"
					/>
					<path
						class="icon-main-color"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0.134277 0.986084V36.9895H7.4211V19.1173H28.8164V36.9895H36.0516V4.81954H32.4857V0.986084H0.134277Z"
						fill="#0FD7D7"
					/>
					<path
						class="icon-main-color-darker"
						d="M28.8683 15.4392H7.16284V1.03784H28.8683V15.4392Z"
						fill="#009292"
					/>
					<path
						class="icon-disk-color"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M10.8838 1.03784V15.4392H28.8683V1.03784H10.8838ZM25.3132 4.67717H21.6013V12.0078H25.3132V4.67717Z"
						fill="#212121"
					/>
				</svg>

				<div class="link-name">Projects</div>
			</div>
		</nuxt-link>
		<nuxt-link to="/contact">
			<div class="link">
				<svg
					class="projects-icon"
					width="41"
					height="26"
					viewBox="0 0 41 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="icon-second-color"
						d="M2.13281 22.237V2.28088H38.7484V22.237H2.13281Z"
						fill="black"
					/>
					<path
						class="icon-main-color"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 0H41V26H0V0ZM6.87283 3.19298V6.38596H3.43642V3.19298H6.87283ZM6.99133 6.61404H10.3092V9.57895H6.99133V6.61404ZM13.7457 9.80702H10.5462V13H13.7457V9.80702ZM17.3006 13.114H13.9827V16.4211H17.3006V19.5H23.8179V16.4211H17.3006V13.114ZM24.1734 13.114H27.4913V16.4211H24.1734V13.114ZM31.0462 9.80702H27.4913V13H31.0462V9.80702ZM31.0462 6.61404H34.2457V9.57895H31.0462V6.61404ZM34.2457 6.38596V3.19298H37.6821V6.38596H34.2457Z"
						fill="#0FD7D7"
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
		margin-bottom: 0rem;

		svg {
			width: 30px;
		}
	}

	.link-name {
		font-family: 'Press Start 2P', cursive;
		font-size: 0.5em;
		// text-transform: uppercase;
		color: $main-color;
		padding: 0.5rem;
		opacity: 0;
	}
}

.icon-main-color {
	fill: $main-color;
}

.icon-second-color {
	fill: transparent;
}

.icon-bg-color {
	fill: transparent;
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

/* --------- HOVERY----------- */
.link:hover .icon-main-color,
.link:hover .link-name {
	fill: $second-color;
	opacity: 1;
}
.link:hover .icon-second-color {
	fill: $main-color;
}
.link:hover svg {
	transform: scale(1.1);
}
//Projects ikona a zmena po hovere
.link:hover .icon-main-color-darker {
	fill: darken($second-color, 15);
}
.link:hover .icon-bottom-color {
	fill: $main-color;
}
</style>
