const {
	MAILGUN: apiKey,
	DOMAIN: domain,
	RECEIVER_MAIL: receiver_mail,
} = process.env
const mailgun = require('mailgun-js')({ apiKey, domain })

exports.handler = function (event, context, callback) {
	console.log('somethiiiiiiiiiiing', event.httpMethod, event.body, event)
	if (event.httpMethod != 'POST' || !event.body) {
		return callback(new Error('An error occurred!'))
	}

	const data = JSON.parse(event.body)
	console.log('toto vidim?', data)

	if (data.antibot.length > 0) {
		return callback(new Error('Forbidden access'))
	}

	let messageData = {
		from: data.email,
		to: receiver_mail,
		subject: `Message received from ${data.name}`,
		text: `${data.message}`,
	}

	mailgun.messages().send(messageData, function (error) {
		if (error) {
			return callback(error)
		} else {
			return callback(null, {
				statusCode: 200,
				body: 'success',
			})
		}
	})
}
