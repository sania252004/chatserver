import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import cors from "cors";

dotenv.config();

const app = express();


app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);


app.options("*", cors())

app.use(express.json()); 


import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";


app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.get("/", (req, res) => {
  res.json({ message: "✅ Server running properly" });
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  connectDb();
});
