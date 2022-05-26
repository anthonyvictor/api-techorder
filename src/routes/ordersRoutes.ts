import { Router } from "express";
import * as controller from "../controllers/ordersController";

const router = Router()

router.get('/', (req, res) => controller.getALL(req, res))
router.post('/', (req, res) => res.send('aa'))
router.put('/', (req, res) => res.send('aa'))
router.patch('/', (req, res) => res.send('aa'))
router.delete('/', (req, res) => res.send('aa'))

const AuthRoutes = router

export default AuthRoutes 