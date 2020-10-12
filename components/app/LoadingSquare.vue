<template>
	<div class="animation-square">
		<div class="square1"></div>
		<div class="square2"></div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.animation-square {
	position: absolute;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	.square1,
	.square2 {
		width: 10px;
		height: 10px;
		background: #34b1f8;
		animation: squareLoading 1s infinite ease;
	}
	.square2 {
		position: absolute;
		background: #9212f8;
		animation-delay: 0.5s;
	}

	@keyframes squareLoading {
		0% {
			transform: translate(0px, 0px);
		}
		25% {
			transform: translate(0px, 10px);
		}
		50% {
			transform: translate(10px, 10px);
		}
		75% {
			transform: translate(10px, 0px);
		}
		100% {
			transform: translate(0px, 0px);
		}
	}
}
</style>
