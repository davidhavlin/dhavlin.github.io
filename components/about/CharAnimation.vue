<template>
	<div class="stage">
		<div class="ironman-cockpit">
			<div id="david" ref="david" class="david"></div>
		</div>
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

// $spriteWidth: 70px;
// $spriteHeight: 80px;
$spriteWidth: 100px;
$spriteHeight: 140px;

/* postavicka */
.david {
	position: absolute;
	width: $spriteWidth;
	height: $spriteHeight;
	background-image: url('~assets/images/ironman.png');
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
	$steps: 7,
	$animNbr: 1,
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
// @include anim(
// 	$animName: jump,
// 	$steps: 7,
// 	$animNbr: 9,
// 	$animParams: 1s infinite
// ) {
// 	transition: bottom 0.5s cubic-bezier(0.99, 0.005, 0, 0.42);
// 	bottom: 225px;
// 	&.down {
// 		bottom: 112px;
// 	}
// }
@include anim(
	$animName: jump,
	$steps: 7,
	$animNbr: 1,
	$animParams: 1s infinite
) {
	transition: bottom 0.5s cubic-bezier(0.99, 0.005, 0, 0.42);
	bottom: 225px;
	&.down {
		bottom: 112px;
	}
}

.ironman-cockpit {
	animation: idle 1s infinite ease;
	position: absolute;
	width: $spriteWidth;
	height: $spriteHeight;
	transform: scale(0.7);
}

@keyframes idle {
	0%,
	100% {
		transform: scale(0.5) translateY(-10px);
	}
	50% {
		transform: scale(0.5) translateY(10px);
	}
	// 100% {
	// 	transform: translateY(-10px);
	// }
}

.stage {
	pointer-events: none;
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
