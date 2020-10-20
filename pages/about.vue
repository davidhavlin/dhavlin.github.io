<template>
	<div class="page-about-container">
		<main ref="main">
			<section class="about-section">
				<AboutMe />
				<AboutInfoSign />
				<AboutRightArrow @click.native="handleClickNext" />
				<CharAnimation />
			</section>
			<section class="skill-section">
				<AboutLeftArrow @click.native="handleClickPrev" />
			</section>
		</main>
	</div>
</template>

<script>
export default {
	mounted() {
		if (this.$route.params.skillsPage) {
			this.handleClickNext()
		}
	},
	methods: {
		handleClickNext() {
			this.$refs.main.style.transform = 'translateX(-50%)'
		},
		handleClickPrev() {
			this.$refs.main.style.transform = 'translateX(0)'
		},
	},
}
</script>

<style lang="scss" scoped>
.page-about-container {
	width: 200vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	background: #100317;
}
main {
	width: 100%;
	height: 100%;
	display: flex;
	transition: all 1s ease;
}
section {
	position: relative;
	width: 100%;
	height: 100%;
}

// .about-section {

// }
// .skill-section {
// 	// background: yellow;
// }
</style>
