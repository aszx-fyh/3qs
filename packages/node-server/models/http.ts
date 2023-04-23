import { ClientRequest, ServerResponse, IncomingMessage } from 'http'

export class MyResponse {
  url: URL
  res: ServerResponse
  constructor(res: ServerResponse) {
    this.url = new URL(res.req.url, `http://${res.req.headers['host']}`)
    this.res = res
  }
}
