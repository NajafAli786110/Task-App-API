import express from "express";
import dotenv from "dotenv";
import AppTasksRoutes from "./routes/TaskRoutes.js";
import AppUserRoute from "./routes/UserRoute.js";
import ConnectDB from "./connection.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { restrictToLoggedInUserOnly } from "./middlewares/RestrictToUserOnly.js";
import bodyParser from "body-parser";

// Dotenv Config
dotenv.config();

// Initialization
const app = express();
const PORT = process.env.PORT || 8081;

// Connection DB
ConnectDB();

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));

app.use("/tasks", restrictToLoggedInUserOnly, AppTasksRoutes);
app.use("/api/user", AppUserRoute);

// Server Started
app.listen(PORT, (req, res) => {
  console.log(`Server Started at Port ${PORT}`);
});
