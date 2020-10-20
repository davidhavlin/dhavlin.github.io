<template>
	<div class="selected-frame"></div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.selected-frame {
	// width: 120px;
	width: 119px;
	height: 500px;
	position: absolute;
	top: 49.7%;
	left: 49.9%;
	transform: translate(-50%, -50%);
	outline: 6px solid #34b1f8;
}
.projectShowcase .selected-frame {
	width: 400px;
	outline: 8px solid #0b000f;
	left: 110px;
}

@media (max-width: 800px) {
	.selected-frame {
		height: 400px;
	}
}
@media (max-width: 620px) {
	.projectShowcase .selected-frame {
		left: 50%;
		top: 32%;
	}
}

@media (max-height: 600px) {
	.selected-frame {
		height: 300px;
	}
}
@media (max-height: 500px) {
	.selected-frame {
		height: 150px;
	}
}
</style>
