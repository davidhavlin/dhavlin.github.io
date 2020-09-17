<template>
	<div class="project-container">
		<h1 class="page-title">
			My Projects ({{ index }}/{{ projects.length }})
		</h1>
		<div class="under-projects">
			<div class="arrows">
				<div class="left-arrow" @click="prevProject()"></div>
				<div class="right-arrow" @click="nextProject()"></div>
			</div>
			<div class="selected-frame"></div>
			<div class="projects">
				<div class="project-boxes">
					<ProjectBox
						v-for="project in projects"
						:id="project.id"
						:key="project.id"
						:project="project"
						class="ProjectBox"
						:class="{ selected: project.id === 1 }"
					/>
				</div>
			</div>
		</div>

		<button>show me</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			index: 1,
			size: 210,
			counter: 3,
			projects: [
				{
					title: 'VR Video Saratov',
					url: 'https://videosaratov.netlify.app/',
					desc: 'skuska',
					logo: require('@/assets/images/projects/vr-logo.png'),
					colors: ['#f80f2b', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue'],
					images: [require('@/assets/images/projects/vr-bg.png')],
					id: 0,
				},
				{
					title: 'David Havlín Portfolio',
					url: 'https://davidhavlin.netlify.app/',
					desc: 'skuska',
					logo: '',
					colors: ['#9212F8', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt.js'],
					images: [],
					id: 1,
				},
				{
					title: 'NETFLIX clone',
					url: 'https://davidhavlin.netlify.app/',
					desc: 'skuska',
					logo: '',
					colors: ['#f80f2b', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt.js'],
					images: [],
					id: 2,
				},
				{
					title: 'COMING soon',
					url: 'https://davidhavlin.netlify.app/',
					desc: 'skuska',
					logo: '',
					colors: ['#100c1d', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt.js'],
					images: [],
					id: 3,
				},
				{
					title: 'SKUSKA carousel',
					url: 'https://davidhavlin.netlify.app/',
					desc: 'skuska',
					logo: '',
					colors: ['#100c1d', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt.js'],
					images: [],
					id: 4,
				},
				{
					title: 'SIX SIX',
					url: 'https://davidhavlin.netlify.app/',
					desc: 'skuska',
					logo: '',
					colors: ['#100c1d', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt.js'],
					images: [],
					id: 5,
				},
			],
		}
	},
	computed: {
		container() {
			return document.querySelector('.project-boxes')
		},

		boxes() {
			return document.querySelectorAll('.ProjectBox')
		},
	},
	mounted() {
		const lastBox = this.container.lastChild
		const lastPrevBox = lastBox.previousSibling
		const lastPrevPrevBox = lastPrevBox.previousSibling
		const firstBox = this.container.firstChild
		const firstNextBox = firstBox.nextSibling
		const firstNextNextBox = firstNextBox.nextSibling

		const clonedLastBox = lastBox.cloneNode(true)
		const clonedLastPrevBox = lastPrevBox.cloneNode(true)
		const clonedLastLastPrevBox = lastPrevPrevBox.cloneNode(true)
		clonedLastBox.classList.add('lastClone')
		clonedLastPrevBox.classList.add('ccclone')
		clonedLastLastPrevBox.classList.add('clone')
		const clonedFirstBox = firstBox.cloneNode(true)
		const clonedFirstNextBox = firstNextBox.cloneNode(true)
		const clonedFirstNextNextBox = firstNextNextBox.cloneNode(true)
		clonedFirstBox.classList.add('hmclone')
		clonedFirstNextBox.classList.add('clone')
		clonedFirstNextNextBox.classList.add('clone')

		this.container.style.transform = `translateX(${
			-this.size * this.counter
		}px)`

		this.container.prepend(clonedLastBox)
		this.container.prepend(clonedLastPrevBox)
		this.container.prepend(clonedLastLastPrevBox)
		this.container.appendChild(clonedFirstBox)
		this.container.appendChild(clonedFirstNextBox)
		this.container.appendChild(clonedFirstNextNextBox)

		this.container.addEventListener('transitionend', () => {
			if (this.boxes[this.counter].classList.contains('ccclone')) {
				this.container.style.transition = 'none'
				this.counter = this.boxes.length - 5
				this.container.style.transform = `translateX(${
					-this.size * this.counter
				}px)`
				console.log('cccclone')
			}
			if (this.boxes[this.counter].classList.contains('hmclone')) {
				this.container.style.transition = 'none'
				this.counter = this.boxes.length - this.counter
				this.container.style.transform = `translateX(${
					-this.size * this.counter
				}px)`
				console.log('hmclone')
			}
		})
	},

	methods: {
		nextProject() {
			if (this.counter >= this.boxes.length - 1) return

			this.container.style.transition = 'transform 0.5s ease'
			this.counter++
			this.container.style.transform = `translateX(${
				-this.size * this.counter
			}px)`

			// this.selectMidleBox()

			if (this.index === this.projects.length) {
				this.index = 1
				return
			}
			this.index++
		},

		prevProject() {
			if (this.counter <= 0) return
			// const boxes = document.querySelector('.project-boxes')
			// const lastBox = boxes.lastChild
			// boxes.prepend(lastBox)
			// const container = document.querySelector('.project-boxes')
			// this.length += 210
			// container.style.transform = `translateX(${this.length}px)`

			this.container.style.transition = 'transform 0.5s ease'
			this.counter--
			this.container.style.transform = `translateX(${
				-this.size * this.counter
			}px)`

			// this.selectMidleBox()

			if (this.index === 1) {
				this.index = this.projects.length
				return
			}
			this.index--
		},

		// selectMidleBox() {
		// 	const boxes = document.querySelectorAll('.ProjectBox')

		// 	boxes.forEach((box) => {
		// 		box.classList.remove('selected')
		// 	})
		// 	boxes[this.index + 1].classList.add('selected')
		// },
	},
}
</script>

<style lang="scss" scoped>
.project-container {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: #100317;
}

.page-title {
	font-family: 'Press Start 2P', cursive;
	font-weight: normal;
	font-size: 1.3em;
	transform: translateY(-34px);
	color: #34b1f8;
}
.projects {
	position: relative;
	display: flex;
	height: 574px;
	width: 600px;
	overflow: hidden;
	transform: translateX(21px);
	align-items: center;
	padding-left: 0.5rem;

	.ProjectBox {
		margin-right: 90px;
	}
}
.under-projects {
	position: relative;
}

.selected-frame {
	background: #fff;
	position: absolute;
	width: 130px;
	height: 510px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.project-boxes {
	display: flex;
	// transform: translateX(-420px);
	// transition: transform 0.5s ease;
}
.arrows {
	.left-arrow::after {
		content: '<';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(-100px, -50%);
		font-family: 'Press Start 2P', cursive;
		font-size: 50px;
		color: #df1041;
		z-index: 11;
		cursor: pointer;
	}
	.right-arrow::after {
		content: '>';
		position: absolute;
		right: 0;
		top: 50%;
		transform: translate(100px, -50%);
		font-family: 'Press Start 2P', cursive;
		font-size: 50px;
		color: #df1041;
		z-index: 11;
		cursor: pointer;
	}
}

button {
	transform: translateY(50px);
}

.project-enter-active,
.project-leave-active {
	transition: all 1s;
}
.project-enter, .project-leave-to /* .list-leave-active below version 2.1.8 */ {
	opacity: 0;
	transform: translateY(100px);
}

.selected {
	border: 15px solid rgb(0, 203, 248);
}
.selected-frame {
	width: 120px;
	height: 500px;
	background: transparent;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	outline: 8px solid yellow;
}
</style>
