import express from 'express'
import userRoutes from './routes/users.routes.js';

const app = express();
app.use("/api/users", userRoutes)

app.listen(3000, (res, req) => {
    console.log('Server is running on port 3000')
})