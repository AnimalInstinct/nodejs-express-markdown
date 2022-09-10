import express = require('express')
import { headers } from './middleware/headers'
import bodyParser from 'body-parser'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(headers)
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, _next) => {
	const username = req.body.username ? req.body.username : 'beautiful creature'
	res.render('index', {
		user: username
	})
})

app.listen(3000)