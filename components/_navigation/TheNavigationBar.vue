<template>
	<nav class="navbar">
		<!-- <NavigationLogo /> -->

		<NavigationIcons />

		<NavigationSocials class="socials" />
	</nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #fff;
	position: fixed;
	// background: transparent;
	background: #0b020f; // zeby?
	height: 100vh;
	width: 4.4em;
	z-index: 200;
}
.socials {
	margin-bottom: 1rem;
	position: absolute;
	bottom: 0;
}

@media (max-width: 700px) {
	.navbar {
		height: 4.4em;
		width: 100%;
		bottom: 0;
		flex-direction: row;
	}

	.socials {
		margin-bottom: 0rem;
		position: absolute;
		right: 0;
		bottom: 10px;
	}
}
</style>
