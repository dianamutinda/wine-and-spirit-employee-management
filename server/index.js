import express from "express";
import userRoutes from "./routes/users.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true
  })
);
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
