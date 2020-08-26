<template>
	<div class="container">
		<TheNavigationBar />

		<Nuxt />
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

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

body {
	background: url('~assets/images/bg.webp');
	background-attachment: fixed;
}

.container {
	min-height: 100vh;
}
</style>
