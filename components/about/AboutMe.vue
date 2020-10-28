<template>
	<div class="box-container" :class="{ 'skill-page': nextPage }">
		<div ref="box" class="box-content">
			<h2 v-show="!nextPage" class="about-title">About me</h2>
			<h2 v-show="nextPage" class="skills-title">Skills</h2>
			<div class="box-text">
				<div class="box-text-skeleton">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<p v-show="!nextPage">
					Vyučeny grafik, ale vždy ma to viac ťahalo k programovaniu a
					že som sa v tom našiel :) Osoba s citom pre detail, fanúšik
					prírody, hier, serialov a kinematografie.
				</p>
				<p v-show="nextPage">
					Zameriavam sa hlavne na front end development. <br />
					HTML, CSS/Sass, JavaScript(ES6), Vue.js, Nuxt.js, React,
					Git(GitHub)
				</p>
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
	mounted() {
		setTimeout(() => {
			this.$refs.box.classList.add('box-in')
		}, 1000)
		this.$refs.box.addEventListener('animationend', this.boxFinished, {
			once: true,
		})
	},
	methods: {
		boxFinished(e) {
			setTimeout(() => {
				this.$refs.box.classList.add('box-finished')
			}, 2000)
		},
	},
}
</script>

<style lang="scss" scoped>
$border-color-about: #5903e2;
$border-color-skill: #7206d5;
.box-container {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding-left: 20vw;
	padding-top: 7rem;
	z-index: 1;
	pointer-events: none;
	overflow: hidden;
}
.box-content {
	opacity: 0;
}
.box-in {
	opacity: 1;
	animation: backInDown forwards;
	animation-duration: 1s;
}

.about-title,
.skills-title {
	text-align: left;
	font-family: 'Press Start 2P', cursive;
	font-style: normal;
	font-weight: normal;
	color: #34b1f8;
	margin-bottom: 1rem;
	transition: all 2s ease;

	animation: slideInUp forwards;
	animation-duration: 0.5s;
}
.skills-title {
	color: #df1041;
}

.box-finished {
	.box-text p {
		opacity: 1;
		animation: fadeIn forwards;
		animation-duration: 0.5s;
	}
	.box-text-skeleton {
		animation: fadeOut forwards;
		animation-duration: 0.5s;
	}
}

.box-text {
	position: relative;
	font-family: 'IBM Plex Mono', monospace;
	font-style: normal;
	font-weight: normal;
	background: #2f0277;
	width: 25rem;
	padding: 1.5rem;
	box-shadow: $border-color-about 0px 0.4em, $border-color-about 0px -0.4em,
		$border-color-about 0.4em 0px, $border-color-about -0.4em 0px;
	transition: background 2s ease;
	p {
		opacity: 0;
	}
}
.skill-page {
	.box-text {
		background: #4e0277;
		box-shadow: $border-color-skill 0px 0.4em,
			$border-color-skill 0px -0.4em, $border-color-skill 0.4em 0px,
			$border-color-skill -0.4em 0px;
	}
	.box-text-skeleton {
		div {
			background: $border-color-skill;
		}
	}
}

.box-text-skeleton {
	position: absolute;
	width: calc(100% - 3rem);
	z-index: 1;
	div {
		height: 20px;
		background: $border-color-about;
		margin-bottom: 0.4rem;
		animation: pulse 1s infinite ease;
	}

	@keyframes pulse {
		50% {
			background: darken($border-color-about, 10);
		}
	}
	div:nth-child(2) {
		width: 100%;
	}
	div:nth-child(3) {
		width: 330px;
	}
	div:nth-child(4) {
		width: 290px;
	}
}

@media (max-width: 660px) {
	.box-container {
		align-items: center;
		padding-left: 0;
		padding-top: 4rem;
	}
}
@media (max-width: 430px) {
	.box-content {
		padding: 1rem;
	}
	.box-text {
		width: 100%;
		padding: 1rem;
	}
}
</style>
