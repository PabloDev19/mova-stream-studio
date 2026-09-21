import express from 'express'
import ws, { WebSocketServer } from 'ws'

const app = express()
const wsServer = new WebSocketServer({ port: 3000 })

app.listen(3000, () => {
  console.log('Iniciando servicio en http://localhost:3000')
})

wsServer.on('listening', () => {
  const address = wsServer.address()

  if (address && typeof address !== 'string') {
    console.log(`WebSocket escuchando en ws://localhost:${address.port}`)
  }
})
