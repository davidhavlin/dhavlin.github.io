<template>
	<div class="about-content" :class="{ skillContent: nextPage }">
		<div>
			<h2 v-if="!nextPage" class="about-title">About me</h2>
			<h2 v-else class="about-title">Skills</h2>
			<div v-if="!nextPage" class="about-text">
				Vyučeny grafik, ale vždy ma to viac ťahalo k programovaniu a že
				som sa v tom našiel :) Osoba s citom pre detail, fanúšik
				prírody, hier, serialov a kinematografie.
			</div>
			<div v-else class="about-text">
				Zameriavam sa hlavne na front end development. <br />
				HTML, CSS/Sass, JavaScript(ES6), Vue.js, Nuxt.js, React, Git
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		nextPage: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="scss" scoped>
$border-color-about: #5903e2;
$border-color-skill: #7206d5;
.about-content {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
	pointer-events: none;
}
.skillContent {
	.about-title {
		color: #df1041;
	}
	.about-text {
		background: #4e0277;
		box-shadow: $border-color-skill 0px 0.4em,
			$border-color-skill 0px -0.4em, $border-color-skill 0.4em 0px,
			$border-color-skill -0.4em 0px;
	}
}

.about-title {
	text-align: left;
	font-family: 'Press Start 2P', cursive;
	font-style: normal;
	font-weight: normal;
	color: #34b1f8;
	margin-bottom: 1rem;
	// font-size: ;
}
.about-text {
	font-family: 'IBM Plex Mono', monospace;
	font-style: normal;
	font-weight: normal;
	background: #2f0277;
	width: 25rem;
	padding: 1rem;
	box-shadow: $border-color-about 0px 0.4em, $border-color-about 0px -0.4em,
		$border-color-about 0.4em 0px, $border-color-about -0.4em 0px;
}
</style>
