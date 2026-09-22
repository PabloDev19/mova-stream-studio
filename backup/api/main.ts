import express from 'express'
import cors from 'cors'
import commandRoutes from './routes/command.routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/commands', commandRoutes)

app.listen(3050, () => {
  console.log('API running on port 3050')
})

export default app
