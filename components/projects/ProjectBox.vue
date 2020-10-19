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
			<div class="github">
				<div class="github-logo">
					<!-- <svg
						width="33"
						height="30"
						viewBox="0 0 33 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<mask
							id="mask0"
							mask-type="alpha"
							maskUnits="userSpaceOnUse"
							x="0"
							y="0"
							width="33"
							height="30"
						>
							<path
								d="M0 22.587V7.14795V3.14522H3.43091V0.000213769H27.1958L29.0198 0V3.14522H32.3078V22.587V26.5898H29.0198V29.7348H5.11199H3.43091V26.5898H0V22.587Z"
								fill="#fff"
							/>
						</mask>
						<g mask="url(#mask0)">
							<rect
								x="-1.42957"
								y="-3.14453"
								width="38.5978"
								height="34.8809"
								fill="#0B000F"
							/>
							<path
								d="M3.57387 7.14773V15.0102H0V0H15.0102V0.714773V3.145H12.723H9.00614H7.86251V7.14773H3.57387Z"
								fill="#22002E"
							/>
							<path
								d="M14.6277 22.7826V26.3039H19.7046V21.0923H18.87V20.1768H17.9659V19.3317H21.3736V18.4866H22.2777V17.571H23.1123V16.7259H24.0164V11.5144H23.1818V10.6693H22.2777V9.82414H23.1818V7.14795H20.6086V7.99306H19.7741V8.9086H18.87V7.99306H14.5582V8.9086H13.7236V7.99306H12.8195V7.14795H10.3159V9.82414H11.1505V10.6693H10.3159V11.5144H9.41182V16.7259H10.3159V17.571H11.1505V18.4866H11.985V19.3317H15.4623V20.2472H14.6277V21.0923H13.7236V21.9375H11.985V21.0923H11.1505V20.1768H10.3159V19.3317H8.57727V20.2472H9.41182V21.0923H10.3159V21.9375H11.1505V22.7826H14.6277Z"
								fill="#fff"
							/>
						</g>
					</svg> -->
					<Github />
				</div>
			</div>
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
import Github from '~/assets/images/svg/Github.svg'
export default {
	components: {
		Github,
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

	.github {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
	}
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
	.project {
		width: 400px;
		.github {
			opacity: 1;

			svg {
				box-shadow: 0px -2px 19px 8px #2c1068;
			}
		}
	}
	.project:hover {
		outline: 3px solid #00f3ff;
		background-position: -215px;
		.title {
			transform: translateX(203px);
		}

		.github {
			opacity: 1;
			background: #5124d38c;
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
			margin-top: 1rem;
		}
	}
}
</style>
