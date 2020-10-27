<template>
	<div class="skill" :style="transform">
		<img :src="makeIcon(skill)" alt="" :style="randomRotate()" />
		<p class="skill-name">{{ skill }}</p>
		<div class="circle"></div>
	</div>
</template>

<script>
export default {
	props: {
		skill: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			w: null,
			h: null,
			transform: {},
		}
	},
	mounted() {
		this.w = window.innerWidth - 50
		this.h = window.innerHeight - 50
	},

	methods: {
		randomRotate() {
			const duration = Math.floor(Math.random() * (30 - 15 + 1) + 15)
			return { animationDuration: duration + 's' }
		},
		// randomTransform() {
		// 	// const randomWidth = Math.floor(
		// 	// 	Math.random() * (this.w - 50 + 1) + 50
		// 	// )
		// 	// const randomHeight = Math.floor(
		// 	// 	Math.random() * (this.h - 50 + 1) + 50
		// 	// )

		// 	return {
		// 		transform: `translate(${randomWidth}px, ${randomHeight}px)`,
		// 	}
		// },
		makeIcon(tech) {
			switch (tech) {
				case 'HTML':
					this.transform = { transform: `translate(55vw, 17vh)` }
					return require('@/assets/images/software/html5.png')

				case 'CSS/Sass':
					this.transform = { transform: `translate(44vw, 75vh)` }
					return require('@/assets/images/software/css.png')

				case 'Javascript':
					this.transform = { transform: `translate(65vw, 27vh)` }
					return require('@/assets/images/software/js.png')

				case 'Vue.js':
					this.transform = { transform: `translate(55vw, 17vh)` }
					return require('@/assets/images/software/vue.png')

				case 'Nuxt.js':
					this.transform = { transform: `translate(55vw, 17vh)` }
					return require('@/assets/images/software/nuxt.png')

				case 'React':
					this.transform = { transform: `translate(35vw, 26vh)` }
					return require('@/assets/images/software/react.png')
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.skill {
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;

	img {
		width: 35px;
		height: auto;
		animation: rotate infinite linear;
	}

	@keyframes rotate {
		to {
			transform: rotate(360deg);
		}
	}

	.skill-name {
		margin-left: 0.5rem;
		opacity: 0;
	}
}

.skill:hover {
	.skill-name {
		opacity: 1;
	}
}
</style>
