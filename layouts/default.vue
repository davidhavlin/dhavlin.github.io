<template>
	<div class="container">
		<TheNavigationBar />
		<Nuxt />
	</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import '~assets/scss/_colors';

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

a {
	text-decoration: none;
}

body {
	/* background: url('~assets/images/bg.webp'); */
	background: url('~assets/images/BackgroundpixelatedCOLORED.jpg');
	background-attachment: fixed;
	overflow: hidden;
}

.container {
	min-height: 100vh;
}

.loading-component-enter-active,
.loading-component-leave-active {
	transition: opacity 0.5s;
}
.loading-component-enter, .loading-component-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
