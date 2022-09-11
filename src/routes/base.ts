import { Request, Response, Router } from 'express'

const router = Router()

router.get('/', async (_req: Request, res: Response) => {
	res.render('index')
})

export default router
