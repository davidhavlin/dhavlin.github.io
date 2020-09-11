<template>
	<div class="home-container">
		<h3 class="title-hello">Hello friend</h3>
		<h1 ref="myTitle" class="title">DH</h1>
		<!-- <div ref="myImage" class="image"></div>
		<div class="image2"></div>-->
	</div>
</template>

<script>
export default {
	// mounted() {
	// 	document.addEventListener('mousemove', (e) => {
	// 		this.$refs.myTitle.style.transform = `translateX(${
	// 			e.pageX / -80
	// 		}px)`
	// 		this.$refs.myImage.style.transform = `translate(${e.pageX / 80}px)`
	// 	})
	// },
}
</script>

<style lang="scss" scoped>
.home-container {
	font-family: 'Press Start 2P', cursive;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background: #100317;
}
.title-hello {
	z-index: 10;
	color: #fff;
	position: absolute;
	transform: translate(-152px, -130px);
	font-weight: 500;
}
.title {
	/* font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
	text-transform: lowercase;

	font-size: 14em;
	font-weight: normal;
	// color: #39d9b3;
	mix-blend-mode: difference;
	text-shadow: 0.06rem 0 0.06rem #b22ff0, -0.125rem 0 0.06rem #00ffd9;
}

.image,
.image2 {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: url('~assets/images/david.jpg');
	background-size: cover;
	background-position: center;
	mix-blend-mode: darken;
	z-index: 5;
}

.image2 {
	display: none;
	mix-blend-mode: lighten;
	animation: glitch 2s steps(2, end) infinite;
}

@keyframes glitch {
	0% {
		transform: translate(0px, 0px);
	}
	10% {
		transform: translate(10px, 10px);
	}
	20% {
		transform: translate(-20px, 0px);
	}
	30% {
		transform: translate(0px, 0px);
	}
	40% {
		transform: translate(0px, -2px);
	}
	50% {
		transform: translate(10px, 0px);
	}
	60% {
		transform: translate(-4px, 0px);
	}
	70% {
		transform: translate(0px, 5px);
	}
	80% {
		transform: translate(7px, -1px);
	}
	90% {
		transform: translate(5px, 0px);
	}
	100% {
		transform: translate(0px, 0px);
	}
}
</style>
