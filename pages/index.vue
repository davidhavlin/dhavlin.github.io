<template>
	<div class="home-container">
		<section class="left-section">
			<HomeHeader />

			<HomeNavigation />
		</section>
		<section class="right-section">
			<div ref="hover" class="hover-image"></div>
			<HomeCodingBackground />
		</section>
	</div>
</template>

<script>
/* eslint-disable */
export default {
	head() {
		return {
			title: 'Home',
		}
	},
	computed: {
		rightSection() {
			return document.querySelector('.right-section')
		},
	},
	mounted() {
		this.effectHover()

		this.rightSection.addEventListener('animationstart', () => {
			this.rightSection.style.opacity = 1
		})
	},
	methods: {
		effectHover() {
			const effect = new hoverEffect({
				parent: this.$refs.hover,
				intensity: 0.3,
				image1: require('@/assets/images/me01.webp'),
				image2: require('@/assets/images/me02.webp'),
				displacementImage: require('@/assets/images/dist2.jpg'),
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.home-container {
	font-family: 'Press Start 2P', cursive;
	position: relative;
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
		background: #1f0831;
		position: relative;
		width: 40%;
		height: 100%;
		opacity: 0;
		animation: fadeInRight;
		animation-duration: 2s;
		animation-delay: 2000ms;
		overflow: hidden;
	}
}

.hover-image {
	width: 100%;
	height: 100%;
	opacity: 0;
	animation: picture 5s forwards ease;
	animation-delay: 3s;
}

@keyframes picture {
	to {
		opacity: 1;
	}
}

h1.letter {
	color: red;
}
@media (max-width: 870px) {
	.home-container {
		.left-section {
			width: 100%;
		}
		.right-section {
			position: absolute;
			right: 0;
		}
	}
}
@media (max-width: 800px) {
	.home-container {
		height: auto;
		flex-direction: column;

		.left-section {
			height: 100vh;
		}
		.right-section {
			position: relative;
			width: 100%;
			height: 100vh;
		}
	}
}
</style>
