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
	</div>
</template>

<script>
export default {
	data() {
		return {
			showSky: false,
			starId: 0,
			stars: [],
		}
	},

	mounted() {
		this.autoAddingStars()
	},
	methods: {
		addStar() {
			// const pos = this.starPosition()
			const size = this.starRandomize()
			const left = this.starPosition().left
			const top = this.starPosition().top

			this.stars.push({
				id: this.starId,
				size,
				// position: pos,
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
				if (this.stars.length >= 20) {
					this.stars.splice(0, 1)
				}

				this.addStar()
				this.autoAddingStars()
			}, 300)
		},
	},
}
</script>

<style lang="scss" scoped>
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
</style>
