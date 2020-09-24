<template>
	<div class="stage">
		<div ref="david" id="david" class="david"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			transform: 0,
		}
	},
	computed: {
		david() {
			// return this.$refs.david
			return document.getElementById('david')
		},
	},
	mounted() {
		// const david = document.querySelector('.david')
		document.addEventListener('keydown', (e) => {
			if (e.keyCode === 65 && !this.david.classList.contains('punch')) {
				this.punch()
			}
			// up - jump
			if (e.keyCode === 38 && !this.david.classList.contains('jump')) {
				this.jump()
			}

			// down - kneel
			if (
				e.keyCode === 40 &&
				!this.david.classList.contains('kneel') &&
				!this.david.classList.contains('jump')
			) {
				this.kneel()
			}

			// ← flip
			if (e.keyCode === 37) this.david.classList.add('flip')
			// → unflip
			if (e.keyCode === 39) this.david.classList.remove('flip')
			// ←← →→ walking
			if (e.keyCode === 37) {
				this.walkLeft()
			}
			if (e.keyCode === 39) {
				this.walkRight()
			}
			return false
		})
		document.addEventListener('keyup', () => {
			this.david.classList.remove('walk', 'kneel')
			return false
		})
	},

	methods: {
		punch() {
			this.david.classList.add('punch')
			setTimeout(function () {
				this.david.classList.remove('punch')
			}, 150)
		},

		jump() {
			this.david.classList.add('jump')
			setTimeout(function () {
				this.david.classList.add('down')
			}, 500)
			setTimeout(function () {
				this.david.classList.remove('jump', 'down')
			}, 1000)
		},
		kneel() {
			this.david.classList.add('kneel')
		},

		walkLeft() {
			this.transform -= 10
			this.david.classList.add('walk')
			this.david.style.marginLeft = `${this.transform}px`
		},

		walkRight() {
			this.transform += 10
			this.david.classList.add('walk')
			this.david.style.marginLeft = `${this.transform}px`
		},
	},
}
</script>

<style lang="scss" scoped>
@mixin anim($animName, $steps, $animNbr, $animParams) {
	.#{$animName} {
		@content;
		animation: $animName steps($steps) $animParams;
	}
	@keyframes #{$animName} {
		from {
			background-position: 0px (-$spriteHeight * ($animNbr - 1));
		}
		to {
			background-position: -($spriteWidth * $steps) (-$spriteHeight * ($animNbr -
								1));
		}
	}
}

.flip {
	transform: scaleX(-1);
}

/* sprite tile dimensions */
$spriteWidth: 70px;
$spriteHeight: 80px;

/* postavicka */
.david {
	position: absolute;
	bottom: 112px;
	margin-left: 150px;
	width: $spriteWidth;
	height: $spriteHeight;
	background-image: url('~assets/images/ken.png');
}

/* punch */
@include anim(
	$animName: punch,
	$steps: 3,
	$animNbr: 3,
	$animParams: 0.15s infinite
);
/* walking */
@include anim(
	$animName: walk,
	$steps: 5,
	$animNbr: 4,
	$animParams: 0.5s infinite
);
/* kneel down */
@include anim(
	$animName: kneel,
	$steps: 1,
	$animNbr: 10,
	$animParams: 0.2s infinite
);
/* jump */
@include anim(
	$animName: jump,
	$steps: 7,
	$animNbr: 9,
	$animParams: 1s infinite
) {
	transition: bottom 0.5s cubic-bezier(0.99, 0.005, 0, 0.42);
	bottom: 225px;
	&.down {
		bottom: 112px;
	}
}

.stage {
	position: absolute;
	top: 0;
	width: 450px;
	height: 330px;
	// background: url('https://raw.githubusercontent.com/jkneb/street-fighter-css/master/images/bg2.jpg')
	// 	no-repeat 0px -100px;
	background-color: grey;
	background-size: contain;
	float: left;
	margin-right: 20px;
}
body {
	margin: 0px;
	padding: 0;
}
</style>
