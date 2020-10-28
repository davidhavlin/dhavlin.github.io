<template>
	<div class="page-about-container">
		<AboutMe :nextPage="nextPage" />
		<main ref="main">
			<section class="about-section">
				<!-- <AboutMe /> -->

				<AboutRightArrow
					v-show="!nextPage"
					:infoSign="infoSign"
					@click.native="handleClickNext"
				/>
				<!-- <CharAnimation /> -->
			</section>
			<section class="skill-section">
				<AboutLeftArrow
					v-show="nextPage"
					@click.native="handleClickPrev"
				/>
				<!-- <AboutFloatingSkills /> -->
				<AboutSolarSystem :nextPage="nextPage" />
			</section>
		</main>
	</div>
</template>

<script>
export default {
	data() {
		return {
			nextPage: false,
			infoSign: true,
		}
	},
	mounted() {
		if (this.$route.params.skillsPage) {
			this.handleClickNext()
		}
	},
	methods: {
		handleClickNext() {
			this.$refs.main.style.transform = 'translateX(-50%)'
			this.nextPage = true
			this.infoSign = false
			this.$nuxt.$emit('clickedNext', this.nextPage)
		},
		handleClickPrev() {
			this.$refs.main.style.transform = 'translateX(0)'
			this.nextPage = false
			this.$nuxt.$emit('clickedPrev', this.nextPage)
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
	z-index: 1;
}

.about-section {
	display: flex;
	justify-content: center;
	align-items: center;
}
.skill-section {
	background: #0d0213;
}
</style>
