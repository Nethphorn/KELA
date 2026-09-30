import express from 'express'
import path from 'node:path'

const app = express()
app.disable('x-powered-by')
const port = Number(process.env.PORT ?? 3000)
const clientDir = path.resolve(process.cwd(), 'dist', 'client')

app.use(express.static(clientDir))

app.get('/*splat', (_req, res) => {
  res.sendFile(path.join(clientDir, 'index.html'))
})

app.listen(port)
