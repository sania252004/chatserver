import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ Fix CORS once and for all
app.use(
  cors({
    origin: ["http://localhost:5173", "https://chatserver-1-n3eg.onrender.com"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ✅ Handle preflight requests explicitly
app.options("*", cors());

// ✅ Middleware
app.use(express.json());

// ✅ Import routes
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

// ✅ Routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// ✅ Health check route
app.get("/", (req, res) => {
  res.json({ message: "✅ Server running properly" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  connectDb();
});
