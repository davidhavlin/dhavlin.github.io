<template>
	<transition name="loadingComponent">
		<div v-if="loading" class="loading">
			<ul ref="terminal" class="terminal"></ul>
			<h1>loading...</h1>
		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			lines: [
				'$: > Booting systems...',
				'$: > Total memory found: 256kb',
				'$: > Scanning for bootable media    ■■■■■■■■■■■ 100%',
				'$: > No media found. Booting from network address 3E:40:9C:75',
				'$: > Loading BIOS 2.3               ■■■■■■■■■■■ 100%',
				'$: > Reticulating splines           ■■■■■■■■■■■ 100%',
				'$: > Booting console                ■■■■■■■■■■■ 100%',
				'$:',
				'$: > Welcome to My website version 1.3a',
				'$:',
				'$: > Hello friend. I am David..',
				'$: I can has matrix?',
				'$: > buffering matrix... 20%',
				'$: > buffering matrix... 66%',
				'$: > buffering matrix... 100%',
				'$: > So, would you like a red or blue pill?',
			],
			index: 0,
		}
	},
	watch: {
		loading(newValue, oldValue) {
			if (newValue) {
				setTimeout(() => {
					this.renderLines()
				}, 0)
			}
		},
	},
	methods: {
		renderLines() {
			const li = `<li class="line">${this.lines[this.index]}</li>`
			this.$refs.terminal.insertAdjacentHTML('beforeend', li)
			this.index++

			if (this.index === this.lines.length) {
				this.index = 0
				return
			}
			setTimeout(() => {
				this.renderLines()
			}, 50)
		},
		start() {
			setTimeout(() => {
				this.loading = true
			}, 400)
		},
		finish() {
			setTimeout(() => {
				this.index = 0
				this.loading = false
			}, 1400)
		},
	},
}
</script>

<style lang="scss" scoped>
.loading {
	font-family: 'Press Start 2P', cursive;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #1f002d;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	transform: translateX(0);
	// animation: loading 300ms forwards ease;
}

@keyframes loading {
	to {
		transform: translateX(0);
	}
}

.terminal {
	color: #6813ac;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	list-style-type: none;
}

h1 {
	color: #fff;
}
.loadingComponent-enter-active,
.loadingComponent-leave-active {
	transition: all 300ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.loadingComponent-enter {
	opacity: 0.5;
	transform: translateX(-100%);
	// transform: scale(0.8);
	// background: #000;
}
.loadingComponent-leave-to {
	transform: translateX(100%);
}
</style>
