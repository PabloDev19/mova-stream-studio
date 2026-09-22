import { google } from 'googleapis'
import { oauth2Client, ytTokens } from './streamAuth'
import app from '../server/main'
import { ipcMain } from 'electron'
import { mainWindow } from '..'

export async function getMyChannel() {
  const youtube = google.youtube({
    version: 'v3',
    auth: oauth2Client
  })

  const response = await youtube.channels.list({
    part: ['snippet', 'statistics'],
    mine: true
  })

  const channel = response.data.items?.[0]

  if (!channel) {
    throw new Error('No se encontró ningún canal')
  }

  return {
    id: channel.id,
    name: channel.snippet?.title,
    thumbnail: channel.snippet?.thumbnails?.default?.url,
    subscribers: channel.statistics?.subscriberCount
  }
}

export async function getCurrentStream() {
  const youtube = google.youtube({
    version: 'v3',
    auth: oauth2Client
  })

  // Primero obtenemos nuestro canal
  const channelResponse = await youtube.channels.list({
    part: ['id', 'snippet'],
    mine: true
  })

  const channel = channelResponse.data.items?.[0]

  if (!channel?.id) {
    throw new Error('No se encontró el canal')
  }

  // Buscamos un directo activo
  const response = await youtube.search.list({
    part: ['snippet'],
    channelId: channel.id,
    eventType: 'live',
    type: ['video']
  })

  const stream = response.data.items?.[0]

  if (!stream) {
    return null
  }

  return {
    videoId: stream.id?.videoId,
    title: stream.snippet?.title,
    description: stream.snippet?.description,
    thumbnail: stream.snippet?.thumbnails?.high?.url,
    channelId: stream.snippet?.channelId,
    channelTitle: stream.snippet?.channelTitle
  }
}

export async function SendInfoAccountYoutube() {
  const data = await getMyChannel()
  mainWindow.webContents.send('yt-account-info', data)
}

/* API */
app.get('/api/youtube/stream', async (_, res) => {
  try {
    if (!ytTokens) {
      res.status(401).json({
        error: 'YouTube no está autenticado'
      })
    }

    const stream = await getCurrentStream()
    console.log(stream)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'No se pudo obtener el canal'
    })
  }
})

app.get('/api/youtube/channel', async (_, res) => {
  try {
    if (!ytTokens) {
      res.status(401).json({
        error: 'YouTube no está autenticado'
      })
    }

    const channel = await getMyChannel()
    console.log(channel)

    res.json(channel)
  } catch (error) {
    console.error(error)

    res.status(500).json({
      error: 'No se pudo obtener el canal'
    })
  }
})
