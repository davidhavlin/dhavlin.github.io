<template>
	<div class="floating">
		<TheSkill
			v-for="(skill, index) in skills"
			:key="index"
			:skill="skill"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			skills: [
				'Vue.js',
				'Javascript',
				'React',
				'HTML',
				'CSS/Sass',
				'Nuxt.js',
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.floating {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
