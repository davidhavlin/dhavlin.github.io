<template>
	<div class="elipse" :style="[makeTransform(skill), randomRotate()]">
		<div class="skill" :style="transform">
			<img :src="makeIcon(skill)" alt="" :style="randomRotate()" />
			<p class="skill-name">{{ skill }}</p>
			<div class="circle"></div>
		</div>
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
					return require('@/assets/images/software/html5.png')

				case 'CSS/Sass':
					return require('@/assets/images/software/css.png')

				case 'Javascript':
					return require('@/assets/images/software/js.png')

				case 'Vue.js':
					return require('@/assets/images/software/vue.png')

				case 'Nuxt.js':
					return require('@/assets/images/software/nuxt.png')

				case 'React':
					return require('@/assets/images/software/react.png')
			}
		},

		makeTransform(tech) {
			switch (tech) {
				case 'HTML':
					return { width: '100px', height: '100px' }

				case 'CSS/Sass':
					return { width: '200px', height: '200px' }

				case 'Javascript':
					return { width: '300px', height: '300px' }

				case 'Vue.js':
					return { width: '400px', height: '400px' }

				case 'Nuxt.js':
					return { width: '500px', height: '500px' }

				case 'React':
					return { width: '600px', height: '600px' }
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.elipse {
	position: absolute;
	width: 400px;
	height: 400px;
	border-radius: 50%;
	border: 1px solid #7206d51a;
	animation: rotate 20s infinite linear;
}

@keyframes rotate {
	to {
		transform: rotate(360deg);
	}
}
.skill {
	position: absolute;
	top: -17.5px;
	left: calc(50% - 17.5px);
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
