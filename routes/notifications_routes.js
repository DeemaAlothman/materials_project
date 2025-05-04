import express from "express";
import {createNotificationForClient,createNotificationForAgent,getNotificationsForAgent,getNotificationsForClient} from "../controllers/notifications_controller.js";
import  { verifyAgent }  from "../middleware/verifyAgent.js";



const router = express.Router();


router.post("/create_notificationForAgents", verifyAgent(["agent", "super"]), createNotificationForAgent);
router.get("/get_notificationForAgents", verifyAgent(["agent", "super"]), getNotificationsForAgent);

router.post("/create_notificationForClients", createNotificationForClient);
router.get("/get_notificationForClients", getNotificationsForClient);





export default router;