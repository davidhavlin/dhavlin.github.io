<template>
	<div
		class="project"
		:style="{
			backgroundColor: project.colors[0],
			backgroundImage: `url(${project.images[0]})`,
		}"
	>
		<h1 class="title">{{ project.title }}</h1>
		<div
			class="gradient"
			:style="{
				background: `linear-gradient(0deg, rgba(14,6,28,0) 0%, ${project.colors[1]} 100%)`,
			}"
		></div>

		<div
			class="logo"
			:style="{ backgroundImage: `url(${project.logo})` }"
		></div>
		<div class="project-info">
			<div class="url">
				{{ project.url }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
		},
	},
	computed: {
		projectStyle() {
			return {
				backgroundColor: this.data,
				backgroundImage: this.project.images[0],
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.selected.project {
	color: red;
}
.show.project {
	width: 200px;
}

.project {
	position: relative;
	color: #fff;
	width: 120px;
	height: 500px;
	background-position: center;
	background-size: cover;
	z-index: 10;
	cursor: pointer;
	transition: transform 1s ease;

	.title {
		font-family: 'Press Start 2P', cursive;
		font-style: normal;
		font-weight: normal;
		font-size: 1.12em;
		line-height: 128.5%;
		letter-spacing: 0.015em;
		text-transform: uppercase;
		margin-top: 2rem;
		transform: translateX(20px);
		transition: transform 0.5s ease;
	}

	&:hover {
		outline: 3px solid #34b1f8;

		.title {
			transform: translateX(40px);
		}
	}
}
.gradient {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: yellow;
	z-index: -1;
}

.logo {
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background: #100317;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 50%);
	background-position: center;
	background-repeat: no-repeat;
	transition: all 0.5s ease;
}

.selected .logo {
	transform: translate(-50%, 60%);
}

.project-info {
	position: absolute;
	width: 100%;
	height: 100%;
}
.url {
	display: none;
}

.show .url {
	display: block;
}
</style>
