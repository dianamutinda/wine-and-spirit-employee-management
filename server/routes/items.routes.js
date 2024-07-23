import { Router } from "express";
import validateItems from "../middleware/items.middleware.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import { addItems } from "../controllers/items.controllers.js";
const router = Router()

router.post("/",verifyAdmin,validateItems,addItems )
export default router