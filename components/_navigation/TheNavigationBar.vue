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
	z-index: 200;
	pointer-events: none;
	// transform: translate3D(0, 0, 0);
	// -webkit-backface-visibility: visible;
	// backface-visibility: visible;

	transform: translateZ(0) translateX(0);
	display: flex;
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
