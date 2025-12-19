import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './Auth/routes/authRoutes.js';
// import profileRoutes from './profile_service/routes/profileRoutes.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// // 🟦 Load routes from each service
// import authRoutes from "./services/auth_service/auth.routes.js";
// import userRoutes from "./services/users_service/users.routes.js";

// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);

const profileRoutes = require('./profile_service/routes/profileRoutes');

app.use('/api/auth', authRoutes);
app.use("/api/profile", profileRoutes);

app.get("/", (req, res) => {
  res.send("Backend API running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`-- Server started on port ${PORT}`));
