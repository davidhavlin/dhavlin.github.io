<template>
	<div class="project-page" :class="{ projectShowcase: showCase }">
		<h1 class="project-page-title">
			My Projects ({{ index }}/{{ projects.length }})
		</h1>
		<div class="under-projects">
			<!-- ------------------- ARROWS A FRAME ---------- -->
			<div v-if="!showCase" class="arrows">
				<div class="left-arrow" @click="prevProject()">
					<svg
						width="70"
						height="94"
						viewBox="0 0 70 94"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M67.5 5V2.5H65H41H38.5V5V14.5H29H26.5V17V26.5H17H14.5V29V38.5H5H2.5V41V53V55.5H5H14.5V65V67.5H17H26.5V77V79.5H29H38.5V89V91.5H41H65H67.5V89V77V74.5H65H55.5V65V62.5H53H43.5V53V50.5H41H31.5V43.5H41H43.5V41V31.5H53H55.5V29V19.5H65H67.5V17V5Z"
							fill="white"
							stroke="black"
							stroke-width="5"
						/>
					</svg>
				</div>
				<div class="right-arrow" @click="nextProject()">
					<svg
						width="70"
						height="94"
						viewBox="0 0 70 94"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M2.5 89L2.5 91.5L5 91.5L29 91.5L31.5 91.5L31.5 89L31.5 79.5L41 79.5L43.5 79.5L43.5 77L43.5 67.5L53 67.5L55.5 67.5L55.5 65L55.5 55.5L65 55.5L67.5 55.5L67.5 53L67.5 41L67.5 38.5L65 38.5L55.5 38.5L55.5 29L55.5 26.5L53 26.5L43.5 26.5L43.5 17L43.5 14.5L41 14.5L31.5 14.5L31.5 5L31.5 2.5L29 2.5L4.99999 2.50001L2.49999 2.50001L2.49999 5.00001L2.49999 17L2.49999 19.5L4.99999 19.5L14.5 19.5L14.5 29L14.5 31.5L17 31.5L26.5 31.5L26.5 41L26.5 43.5L29 43.5L38.5 43.5L38.5 50.5L29 50.5L26.5 50.5L26.5 53L26.5 62.5L17 62.5L14.5 62.5L14.5 65L14.5 74.5L5 74.5L2.5 74.5L2.5 77L2.5 89Z"
							fill="white"
							stroke="black"
							stroke-width="5"
						/>
					</svg>
				</div>
			</div>
			<ProjectFrame />

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
					desc:
						'Prerobena moja prva web stranka a viac detailov k nej.',
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
		whichHalf(event) {
			const selected = document.querySelector('.selected')
			if (event.composedPath()[2] === selected.previousSibling) {
				this.prevProject()
			} else if (event.composedPath()[2] === selected.nextSibling) {
				this.nextProject()
			} else if (event.composedPath()[2] === selected) {
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

			this.container.style.transition = 'transform 0.1s ease'
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

			this.container.style.transition = 'transform 0.1s ease'
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

.project-boxes {
	display: flex;
}
.arrows {
	.left-arrow,
	.right-arrow {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translate(-80px, -50%);
		z-index: 11;
		cursor: pointer;

		svg {
			width: 37px;
		}
		path {
			fill: #df1041;
			stroke: #100317;
			stroke-width: 3px;
		}

		&:hover {
			// transform: translate(-105px, -50%);
			path {
				stroke: #34b1f8;
			}
		}
	}
	.right-arrow {
		left: auto;
		right: 0;
		transform: translate(80px, -50%);
	}
}

button {
	z-index: 100;
}

/* ////////////////////////////// SHOW CASE SEKCIA //////////////////////////// */
.hideBox {
	display: none;
}

.projectShowcase {
	.selected-frame {
		outline: 8px solid #0b000f;
		width: 200px;
	}
	.projects {
		overflow: visible;
		transform: translateX(0);
		justify-content: center;
		padding-left: 0;

		.project-boxes {
			transform: translateX(0) !important;

			.ProjectBox {
				margin-right: 0;
			}
		}
	}
}
</style>
