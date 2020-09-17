<template>
	<div class="project-page" :class="{ projectShowcase: showCase }">
		<h1 class="project-page-title">
			My Projects ({{ index }}/{{ projects.length }})
		</h1>
		<div class="under-projects">
			<!-- ------------------- ARROWS A FRAME ---------- -->
			<div class="arrows" v-if="!showCase">
				<div class="left-arrow" @click="prevProject()">
					&lt;
				</div>
				<div class="right-arrow" @click="nextProject()">&gt;</div>
			</div>
			<div class="selected-frame"></div>
			<!-- **************************** -->
			<div class="projects">
				<div class="project-boxes" @click="whichHalf">
					<ProjectBox
						v-for="project in projects"
						:id="project.id"
						:key="project.id"
						:project="project"
						class="ProjectBox"
					/>
				</div>
			</div>
		</div>

		<button v-if="!showCase" @click="showProject()">show me</button>
		<button v-if="showCase" @click="closeProject()">close me</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			index: 1,
			counter: 3,
			active: false,
			size: 210,
			showCase: false,
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
				// {
				// 	title: 'COMING soon',
				// 	url: 'https://davidhavlin.netlify.app/',
				// 	desc: 'skuska',
				// 	logo: '',
				// 	colors: ['#100c1d', '#4a12be', '#0c95ff', '#100c1d'],
				// 	stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt.js'],
				// 	images: [],
				// 	id: 3,
				// },
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
		this.cloneElements()

		this.onMountedStyles()

		this.container.addEventListener('transitionend', (event) => {
			if (!event.target.classList.contains('project-boxes')) {
				return
			}
			this.carouselMagic()
		})
	},

	methods: {
		nieco(event) {
			event.target.classList.add('hover-arrow')
		},
		whichHalf(event) {
			const selected = document.querySelector('.selected')
			if (event.composedPath()[1] === selected.previousSibling) {
				this.prevProject()
			} else if (event.composedPath()[1] === selected.nextSibling) {
				this.nextProject()
			} else if (event.composedPath()[1] === selected) {
				this.showProject()
			}
		},

		showProject() {
			const selected = document.querySelector('.selected')
			this.boxes.forEach((box) => {
				if (!box.classList.contains('selected')) {
					box.classList.add('hideBox')
				}
			})
			this.showCase = true
			selected.classList.add('show')
		},

		closeProject() {
			const selected = document.querySelector('.selected')
			this.boxes.forEach((box) => {
				box.classList.remove('hideBox')
			})
			selected.classList.remove('show')
			this.showCase = false
		},

		nextProject() {
			if (this.active) return
			this.active = true

			this.selectMidleBox(true)

			this.container.style.transition = 'transform 0.3s ease'
			this.counter++
			this.container.style.transform = `translateX(${
				-this.size * this.counter
			}px)`

			if (this.index === this.projects.length) {
				this.index = 1
				return
			}
			this.index++
		},

		prevProject() {
			if (this.active) return
			this.active = true

			this.selectMidleBox(false)

			this.container.style.transition = 'transform 0.3s ease'
			this.counter--
			this.container.style.transform = `translateX(${
				-this.size * this.counter
			}px)`

			if (this.index === 1) {
				this.index = this.projects.length
				return
			}
			this.index--
		},

		onMountedStyles() {
			this.container.style.transform = `translateX(${
				-this.size * this.counter
			}px)`

			this.boxes[this.counter + 1].classList.add('selected')
		},

		carouselMagic() {
			if (this.boxes[this.counter].classList.contains('clone-prev')) {
				this.container.style.transition = 'none'
				this.counter = this.boxes.length - 5
				this.container.style.transform = `translateX(${
					-this.size * this.counter
				}px)`

				this.boxes.forEach((box) => {
					box.classList.remove('selected')
				})
				this.boxes[this.counter + 1].classList.add('selected')
			}
			if (this.boxes[this.counter].classList.contains('clone-next')) {
				this.container.style.transition = 'none'
				this.counter = this.boxes.length - this.counter
				this.container.style.transform = `translateX(${
					-this.size * this.counter
				}px)`

				this.boxes.forEach((box) => {
					box.classList.remove('selected')
				})
				this.boxes[this.counter + 1].classList.add('selected')
			}
			this.active = false
		},

		cloneElements() {
			const clonedLastBox = this.container.lastChild.cloneNode(true)
			const clonedLastPrevBox = this.container.lastChild.previousSibling.cloneNode(
				true
			)
			const clonedLastLastPrevBox = this.container.lastChild.previousSibling.previousSibling.cloneNode(
				true
			)
			clonedLastPrevBox.classList.add('clone-prev')

			const clonedFirstBox = this.container.firstChild.cloneNode(true)
			const clonedFirstNextBox = this.container.firstChild.nextSibling.cloneNode(
				true
			)
			const clonedFirstNextNextBox = this.container.firstChild.nextSibling.nextSibling.cloneNode(
				true
			)
			clonedFirstBox.classList.add('clone-next')

			this.container.prepend(clonedLastBox)
			this.container.prepend(clonedLastPrevBox)
			this.container.prepend(clonedLastLastPrevBox)
			this.container.appendChild(clonedFirstBox)
			this.container.appendChild(clonedFirstNextBox)
			this.container.appendChild(clonedFirstNextNextBox)
		},

		selectMidleBox(direction) {
			this.boxes.forEach((box) => {
				box.classList.remove('selected')
			})
			direction
				? this.boxes[this.counter + 2].classList.add('selected')
				: this.boxes[this.counter].classList.add('selected')
		},
	},
}
</script>

<style lang="scss" scoped>
.project-page {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: #100317;
}

.project-page-title {
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
}
.arrows {
	.left-arrow {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(-100px, -50%);
		font-family: 'Press Start 2P', cursive;
		font-size: 50px;
		color: #df1041;
		z-index: 11;
		cursor: pointer;
		user-select: none;

		&:hover {
			transform: translate(-110px, -50%);
		}
	}
	.right-arrow {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translate(100px, -50%);
		font-family: 'Press Start 2P', cursive;
		font-size: 50px;
		color: #df1041;
		z-index: 11;
		cursor: pointer;
		user-select: none;

		&:hover {
			transform: translate(110px, -50%);
		}
	}
}

button {
	transform: translateY(50px);
}

.selected-frame {
	width: 120px;
	height: 500px;
	background: transparent;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	outline: 8px solid #fff;
}

.hideBox {
	display: none;
}

.projectShowcase {
	// background: #fff;
	.project {
		overflow: visible;
	}
}
</style>
