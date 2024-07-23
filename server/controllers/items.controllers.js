import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const addItems = async (req, res) =>{
    const user = req.user
    // console.log(user);
    const userId = user.id
    const {itemname, price, description, imageurl} = req.body;
    try {
        
    const payload = await prisma.item.create({
        data: {
            itemname: itemname,
            price: price,
            description: description,
            imageurl: imageurl,
            userId: userId
            }

    })
    res.status(200).json({success:true, message:"item created successully"})

    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }


}
