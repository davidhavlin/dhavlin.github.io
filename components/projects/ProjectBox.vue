<template>
	<div>
		<div ref="thisProject" class="project" :style="bgImage">
			<h1 class="title">{{ project.title }}</h1>
			<keep-alive>
				<LazyProjectGallery
					v-if="showtime && neo"
					:showtime="showtime"
					:gallery="project.images"
				/>
			</keep-alive>
			<div class="gradient" :style="gradient"></div>
			<div class="logo" :style="logo"></div>
		</div>

		<ProjectShowContent v-show="showtime" :project="project" />
		<ProjectShowBackground v-show="showtime" :project="project" />
	</div>
</template>

<script>
export default {
	props: {
		showtime: {
			type: Boolean,
			default: false,
		},
		selected: {
			type: null,
			default: 's',
		},
		project: {
			type: Object,
			default() {
				return {
					title: 'coming soon',
				}
			},
		},
	},
	data() {
		return {
			neo: false,
		}
	},
	watch: {
		selected(newValue, oldValue) {
			const parent = this.$refs.thisProject.parentElement
			if (newValue === parent) {
				this.neo = true // ked je vyvolenyy
			} else {
				this.neo = false
			}
		},
	},
	computed: {
		bgImage() {
			return {
				backgroundColor: this.project.color.main,
				backgroundImage: `url(${this.project.images[0]})`,
			}
		},
		gradient() {
			return {
				background: `linear-gradient(0deg, rgba(14,6,28,0) 0%, ${this.project.color.main} 100%)`,
			}
		},
		logo() {
			return { backgroundImage: `url(${this.project.logo})` }
		},
	},
}
</script>

<style lang="scss" scoped>
.selected .project {
	color: #00f3ff;
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
}
.hovered {
	.project {
		outline: 3px solid #34b1f8;
		background-position: -320px;
	}
	.title {
		transform: translateX(40px);
	}
}
.gradient,
.gallery {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
}
.gradient::after {
	content: 'X';
	font-family: 'Press Start 2P', cursive;
	font-size: 4em;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #34b0f858;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.gallery {
	display: none;
}
.show .gallery {
	display: block;
}

.logo {
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background: var(--main-bg-color);
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 50%);
	background-position: center;
	background-repeat: no-repeat;
	background-size: 27px;
}

.selected .logo {
	box-sizing: content-box;
	border: 3px solid #34b1f8;
	background-color: #100317;
}

.show {
	.title {
		transform: translateX(100px);
	}
	.project {
		width: 400px;
	}
	.project:hover {
		outline: 3px solid #00f3ff;
		background-position: -215px;
		.title {
			transform: translateX(123px); // toto sposobuje ten text flickering
		}
		.gradient::after {
			opacity: 1;
		}
	}
	.project:active,
	.project:focus {
		.gradient::after {
			opacity: 0;
		}
	}
	.logo {
		border: 8px solid #0b000f;
		background-color: #0b000f;
	}
}

@media (max-width: 930px) {
}
@media (max-width: 800px) {
	.project {
		height: 400px;
	}

	.show .project {
		.title {
			transform: translateX(20px);
			margin-top: 1rem;
			width: 220px;
		}

		&:hover {
			background-position: -115px;
			.title {
				transform: translateX(40px);
			}
		}
	}
}
@media (max-width: 440px) {
	.show .project {
		width: 100vw;
	}
}
@media (max-height: 690px) {
	.show .project {
		height: 400px;
	}
	.project {
		height: 300px;
	}
}
@media (max-height: 570px) {
	.show .project {
		height: 300px;
	}
	.project {
		height: 150px;
	}
}

@media (min-width: 800px) and (max-height: 700px) {
	.show .title {
		transform: translateX(0px);
	}
}
@media (min-width: 800px) and (max-height: 320px) {
	.show .project {
		height: 100vh;
	}
}
</style>
