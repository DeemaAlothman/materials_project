import express from "express";
import { verifyAgent } from "../middleware/verifyAgent.js";
import { getOrderDetailsForClient ,ClientCreateOrder,getAllAgents ,updateOrderStatus,getOrdersForAgent,ClientTrackOrder} from "../controllers/orderController.js";
const router = express.Router();

router.patch("/updateOrderStatus/:id/status",verifyAgent(["agent", "super"]),updateOrderStatus);
router.get("/getOrdersForClient", getOrderDetailsForClient);
router.post("/create_order", ClientCreateOrder);
router.get("/get_Agents", getAllAgents);
router.get("/get_ordersForAgent", verifyAgent(["agent", "super"]), getOrdersForAgent);
router.get("/client_trackOrder", ClientTrackOrder);

export default router;
