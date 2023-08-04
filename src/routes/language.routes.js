import { Router } from 'express'
import { methods as languageController } from '../controllers/language.controller'

const router = Router()

router.get('/', languageController.getLenguages)

export default router
