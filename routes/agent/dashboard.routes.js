import express from "express";
import { verifyAgent } from "../../middleware/verifyAgent.js";



const router = express.Router();

router.get("/dashboard", verifyAgent(["super", "agent"]), (req, res) => {
  res.send(`مرحبًا ${req.agentName} في لوحة التحكم!`);
});

export default router;
