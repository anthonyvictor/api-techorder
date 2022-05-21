import * as express from "express";
import OrdersRoutes from "./routes/ordersRoutes";

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Server on in ' })
  })

router.use( '/orders',  OrdersRoutes )

export default router