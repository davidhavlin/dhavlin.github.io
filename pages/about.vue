<template>
	<div class="page-about-container">
		<AboutMe :nextPage="nextPage" />
		<main ref="main">
			<section class="about-section">
				<AboutRightArrow
					v-show="!nextPage"
					:infoSign="infoSign"
					@click.native="handleClickNext"
				/>
				<div class="fog"></div>
				<div class="planet" :class="{ planetMove: nextPage }">
					<AboutPlanetSign />
				</div>
				<CharAnimation />
			</section>
			<section class="skill-section">
				<AboutLeftArrow
					v-show="nextPage"
					@click.native="handleClickPrev"
				/>
				<AboutSolarSystem
					:isEnoughStars="isEnoughStars"
					:nextPage="nextPage"
				/>
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
	props: {
		isEnoughStars: {
			type: Boolean,
			default: false,
		},
	},
	mounted() {
		if (this.$route.params.skillsPage) {
			this.handleClickNext()
		}
	},
	watch: {
		isEnoughStars(newValue, oldValue) {
			console.log(newValue, oldValue)
		},
	},
	methods: {
		handleClickNext(e) {
			if (e.target.className === 'exit') {
				this.infoSign = false
				return
			}
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
.fog {
	position: absolute;
	width: 3679px;
	height: 433px;
	z-index: 1;
	bottom: 0;
	pointer-events: none;
	background: url('~assets/images/fog.webp') no-repeat;
	background-position: bottom;
	animation: fog 65s infinite linear;
}
@keyframes fog {
	0%,
	100% {
		transform: translateX(0px);
	}
	50% {
		transform: translateX(-700px);
	}
}
.planet {
	position: absolute;
	width: 300px;
	height: 300px;
	background: url('~assets/images/planet3.webp') no-repeat;
	background-size: cover;
	background-position: bottom;
	bottom: -75px;
	right: 30%;
	transition: transform 1s ease;
}
.planetMove {
	transform: translateX(340px);
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
