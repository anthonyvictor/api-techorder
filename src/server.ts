import express from 'express'

import { Router, Request, Response } from 'express';
import ip from 'ip'
const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)

const protocol = process.env.PROTOCOL || 'http'
const port = process.env.PORT || 3333


app.listen(3333, () => `server running on: 
${protocol}://localhost:${port} or 
${protocol}://${ip.address('public')}:${port}`)