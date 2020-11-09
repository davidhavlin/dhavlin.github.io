// import express from 'express'
// import { sendEmail } from './mail'
// const app = express()

// app.use(
// 	express.urlencoded({
// 		extended: false,
// 	})
// )
// app.use(express.json())

// app.post('/', (req, res) => {
// 	const { name, email, subject, text } = req.body
// 	sendEmail(name, email, subject, text, (err, data) => {
// 		if (err) {
// 			res.status(500).json({ error: 'Chyba' })
// 		} else {
// 			res.json({ message: ' email has sent!' })
// 		}
// 	})
// })

// export default {
// 	path: '/contact',
// 	handler: app,
// }
