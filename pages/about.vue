<template>
	<div class="about-container">
		<h1>about</h1>
		<MyButton
			main-color="#e60597"
			second-color="#610240"
			border-color="#df108b"
			>Click</MyButton
		>
		<HoverButton render="Click" color="#08b0ea" />
	</div>
</template>

<script>
/* eslint-disable */

export default {}
</script>

<style lang="scss" scoped>
.about-container {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	background: #100317;
}
</style>
