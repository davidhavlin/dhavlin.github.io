<template>
	<div ref="sky" class="sky">
		<!-- <div
			v-for="(star, index) in stars"
			:key="index"
			class="star"
			:class="starRandomize()"
			:style="{ transform: randomTransform() }"
		></div> -->
	</div>
</template>

<script>
export default {
	data() {
		return {
			showSky: false,
			stars: [{}, {}, {}, {}, {}],
		}
	},
	// computed: {
	// 	sky() {
	// 		return document.querySelector('.app')
	// 	},
	// 	skyWidth() {
	// 		return this.sky.clientWidth
	// 	},
	// 	skyHeight() {
	// 		return this.sky.clientHeight
	// 	},
	// },
	mounted() {
		this.createStar()
	},
	methods: {
		createStar() {
			const sky = document.querySelector('.app')
			const star = document.createElement('div')
			sky.appendChild(star)
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

		randomTransform() {
			const sky = document.querySelector('.sky')
			// const randomWidth = Math.floor(Math.random() * this.skyWidth)
			// const randomHeight = Math.floor(Math.random() * this.skyHeight)
			console.log(sky)
			// return `translate(${randomWidth}px, ${randomHeight}px)`
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
}
.star {
	position: absolute;
	background: #fff;
}
.little {
	width: 1px;
	height: 1px;
}
.middle {
	width: 2px;
	height: 2px;
}
.large {
	width: 3px;
	height: 3px;
}
</style>
