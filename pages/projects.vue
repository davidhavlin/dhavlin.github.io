<template>
	<div class="project-container">
		<!-- <div class="options">
			<div
				v-for="project in projects"
				:key="project.id"
				class="option"
				:class="{ active: projects.indexOf(project) === 0 }"
				style="
					--optionBackground: url(https://res.cloudinary.com/davidhavlin/image/upload/v1589283559/20518_upiphr.jpg);
				"
				@click="activeClass"
			>
				<div class="shadow"></div>
				<div class="label">
					<div class="icon">
						<i class="fas fa-walking"></i>
					</div>
					<div class="info">
						<div class="main">{{ project.title }}</div>
						<div class="sub">{{ project.desc }}</div>
					</div>
				</div>
			</div>
		</div> -->
		<div class="projects">
			<div
				v-for="project in projects"
				:key="project.id"
				class="project"
			></div>
		</div>
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
					logo: '',
					colors: ['#f80f2b', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue'],
					images: '',
					id: 0,
				},
				{
					title: 'David Havlín Portfolio',
					url: 'https://davidhavlin.netlify.app/',
					desc: 'skuska',
					logo: '',
					colors: ['#f80f2b', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt.js'],
					images: '',
					id: 1,
				},
				{
					title: 'David Havlín Portfolio',
					url: 'https://davidhavlin.netlify.app/',
					desc: 'skuska',
					logo: '',
					colors: ['#f80f2b', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue', 'Nuxt.js'],
					images: '',
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
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: #100317;
}

.options {
	display: flex;
	flex-direction: row;
	align-items: stretch;
	overflow: hidden;

	min-width: 600px;
	max-width: 900px;
	width: calc(100% - 100px);

	height: 400px;

	.option {
		position: relative;
		overflow: hidden;

		min-width: 60px;
		margin: 10px;
		//border:0px solid --defaultColor;

		background: var(--optionBackground, var(--defaultBackground, #e6e9ed));
		background-size: auto 120%;
		background-position: center;

		cursor: pointer;

		transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);

		&.active {
			flex-grow: 10000;
			transform: scale(1);

			max-width: 600px;
			margin: 0px;
			border-radius: 40px;

			background-size: auto 100%;
			.shadow {
				box-shadow: inset 0 -120px 120px -120px black,
					inset 0 -120px 120px -100px black;
			}
			.label {
				bottom: 20px;
				left: 20px;
				.info > div {
					left: 0px;
					opacity: 1;
				}
			}
			// &.active {
			//    transform:scale(0.9);
			// }
		}
		&:not(.active) {
			flex-grow: 1;

			border-radius: 30px;
			.shadow {
				bottom: -40px;
				box-shadow: inset 0 -120px 0px -120px black,
					inset 0 -120px 0px -100px black;
			}
			.label {
				bottom: 10px;
				left: 10px;
				.info > div {
					left: 20px;
					opacity: 0;
				}
			}
		}
		.shadow {
			position: absolute;
			bottom: 0px;
			left: 0px;
			right: 0px;

			height: 120px;

			transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
		}
		.label {
			display: flex;
			position: absolute;
			right: 0px;

			height: 40px;
			transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
			.icon {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				min-width: 40px;
				max-width: 40px;
				height: 40px;
				border-radius: 100%;

				background-color: white;
				color: var(--defaultBackground);
			}
			.info {
				display: flex;
				flex-direction: column;
				justify-content: center;

				margin-left: 10px;

				color: white;

				white-space: pre;
				> div {
					position: relative;

					transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95),
						opacity 0.5s ease-out;
				}
				.main {
					font-weight: bold;
					font-size: 1.2rem;
				}
				.sub {
					transition-delay: 0.1s;
				}
			}
		}
	}
}
</style>
