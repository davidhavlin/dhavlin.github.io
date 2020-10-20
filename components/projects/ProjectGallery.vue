<template>
	<div
		class="gallery"
		:style="{
			background: `url()`,
		}"
	></div>
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
	},
	mounted() {
		console.log(this.gallery)
	},
}
</script>

<style lang="scss" scoped>
.gallery {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: -1;
	display: none;
}
.show .gallery {
	display: block;
}
</style>
