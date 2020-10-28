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
	border-radius: 6px;
	text-align: center;
	animation: move 2s infinite ease;
}
.info-sign::after {
	content: ' ';
	position: absolute;
	top: 98%;
	left: 75%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: $sign-color transparent transparent transparent;
}

@keyframes move {
	0% {
		transform: translateY(-3px);
	}
	50% {
		transform: translateY(3px);
	}
	100% {
		transform: translateY(-3px);
	}
}
</style>
