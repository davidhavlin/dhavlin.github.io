<template>
	<transition name="loadingComponent">
		<div v-if="loading" class="loading">
			<ul ref="terminal" class="terminal"></ul>
			<div>
				<h1 class="loading-title">loading</h1>
				<div class="loading-bar">
					<div ref="bar" class="bar"></div>
				</div>
				<div class="loading-time">
					Estimated time remaining: {{ estimatedTime() }}
				</div>
			</div>
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
			scale: 0,
			loadingLines: ['2 days 13 hours 46 minutes', '2 seconds'],
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
				this.scale = 0
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
			if (this.index === this.lines.length - 1) {
				this.index = 0
				return
			}
			if (this.index % 2) {
				this.scale += 0.15
				this.loadingBar()
			}
			this.index++
			setTimeout(() => {
				this.renderLines()
			}, 50)
		},
		loadingBar() {
			this.$refs.bar.style.transform = `scaleX(${this.scale})`
		},
		estimatedTime() {
			if (this.scale < 1) {
				return this.loadingLines[0]
			} else {
				return this.loadingLines[1]
			}
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
				this.scale = 0
				this.loading = false
			}, 1600)
		},
	},
}
</script>

<style lang="scss" scoped>
$bar-border: #0a000f;
// $bar-color: #68c01e;
$bar-color: #8709ca;

.loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	// background: #0b020f;
	background: #1f002d;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	transform: translateX(0);
}

.terminal {
	font-family: 'VT323', monospace;
	color: #430061;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	font-style: normal;
	font-weight: normal;
	font-size: 1.5rem;
	margin: 1rem;
	list-style-type: none;
	white-space: pre;
	padding: 0;
	pointer-events: none;
	z-index: -1;
	filter: blur(3px);
}

.loading-title {
	font-family: 'Press Start 2P', cursive;
	text-transform: uppercase;
	font-size: 1.1rem;
	font-weight: normal;
	color: #34b1f8;
	display: block;
	margin-bottom: 1rem;
}
.loading-bar {
	position: relative;
	display: block;
	width: 280px;
	height: 25px;
	margin-bottom: 1rem;
	background: #180023;
	box-shadow: $bar-border 0px 0.4em, $bar-border 0px -0.4em,
		$bar-border 0.4em 0px, $bar-border -0.4em 0px;
	overflow: hidden;

	.bar {
		position: absolute;
		left: 0;
		top: 0;
		background: $bar-color;
		width: 100%;
		height: 100%;
		transform: scaleX(0.1);
		transform-origin: left;
		transition: transform 0.3s ease;

		&::after {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 50%;
			background: lighten($bar-color, 10);
		}
	}
}
.loading-time {
	color: #8709ca;
	font-size: 0.8rem;
	position: absolute;
}

.icon {
	display: none;
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
}
.loadingComponent-leave-to {
	transform: translateX(100%);
	opacity: 0.5;
}
</style>
