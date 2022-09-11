import { Router } from 'express'
import baseRouter from './base'

const router = Router()

router.use('/', baseRouter)

export default router
