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
			<div class="project-icons">
				<div
					class="prj-icon"
					v-for="(utility, index) in project.stack"
					:key="index"
				>
					<img :src="makeIcon(utility)" alt />
					<span class="icon-tooltip">{{ utility }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
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
	width: 100%;
	display: none;
	top: 50%;
	transform: translateY(-50%);
}
.url {
	display: none;
}

.show .url {
	display: block;
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
		}

		h4 {
			position: absolute;
			transform: translate(0px, -28px);
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
				top: 100%; /* At the bottom of the tooltip */
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
	}
	.gradient {
		opacity: 0;
	}
}
</style>
