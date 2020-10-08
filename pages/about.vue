<template>
	<div class="page-about-container">
		<main ref="main">
			<section class="about-section">
				<button
					style="transform: translateX(300px);"
					@click="handleClickNext()"
				>
					CLICK
				</button>
				<CharAnimation />
			</section>
			<section class="skill-section">
				<button
					style="transform: translateX(300px);"
					@click="handleClickPrev()"
				>
					CLICK
				</button>
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
	width: 100%;
	height: 100%;
}

.about-section {
	// background: red;
}
.skill-section {
	// background: yellow;
}
</style>
