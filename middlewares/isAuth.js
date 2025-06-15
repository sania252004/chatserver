import jwt from 'jsonwebtoken';
import { User } from "../models/User.js"; 

export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.status(403).json({ 
        msg: "Please login", 
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (error) {
    console.error("Auth Error:", error.message);
    res.status(401).json({ message: "Login First" });
  }
};
