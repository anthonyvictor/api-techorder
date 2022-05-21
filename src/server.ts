import express from 'express'
import ip from 'ip'
import router from './router';
const app = express();

app.use(express.json())

app.use(router)

const protocol = process.env.PROTOCOL || 'http'
const port = process.env.PORT || 3333


app.listen(3333, () => console.info(
  `🟢 Welcome to TechOrder Api! 🟢 
  Server is running on: 
  ${protocol}://localhost:${port} or 
  ${protocol}://${ip.address('public')}:${port}`
))