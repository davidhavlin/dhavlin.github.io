<template>
	<div class="theContact">
		<transition name="loading-component">
			<LoadingComponent v-if="loading" />
		</transition>

		<div class="contact">
			<div v-show="!loading" class="left-section">
				<ContactForm class="contact-form" />
			</div>
			<div ref="parent" class="right-section"></div>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
// import hoverEffect from 'hover-effect'
export default {
	data() {
		return {
			loading: true,
		}
	},
	methods: {
		effectHover() {
			const effect = new hoverEffect({
				parent: this.$refs.parent,
				intensity: 0.3,
				image1: require('@/assets/images/1.jpg'),
				image2: require('@/assets/images/2.jpg'),
				displacementImage: require('@/assets/images/dist2.jpg'),
			})
		},
	},
	mounted() {
		this.effectHover()
		setTimeout(() => {
			this.loading = false
		}, 2000)
	},
}
</script>

<style lang="scss" scoped>
.contact {
	width: 100vw;
	height: 100vh;
	display: flex;
	// background: yellow;

	.left-section {
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.right-section {
		width: 50%;
		height: 100%;
	}
}
</style>
