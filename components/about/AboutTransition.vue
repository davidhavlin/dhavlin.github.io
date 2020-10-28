<template>
	<div
		class="about-transition"
		:style="{
			backgroundImage: `url(${require('~/assets/images/bg-transition.webp')})`,
		}"
	></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about-transition {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	// display: flex;
	// flex-direction: column;
	// justify-content: center;
	// align-items: center;
	z-index: 10000;
	pointer-events: none;
	// background: rgba(255, 0, 0, 0.326);
	// background-image: url(require('@/assets/images/bg-transition.webp'));
}
</style>
