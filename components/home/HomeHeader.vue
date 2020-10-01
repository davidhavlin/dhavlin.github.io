<template>
	<header class="home-header">
		<div class="header">
			<h1 ref="header"></h1>
			<div ref="dots" class="dots"></div>
		</div>
		<!-- <div ref="dots" class="dots">
			<div class="dot1">.</div>
			<div class="dot2">.</div>
			<div class="dot3">.</div>
		</div> -->
		<div class="home-sub-header">
			<p>I am David</p>
			<p>A Web Developer</p>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			text: 'hello friend',
			dots: '...',
		}
	},
	mounted() {
		this.helloFriend()
	},
	methods: {
		helloFriend() {
			const array = this.text.split('')
			array.forEach((letter, index) => {
				setTimeout(() => {
					this.createSpan(letter)
					if (index === array.length - 1) this.threeDots()
				}, 200 * (index + 1))
			})

			// this.threeDots()
		},

		createSpan(letter) {
			const span = document.createElement('span')
			span.classList.add('letter', 'letter-anim')
			span.textContent = letter
			this.$refs.header.appendChild(span)

			span.addEventListener('animationend', this.removeClass, {
				once: true,
			})

			span.addEventListener('mouseenter', this.letterBounce)
		},

		letterBounce(e) {
			const span = e.target
			span.classList.add('letter-bounce')

			span.addEventListener(
				'animationend',
				() => {
					span.classList.remove('letter-bounce')
				},
				{ once: true }
			)
		},
		removeClass(e) {
			e.target.classList.remove('letter-anim')
		},

		threeDots() {
			const dotsArray = this.dots.split('')
			dotsArray.forEach((dot, index) => {
				setTimeout(() => {
					this.$refs.dots.innerHTML += dot
					if (index >= dotsArray.length - 1) {
						setTimeout(() => {
							this.$refs.dots.innerHTML = ''
							this.threeDots()
						}, 700)
					}
				}, 700 * (index + 1))
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.home-header {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	margin-bottom: 3rem;

	.header {
		position: relative;
		height: 48px;
		h1 {
			// position: absolute;
			width: 150px;
			color: #34b1f8;
			text-transform: uppercase;
		}

		.dots {
			position: absolute;
			font-size: 1.5em;
			color: #34b1f8;
			bottom: -1px;
			left: 140px;
		}
	}
	h1 {
		// animation: glitch 2s steps(2, end) infinite;
	}
	.home-sub-header {
		color: #fff;
	}
}

@keyframes glitch {
	0% {
		transform: translate(0px, 0px);
	}

	20% {
		transform: translate(-20px, 0px);
	}

	40% {
		transform: translate(0px, -2px);
	}

	60% {
		transform: translate(-4px, 0px);
	}

	80% {
		transform: translate(7px, -1px);
	}

	100% {
		transform: translate(0px, 0px);
	}
}
</style>
