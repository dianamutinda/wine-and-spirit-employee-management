
import { Router } from "express";
import { postOrders, getEmployeeOrders } from "../controllers/orders.controllers.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
const router = Router()

router.post("/",verifyAdmin, postOrders)
router.get("/:id",verifyAdmin, getEmployeeOrders)
export default router