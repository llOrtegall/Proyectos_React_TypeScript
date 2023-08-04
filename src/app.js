import express from 'express'
import morgan from 'morgan'
// TODO: Routes
import languaguesRoutes from './routes/language.routes'

const app = express()

// TODO: Settings <---------------
app.set('port', 3000)

// TODO: Middlewares <---------------
app.use(morgan('dev'))
app.use(express.json())

// TODO: Routes <---------------
app.use('/api/languages', languaguesRoutes)

export default app
