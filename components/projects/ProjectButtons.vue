<template>
	<div>
		<MyButton
			v-if="!showCase"
			class="show-btn"
			main-color="var(--main-bg-color)"
			second-color="#0e031b"
			border-color="#0e031b"
			text-color="#00f3ff"
			@click.native="$emit('clickshow')"
			>Show me</MyButton
		>
		<MyButton
			v-if="showCase"
			class="close-btn"
			main-color="#100317"
			second-color="#0b000f"
			border-color="#0b000f"
			text-color="#fff"
			@click.native="$emit('clickclose')"
			>Close me</MyButton
		>
	</div>
</template>

<script>
export default {
	props: {
		showCase: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

<style lang="scss" scoped>
.show-btn,
.close-btn {
	opacity: 0;
	top: 15px;
}
.close-btn,
.showMeButton .show-btn {
	opacity: 1;
	animation: fadeInUp;
	animation-duration: 1s;
}
</style>
