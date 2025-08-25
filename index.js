import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js'; 
import cors from 'cors';

dotenv.config();

const app = express();


app.use(express.json());


app.use(cors({
  origin: ["http://localhost:5173", "https://your-frontend-domain.com"], 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


import userRoutes from './routes/userRoutes.js';
import chatRoutes from './routes/chatRoutes.js'; 


app.use('/api/user', userRoutes);
app.use("/api/chat", chatRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);   
  connectDb();
}); 