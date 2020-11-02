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
				<div class="planet"></div>
				<CharAnimation />
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
			this.$refs.main.style.transform = 'translateX(-100%)'
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
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	background: var(--main-bg-color);
	overflow: hidden;
}
main {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	transition: all 1s ease;
}
section {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 1;
}

.planet {
	position: absolute;
	width: 300px;
	height: 300px;
	background: url('~assets/images/planet.webp') no-repeat;
	background-size: cover;
	background-position: bottom;
	bottom: -75px;
	right: 0;
}

.about-section {
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
}
.skill-section {
	left: 100%;
	background: #0e031b;
}
</style>
