import { NextFunction, Request, Response } from 'express'

export const headers = (_req: Request, res: Response, next: NextFunction) => {
	res.setHeader('Content-Type', 'text/html')
	next()
}