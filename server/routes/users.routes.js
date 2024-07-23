import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { requestAccount, getAllUsers, getAllUnapprovedEmployees,approveEmployee, rejectEmployee } from "../controllers/users.contollers.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import bycrypt from 'bcrypt'


const router = Router();
const prisma = new PrismaClient();

router.post("/register", async (req, res) => {
  const { username, firstname, lastname, email, password, role, approvedAccount } = req.body;
  try {
    if (!username)
      return res
        .status(400)
        .json({ success: false, message: "username is required" });
    if (!firstname)
      return res
        .status(400)
        .json({ success: false, message: "firstname is reqired" });
    if (!lastname)
      return res
        .status(400)
        .json({ success: false, message: "lastname is required" });
    if (!email)
      return res
        .status(400)
        .json({ success: false, message: "email is required" });
    if (!password)
      return res
        .status(400)
        .json({ success: false, message: "password is required" });
    const userWithUsername = await prisma.user.findFirst({
      where: { username: username },
    });
    if (userWithUsername)
      return res
        .status(400)
        .json({ success: false, message: "username already taken" });
    const userWithEmail = await prisma.user.findFirst({
      where: { email: email },
    });
    if (userWithEmail)
      return res
        .status(400)
        .json({ success: false, message: "email aready taken" });

        const hashedPassword = bycrypt.hashSync(password, 10)

    const newUser = await prisma.user.create({
      data: {
        username,
        firstname,
        lastname,
        email,
        role,
        approvedAccount,
        password: hashedPassword
      }
    });
    return res
      .status(200)
      .json({
        success: true,
        message: "user created successfully",
        data: newUser,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

router.post("/request", requestAccount)
router.get("/allUsers",verifyAdmin, getAllUsers)
router.get("/unapproved",verifyAdmin, getAllUnapprovedEmployees)
router.patch("/approve/:id",verifyAdmin, approveEmployee)
router.delete("/reject/:id",verifyAdmin, rejectEmployee )

export default router;
