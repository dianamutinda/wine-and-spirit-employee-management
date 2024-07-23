import { Router } from "express";
import validateItems from "../middleware/items.middleware.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import { addItems, getItems } from "../controllers/items.controllers.js";
const router = Router()

router.post("/",verifyAdmin,validateItems,addItems )
router.get("/",verifyAdmin,getItems)
export default router