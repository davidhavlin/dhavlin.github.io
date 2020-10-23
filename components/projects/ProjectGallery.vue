<template>
	<div ref="gallery" class="gallery">
		<img :src="src1" alt="" class="active" @load="afterLoad" />
		<img :src="src2" alt="" @load="afterLoad" />
		<img :src="src3" alt="" @load="afterLoad" />
		<div v-if="!loaded" class="loader">
			<LoadingSquare />
		</div>
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
			index: 1,
			timeout: null,
			src1: '',
			src2: '',
			src3: '',
			counter: 0,
		}
	},
	computed: {
		images() {
			return Array.from(this.$refs.gallery.querySelectorAll('img'))
		},
	},
	mounted() {
		this.getUrls()
	},
	destroyed() {
		clearTimeout(this.timeout)
	},
	methods: {
		getUrls() {
			// aby load event fungoval bezchybne musim tam dat src az po mountnuti
			this.src1 = this.gallery[0]
			this.src2 = this.gallery[1]
			this.src3 = this.gallery[2]
		},
		afterLoad() {
			this.counter++
			if (this.counter === this.images.length) {
				this.loaded = true
				this.changingGalery()
			}
		},

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
	transform: translateZ(0);

	.loader {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #4b12be8e;
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
		transform: translateZ(0);
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
