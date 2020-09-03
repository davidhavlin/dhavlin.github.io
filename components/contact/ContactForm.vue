<template>
	<div class="contact-form-container">
		<h1 ref="title" class="contact-title"></h1>
		<form action="https://formspree.io/xknqlebd" method="POST">
			<input type="text" name="name" placeholder="Name" />
			<input type="email" name="_replyto" placeholder="Email" />
			<textarea name="message" placeholder="Message"></textarea>
			<button
				type="submit"
				@click.prevent="writingEffect(title, $refs.title)"
			>
				<div class="btn-text">Send</div>
			</button>
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
		this.writingEffect(this.title, this.$refs.title)
	},

	methods: {
		writingEffect(typedString, element) {
			if (this.index > typedString.length) {
				this.index = 0
				return
			}
			this.letter = typedString.slice(0, this.index++)
			element.textContent = this.letter

			setTimeout(() => {
				this.writingEffect(typedString, element)
			}, 200)
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
	height: 40px;
}
.contact-title::after {
	content: '';
	position: absolute;
	width: 3px;
	height: 1.1em;
	border-right: 4px solid $main-color;
	opacity: 0;
	animation: type 1s steps(2, jump-none) infinite;
}
@keyframes type {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 100%;
	}
}

form {
	position: relative;
	padding: 0.7rem;
	width: 420px;
	background: $second-color;

	input,
	textarea {
		color: $main-color;
		background: #11001a;
		display: block;
		width: 100%;
		border: none;
		padding: 0.8rem 0.5rem;
		margin-bottom: 0.7rem;
	}

	button {
		position: absolute;
		bottom: -3rem;
		font-family: inherit;
		font-size: 0.7em;
		text-transform: uppercase;
		background: #1babab;
		color: #fff;
		border: 2px solid #0fd7d7;
		padding: 0.6rem 1rem;
		border-radius: 0.2rem;
		cursor: pointer;
	}
	button::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50%;
		background: #0f8a8a;
		transition: all 0.3s ease;
	}
	button::after {
		content: 'SEND';
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	button:hover {
		border: 2px solid #fff;
		transform: translateY(2px);
	}
	button:hover:before {
		height: 20%;
	}

	button:focus {
		outline: none;
		border: 2px solid #fff;
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
		margin-bottom: 0;
	}
}
</style>
