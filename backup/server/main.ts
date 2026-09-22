import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (_, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('API running on port 3000')
})

export default app
