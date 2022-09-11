import express = require('express')
import { headers } from './middlewares/headers'
import bodyParser from 'body-parser'
import BaseRouter from './routes'

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(headers)
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', BaseRouter)


export default app
