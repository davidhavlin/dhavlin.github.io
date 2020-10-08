<template>
	<div ref="background" class="coding-background"></div>
</template>

<script>
export default {
	data() {
		return {
			index: 0,
			counter: 1,
			lines: [
				'$: export default {',
				'$: data() {',
				'$:     return {',
				'$:         text: "hello friend",',
				'$:         dots: "..."',
				'$: }',
				'$: mounted() {',
				'$:    this.helloFriend();',
				'$: > Welcome to My website version 1.3a',
				'$:',
				'$: > Hello friend. I am David..',
				'$: I can has matrix?',
				'$: > buffering matrix... 20%',
				'$: > buffering matrix... 66%',
				'$: > buffering matrix... 100%',
				'$: > So, would you like a red or blue pill?',
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
			this.$refs.background.appendChild(div)

			line.forEach((letter, index) => {
				setTimeout(() => {
					div.innerHTML += letter
					if (index === line.length - 1) {
						this.index++
						this.renderLetters()
					}
				}, 25 * (index + 1))
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.coding-background {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	color: #11ffa9;
	font-size: 0.7em;
	pointer-events: none;
	// mix-blend-mode: saturation;
}
</style>
