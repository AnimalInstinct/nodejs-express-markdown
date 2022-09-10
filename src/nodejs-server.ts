import http, { IncomingMessage, ServerResponse } from 'http'

function requestListener(req: IncomingMessage, res: ServerResponse) {
	console.log('Request::Method::', req.method, 'URL:: ', req.url)

	const body: any[] = []

	req.on('data', (chunk) => {
		body.push(chunk)
	})

	req.on('end', () => {
		const reqParsed = Buffer.concat(body).toString()
		console.log('Request::body::parsed:: ', reqParsed)
		const username = reqParsed.split('=')[1]
		console.log('Username::', username)

		res.setHeader('Content-Type', 'text/html')
		res.write(`${username ?
			'<h1>' + username + '</h1>' :
			'<h1>What is your name</h1>'}
        <form method="POST">
        <input name="username" type="text"/>
        <button type="submit">Send</button>
        </form>`
		)
		res.end()
	})
}

const server = http.createServer((req, res) => requestListener(req, res))

server.listen(3000)