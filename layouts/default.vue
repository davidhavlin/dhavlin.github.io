<template>
	<div class="container">
		<TheNavigationBar />
		<Nuxt />
	</div>
</template>

<style lang="scss">
@import 'node_modules/animate.css/animate.min.css';
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
	width: 100%;
	height: 100%;
}

a {
	text-decoration: none;
}

body {
	width: 100%;
	height: 100%;
	// background: url('~assets/images/BackgroundpixelatedCOLORED.jpg');
	// background-attachment: fixed;
	overflow: hidden;
	// background-color: #180223;
	background-color: #0b020f;
	// cursor: url('~assets/images/cursor1.png'), auto;
	// cursor: url('~assets/images/heart.png'), auto;
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

.page-enter-active {
	animation: pageEnter 1s forwards cubic-bezier(0.55, 0.055, 0.675, 0.19);
	animation-delay: 400ms;
}
.page-leave-active {
	animation: pageLeave 1s forwards cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

@keyframes pageEnter {
	0% {
		transform: scale(0.8);
	}
	60% {
		transform: scale(0.8);
	}
	100% {
		transform: scale(1);
	}
}
@keyframes pageLeave {
	0% {
		transform: scale(1);
	}
	40% {
		transform: scale(0.8);
	}
	100% {
		transform: scale(0.8);
	}
}

@media (max-width: 520px) {
	body {
		overflow: visible;
	}
}
</style>
