import express from 'express'

const app = express()
app.disable('x-powered-by')
const port = Number(process.env.PORT ?? 3000)

app.get('/', (_req, res) => {
  res
    .type('html')
    .send('<h1>KELA</h1><p>Hello from the KELA React template server.</p>')
})

app.listen(port)
