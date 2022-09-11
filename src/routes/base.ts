import { Request, Response, Router } from 'express'
import path from 'path'
const router = Router()
import { mdRead } from '../shared/md'

router.get('/', async (_req: Request, res: Response) => {
	res.render('index')
})

router.get('/blog/:article', (req, res) => {
	const filePath = path.join(__dirname, '../../', 'md/blog/',req.params.article +'.md')

	mdRead(filePath).then(mdResponse => {
		if (mdResponse.success) {
			res.status(200).render('blogPost', {
				post: mdResponse.data
			})
		} else {
			res.status(404).render('error', {
				code: '404'
			})
		}
	}).catch(err => {
		console.log('Router::blog::getArticle::error: ', err)
	})
})

router.get('*', function(_req, res){
	res.status(404).render('error', {
		code: '404'
	})
})

export default router
