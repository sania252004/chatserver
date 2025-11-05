import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import cors from 'cors';

dotenv.config();

const app = express();

// ✅ Proper CORS configuration
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ Import routes
import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

// ✅ Use routes
app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

// ✅ Start server
app.listen(process.env.PORT, () => {
  console.log(`✅ Server is running on port ${process.env.PORT}`);
  connectDb();
});
