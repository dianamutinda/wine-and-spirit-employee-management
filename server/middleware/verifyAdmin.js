import jwt from 'jsonwebtoken'
const verifyToken = (req, res, next) => {
    const accessToken = req.cookies.access_token;
    if (!accessToken) return res.status(401).json({success:false, message: "Unauthorized"})
        jwt.verify(accessToken, process.env.JWT_SECRET, (error, decoded) => {
    if (error) return res.status(401).json({success:false, message: "Unauthorized"})
    if(!decoded.role === 'admin')
        return res.status(401).json({ success:false, message: "You are not permitted to perform this operation"})

    })
    next();
}
export default verifyToken;