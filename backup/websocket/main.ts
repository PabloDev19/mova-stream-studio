import { WebSocketServer } from 'ws'
import app from '../api/main'
import { Socket } from 'dgram'
import { randomUUID } from 'crypto'

const server = app.listen(3050, '0.0.0.0', () => {
  console.log(`Servidor HTTP iniciado en http://localhost:3050`)
})

export const wss = new WebSocketServer({
  server
})

wss.on('connection', (socket) => {
  console.log('Se realizo una conexión websocket: ', socket)

  MC_SubscribeEvent(socket, 'PlayerMessage')

  socket.on('message', (data) => {
    const msg = JSON.parse(data)
    console.log(msg)
  })

  runCommand(socket, 'give @a diamond 1')
})

wss.on('listening', () => {
  console.log('WebSocket iniciado en ws://localhost:3050')
})

wss.on('error', (error) => {
  console.error('Error en WebSocket:', error)
})

/* Methods */

const MC_SubscribeEvent = (socket: Socket, event: string) => {
  socket.send(
    JSON.stringify({
      header: {
        version: 1,
        requestId: randomUUID(),
        messagePurpose: 'subscribe'
      },
      body: { eventName: event }
    })
  )
}

const runCommand = (socket: Socket, cmd: string) => {
  socket.send(
    JSON.stringify({
      header: {
        version: 1,
        requestId: randomUUID(),
        messagePurpose: 'commandRequest'
      },
      body: { origin: { type: 'player' }, commandLine: cmd, version: 1 }
    })
  )
}
