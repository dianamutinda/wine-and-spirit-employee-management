import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export const postOrders = async(req, res) =>{
    // const item = req.item
    // console.log(item);
    // const itemId = item.itemId
    const {itemname, price, ordereditems} = req.body
    try {
        const newOrder = await prisma.order.create({
            data:{
                itemname,
                ordereditems,
                price,
                // itemId
            }
        })
        res.status(200).json({success:true, data:newOrder})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
}