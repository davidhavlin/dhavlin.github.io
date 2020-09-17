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
			<div class="projects">
				<!-- <div class="selected-frame"></div> -->

				<div class="project-boxes">
					<ProjectBox
						v-for="project in projects"
						:key="project.id"
						:id="project.id"
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
			],
		}
	},

	methods: {
		nextProject() {
			const boxes = document.querySelector('.project-boxes')
			const firstBox = boxes.firstChild
			boxes.appendChild(firstBox)
			this.selectMidleBox()

			if (this.index === this.projects.length) {
				this.index = 1
				return
			}
			this.index++
		},

		prevProject() {
			const boxes = document.querySelector('.project-boxes')
			const lastBox = boxes.lastChild
			boxes.prepend(lastBox)
			this.selectMidleBox()

			if (this.index === 1) {
				this.index = this.projects.length
				return
			}
			this.index--
		},

		selectMidleBox() {
			const boxes = document.querySelectorAll('.ProjectBox')

			boxes.forEach((box) => {
				box.classList.remove('selected')
			})
			boxes[1].classList.add('selected')
		},

		activeClass(event) {
			if (event.target.classList.contains('option')) {
				const options = document.querySelectorAll('.option')
				options.forEach((option) => option.classList.remove('active'))
				// document.querySelectorAll('.option').classList.remove('active')

				event.target.classList.add('active')
			}
		},
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
	transform: translateX(16px);
	align-items: center;
	padding-left: 0.5rem;

	.ProjectBox {
		margin-right: 6rem;

		&:last-child {
			margin-right: 0;
		}
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
	outline: 5px solid rgb(0, 203, 248);
}
</style>
