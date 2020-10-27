<template>
	<div class="page-about-container">
		<AboutMe :nextPage="nextPage" />
		<transition name="aboutTransition">
			<AboutTransition v-if="animating" />
		</transition>
		<main ref="main">
			<section class="about-section">
				<!-- <AboutMe /> -->
				<AboutInfoSign />
				<AboutRightArrow @click.native="handleClickNext" />
				<!-- <CharAnimation /> -->
			</section>
			<section class="skill-section">
				<AboutLeftArrow @click.native="handleClickPrev" />
				<!-- <AboutFloatingSkills /> -->
				<AboutSolarSystem />
			</section>
		</main>
	</div>
</template>

<script>
export default {
	data() {
		return {
			animating: false,
			nextPage: false,
		}
	},
	mounted() {
		if (this.$route.params.skillsPage) {
			this.handleClickNext()
		}

		this.$refs.main.addEventListener('transitionstart', () => {
			console.log('zaciatok')
			this.animating = true
		})
		this.$refs.main.addEventListener('transitionend', () => {
			console.log('koniec')
			this.animating = false
		})
	},
	methods: {
		handleClickNext() {
			this.$refs.main.style.transform = 'translateX(-50%)'
			this.nextPage = true
		},
		handleClickPrev() {
			this.$refs.main.style.transform = 'translateX(0)'
			this.nextPage = false
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
