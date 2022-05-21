import { Router } from "express";
import * as controller from "../controllers/ordersController";

const router = Router()

router.get('/', (req, res) => controller.getALL(req, res))
router.get('/a', (req, res) => res.send('aa'))

const OrdersRoutes = router

export default OrdersRoutes 