<template>
	<transition name="loadingComponent">
		<div v-if="loading" class="loading">
			<ul ref="terminal" class="terminal"></ul>
			<h1>loading...</h1>
			<div class="icon">
				<svg
					width="41"
					height="35"
					viewBox="0 0 41 35"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						class="about-icon"
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M34.4019 1H6.78469V6.00562H1V22.691H6.78469V34H12.756V28.4382H17.6077V34H23.5789V28.4382H28.8038V34H34.4019V22.691H40V6.00562H34.4019V1ZM7.3445 11.9382H17.6077V17.1292H7.3445V11.9382ZM33.8421 11.9382H23.5789V17.1292H33.8421V11.9382Z"
						fill="#9212F8"
						stroke="#110019"
						stroke-width="2"
					/>
				</svg>
			</div>
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
				}, 300)
			} else {
				this.index = 0
			}
		},
	},

	methods: {
		renderLines() {
			if (this.$refs.terminal) {
				const li = `<li class="line">${this.lines[this.index]}</li>`
				this.$refs.terminal.insertAdjacentHTML('beforeend', li)
			} else {
				this.index = 0
				return
			}

			if (this.index >= this.lines.length - 1) {
				this.index = 0
				return
			}
			this.index++
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
			// cas bol 1600
			setTimeout(() => {
				this.index = 0
				this.loading = false
			}, 1600)
		},
	},
}
</script>

<style lang="scss" scoped>
.loading {
	// font-family: 'Press Start 2P', cursive;
	font-family: 'VT323', monospace;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #0b020f;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	transform: translateX(0);
}

.terminal {
	color: #6813ac;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-size: 1.3em;
	margin-left: 2rem;
	list-style-type: none;
}

h1 {
	font-family: 'Press Start 2P', cursive;
	color: #34b1f8;
	font-size: 1.1rem;
}

.icon {
	position: absolute;
	transform: translate();

	.about-icon {
		stroke: #1f002d;
		fill: #11001a;
	}
	svg {
		width: 28px;
	}
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
