<template>
	<div class="contact">
		<section class="left-section">
			<ContactForm class="contact-form" />
		</section>
		<div class="right-section">
			<!-- <img src="~assets/images/hover1.jpg" alt />
			<img src="~assets/images/hover2.jpg" alt />-->
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import hoverEffect from 'hover-effect'

export default {
	mounted() {
		new hoverEffect({
			parent: document.querySelector('.right-section'),
			intensity: 0.3,
			image1: require('@/assets/images/1.jpg'),
			image2: require('@/assets/images/2.jpg'),
			displacementImage: require('@/assets/images/dist2.jpg'),
		})
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
	}
}
</style>
