<template>
	<nav class="navbar">
		<!-- <NavigationLogo /> -->
		<NavigationIcons />
	</nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
	color: #fff;
	position: fixed;
	height: 100%;
	width: 100%;
	display: flex;
	z-index: 200;
	pointer-events: none;
	justify-content: flex-end;
	align-items: flex-end;
}
.socials {
	margin-bottom: 1rem;
	position: absolute;
	bottom: 0;
}

@media (max-width: 800px) {
	.socials {
		margin-bottom: 0rem;
		position: absolute;
		right: 10px;
		bottom: 90vh;
	}
}
</style>
