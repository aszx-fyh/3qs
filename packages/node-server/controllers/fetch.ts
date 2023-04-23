import { MyResponse } from '../models/http'
import fs = require('fs/promises')
import path = require('path')

export default async function (myRes: MyResponse) {
  const apiName = myRes.url.searchParams.get('api_name')
  async function renderHtml(content = '') {
    const html = await fs.readFile('./views/fetch.html', { encoding: 'utf-8' })
    myRes.res.setHeader('Content-Type', 'text/html')
    return myRes.res.end(html.replace('#content#', content))
  }
  switch (apiName) {
    case 'login':
      return await renderHtml("<span style='color:green;'>success</span>")
    case 'province':
      const headerType = 'content-type'
      const headerTypeValue = myRes.res.req.headers[headerType]
      myRes.res.setHeader(headerType, headerTypeValue)
      if (headerTypeValue === 'application/json') {
        return myRes.res.end(
          JSON.stringify([
            {
              id: 1,
              name: '北京',
            },
            {
              id: 2,
              name: '上海',
            },
            {
              id: 3,
              name: '广州',
            },
          ])
        )
      } else if (headerTypeValue === 'image/png') {
        return myRes.res.end(
          await fs.readFile(path.resolve(__dirname, '../assets/avatar.png'))
        )
      } else {
        return myRes.res.end(`${headerType} error!`)
      }

    default:
      return await renderHtml()
  }
}
