import type { ServerResponse, IncomingMessage } from 'http'
import fs = require('fs/promises')

export default async function (req: IncomingMessage, res: ServerResponse) {
  const data = [{ name: '11', value: 1 }]
  res.setHeader('Content-Type', 'application/json')
  return res.end(JSON.stringify(data))
}
