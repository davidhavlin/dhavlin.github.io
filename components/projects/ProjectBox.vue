<template>
	<div
		class="project"
		:style="{
			backgroundColor: project.colors[0],
			backgroundImage: `url(${project.images[0]})`,
		}"
	>
		<h1 class="title">{{ project.title }}</h1>
		<div
			class="gradient"
			:style="{
				background: `linear-gradient(0deg, rgba(14,6,28,0) 0%, ${project.colors[1]} 100%)`,
			}"
		></div>

		<div
			class="logo"
			:style="{ backgroundImage: `url(${project.logo})` }"
		></div>
		<div class="project-showcase">
			<div class="project-info showcase-content">
				<h4>info</h4>
				{{ project.desc }}
			</div>
			<div class="project-url showcase-content">
				<h4>url</h4>
				<a :href="project.url" target="new_blank">{{ project.url }}</a>
			</div>
			<div class="project-stack showcase-content">
				<h4>stack</h4>
				<div class="project-icons">
					<div
						class="prj-icon"
						v-for="(utility, index) in project.stack"
						:key="index"
					>
						<img :src="makeIcon(utility)" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="project-showcase-images">
			<div
				class="prj-image-right"
				:style="{
					backgroundImage: `url(${project.images[0]})`,
				}"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
			default() {
				return {
					title: 'coming soon',
					url: 'none',
					desc: 'none',
					logo: 'none',
					colors: ['#f80f2b', '#4a12be', '#0c95ff', '#100c1d'],
					stack: ['HTML', 'SCSS', 'ES6', 'Vue'],
					images: 'none',
					id: 0,
				}
			},
		},
	},
	computed: {
		projectStyle() {
			return {
				backgroundColor: this.data,
				backgroundImage: this.project.images[0],
			}
		},
	},
	methods: {
		makeIcon(tech) {
			switch (tech) {
				case 'HTML':
					return require('@/assets/images/software/html5.png')

				case 'SCSS':
					return require('@/assets/images/software/css.svg')

				case 'ES6':
					return require('@/assets/images/software/js.png')

				case 'Vue':
					return require('@/assets/images/software/vue.png')
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.selected.project {
	color: red;
}
.show.project {
	width: 200px;
}

.project {
	position: relative;
	color: #fff;
	width: 120px;
	height: 500px;
	background-position: center;
	background-size: cover;
	z-index: 10;
	cursor: pointer;
	transition: transform 1s ease;

	.title {
		font-family: 'Press Start 2P', cursive;
		font-style: normal;
		font-weight: normal;
		font-size: 1.12em;
		line-height: 128.5%;
		letter-spacing: 0.015em;
		text-transform: uppercase;
		margin-top: 2rem;
		transform: translateX(20px);
		transition: transform 0.5s ease;
	}

	&:hover {
		outline: 3px solid #34b1f8;

		.title {
			transform: translateX(40px);
		}
	}
}
.gradient {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: yellow;
	z-index: -1;
}

.logo {
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background: #100317;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 50%);
	background-position: center;
	background-repeat: no-repeat;
	transition: all 0.5s ease;
}

.selected .logo {
	transform: translate(-50%, 60%);
}

.project-showcase {
	position: absolute;
	width: 100%;
	display: none;
}
.url {
	display: none;
}

.show .url {
	display: block;
}
.show {
	transition: all 1s ease;

	.project-showcase-images {
		position: absolute;
		width: 100vw;
		height: 100vh;
		top: 50%;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		margin-top: -50vh;
		z-index: -10;

		.prj-image-right {
			width: 30%;
			height: 100%;
			position: absolute;
			right: 0;
			background-size: cover;
			// background-position: 1015px;
		}
	}
	.project-showcase {
		transform: translateX(220px);
		display: inline-block;

		.showcase-content {
			position: relative;
			background: #0b000f;
			padding: 1rem;
			margin-bottom: 1rem;
			width: fit-content;
			min-width: 150px;
		}

		h4 {
			color: #0c94ff;
		}

		.project-info {
			margin-top: 1rem;
			color: #fff;
			animation: slideIn 0.5s forwards ease;
			animation-delay: 0.5s;
			opacity: 0;
		}
		@keyframes slideIn {
			from {
				transform: translateX(-100px);
				opacity: 0;
			}
			to {
				transform: translateX(0px);
				opacity: 1;
			}
		}
		.project-url {
			color: #d3015e;
			animation: slideIn 0.5s forwards ease;
			animation-delay: 0.7s;
			opacity: 0;
		}
		.project-stack {
			animation: slideIn 0.5s forwards ease;
			animation-delay: 0.9s;
			opacity: 0;
		}
		.project-icons {
			display: flex;
		}
		.prj-icon {
			width: 20px;
			margin-right: 0.5rem;
			img {
				width: 100%;
			}
		}
	}
	.gradient {
		opacity: 0;
	}

	.title {
		transform: translateX(180px);
	}
	&:hover {
		background-position: 660px;
		.title {
			transform: translateX(200px);
		}
	}
}
</style>
