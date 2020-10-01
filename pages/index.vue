<template>
	<div class="home-container">
		<section class="left-section">
			<HomeHeader />

			<HomeNavigation />
		</section>
		<section class="right-section">
			<div ref="hover" class="hover-image"></div>
			<HomeCodingBackground />
			<div class="right-name">david</div>
		</section>
	</div>
</template>

<script>
/* eslint-disable */
export default {
	mounted() {
		this.effectHover()
	},
	methods: {
		effectHover() {
			const effect = new hoverEffect({
				parent: this.$refs.hover,
				intensity: 0.3,
				image1: require('@/assets/images/1.jpg'),
				image2: require('@/assets/images/2.jpg'),
				displacementImage: require('@/assets/images/dist2.jpg'),
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.home-container {
	font-family: 'Press Start 2P', cursive;
	display: flex;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background: #100317;

	.left-section {
		width: 60%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.right-section {
		position: relative;
		width: 40%;
		height: 100%;

		.right-name {
			position: absolute;
			font-size: 3.5em;
			left: 50%;
			bottom: 29px;
			color: #9212f8;
			transform: translateX(-50%);
			mix-blend-mode: color-dodge;
		}
	}
}

.hover-image {
	width: 100%;
	height: 100%;
}

h1.letter {
	color: red;
}
</style>
