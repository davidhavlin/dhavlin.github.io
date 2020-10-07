import nodemailer from 'nodemailer'
import mailGun from 'nodemailer-mailgun-transport'

const auth = {
	auth: {
		api_key: '1bc901ff199ce1062e8b164e50b2bc17-0d2e38f7-af78239e',
		domain: 'sandbox7ee1d8c8df8349ddba07ff2dcf3c05d8.mailgun.org',
	},
}

const transporter = nodemailer.createTransport(mailGun(auth))

export const sendEmail = (name, email, subject, text, cb) => {
	const mailOptions = {
		from: email,
		to: 'davidhavlin@gmail.com',
		subject: name + ': ' + subject,
		text: text,
	}

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			cb(err, null)
		} else {
			cb(null, data)
		}
	})
}
