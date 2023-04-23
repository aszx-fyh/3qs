import http = require('http')
import path = require('path')
import fs = require('fs/promises')
import { MyResponse } from './models/http'
async function renderHome() {
  const [files, htmlContent] = await Promise.all([
    fs.readdir('./controllers'),
    fs.readFile('./index.html', { encoding: 'utf-8' }),
  ])
  const str = files
    .map((file) => {
      const filename = file.split('.')[0]
      return `<div class="controller">
          <a href="/${filename}" target="_blank">${filename}<a/>
      </div>`
    })
    .join('')
  return htmlContent.replace('#content#', str)
}

const server = http.createServer()
server.on('request', async function handle(req, res) {
  // return res.end(req.url)
  const myRes = new MyResponse(res)
  if (myRes.url.pathname === '/') {
    res.setHeader('Content-Type', 'text/html')
    const htmlContent = await renderHome()
    return res.end(htmlContent)
  } else {
    try {
      const {
        default: controller,
      } = require(`./controllers${myRes.url.pathname}`)
      return controller(myRes)
    } catch (error) {
      res.setHeader('Content-Type', 'text/plain')
      return res.end('no controller!' + req.url)
    }
  }
})

server.listen(3000, () => {
  console.log('server listening!')
})
