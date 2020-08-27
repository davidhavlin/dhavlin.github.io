<template>
	<div class="navigation-links">
		<nuxt-link to="/">
			<div class="link link-home">
				<svg
					width="41"
					height="39"
					viewBox="0 0 41 39"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="link-second-color"
						d="M31.1914 23.9707L22.5598 25.4927V39H32.1723V31.0097L31.1914 23.9707Z"
						fill="#39D9B3"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.08134 5.13659H13.3397V0H20.5981H27.8565V5.13659H35.1148V10.2732H41V17.3122H35.1148V26.2537V39H30.4067V26.2537H23.7368V39H17.4593H12.3589H6.08134V29.8683V17.3122H0V10.2732H6.08134V5.13659ZM18.8325 20.3561H11.1818V27.0146H18.8325V20.3561Z"
						fill="white"
					/>
				</svg>
				<div class="link-name">Home</div>
			</div>
		</nuxt-link>
		<nuxt-link to="/about">
			<div class="link link-about">
				<svg
					width="41"
					height="35"
					viewBox="0 0 41 35"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="link-second-color"
						d="M22.6578 18.5938V9.84375H34.5263L35.6052 18.5938H22.6578Z"
						fill="#39D9B3"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M35.1148 0H6.08134V5.30899H0V23.0056H6.08134V35H12.3589V29.1011H17.4593V35H23.7368V29.1011H29.2297V35H35.1148V23.0056H41V5.30899H35.1148V0ZM6.66986 11.6011H17.4593V17.1067H6.66986V11.6011ZM34.5263 11.6011H23.7368V17.1067H34.5263V11.6011Z"
						fill="white"
					/>
				</svg>
				<div class="link-name">About</div>
			</div>
		</nuxt-link>
		<nuxt-link to="/projects">
			<div class="link link-projects">
				<svg
					width="42"
					height="42"
					viewBox="0 0 42 42"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M32.8188 21.5742H8.4519V37.9168H32.8188V21.5742Z"
						fill="white"
					/>
					<path
						d="M33.2896 37.8582H8.21643V41.87H33.2896V37.8582Z"
						fill="#BB2CFF"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0.153076 0.984131V41.988H8.45196V21.6336H32.8189V41.988H41.0589V5.35001H36.9978V0.984131H0.153076Z"
						fill="#39D9B3"
					/>
					<path
						d="M32.8778 17.4448H8.15771V1.04321H32.8778V17.4448Z"
						fill="#24AB8B"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12.3953 1.04321V17.4448H32.8776V1.04321H12.3953ZM28.8288 5.18801H24.6013V13.5368H28.8288V5.18801Z"
						fill="#414042"
					/>
				</svg>

				<div class="link-name">Projects</div>
			</div>
		</nuxt-link>
		<nuxt-link to="/contact">
			<div class="link link-contact">
				<svg
					width="41"
					height="26"
					viewBox="0 0 41 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2.13293 22.2369V2.28076H38.7485V22.2369H2.13293Z"
						fill="black"
					/>
					<path
						class="link-second-color"
						d="M21.5789 9.75008L19.421 21.6667H24.8158L36.6842 17.3334L38.8421 2.16675H33.4473L21.5789 9.75008Z"
						fill="#39D9B3"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.87283 6.38596V3.19298H34.2457V6.38596H37.6821V22.693H3.43642V6.38596H6.87283ZM17.3006 16.4211H23.8179V19.5H17.3006V16.4211H13.9827V13.114H17.3006V16.4211ZM10.3092 6.61404H6.99133V9.57895H10.3092V6.61404ZM13.7457 9.80702H10.5462V13H13.7457V9.80702ZM27.4913 13.114H24.1734V16.4211H27.4913V13.114ZM31.0462 9.80702H27.4913V13H31.0462V9.80702ZM34.2457 6.61404H31.0462V9.57895H34.2457V6.61404Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M41 0H0V26H41V0ZM6.87283 3.19298H34.2457H37.6821V6.38596V22.693H3.43642V6.38596V3.19298H6.87283Z"
						fill="white"
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
		margin-bottom: 0.6rem;

		svg {
			width: 35px;
		}
	}

	.link-name {
		font-family: 'Press Start 2P', cursive;
		font-size: 0.5em;
		color: var(--main-color);
		padding: 0.5rem;
		opacity: 0;
	}
}

.link-second-color {
	fill: var(--main-color);
}
</style>
