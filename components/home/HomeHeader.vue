<template>
	<header ref="header" class="home-header">
		<div class="header">
			<h1 ref="friend"></h1>
			<div ref="dots" class="dots"></div>
		</div>
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
		this.$refs.header.addEventListener('animationstart', () => {
			this.$refs.header.style.opacity = 1
		})
		this.$refs.header.addEventListener(
			'animationend',
			() => {
				this.helloFriend()
			},
			{
				once: true,
			}
		)
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
			this.$refs.friend.appendChild(span)

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
	opacity: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	margin-bottom: 6rem;
	padding: 1rem;
	animation: backInDown;
	animation-duration: 2s;
	animation-delay: 1000ms;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 80%;
		left: 0;
		bottom: 0;
		background: #0b020f;
		z-index: 0;
	}

	.header {
		position: relative;
		height: 72px;
		margin-bottom: 1rem;
		z-index: 1;
		h1 {
			// position: absolute;
			font-size: 2.25em;
			width: 225px;
			color: #34b1f8;
			text-transform: uppercase;
		}

		.dots {
			position: absolute;
			font-size: 1.5em;
			color: #34b1f8;
			bottom: 0px;
			left: 216px;
		}
	}
	h1 {
		// animation: glitch 2s steps(2, end) infinite;
	}
	.home-sub-header {
		position: relative;
		color: #fff;
		font-size: 1.25em;
		z-index: 1;
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
