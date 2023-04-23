import { IncomingMessage } from 'http'

declare module http {
  class IncomingMessage {
    xxx: number
  }
}
