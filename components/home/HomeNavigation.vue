<template>
	<nav class="home-navigation">
		<nuxt-link :to="{ name: 'about', params: { skillsPage } }"
			><div class="link-text">čo ovládam?</div>
			<div class="link-bg"></div
		></nuxt-link>
		<nuxt-link to="/projects"
			><div class="link-text">projekty</div>
			<div class="link-bg"></div
		></nuxt-link>
		<nuxt-link to="/contact"
			><div class="link-text">kontaktuj ma</div>
			<div class="link-bg"></div
		></nuxt-link>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			skillsPage: true,
		}
	},
	computed: {
		links() {
			return document.querySelectorAll('.home-navigation a')
		},
	},
	mounted() {
		this.links.forEach((link) => {
			this.showLink(link)
			this.showText(link)
		})
	},
	methods: {
		showLink(link) {
			link.addEventListener(
				'animationstart',
				() => {
					link.style.opacity = 1
				},
				{
					once: true,
				}
			)
		},
		showText(link) {
			link.addEventListener(
				'animationend',
				() => {
					setTimeout(() => {
						link.firstChild.style.opacity = 1

						link.firstChild.classList.add('showText')
					}, 300)
				},
				{
					once: true,
				}
			)
		},
	},
}
</script>

<style lang="scss" scoped>
.showText {
	animation: flash;
	animation-duration: 1s;
}
.home-navigation {
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		opacity: 0;
		position: relative;
		margin-bottom: 2rem;
		animation: backInUp;
		animation-duration: 2s;
		animation-delay: 1000ms;

		&:nth-child(2) {
			animation-delay: 1200ms;
		}
		&:nth-child(3) {
			animation-delay: 1400ms;
			margin-bottom: 0;
		}

		&:hover {
			// color: #34b1f8;
			color: #fff;
			.link-bg {
				height: calc(100% + 12px);
				// outline: 2px solid #0fd7d7;
				background: rgba(88, 21, 150, 0.22);
			}
			.link-text {
				color: #0fd7d7;
			}
		}
		&:nth-child(1):hover {
			.link-bg {
				// background: #9212f8;
				// outline: 2px solid #9212f8;
			}
		}
		&:nth-child(2):hover {
			.link-bg {
				// background: #34b1f8;
				// outline: 2px solid #34b1f8;
			}
		}
		&:nth-child(3):hover {
			.link-bg {
				// background: #ffc30a;
				// outline: 2px solid #ffc30a;
			}
		}
	}
	.link-text {
		opacity: 0;
		position: relative;
		z-index: 1;
	}
	.link-bg {
		position: absolute;
		bottom: -5px;
		left: -7px;
		right: -33px;
		width: 106%;
		height: 12px;
		background: rgba(85, 26, 139, 0.21961);
		z-index: 0;
		transition: height 0.1s ease;
	}
}
</style>
