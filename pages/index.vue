<template>
	<div class="home-container">
		<section class="left-section">
			<HomeHeader />

			<HomeNavigation />
		</section>
		<section class="right-section"></section>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.home-container {
	font-family: 'Press Start 2P', cursive;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background: #100317;
}
h1.letter {
	color: red;
}
</style>
