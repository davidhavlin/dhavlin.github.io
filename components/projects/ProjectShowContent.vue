<template>
	<div class="project-showcase">
		<div class="project-info showcase-content">
			<h4>info</h4>
			{{ project.desc }}
		</div>
		<div class="project-url showcase-content">
			<h4>url</h4>
			<a
				:href="project.url"
				:style="{ color: project.color.second }"
				target="new_blank"
			>
				{{ shortUrl(project.url) }}
			</a>
		</div>
		<div class="project-stack showcase-content">
			<h4>stack</h4>
			<div class="project-icons" style="display: flex;">
				<div
					v-for="(utility, index) in project.stack"
					:key="index"
					class="prj-icon"
				>
					<img :src="makeIcon(utility)" :alt="utility" />
					<span class="icon-tooltip">{{ utility }}</span>
				</div>
			</div>
		</div>
		<div class="project-gh showcase-content">
			<h4>github</h4>
			<a
				:href="project.github"
				:style="{ color: project.color.main, display: 'flex' }"
				target="new_blank"
			>
				<img
					class="github-icon"
					:src="require('@/assets/images/software/github.png')"
					alt="github"
				/>
				Github page
			</a>
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
	methods: {
		makeIcon(tech) {
			switch (tech) {
				case 'HTML':
					return require('@/assets/images/software/html5.png')

				case 'SCSS':
					return require('@/assets/images/software/css.png')

				case 'ES6':
					return require('@/assets/images/software/js.png')

				case 'Vue':
					return require('@/assets/images/software/vue.png')

				case 'Nuxt':
					return require('@/assets/images/software/nuxt.png')

				case 'React':
					return require('@/assets/images/software/react.png')
			}
		},
		shortUrl(url) {
			const editedUrl = url.slice(8, url.length - 1)
			return editedUrl
		},
	},
}
</script>

<style lang="scss" scoped>
.project-showcase {
	position: absolute;
	display: none;
	top: 50%;
	transform: translateY(-50%);
}
.show {
	transition: all 1s ease;

	.project-showcase {
		display: inline-block;

		.showcase-content {
			position: relative;
			background: #0b000f;
			padding: 1rem;
			margin-bottom: 1.6rem;
			width: fit-content;
			min-width: 150px;

			a:hover {
				text-decoration: underline;
			}
		}

		h4 {
			position: absolute;
			transform: translate(0px, -28px);
			color: #0c94ff;
		}
		.project-info,
		.project-url,
		.project-stack,
		.project-gh {
			animation: slideIn 0.5s forwards ease;
			opacity: 0;
		}
		.project-info {
			margin-top: 3rem;
			color: #fff;
			animation-delay: 0.5s;
		}
		.project-url {
			color: #d3015e;
			animation-delay: 0.7s;
		}
		.project-stack {
			animation-delay: 0.9s;
		}
		.project-gh {
			animation-delay: 1.1s;
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

		.prj-icon {
			position: relative;
			display: inline-block;
			width: 20px;
			margin-right: 0.5rem;
			img {
				width: 100%;
			}
			.icon-tooltip {
				visibility: hidden;
				width: 50px;
				left: 50%;
				margin-left: -25px;
				background-color: #fff;
				color: #000;
				text-align: center;
				border-radius: 6px;
				padding: 0.1rem 0.4rem;
				position: absolute;
				bottom: 37px;
				z-index: 1;
				font-size: 0.9em;
			}
			.icon-tooltip::after {
				content: ' ';
				position: absolute;
				top: 99%;
				left: 50%;
				margin-left: -5px;
				border-width: 5px;
				border-style: solid;
				border-color: #fff transparent transparent transparent;
			}

			&:hover .icon-tooltip {
				visibility: visible;
			}
		}
		.prj-icon:last-child {
			margin-right: 0;
		}

		.github-icon {
			display: inline-block;
			width: 20px;
			margin-right: 0.5rem;
		}
	}
	.gradient {
		opacity: 0;
	}
}

@media (max-width: 800px) {
	.show .project-showcase {
		.project-info {
			margin-top: 7rem;
		}
	}
}
</style>
