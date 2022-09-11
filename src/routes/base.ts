import { Request, Response, Router } from 'express'
const router = Router()
import path from 'path'
import { mdRead } from '../shared/md'

router.get('/', async (_req: Request, res: Response) => {
	res.render('index')
})

router.get('/blog/:article', (req, res) => {
	const filePath = path.join(__dirname, '../../', 'md/blog/',req.params.article +'.md')

	mdRead(filePath).then(data => {
		res.render('blogPost', {
			post: data
		})
	}).catch(err => {
		console.log('Router::blog::getArticle::error: ', err)
	})
})

export default router
