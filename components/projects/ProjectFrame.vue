<template>
	<div class="selected-frame"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.selected-frame {
	width: 120px;
	height: 500px;
	position: absolute;
	top: 49.7%;
	left: 49.8%;
	transform: translate(-50%, -50%);
	outline: 6px solid #34b1f8;
}
.projectShowcase .selected-frame {
	width: 400px;
	outline: 8px solid #0b000f;
	// left: 22.4%;
}

@media (max-width: 800px) {
	.selected-frame {
		height: 400px;
	}
}
</style>
