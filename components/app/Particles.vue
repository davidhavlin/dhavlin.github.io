<template>
	<div ref="sky" class="sky">
		<transition-group name="stars">
			<div
				v-for="star in stars"
				:key="star.id"
				class="star"
				:class="star.size"
				:style="{ left: star.left, top: star.top }"
			></div>
		</transition-group>
		<a @click.prevent="magicStars()">CLICK</a>
		<div class="svg">
			<svg
				width="160"
				height="131"
				viewBox="0 0 160 131"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M29 0H58V15H72V30H88V15H102V0H131V15H145V30H160V58H145V73H131V87H116V102H101V117H87V131H73V117H58V102H44V87H29V73H14V58H0V30H14V15H29V0ZM139 22H109V37H124V51H139V22Z"
					fill="#4A006C"
				/>
			</svg>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showSky: false,
			starId: 0,
			stars: [],
			top: 150,
			left: 350,
		}
	},

	mounted() {
		this.autoAddingStars()
	},
	methods: {
		addStar() {
			const size = this.starRandomize()
			const left = this.starPosition().left
			const top = this.starPosition().top

			this.stars.push({
				id: this.starId,
				size,
				top,
				left,
			})
			this.starId++
		},
		starRandomize() {
			const random = Math.floor(Math.random() * 3)
			if (random === 2) {
				return 'large'
			} else if (random === 1) {
				return 'middle'
			} else {
				return 'little'
			}
		},

		starPosition() {
			// asi len ulozit raz, takto sa pocita innerWaH kazdych 300 ms, potom reulozit na resize event
			const randomWidth = Math.floor(Math.random() * window.innerWidth)
			const randomHeight = Math.floor(Math.random() * window.innerHeight)
			// return `translate(${randomWidth}px, ${randomHeight}px)`
			return {
				left: randomWidth + 'px',
				top: randomHeight + 'px',
			}
		},

		autoAddingStars() {
			setTimeout(() => {
				if (this.stars.length >= 50) {
					this.stars.splice(0, 1)
				}

				this.addStar()
				this.autoAddingStars()
			}, 200)
		},

		magicStars() {
			// tak toto netusim ci sa da krajsie/jednoduchsie napisat
			Object.assign(this.stars[44], {
				top: this.calculateTop('='),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[28], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})
			Object.assign(this.stars[22], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})

			Object.assign(this.stars[42], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[4], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})
			Object.assign(this.stars[24], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})

			Object.assign(this.stars[6], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})
			Object.assign(this.stars[38], {
				top: this.calculateTop('-'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[8], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})

			Object.assign(this.stars[17], {
				top: this.calculateTop('-'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[10], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})
			Object.assign(this.stars[30], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})

			Object.assign(this.stars[12], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[32], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})
			Object.assign(this.stars[14], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})

			Object.assign(this.stars[40], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})
			Object.assign(this.stars[43], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[9], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})

			Object.assign(this.stars[37], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})
			Object.assign(this.stars[19], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[35], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})

			Object.assign(this.stars[21], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[2], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})
			Object.assign(this.stars[23], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})

			Object.assign(this.stars[5], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})
			Object.assign(this.stars[25], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[26], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})

			Object.assign(this.stars[27], {
				top: this.calculateTop('+'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[45], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})
			Object.assign(this.stars[29], {
				top: this.calculateTop('-'),
				left: this.calculateLeft('='),
			})

			Object.assign(this.stars[11], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})
			Object.assign(this.stars[31], {
				top: this.calculateTop('-'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[13], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})

			Object.assign(this.stars[15], {
				top: this.calculateTop('-'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[34], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})
			Object.assign(this.stars[20], {
				top: this.calculateTop('-'),
				left: this.calculateLeft('='),
			})

			Object.assign(this.stars[36], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})
			Object.assign(this.stars[18], {
				top: this.calculateTop('-'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[7], {
				top: this.calculateTop('='),
				left: this.calculateLeft('-'),
			})

			Object.assign(this.stars[39], {
				top: this.calculateTop('-'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[33], {
				top: this.calculateTop('-'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[41], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})

			Object.assign(this.stars[3], {
				top: this.calculateTop('-'),
				left: this.calculateLeft('='),
			})
			Object.assign(this.stars[16], {
				top: this.calculateTop('='),
				left: this.calculateLeft('+'),
			})

			this.left = 1023
			this.top = 530
		},

		calculateTop(sign) {
			if (sign === '+') {
				this.top += 15
				return this.top + 'px'
			} else if (sign === '-') {
				this.top -= 15
				return this.top + 'px'
			} else {
				return this.top + 'px'
			}
		},
		calculateLeft(sign) {
			if (sign === '+') {
				this.left += 15
				return this.left + 'px'
			} else if (sign === '-') {
				this.left -= 15
				return this.left + 'px'
			} else {
				return this.left + 'px'
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.svg {
	position: absolute;
	transform: translate(323px, 130px);
	z-index: -17;
	opacity: 0;
}
.sky {
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 0;
}
.star {
	position: absolute;
	background: rgb(0, 247, 255);
	z-index: 0;
	display: inline-block;
	transition: all 1s ease;
}

.little {
	width: 1px;
	height: 1px;
	animation: star 1s infinite ease;
	animation-delay: 300ms;
}
.middle {
	width: 1px;
	height: 1px;
	animation: star 1s infinite ease;
	animation-delay: 100ms;
}
.large {
	width: 2px;
	height: 2px;
	animation: star 1s infinite ease;
	animation-delay: 500ms;
}

@keyframes star {
	0% {
		opacity: 0.6;
		// border: 1px solid rgb(0, 229, 255);
	}
	50% {
		opacity: 1;
		transform: scale(1.2);
		// border: none;
	}
	100% {
		opacity: 0.6;
		// border: 1px solid rgb(0, 229, 255);
	}
}

.stars-enter-active,
.stars-leave-active {
	transition: all 1s;
}

.stars-enter,
.stars-leave-to {
	opacity: 0;
	background: #100317;
}
a {
	margin-left: 6rem;
	padding: 1rem;
	z-index: 100000;
	background: #fff;
	color: #000;
}
</style>
