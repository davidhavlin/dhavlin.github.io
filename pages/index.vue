<template>
	<div class="title-container">
		<!-- <div ref="myImage" class="image"></div> -->
		<h1 ref="myTitle" class="title">DH</h1>
	</div>
</template>

<script>
export default {
	mounted() {
		document.addEventListener('mousemove', (e) => {
			this.$refs.myTitle.style.transform = `translate(${
				e.pageX / -80
			}px, ${e.pageY / -80}px)`
			// this.$refs.myImage.style.transform = `translate(${
			// 	e.pageX / 80
			// }px, ${e.pageY / 80}px)`
		})
	},
}
</script>

<style lang="scss" scoped>
.title-container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	overflow: hidden;
}

.image {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: url('~assets/images/david.jpg');
	background-size: cover;
	background-position: center;
	mix-blend-mode: lighten;
	z-index: 5;
}

.title {
	/* font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
	text-transform: lowercase;
	font-family: 'Press Start 2P', cursive;
	font-size: 14em;
	font-weight: normal;
	color: #fff;
	mix-blend-mode: difference;
	text-shadow: 0.06rem 0 0.06rem #b22ff0, -0.125rem 0 0.06rem #00ffd9;
}
</style>
