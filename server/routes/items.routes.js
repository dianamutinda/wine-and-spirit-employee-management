import { Router } from "express";
const router = Router()

router.post("/", (req, res) =>{
    res.send("post")
})
export default router