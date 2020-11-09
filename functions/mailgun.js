const { MAILGUN, DOMAIN, RECEIVER_MAIL } = process.env

const mailgun = require('mailgun-js')

exports.handler = function (event, context, callback) {
	const mg = mailgun({
		apiKey: MAILGUN,
		domain: DOMAIN,
	})
	console.log(event.httpMethod)
	if (event.httpMethod != 'POST' || !event.body) {
		return callback(new Error('An error occurred!'))
	}
	const data = JSON.parse(event.body)

	const mgData = {
		from: data.email,
		to: RECEIVER_MAIL,
		subject: data.subject,
		text: data.text,
	}

	mg.messages().send(mgData, (error, body) => {
		if (error) {
			return callback(error)
		}

		callback(null, {
			statusCode: 200,
			body: 'Mail sent',
		})
	})
}
