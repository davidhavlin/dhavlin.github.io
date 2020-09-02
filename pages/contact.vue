<template>
	<div class="contact">
		<section class="left-section">
			<ContactForm class="contact-form" />
		</section>
		<section class="right-section"></section>
	</div>
</template>

<script>
export default {}
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
		background-image: url('~assets/images/city.jpg');
		background-size: cover;
	}
}
</style>
