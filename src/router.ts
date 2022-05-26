import * as express from "express";
import OrdersRoutes from "./routes/ordersRoutes";
import AuthRoutes from "./routes/authRoutes";
import path from 'path'

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile( path.join(__dirname, 'public/views/home/index.html') )
})

router.use('/public', express.static( path.join(__dirname, 'public') ))

router.use( '/orders', OrdersRoutes )
router.use( '/auth', AuthRoutes)

export default router