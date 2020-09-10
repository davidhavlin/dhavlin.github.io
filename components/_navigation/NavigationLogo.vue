<template>
	<div class="logo-link">
		<nuxt-link to="/">
			<div class="icon">
				<svg
					width="39"
					height="39"
					viewBox="0 0 39 39"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="19.5" cy="19.5" r="19.5" fill="#9212F8" />
					<g filter="url(#filter0_d)">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M29.1244 8H10.0048V11.4888H6V23.118H10.0048V31H14.1388V27.1236H17.4976V31H21.6316V27.1236H25.2488V31H29.1244V23.118H33V11.4888H29.1244V8ZM10.3923 15.6236H17.4976V19.2416H10.3923V15.6236ZM28.7368 15.6236H21.6316V19.2416H28.7368V15.6236Z"
							fill="#0FD7D7"
						/>
					</g>
					<defs>
						<filter
							id="filter0_d"
							x="2"
							y="8"
							width="35"
							height="31"
							filterUnits="userSpaceOnUse"
							color-interpolation-filters="sRGB"
						>
							<feFlood
								flood-opacity="0"
								result="BackgroundImageFix"
							/>
							<feColorMatrix
								in="SourceAlpha"
								type="matrix"
								values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							/>
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feColorMatrix
								type="matrix"
								values="0 0 0 0 0.0208333 0 0 0 0 0.0208333 0 0 0 0 0.0208333 0 0 0 0.25 0"
							/>
							<feBlend
								mode="normal"
								in2="BackgroundImageFix"
								result="effect1_dropShadow"
							/>
							<feBlend
								mode="normal"
								in="SourceGraphic"
								in2="effect1_dropShadow"
								result="shape"
							/>
						</filter>
					</defs>
				</svg>
			</div>
			<div class="logo">david</div>
		</nuxt-link>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_colors';

.logo-link {
	margin-top: 1rem;
	opacity: 0;
}
.icon {
	display: flex;
	justify-content: center;
	align-items: center;
}
.logo {
	font-family: 'Press Start 2P', cursive;
	font-size: 0.5em;
	color: $text-color;
	padding: 0.5rem;
}
</style>
