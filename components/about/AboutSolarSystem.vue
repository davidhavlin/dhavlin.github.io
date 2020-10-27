<template>
	<div class="solar-system">
		<div class="sun">
			<div class="icon js">
				<img
					:src="require('@/assets/images/software/js.png')"
					alt="javascript"
				/>
			</div>
			<div class="planet html">
				<div class="icon">
					<img
						:src="require('@/assets/images/software/html5.png')"
						alt="html"
					/>
				</div>
			</div>
			<div class="planet css">
				<div class="icon icon-css">
					<img
						:src="require('@/assets/images/software/css.png')"
						alt="css"
					/>

					<div class="sub-planet">
						<div class="sub-icon">
							<img
								:src="
									require('@/assets/images/software/sass.png')
								"
								alt="sass"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="planet react">
				<div class="icon">
					<img
						:src="require('@/assets/images/software/react.png')"
						alt="react"
					/>
				</div>
			</div>
			<div class="planet vue">
				<div class="icon icon-vue">
					<img
						:src="require('@/assets/images/software/vue.png')"
						alt="vue"
					/>
					<div class="sub-planet">
						<div class="sub-icon">
							<img
								:src="
									require('@/assets/images/software/nuxt.png')
								"
								alt="nuxt"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	// computed: {
	// 	javascript() {
	// 		return require('@/assets/images/software/js.png')
	// 	},
	// },
}
</script>

<style lang="scss" scoped>
.solar-system {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 80%;
	height: 80%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	// background: yellow;
}
.sun {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 500px;
	height: 500px;
	// background: #000;
	border-radius: 50%;
	// border: 1px solid #7206d51a;
}
.icon {
	position: absolute;
	top: -17px;
	left: calc(50% - 17px);
	// img {

	// }
}
.js {
	position: relative;
	top: 0;
	left: 0;
	background: #f7df1e;
	padding: 0.4rem;
	border-radius: 50%;

	img {
		animation: rotate 20s infinite linear;
		width: 35px;
	}
}

.planet {
	position: absolute;
	width: 170px;
	height: 170px;
	border-radius: 50%;
	border: 1px solid #7206d51a;
	animation: rotate 20s infinite linear;
}

.icon {
	img {
		width: 30px;
		height: auto;
		animation: rotate 25s infinite linear;
	}
}
.html {
	animation-duration: 27s;
	// img {
	// 	animation: rotate 35s infinite linear;
	// }
}

.css {
	width: 320px;
	height: 320px;
	animation-duration: 15s;
}

.react {
	width: 470px;
	height: 470px;
	animation-duration: 17s;
}
.vue {
	width: 620px;
	height: 620px;
	animation-duration: 25s;
}
.icon-vue,
.icon-css {
	left: calc(50% - 50px);
	top: -50px;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	// background: yellow;
	border: 1px solid #7206d51a;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: rotate 20s infinite linear;
}
.sub-planet,
.sub-planet-second {
	img {
		width: 22px;
		animation: rotate 20s infinite linear;
	}

	position: absolute;
	top: -11px;
	left: calc(50% - 11px);
}
.sub-planet-second {
	top: auto;
	bottom: -11px;
}
@keyframes rotate {
	to {
		transform: rotate(360deg);
	}
}
</style>
