import express from 'express'
import userRoutes from './routes/users.routes.js';

const app = express()
app.use(express.json())
app.use("/api/users", userRoutes)

app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000')
})