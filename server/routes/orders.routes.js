
import { Router } from "express";
import { postOrders } from "../controllers/orders.controllers.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
const router = Router()

router.post("/",verifyAdmin, postOrders)
export default router