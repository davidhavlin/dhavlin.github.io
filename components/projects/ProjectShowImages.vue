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
				backgroundImage: `url(${project.images[1]})`,
				backgroundColor: project.color.main,
			}"
		></div>
		<div
			class="prj-image-left"
			:style="{
				backgroundImage: `url(${project.images[2]})`,
			}"
		></div>
	</div>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
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
		width: 100vw;
		height: 100vh;
		top: 50%;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		margin-top: -50vh;
		z-index: -10;

		.prj-image-right,
		.prj-image-left {
			width: 30%;
			height: 100%;
			position: absolute;
			right: 0;
			background-size: cover;
			// background-position: 1015px;
			animation: rightImage 0.5s forwards ease;
			animation-delay: 0.8s;
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

		.prj-image-left {
			left: 0;
			animation: leftImage 0.5s forwards ease;
			animation-delay: 1s;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;

			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: linear-gradient(
					90deg,
					rgba(16, 3, 23, 1) 0%,
					rgba(16, 3, 23, 0.20772058823529416) 100%
				);
			}
		}

		@keyframes leftImage {
			from {
				transform: translateX(-100%);
			}
			to {
				transform: translateX(0);
				opacity: 1;
			}
		}
	}
}
</style>
