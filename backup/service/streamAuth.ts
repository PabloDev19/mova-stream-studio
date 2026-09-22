import { google } from 'googleapis'
import app from '../server/main'
import { ipcMain, shell } from 'electron'
import { mainWindow } from '..'
import { SendInfoAccountYoutube } from './youtube'

const CLIENT_ID = '433487700334-2c7vtcalamcc8hr5tt10cd4oq9o61cja.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'http://localhost:3000/oauth2callback'
const SCOPES = ['https://www.googleapis.com/auth/youtube.readonly']

export const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
export let ytTokens = {}

app.get('/api/auth', (_, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent'
  })

  res.redirect(authUrl)
})

app.get('/oauth2callback', async (req, res) => {
  const { code } = req.query

  if (typeof code !== 'string') {
    res.status(400).send('No se recibió un código de autorización válido')
    return
  }

  console.log('Código recibido')
  console.log('Código:', code)

  try {
    const { tokens } = await oauth2Client.getToken(code)

    oauth2Client.setCredentials(tokens)

    console.log('Tokens obtenidos:')
    console.log(tokens)
    ytTokens = tokens

    //Notificar a React que se autentico de forma satisfactoria
    mainWindow.webContents.send('youtube-auth-success', {
      success: true
    })

    //Enviar la información inicial de la cuenta de Youtube al frontend
    SendInfoAccountYoutube()

    res.send('¡Autenticación exitosa! Puedes cerrar esta ventana.')
  } catch (error) {
    console.error('Error obteniendo tokens:', error)

    mainWindow.webContents.send('youtube-auth-error', {
      message: 'No se pudo autenticar YouTube'
    })

    res.status(500).send('Error durante la autenticación')
  }
})

/* Comunicacion externa con React */
ipcMain.handle('youtube-login', async () => {
  await shell.openExternal('http://localhost:3000/api/auth')
})
