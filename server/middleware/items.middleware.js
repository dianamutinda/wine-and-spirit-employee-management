const validateItems = (req, res, next) =>{
    const {itemname, price, description, imageurl} = req.body;
    try {
        if (!itemname)
            return res
              .status(400)
              .json({ success: false, message: "itemname is required" });
              if (!price)
                return res
            .status(400)
            .json({ success: false, message: "price is required" });
            if (!description)
                return res
            .status(400)
            .json({ success: false, message: "description is required" });
            if (!imageurl)
                return res
            .status(400)
            .json({ success: false, message: "imageurl is required" });
          
    } catch (error) {
        res.status(500).json({success:true, message:error.message})
    }
}
export default validateItems