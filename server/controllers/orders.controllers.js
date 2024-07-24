import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const postOrders = async(req, res) =>{
    const user = req.user
    console.log(user);
    const userId = user.id
    const {itemname, price, ordereditems} = req.body
    try {
        const newOrder = await prisma.order.create({
            data:{
                itemname,
                ordereditems,
                price,
                userId
            }
        })
        res.status(200).json({success:true, data:newOrder})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}

export const getEmployeeOrders = async (req, res) =>{
    const user = req.user
    const userId = user.id
    // const orderId = req.params.id
    try {
        const orders = await prisma.order.findMany({
            where: { userId: userId },
            select:{
                orderId:true,
                itemname:true,
                ordereditems:true,
                price:true,
                userId: true
            }
        })
        res.status(200).json({success:true, data:orders})

    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}
