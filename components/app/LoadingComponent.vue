<template>
	<div class="loading">
		<h1>Loading</h1>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #12021c;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
}

h1 {
	color: #fff;
}
</style>
