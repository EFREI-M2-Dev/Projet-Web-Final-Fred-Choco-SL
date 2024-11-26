import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes";
import projectRoutes from "./routes/projectRoutes";
import statusRoutes from "./routes/statusRoutes";
import tagRoutes from "./routes/tagRoutes";
import taskRoutes from "./routes/taskRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", authRoutes);
app.use("/api", projectRoutes);
app.use("/api", statusRoutes);
app.use("/api", tagRoutes);
app.use("/api", taskRoutes);


export default app;
