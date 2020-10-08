<template>
	<div class="contact-form-container">
		<h1 ref="title" class="contact-title"></h1>
		<form ref="form" class="formIn" action="/send" method="POST">
			<div class="field">
				<input
					ref="emailInput"
					v-model="formEmail"
					class="emailInput"
					:class="{
						highlight: isEmailInvalid(),
					}"
					type="email"
					name="_replyto"
					placeholder="*Your Email"
				/>
				<div class="field-border"></div>
			</div>
			<div class="two-fields">
				<div class="field">
					<input
						v-model="formName"
						class="nameInput"
						type="text"
						name="name"
						placeholder="Name"
					/>
					<div class="field-border"></div>
				</div>
				<div class="field">
					<input
						v-model="formSubject"
						class="subjectInput"
						type="text"
						name="name"
						placeholder="Subject"
					/>
					<div class="field-border"></div>
				</div>
			</div>

			<div class="field">
				<textarea
					ref="textarea"
					v-model="formText"
					class="textareaInput"
					:class="{ highlight: textError && !formText }"
					name="message"
					placeholder="*Message"
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
		<FormNotifications :success="success" :alert="alert" :error="error" />
	</div>
</template>

<script>
export default {
	data() {
		return {
			title: 'Contact me',
			// pre notifikacie
			alert: false,
			error: false,
			success: false,
			// pre inputy
			formEmail: '',
			formName: '',
			formSubject: '',
			formText: '',
			// pre input errory
			emailError: false,
			textError: false,
			// ostatne
			letter: '',
			index: 0,
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

			if (!this.formName) this.formName = 'Anonym'
			if (!this.formSubject) this.formSubject = 'Message'
			const data = {
				name: this.formName,
				email: this.formEmail.toLowerCase(),
				subject: this.formSubject,
				text: this.formText,
			}

			fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})
				.then((response) => {
					if (response.ok) {
						this.success = true
						this.writingEffect('Thank you', this.$refs.title)
					} else {
						this.error = true
					}
				})
				.then(() => {
					setTimeout(() => {
						this.writingEffect(this.title, this.$refs.title)
						this.success = false
						this.error = false
					}, 4000)
				})
			this.resetForm()
		},

		validateForm() {
			if (!this.formEmail) this.emailError = true
			if (!this.formText) this.textError = true
			if (!this.isEmailInvalid() && this.formText) {
				return true
			} else {
				this.alert = true
				setTimeout(() => {
					this.alert = false
				}, 3000)
				return false
			}
		},

		isEmailInvalid() {
			if (
				(this.emailError && !this.formEmail) ||
				(!this.formEmail.includes('@') && this.formEmail)
			) {
				return true
			} else if (this.formEmail.length < 5 && this.formEmail) {
				return true
			} else {
				return false
			}
		},

		resetForm() {
			this.formEmail = ''
			this.formName = ''
			this.formSubject = ''
			this.formText = ''
			this.emailError = false
			this.textError = false
			this.$refs.emailInput.focus()
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
$higlight-color: #fe006a;

.highlight {
	outline: none !important;
	box-shadow: $higlight-color 0px 0.4em, $higlight-color 0px -0.4em,
		$higlight-color 0.4em 0px, $higlight-color -0.4em 0px;
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
		margin-bottom: 0.7rem;

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
	.field:nth-child(3) {
		margin-bottom: 0;
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

		&:focus {
			outline: 2px solid;
		}

		&:focus + .field-border {
			width: 100%;
		}
	}

	.two-fields {
		display: flex;

		.field {
			width: 50%;
		}

		.field:first-child {
			margin-right: 0.7rem;
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
		color: #7e1cef6b;
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

@keyframes buttonIn {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.nameInput,
.emailInput,
.subjectInput,
.textareaInput {
	opacity: 0;
	transform: scaleY(0);
	animation: inputsIn 0.4s forwards cubic-bezier(0.55, 0.055, 0.675, 0.19);
	transform-origin: top;
	animation-delay: 1s;
}
.nameInput,
.subjectInput {
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
