<template>
	<div class="contact-form-container">
		<h1 ref="title" class="contact-title"></h1>
		<form action="https://formspree.io/xknqlebd" method="POST">
			<input type="text" name="name" placeholder="Name" />
			<input type="email" name="_replyto" placeholder="Email" />
			<textarea name="message" placeholder="Message"></textarea>
			<button type="submit" @click.prevent="writingEffect()">Send</button>
		</form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Contact me',
			letter: '',
			index: 0,
		}
	},
	mounted() {
		this.writingEffect()
	},

	methods: {
		writingEffect() {
			if (this.index > this.title.length) {
				this.index = 0
				return
			}
			this.letter = this.title.slice(0, this.index++)
			console.log(this.index)
			this.$refs.title.textContent = this.letter

			setTimeout(this.writingEffect, 250)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_colors';

.contact-form-container {
	font-family: 'Press Start 2P', cursive;
	margin-right: -5rem;
	z-index: 10;
}

.contact-title {
	color: $main-color;
	font-weight: normal;
	font-size: 2.5em;
	margin-bottom: 1rem;
}
.contact-title::after {
	content: '';
	position: absolute;
	width: 3px;
	height: 6%;
	border-right: 4px solid $main-color;
	animation: type 0.5s infinite ease;
}
@keyframes type {
	from {
		opacity: 0;
	}
	to {
		opacity: 100%;
	}
}

form {
	padding: 0.7rem;
	width: 420px;
	background: $second-color;

	input,
	textarea {
		color: #fff;
		background: #11001a;
		display: block;
		width: 100%;
		border: none;
		padding: 0.8rem 0.5rem;
		margin-bottom: 0.7rem;
	}

	::placeholder {
		overflow: hidden;
		font-family: 'Press Start 2P', cursive;
		font-weight: normal;
		font-size: 0.7em;
		color: #fff;
		color: lighten(#11001a, 20);
		animation: typing 3.5s steps(40, end);
	}

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 286px;
		}
	}

	textarea {
		max-width: 100%;
		min-width: 50%;
		min-height: 160px;
		max-height: 350px;
	}
}

/* The typing effect */
</style>
