// // Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// const handler = async (event) => {
// 	try {
// 		const subject = event.queryStringParameters.name || 'World'
// 		console.log('nechapem')
// 		return {
// 			statusCode: 200,
// 			body: JSON.stringify({ message: `Hello ${subject}` }),
// 			// // more keys you can return:
// 			// headers: { "headerName": "headerValue", ... },
// 			// isBase64Encoded: true,
// 		}
// 	} catch (error) {
// 		return { statusCode: 500, body: error.toString() }
// 	}
// }

// module.exports = { handler }

import express from 'express'
import { sendEmail } from './mail'
const app = express()

app.use(
	express.urlencoded({
		extended: false,
	})
)
app.use(express.json())

app.post('/', (req, res) => {
	console.log('este to funguje')
	const { name, email, subject, text } = req.body
	console.log(name, email)
	sendEmail(name, email, subject, text, (err, data) => {
		if (err) {
			res.status(500).json({ error: 'Chyba' })
		} else {
			res.json({ message: ' email has sent!' })
		}
	})
})

export default {
	path: '/contact',
	handler: app,
}
