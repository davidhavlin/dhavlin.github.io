<template>
	<div ref="background" class="coding-background"></div>
</template>

<script>
export default {
	data() {
		return {
			index: 0,
			counter: 1,
			size: 0,
			lines: [
				'$: > buffering page... 0%',
				'$: > buffering page... 20%',
				'$: > buffering page... 66%',
				'$: > buffering page... 100%',
				'$: export default {',
				'$: data() {',
				'$:     return {',
				'$:         text: "hello friend",',
				'$:         dots: "..."',
				'$: },',
				'$: mounted() {',
				'$:    this.$refs.header.addEventListener("animationstart", () => {',
				'$:     if (!this.$refs.header) return;',
				'$:     this.$refs.header.style.opacity = 1;})',
				'$:     this.$refs.header.addEventListener("animationend", () => {',
				'$:     this.helloFriend();',
				'$:     this.$refs.subHeader.style.opacity = 1;',
				'$:     this.$refs.subHeader.classList.add("showText");',
				'$:     },{	once: true	})',
				'$: },',
				'$: methods: {',
				'$:     helloFriend() {',
				'$:     const array = this.text.split("")',
				'$:     array.forEach((letter, index) => {',
				'$:     setTimeout(() => {',
				'$:         this.createSpan(letter)',
				'$:         if (index === array.length - 1) this.threeDots()',
				'$:         }, 100 * (index + 1))',
				'$:     })',
				'$: },',
				'$: > Welcome to My website version 1.3a',
				'$:',
				'$: > Hello friend. I am David..',
				'$: > ',
				'$: > ',
			],
		}
	},
	mounted() {
		// this.renderLines()
		this.renderLetters()
	},
	methods: {
		renderLines() {
			const length = Math.floor(Math.random() * (800 - 100 + 1)) + 100
			const line = `<div class="code">${this.lines[this.index]}</div>`
			this.$refs.background.innerHTML += line

			this.index++
			if (this.index >= this.lines.length) {
				this.index = 0

				return
			}

			setTimeout(() => {
				this.renderLines()
			}, length)
		},

		renderLetters() {
			if (this.index >= this.lines.length) {
				this.index = 0
				this.counter++
				this.size = 0
			}
			if (this.counter === 3) {
				setTimeout(() => {
					this.$refs.background.innerHTML = ''
					this.counter = 1
					this.renderLetters()
				}, 2000)
				return
			}
			const line = this.lines[this.index].split('')
			const div = document.createElement('div')
			if (!this.$refs.background) return
			this.$refs.background.appendChild(div)
			this.size -= 5
			this.$refs.background.style.transform = `translateY(${this.size}px)`

			line.forEach((letter, index) => {
				setTimeout(() => {
					div.innerHTML += letter
					if (index === line.length - 1) {
						this.index++
						this.renderLetters()
					}
				}, 15 * (index + 1))
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.coding-background {
	font-family: 'VT323', monospace;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	color: #6daff6;
	font-size: 1.3em;
	pointer-events: none;
	mix-blend-mode: color-dodge;
	opacity: 0.2;
	white-space: pre;
	line-height: 1.125rem;
}
</style>
