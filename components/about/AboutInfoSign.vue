<template>
	<div class="info-sign">
		čo ovládam?
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$sign-color: #03e271;

.info-sign {
	position: absolute;
	top: -21px;
	left: -66px;
	background: $sign-color;
	color: #000;
	font-family: 'Press Start 2P', cursive;
	font-style: normal;
	font-weight: normal;
	font-size: 0.5em;
	padding: 0.5rem;
	// border-radius: 6px;
	text-align: center;
	animation: move 2s infinite ease;
	box-shadow: #00ffac 0px 0.4em, #00ffac 0px -0.4em, #00ffac 0.4em 0px,
		#00ffac -0.4em 0px;
}
.info-sign::after {
	content: ' ';
	position: absolute;
	top: 114%;
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
		transform: translateY(0px);
	}
	100% {
		transform: translateY(-5px);
	}
}
</style>
