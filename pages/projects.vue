<template>
	<div class="project-container">
		<h1 class="page-title">My Projects ({{ projects.length }})</h1>
		<div class="projects">
			<div class="arrows">
				<div class="left-arrow"></div>
				<div class="right-arrow"></div>
			</div>
			<div class="project-boxes">
				<ProjectBox
					v-for="project in projects"
					:key="project.id"
					:project="project"
					class="ProjectBox"
				/>
			</div>
		</div>

		<button>show me</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
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
				// 	title: 'David Havlín Portfolio',
				// 	url: 'https://davidhavlin.netlify.app/',
				// 	desc: 'skuska',
				// 	logo: '',
				// 	colors: ['#f80f2b', '#4a12be', '#0c95ff', '#100c1d'],
				// 	stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt.js'],
				// 	images: '',
				// 	id: 3,
				// },
				// {
				// 	title: 'David Havlín Portfolio',
				// 	url: 'https://davidhavlin.netlify.app/',
				// 	desc: 'skuska',
				// 	logo: '',
				// 	colors: ['#f80f2b', '#4a12be', '#0c95ff', '#100c1d'],
				// 	stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt.js'],
				// 	images: '',
				// 	id: 4,
				// },
			],
		}
	},
	methods: {
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

	.ProjectBox {
		margin-right: 6rem;

		&:last-child {
			margin-right: 0;
		}
	}
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
</style>
