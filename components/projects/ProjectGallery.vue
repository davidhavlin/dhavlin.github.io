<template>
	<div ref="gallery" class="gallery">
		<div class="loader" v-if="!loaded">
			<LoadingSquare />
		</div>
		<img loading="lazy" :src="gallery[0]" alt="" />
		<img loading="lazy" :src="gallery[1]" alt="" />
		<img loading="lazy" :src="gallery[2]" alt="" @load="isImgLoaded()" />
	</div>
</template>

<script>
export default {
	props: {
		gallery: {
			type: Array,
			default() {
				return ['bu']
			},
		},
		showtime: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			loaded: false,
			index: 0,
			timeout: null,
		}
	},
	computed: {
		images() {
			return Array.from(this.$refs.gallery.querySelectorAll('img'))
		},
	},
	watch: {
		showtime(newValue, oldValue) {
			if (newValue) {
				this.changingGalery()
			} else {
				clearTimeout(this.timeout)
			}
		},
	},
	methods: {
		changingGalery() {
			this.timeout = setTimeout(() => {
				if (this.index === this.images.length) {
					this.index = 0
				}
				this.changeImage()
				this.index++
				this.changingGalery()
			}, 2000)
		},
		changeImage() {
			this.images.map((image) => image.classList.remove('active'))
			this.images[this.index].classList.add('active')
		},
		isImgLoaded() {
			this.loaded = true
		},
	},
}
</script>

<style lang="scss" scoped>
.gallery {
	background-size: cover;
	background-color: #4a12be;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
	display: none;
	object-fit: cover;
	overflow: hidden;

	.loader {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #4a12be;
		z-index: 1;
	}

	img {
		min-width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		animation: gallery 1s ease;
		display: none;
		z-index: 1;
	}

	img.active {
		display: block;
	}

	@keyframes gallery {
		from {
			opacity: 0.3;
			transform: scale(1.1);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
}
.show .gallery {
	display: block;
}
</style>
