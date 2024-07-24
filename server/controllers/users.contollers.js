import { PrismaClient } from "@prisma/client";
import bycrypt from 'bcrypt'


const prisma = new PrismaClient();

export const requestAccount = async (req, res) => {
    const { username, firstname, lastname, email, password,role,approvedAccount } = req.body;
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
        message: "account requested successfully",
        data: newUser,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export const getAllUsers = async(req, res) => {
  try {
    const users = await prisma.user.findMany({
      where: { approvedAccount: true },
      select:{
        id:true,
        username: true,
        firstname: true,
        lastname:true,
        email:true,

      }
    })
    res.status(200).json({success:true, data: users})
  } catch (error) {
    res.status(500).json({success: false, message: error.message})
  }
}

export const getAllUnapprovedEmployees = async(req, res) =>{
  try {
    const users = await prisma.user.findMany({
      where: { approvedAccount: false },
      select:{
        id:true,
        username: true,
        firstname: true,
        lastname:true,
        email:true,

      }
    })
    res.status(200).json({success:true, data: users})
  } catch (error) {
    res.status(500).json({success: false, message:error.message})
  }
}

export const approveEmployee = async(req, res) =>{
  const employeeId = req.params.id
  try {
    const upprovedEmployee = await prisma.user.update({
      where: { id: employeeId },
      data: { approvedAccount: true }
    })
    res.status(200).json({success:true, message:"Account approved successully"})
  } catch (error) {
    res.status(500).json({success:false, message:error.message})
  }
}

export const rejectEmployee = async(req, res) => {
  const employeeId = req.params.id
  try {
    const rejectEmployee = await prisma.user.delete({
      where: { id: employeeId },
      // data: { approvedAccount: false }
    })
    res.status(200).json({success:true, message:"Account rejected successully"})
  } catch (error) {
    res.status(500).json({success:false, message:error.message})
  }
}
export const deleteEmployee = async(req, res) => {
  const employeeId = req.params.id
  try {
    const deleteEmployee = await prisma.user.delete({
      where: { id: employeeId },
      // data: { approvedAccount: true }
    })
    res.status(200).json({success:true,data:deleteEmployee, message:"Employee deleted successully"})
  } catch (error) {
    res.status(500).json({success:false, message:error.message})
  }
}