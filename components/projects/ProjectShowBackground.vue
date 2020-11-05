<template>
	<div
		class="project-showcase-images"
		:style="{
			background: `linear-gradient(0deg, #0e031b91 29%, ${project.color.main} 302%)`,
		}"
	></div>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
			default() {
				return {
					title: 'coming soon',
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
		transform: translateX(90px);

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
	}
}
@media (max-width: 620px) {
	.show {
		.project-showcase-images {
			transform: translateX(0px);
			top: 0;
			height: 200vh;
			margin-top: -128px;
		}
	}
}
</style>
