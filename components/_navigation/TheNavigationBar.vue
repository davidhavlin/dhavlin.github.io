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
	background: #000;
	height: 100vh;
}
</style>
