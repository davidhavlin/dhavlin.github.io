<template>
	<header ref="header" class="home-header">
		<div class="header">
			<h1 ref="friend"></h1>
			<div ref="dots" class="dots"></div>
		</div>
		<div ref="subHeader" class="home-sub-header">
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
			if (!this.$refs.header) return
			this.$refs.header.style.opacity = 1
		})
		this.$refs.header.addEventListener(
			'animationend',
			() => {
				this.helloFriend()
				this.$refs.subHeader.style.opacity = 1
				this.$refs.subHeader.classList.add('showText')
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
				}, 100 * (index + 1))
			})
		},

		createSpan(letter) {
			if (!this.$refs.friend) return
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
					if (!this.$refs.dots) return
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
.showText {
	animation: fadeIn;
	animation-duration: 1s;
}
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
	animation-delay: 500ms;

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

	.home-sub-header {
		opacity: 0;
		position: relative;
		color: #9dbae4;
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
