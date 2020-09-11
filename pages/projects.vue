<template>
	<div class="project-container">
		<MyButton>Click</MyButton>
		<HoverButton render="Click" color="#08b0ea" />
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.project-container {
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: #100317;
}
</style>
