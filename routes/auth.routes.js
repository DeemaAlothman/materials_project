import express from "express";
import { verifyAgent } from "../middleware/verifyAgent.js";
import { AgentsRegister, AgentsLogin,createAgent } from "../controllers/auth/agent_auth.js";
// إذا لديك ClientAuth أضفه أيضًا

const router = express.Router();

router.post("/agent_register", AgentsRegister);
router.post("/agent_login", AgentsLogin);
router.post("/createAgent", verifyAgent(["super"]),createAgent);
export default router;
