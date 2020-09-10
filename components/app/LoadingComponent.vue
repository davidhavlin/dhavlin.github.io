<template>
	<div class="loading">
		<h1>Loading</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			lines: [
				'$: > Booting systems...',
				'$: > Total memory found: 256kb',
				'$: > Scanning for bootable media    ■■■■■■■■■■■ 100%',
				'$: > No media found. Booting from network address 3E:40:9C:75',
				'$: > Loading BIOS 2.3               ■■■■■■■■■■■ 100%',
				'$: > Reticulating splines           ■■■■■■■■■■■ 100%',
				'$: > Booting console                ■■■■■■■■■■■ 100%',
				'$:',
				'$: > Welcome to My website version 1.3a',
				'$:',
				'$: > Hello friend. I am David..',
				'$: I can has matrix?',
				'$: > buffering matrix... 20%',
				'$: > buffering matrix... 66%',
				'$: > buffering matrix... 100%',
				'$: > So, would you like a red or blue pill?',
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #12021c;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
}

h1 {
	color: #fff;
}
</style>
