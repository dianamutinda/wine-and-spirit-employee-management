import express from "express";
import userRoutes from "./routes/users.routes.js";
import authRoutes from "./routes/auth.users.js";
import itemRoutes from "./routes/items.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { config } from "dotenv";
config();
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);
app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
