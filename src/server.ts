import express from 'express'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
})

app.use(route)

const port = process.env.PORT || 3333
const protocol = 

app.listen(3333, () => 'server running on port 3333')