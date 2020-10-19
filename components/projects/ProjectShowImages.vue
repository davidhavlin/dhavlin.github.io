<template>
	<div
		class="project-showcase-images"
		:style="{
			background: `linear-gradient(0deg, rgba(16,3,23,0) 29%, ${project.color.main} 302%)`,
		}"
	>
		<div
			class="prj-image-right"
			:style="{
				backgroundColor: project.color.main,
			}"
		></div>
	</div>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
			default() {
				return {
					title: 'coming soon',
					url: 'none',
					desc: 'none',
					logo: 'none',
					colors: ['#f80f2b', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue'],
					images: 'none',
					id: 0,
				}
			},
		},
	},
}
</script>

<style lang="scss" scoped>
.project-showcase-images {
	display: none;
}
.show {
	.project-showcase-images {
		display: block;
		position: absolute;
		width: 102vw;
		height: 100vh;
		top: 51%;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		margin-top: -50vh;
		z-index: -10;
		pointer-events: none;

		.prj-image-right {
			width: 30%;
			height: 100%;
			position: absolute;
			right: 0;
			background-size: cover;
			// background-position: 1015px;
			animation: rightImage 1s forwards ease;
			animation-delay: 1.3s;
			opacity: 0;
		}

		@keyframes rightImage {
			from {
				transform: translateX(100%);
			}
			to {
				transform: translateX(0);
				opacity: 1;
			}
		}

		// &::after {
		// 	content: '';
		// 	position: absolute;
		// 	top: 0;
		// 	left: 0;
		// 	width: 100%;
		// 	height: 100%;
		// 	background: linear-gradient(
		// 		90deg,
		// 		rgba(16, 3, 23, 1) 0%,
		// 		rgba(16, 3, 23, 0.20772058823529416) 100%
		// 	);
		// }
	}
}
</style>
