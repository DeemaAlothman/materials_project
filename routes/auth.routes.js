import express from "express";
import { verifyAgent } from "../middleware/verifyAgent.js";
import { AgentsRegister, AgentsLogin,createAgent, } from "../controllers/auth/agent_auth.js";
// إذا لديك ClientAuth أضفه أيضًا
import { ClientRegister, ClientLogin } from "../controllers/auth/client_auth.js";
const router = express.Router();

router.post("/agent_register", AgentsRegister);
router.post("/agent_login", AgentsLogin);
router.post("/client_register",ClientRegister ).post("/client_login",ClientLogin);
router.post("/createAgent", verifyAgent(["super"]),createAgent);
export default router;
