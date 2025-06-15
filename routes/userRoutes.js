import express from "express";
import {loginUser, verifyUser, myProfile} from "../controllers/userControllers.js";
import { isAuth } from "../middlewares/isAuth.js"; 

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth, myProfile)

export default router;
