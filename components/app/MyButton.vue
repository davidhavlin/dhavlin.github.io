<template>
	<a
		class="btn"
		href="#"
		:style="{ backgroundColor: mainColor, borderColor: borderColor }"
	>
		<div class="btn-text">
			<slot></slot>
		</div>
		<div
			class="btn-half-bg"
			:style="{ backgroundColor: secondColor }"
		></div>
	</a>
</template>

<script>
export default {
	props: {
		mainColor: {
			type: String,
			default: '#34b1f8',
		},
		secondColor: {
			type: String,
			default: '#2273a0',
		},
		borderColor: {
			type: String,
			default: '#5dd2f7',
		},
	},
}
</script>

<style lang="scss" scoped>
.btn {
	position: relative;
	font-family: 'Press Start 2P', cursive;
	font-size: 0.7em;
	text-transform: uppercase;
	background: #e9d41a;
	color: #fff;
	border: 2px solid #fff200;
	padding: 0.6rem 0.5rem;
	border-radius: 0.2rem;
	overflow: hidden;
	cursor: pointer;
	z-index: 10;
}

.btn-text {
	word-spacing: -4px;
	z-index: 1;
}

.btn-half-bg {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50%;
	// background: darken(inherit, 20);
	z-index: -1;
}

.btn:hover {
	border-color: #fff !important;
	transform: translateY(2px);
}

.btn:focus {
	outline: none;
	border: 2px solid #fff;
}
</style>
