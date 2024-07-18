import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = Router();
const prisma = new PrismaClient();

router.post("/register", async (req, res) => {
  const { username, firstname, lastname, email, password } = req.body;
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

router.post("/login", async(req, res) => {
    const { username, password } = req.body;
    try {
        if (!username) return res.status(400).json({success:false, message: "username is required"})
        if (!password) return res.status(400).json({success:false, message: "password is required"})
            const loginUser = await prisma.user.findFirst({where:{username}})

        if (loginUser){
            const matchedPassword =  bycrypt.compareSync(password, loginUser.password)
            if (matchedPassword){
                const payload = {
                    id: loginUser.id,
                    firstname: loginUser.firstname,
                    lastname: loginUser.lastname,
                    email: loginUser.email
                }
                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: "1h"
                })
                res.cookie("access_token", token)
                return res.status(200).json({success:true, message: "login successful", data:payload})
                
            }else{
                res.status(400).json({success:false, message:"wrong user credentials"})
            }
        }
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
})
export default router;
