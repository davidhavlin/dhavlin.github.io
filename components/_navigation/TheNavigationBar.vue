<template>
	<nav class="navbar">
		<NavigationLogo />

		<NavigationIcons />

		<NavigationSocials />
	</nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	position: absolute;
	background: transparent;
	height: 100vh;
	width: 4.4em;
	z-index: 200;
}
</style>
