<template>
	<div class="contact-container">
		<div class="contact">
			<div class="left-section">
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
			this.$refs.parent.classList.add('animate')
		}, 2000)
	},
}
</script>

<style lang="scss" scoped>
.contact-container {
	background: #100317;
}
.contact {
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow: hidden;
}

.left-section {
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.right-section {
	visibility: hidden;
	width: 50%;
	height: 100%;
}

.animate {
	visibility: visible;
	animation: slideInRight;
	animation-duration: 2s;
}

@media (max-width: 520px) {
	.contact {
		flex-direction: column;
		height: 200vh;
	}

	.left-section {
		width: 100%;
		// height: 100%;
		// display: flex;
		justify-content: center;
		padding: 3rem;
		// align-items: center;
	}
	.right-section {
		width: 100%;
		overflow: hidden;
		// height: 100%;
	}
}
@media (max-width: 520px) {
	.left-section {
		padding: 1rem;
	}
}
</style>
