import express from 'express'
import morgan from 'morgan'

const app = express()

// TODO: Settings <---------------

app.set('port', 4040)

// TODO: Middlewares <---------------

app.use(morgan('dev'))

export default app
