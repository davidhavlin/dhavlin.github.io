<template>
	<div class="logo-link">
		<nuxt-link to="/">
			<div class="logo">david</div>
		</nuxt-link>
	</div>
</template>

<style lang="scss" scoped>
@import '~assets/scss/_colors';

.logo-link {
	// display: none;
	margin-top: 1rem;
}

.logo {
	font-family: 'Press Start 2P', cursive;
	font-size: 0.5em;
	color: #0fd7d7;
	padding: 0.5rem;
}
</style>
