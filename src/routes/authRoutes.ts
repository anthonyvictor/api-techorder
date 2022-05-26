import { Router } from "express";
import * as controller from "../controllers/authController";

const router = Router()

router.get('/', (req, res) => controller.auth(req, res))
router.post('/', (req, res) => controller.login(req, res))
// router.put('/', (req, res) => res.send('aa'))
// router.patch('/', (req, res) => res.send('aa'))
// router.delete('/', (req, res) => res.send('aa'))

const OrdersRoutes = router

export default OrdersRoutes 