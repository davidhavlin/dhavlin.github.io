<template>
	<div class="info-sign">
		čo ovládam?
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$sign-color: #e9d41a;

.info-sign {
	position: absolute;
	top: 37%;
	right: 2rem;
	background: $sign-color;
	color: #000;
	font-family: 'Press Start 2P', cursive;
	font-style: normal;
	font-weight: normal;
	font-size: 0.7em;
	padding: 0.7rem;
	border-radius: 6px;
	text-align: center;
	animation: move 2s infinite ease;
}
.info-sign::after {
	content: ' ';
	position: absolute;
	top: 99%;
	left: 75%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: $sign-color transparent transparent transparent;
}

@keyframes move {
	0% {
		transform: translateY(-5px);
	}
	50% {
		transform: translateY(5px);
	}
	100% {
		transform: translateY(-5px);
	}
}
</style>
