<template>
	<div>
		<section
			ref="boxButton"
			class="social-box"
			@click="showIcons()"
			@mouseenter="openBox = true"
			@mouseleave="openBox = false"
		>
			<div v-if="notification" class="notification">
				<span>5</span>
			</div>
			<!-- ZATVORENA KRABICA -->
			<div v-show="!openBox && !socials" class="box">
				<ClosedBox />
			</div>
			<!-- OTVORENA PLNA KRABICA -->
			<div v-show="openBox && !socials" class="open-box">
				<OpenBoxFull />
			</div>
			<!-- OTVORENA PRAZDNA KRABICA -->
			<div v-show="socials" class="open-empty-box">
				<OpenBoxEmpty />
			</div>
			<div class="box-title">Socials</div>
		</section>

		<section
			v-closable="{
				exclude: ['boxButton'],
				handler: 'onClose',
			}"
			class="social-icons"
		>
			<div class="icon facebook" :class="{ facebookIn: socials }">
				<a href="#">
					<Facebook />
				</a>
			</div>
			<div class="icon twitter" :class="{ twitterIn: socials }">
				<a href="#">
					<Twitter />
				</a>
			</div>
			<div class="icon youtube" :class="{ youtubeIn: socials }">
				<a href="#">
					<Youtube />
				</a>
			</div>
			<div class="icon github" :class="{ githubIn: socials }">
				<a href="https://github.com/davidhavlin" target="_blank">
					<Github />
				</a>
			</div>
			<div class="icon instagram" :class="{ instagramIn: socials }">
				<a href="#">
					<Instagram />
				</a>
			</div>
		</section>
		<div class="circle" :class="{ bigCircle: socials }"></div>
	</div>
</template>

<script>
import ClosedBox from '~/assets/images/svg/ClosedBox.svg'
import OpenBoxFull from '~/assets/images/svg/OpenBoxFull.svg'
import OpenBoxEmpty from '~/assets/images/svg/OpenBoxEmpty.svg'
import Facebook from '~/assets/images/svg/Facebook.svg'
import Youtube from '~/assets/images/svg/Youtube.svg'
import Twitter from '~/assets/images/svg/Twitter.svg'
import Github from '~/assets/images/svg/Github.svg'
import Instagram from '~/assets/images/svg/Instagram.svg'

export default {
	components: {
		ClosedBox,
		OpenBoxFull,
		OpenBoxEmpty,
		Facebook,
		Youtube,
		Twitter,
		Github,
		Instagram,
	},
	data() {
		return {
			socials: false,
			openBox: false,
			notification: true,
		}
	},
	methods: {
		showIcons() {
			this.socials = !this.socials
			this.notification = false
		},
		onClose() {
			this.socials = false
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_colors';

// IKONKA KRABICE A VSETKO OKOLO NEJ
.social-box {
	position: relative;
	cursor: pointer;
	z-index: 1;

	.notification {
		display: flex;
		justify-content: center;
		align-items: center;
		// font-family: 'IBM Plex Mono', monospace;
		font-family: 'Press Start 2P', cursive;
		font-size: 0.6em;
		position: absolute;
		top: -5px;
		left: 34px;
		width: 0.93rem;
		height: 0.93rem;
		background: #ff0023;
		border: 2px solid #100317;
		border-radius: 5px;
		box-sizing: content-box;
		z-index: 1;
		pointer-events: none;
	}

	.box,
	.open-box,
	.open-empty-box {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			width: 36px;
			height: 36px;
		}
	}

	.box-title {
		font-family: 'Press Start 2P', cursive;
		font-size: 0.45em;
		color: $text-color;
		text-transform: uppercase;
		padding: 0.2rem;
		padding-bottom: 0;
	}
}

// KRUH POD KRABICOU
.circle {
	width: 10px;
	height: 10px;
	position: absolute;
	background: #0b000f;
	transform: scale(1);
	border-radius: 50%;
	top: 13px;
	left: 21px;
	z-index: -1;
	transition: transform 0.5s cubic-bezier(0.68, -0.75, 0.265, 1.75);
}
.bigCircle {
	transform: scale(20.5);
}
// VYSKAKUJUCE SOCIALS IKONKY
.social-icons {
	z-index: 0;
	.icon {
		position: absolute;
		transform: translate(11px, -50px) scale(0.5);
		opacity: 0;
		transition: all 0.5s cubic-bezier(0.68, -0.75, 0.265, 1.75);

		svg {
			width: 30px;
			height: 30px;
		}
	}

	.facebookIn,
	.twitterIn,
	.youtubeIn,
	.githubIn,
	.instagramIn {
		opacity: 1;

		&:hover svg {
			animation: jello;
			animation-duration: 1s;
		}
	}

	.facebookIn {
		transform: translate(11px, -144px) scale(1);
	}
	.twitterIn {
		transform: translate(52px, -136px) scale(1);
		transition-delay: 100ms;
	}
	.youtubeIn {
		transform: translate(89px, -113px) scale(1);
		transition-delay: 200ms;
	}
	.githubIn {
		transform: translate(107px, -78px) scale(1);
		transition-delay: 300ms;
	}
	.instagramIn {
		transform: translate(114px, -41px) scale(1);
		transition-delay: 400ms;
	}
}

@media (max-width: 800px) {
	.social-box {
		.box,
		.open-box,
		.open-empty-box {
			background: #100317;
			padding: 0.4rem;
			border-radius: 50%;
			border: 4px solid #230334;
		}
		.box-title {
			display: none;
		}
		.notification {
			top: 2px;
			left: 30px;
		}
	}
	.circle {
		width: 100vw;
		height: 87px;
		position: absolute;
		transform: scaleX(0.9);
		border-radius: 0;
		background: #12021c;
		top: -19px;
		left: 0;
		opacity: 0;
		transition: transform 0.5s cubic-bezier(0.68, -0.75, 0.265, 1.75);
		transform-origin: top right;
	}
	.bigCircle {
		opacity: 1;
		transform: scaleX(2);
	}

	.social-icons {
		.facebookIn {
			transform: translate(-66vw, -50px) scale(1);
		}
		.twitterIn {
			transform: translate(-56vw, -50px) scale(1);
			transition-delay: 100ms;
		}
		.youtubeIn {
			transform: translate(-46vw, -50px) scale(1);
			transition-delay: 200ms;
		}
		.githubIn {
			transform: translate(-36vw, -50px) scale(1);
			transition-delay: 300ms;
		}
		.instagramIn {
			transform: translate(-26vw, -50px) scale(1);
			transition-delay: 400ms;
		}
	}
}
@media (max-width: 400px) {
	.social-icons {
		.facebookIn {
			transform: translate(-73vw, -105px) scale(1.2);
		}
		.twitterIn {
			transform: translate(-58vw, -105px) scale(1.2);
			transition-delay: 100ms;
		}
		.youtubeIn {
			transform: translate(-43vw, -105px) scale(1.2);
			transition-delay: 200ms;
		}
		.githubIn {
			transform: translate(-28vw, -105px) scale(1.2);
			transition-delay: 300ms;
		}
		.instagramIn {
			transform: translate(-13vw, -105px) scale(1.2);
			transition-delay: 400ms;
		}
	}
}
</style>
