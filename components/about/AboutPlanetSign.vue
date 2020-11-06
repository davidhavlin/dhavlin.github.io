<template>
	<div class="planet-sign">
		<div class="sign">
			<div class="bar"><div class="exit">x</div></div>
			<div class="heart">
				<svg
					width="160"
					height="131"
					viewBox="0 0 160 131"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M29 0H58V15H72V30H88V15H102V0H131V15H145V30H160V58H145V73H131V87H116V102H101V117H87V131H73V117H58V102H44V87H29V73H14V58H0V30H14V15H29V0ZM139 22H109V37H124V51H139V22Z"
						fill="#FF002E"
					/>
				</svg>
			</div>
			<p>Show me love</p>
			<button>ok</button>
		</div>
		<div class="stick"></div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.planet-sign {
}

.sign {
	width: 120px;
	background: #d2d2d2;
	color: #000;
	font-family: 'Press Start 2P', cursive;
	font-style: normal;
	font-weight: normal;
	font-size: 0.5em;
	padding: 0.2rem;
	line-height: 13px;
	border-radius: 2px;
	text-align: center;
	cursor: default;

	.bar {
		width: 100%;
		height: 15px;
		background: blue;
		display: flex;
		justify-content: flex-end;
		padding: 0.1rem;

		.exit {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 20px;
			height: 100%;
			color: #838383;
			background: #fff;
			cursor: pointer;
		}
	}
	p {
		margin: 0.6rem 0rem;
	}
	button {
		cursor: pointer;
		margin-bottom: 0.5rem;
		color: #000;
		background: #d2d2d2;
		padding: 0.1rem 0.7rem;
		border: 1px solid white;
		font-size: 1.4em;
	}
}
</style>
