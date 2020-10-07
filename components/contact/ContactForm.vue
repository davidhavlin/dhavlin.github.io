<template>
	<div class="contact-form-container">
		<h1 ref="title" class="contact-title"></h1>
		<form ref="form" class="formIn" action="/send" method="POST">
			<div class="field">
				<input
					v-model="formName"
					ref="nameInput"
					class="nameInput"
					type="text"
					name="name"
					placeholder="Name"
				/>
				<div class="field-border"></div>
			</div>
			<div class="field">
				<input
					v-model="formEmail"
					class="emailInput"
					:class="{ highlight: emailError && !formEmail }"
					type="email"
					name="_replyto"
					placeholder="Email"
					required
				/>
				<div class="field-border"></div>
			</div>
			<div class="field">
				<textarea
					v-model="formText"
					ref="textarea"
					class="textareaInput"
					:class="{ highlight: textError && !formText }"
					name="message"
					placeholder="Message"
					required
				></textarea>
				<div class="field-border"></div>
			</div>
			<button
				ref="sendButton"
				type="submit"
				class="btn-send"
				@click.prevent="submitEmail"
			>
				<div class="btn-text">
					Send
				</div>
				<div class="btn-half-bg"></div>
			</button>
		</form>
		<transition name="succ">
			<div class="success" v-if="success">
				Email uspesne odoslany
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Contact me',
			letter: '',
			index: 0,
			formName: '',
			formEmail: '',
			formText: '',
			success: false,
			emailError: false,
			textError: false,
		}
	},
	mounted() {
		this.$refs.textarea.addEventListener('animationend', () => {
			this.$refs.sendButton.classList.add('sendButton')
			this.writingEffect(this.title, this.$refs.title)
		})
	},

	methods: {
		submitEmail() {
			if (!this.validateForm()) return
			this.success = true
			this.writingEffect('Thank you', this.$refs.title)
			setTimeout(() => {
				this.writingEffect(this.title, this.$refs.title)
				this.success = false
			}, 4000)
			// const data = {
			// 	name: this.formName,
			// 	email: this.formEmail,
			// 	subject: 'skuska',
			// 	text: this.formText,
			// }

			// fetch('/api/contact', {
			// 	method: 'POST',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify(data),
			// })
			this.resetForm()
		},

		validateForm() {
			if (!this.formEmail) {
				this.emailError = true
			}
			if (!this.formText) {
				this.textError = true
			}
			if (this.formEmail && this.formText) {
				return true
			} else {
				return false
			}
		},

		resetForm() {
			this.formName = ''
			this.formEmail = ''
			this.formText = ''
			this.emailError = false
			this.textError = false
			this.$refs.nameInput.focus()
		},

		writingEffect(typedString, element) {
			if (this.index > typedString.length) {
				this.index = 0
				return
			}
			this.letter = typedString.slice(0, this.index++)
			element.textContent = this.letter

			setTimeout(() => {
				this.writingEffect(typedString, element)
			}, 150)
		},
	},
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/_colors';
.highlight {
	outline: 12px solid #ff0074;
}

.contact-form-container {
	font-family: 'Press Start 2P', cursive;
	margin-right: -5rem;
	z-index: 10;
}

.contact-title {
	color: #e9d41a;
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
	animation: cursorAtEnd 1s steps(2, jump-none) infinite;
}
@keyframes cursorAtEnd {
	to {
		opacity: 100%;
	}
}

form {
	position: relative;
	padding: 0.7rem;
	width: 420px;
	background: #7e1cef;

	.field {
		position: relative;
		color: #fff;
		background: #5b15ac;

		.field-border {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0%;
			height: 3px;
			background: #0fd7d7;
			transition: width 0.5s ease;
		}
	}

	input,
	textarea {
		position: relative;
		color: $main-color;
		background: #11001a;
		display: block;
		width: 100%;
		border: none;
		padding: 0.8rem 0.5rem;
		margin-bottom: 0.7rem;

		&:focus {
			outline: 2px solid;
		}

		&:focus + .field-border {
			width: 100%;
		}
	}

	.btn-send {
		opacity: 0;
		position: absolute;
		bottom: -3rem;
		font-family: inherit;
		font-size: 0.7em;
		text-transform: uppercase;
		background: #e9d41a;
		color: #11001b;
		border: 2px solid #fff200;
		padding: 0.5rem 0.6rem;
		border-radius: 0.2rem;
		cursor: pointer;
		z-index: 10;

		.btn-text {
			word-spacing: -4px;
			z-index: 1;
		}

		.btn-half-bg {
			background: #d9aa01;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 50%;
			z-index: -1;
			transition: height 0.5s ease;
		}

		&:hover {
			border: 2px solid #fff;
			transform: translateY(2px);

			.btn-half-bg {
				height: 20%;
			}
		}
		&:focus {
			outline: none;
			border: 2px solid #fff;
		}
	}

	.sendButton {
		opacity: 1;
		animation: backInUp;
		animation-duration: 1s;
	}

	::placeholder {
		overflow: hidden;
		font-family: 'Press Start 2P', cursive;
		font-weight: normal;
		font-size: 0.7em;
		color: lighten(#11001a, 20);
	}

	textarea {
		max-width: 100%;
		min-width: 50%;
		min-height: 160px;
		max-height: 350px;
		margin-bottom: 0;
	}
}
.formIn {
	animation: backInUp;
	animation-duration: 1s;
}

.success {
	position: absolute;
	font-size: 0.6em;
	color: #fff;
	width: 150px;
	background: #2b0142;
	bottom: 10%;
	left: calc(50% - 75px);
	padding: 0.7rem;
	box-shadow: rgb(0, 221, 255) 0px 0.4em, rgb(0, 221, 255) 0px -0.4em,
		rgb(0, 221, 255) 0.4em 0px, rgb(0, 221, 255) -0.4em 0px;
}
.succ-enter-active {
	animation: backInUp;
	animation-duration: 1s;
}
.succ-leave-to {
	animation: backOutDown;
	animation-duration: 1s;
}

@keyframes buttonIn {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.nameInput,
.emailInput,
.textareaInput {
	opacity: 0;
	transform: scaleY(0);
	animation: inputsIn 0.4s forwards cubic-bezier(0.55, 0.055, 0.675, 0.19);
	transform-origin: top;
	animation-delay: 1s;
}
.emailInput {
	animation-delay: 1.3s;
}
.textareaInput {
	animation-delay: 1.6s;
}

@keyframes inputsIn {
	to {
		opacity: 1;
		transform: scaleY(1);
	}
}

@keyframes formIn {
	from {
		opacity: 0;
		transform: scaleX(0);
	}
	to {
		opacity: 1;
		transform: scaleX(1);
	}
}

@media (max-width: 950px) {
	.contact-form-container {
		margin-right: 0;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
}

@media (max-width: 520px) {
	.contact-form-container {
		width: 100%;
		margin-right: 0;
		position: relative;
		left: 0;
		transform: translateX(0);

		form {
			width: 100%;
		}
	}
	.contact-title {
		font-size: 7.9vw;
	}
}

@media (max-width: 470px) {
	.contact-title {
		margin-bottom: 0.5rem;
	}
}

@media (max-width: 350px) {
	.contact-title {
		font-size: 8.2vw;
		margin-bottom: 0rem;
	}
}
</style>
