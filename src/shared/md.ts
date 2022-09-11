export async function mdRead(path: string) {
	try {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const fs = require('node:fs/promises')
		const data = await fs.readFile(path, 'utf8')

		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const MarkdownIt = require('markdown-it')
		const md = new MarkdownIt()
		const html = md.render(data)
		return html
	} catch (error)  {
		console.log('Markdown::file read error: ', error)
	}
}
