<template>
	<div class="contact">
		<section class="left-section">
			<ContactForm class="contact-form" />
		</section>
		<section class="right-section">
			<!-- <img src="~assets/images/hover1.jpg" alt />
			<img src="~assets/images/hover2.jpg" alt />-->
		</section>
	</div>
</template>

<script>
/* eslint-disable */
// import hoverEffect from 'hover-effect/dist/hover-effect.js'

export default {
	mounted() {
		// var myAnimation = new hoverEffect({
		// 	parent: document.querySelector('.my-div'),
		// 	intensity: 0.3,
		// 	image1: 'images/myImage1.jpg',
		// 	image2: 'images/myImage2.jpg',
		// 	displacementImage: 'images/myDistorsionImage.png',
		// })
	},
}
</script>

<style lang="scss" scoped>
.contact {
	width: 100vw;
	height: 100vh;
	display: flex;
	// background: yellow;

	.left-section {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.right-section {
		width: 50%;
		height: 100%;
		// background-image: url('~assets/images/city.jpg');
		// background-size: cover;
	}
}
</style>
