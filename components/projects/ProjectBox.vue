<template>
	<div>
		<div
			class="project"
			:style="{
				backgroundColor: project.color.main,
				backgroundImage: `url(${project.images[0]})`,
			}"
		>
			<h1 class="title">{{ project.title }}</h1>
			<div
				class="gradient"
				:style="{
					background: `linear-gradient(0deg, rgba(14,6,28,0) 0%, ${project.color.main} 100%)`,
				}"
			></div>

			<div
				class="logo"
				:style="{ backgroundImage: `url(${project.logo})` }"
			></div>
		</div>

		<ProjectShowContent v-show="showtime" :project="project" />
		<ProjectShowImages v-show="showtime" :project="project" />
	</div>
</template>

<script>
export default {
	components: {
		ProjectShowContent: () => import('../projects/ProjectShowContent.vue'),
		ProjectShowImages: () => import('../projects/ProjectShowImages.vue'),
	},
	props: {
		showtime: {
			type: Boolean,
			default: false,
		},
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
}
</script>

<style lang="scss" scoped>
.selected .project {
	color: #00f3ff;
}
.show .project {
	width: 200px;
}

.project {
	display: inline-block;
	position: relative;
	color: #fff;
	width: 120px;
	height: 500px;
	background-position: center;
	background-size: cover;
	z-index: 10;
	cursor: pointer;
	transition: transform 1s ease, background-position 0.3s ease;

	.title {
		position: absolute;
		font-family: 'Press Start 2P', cursive;
		font-style: normal;
		font-weight: normal;
		font-size: 1.12em;
		line-height: 128.5%;
		letter-spacing: 0.015em;
		text-transform: uppercase;
		margin-top: 2rem;
		transform: translateX(20px);
		transition: transform 0.3s ease;
	}

	// &:hover {
	// 	outline: 3px solid #34b1f8;
	// 	background-position: -215px;

	// 	.title {
	// 		transform: translateX(40px);
	// 	}
	// }
}
.hovered {
	.project {
		outline: 3px solid #34b1f8;
		background-position: -215px;
	}
	.title {
		transform: translateX(40px);
	}
}
.gradient {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
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
	background-size: 30px;
	// transition: all 0.2s ease;
}

.selected .logo {
	// transform: translate(-50%, 60%);
	box-sizing: content-box;
	border: 3px solid #34b1f8;
}

.show {
	.title {
		transform: translateX(180px);
	}

	.project:hover {
		.title {
			transform: translateX(203px);
		}
	}
	.logo {
		border: 8px solid #0b000f;
		background-color: #0b000f;
	}
}

@media (max-width: 930px) {
}
@media (max-width: 680px) {
	.project {
		height: 400px;
	}
}
</style>
