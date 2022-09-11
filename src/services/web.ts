import app from '../server'

const port = 4000

const server = app.listen(port, () => {
	console.log('Server started', { port })
})

process.on('SIGTERM', () => {
	server.close(() => {
		console.log('Server stopped. App received SIGTERM')
	})
})
