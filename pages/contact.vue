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
export default {
	head() {
		return {
			title: 'Contact me',
		}
	},
	methods: {
		effectHover() {
			const effect = new hoverEffect({
				parent: this.$refs.parent,
				intensity: 0.3,
				image1: require('@/assets/images/bg01.webp'),
				image2: require('@/assets/images/bg02.webp'),
				displacementImage: require('@/assets/images/dist2.jpg'),
				imagesRatio: 640 / 360,
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
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
}

.animate {
	visibility: visible;
	animation: slideInRight;
	animation-duration: 2s;
}

@media (max-width: 520px) {
	.contact {
		flex-direction: column;
		height: auto;
	}

	.left-section {
		width: 100%;
		height: auto;
		justify-content: center;
		align-items: flex-start;
		padding: 6rem 1.5rem 7rem 1.5rem;
	}
	.right-section {
		width: 100%;
		overflow: hidden;
		height: 100vh;
	}
}
@media (max-width: 400px) {
	.left-section {
		padding: 6rem 1rem 7rem 1rem;
	}
}
</style>
