import { PrismaClient } from "@prisma/client";
import bycrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient();



export const login = async (req, res) =>{
    const { username, password } = req.body;
    try {
        if (!username) return res.status(400).json({success:false, message: "username is required"})
        if (!password) return res.status(400).json({success:false, message: "password is required"})
            const loginUser = await prisma.user.findFirst({where:{username}})
        if(loginUser.approvedAccount === false){
            res.status(400).json({success:false, message:"your account is not approved yet"})
        }

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
}
