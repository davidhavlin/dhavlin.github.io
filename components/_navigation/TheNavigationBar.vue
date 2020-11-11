<template>
	<nav class="navbar">
		<!-- <NavigationLogo /> -->
		<NavigationIcons :loading="loading" />
	</nav>
</template>

<script>
export default {
	props: {
		loading: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.navbar {
	color: #fff;
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: 1000;
	pointer-events: none;
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
