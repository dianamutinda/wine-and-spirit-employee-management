import express from 'express'

const app = express();

app.listen(3000, (res, req) => {
    console.log('Server is running on port 3000')
})