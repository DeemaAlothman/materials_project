import express from "express";
import { getMaterialsWithDetails, createMaterial,getMaterialsForClient, deleteMaterialWithDependencies } from "../controllers/materialsController.js";
import { verifyAgent } from "../middleware/verifyAgent.js";

const router = express.Router();

// جلب المواد مع التفاصيل
router.get("/all-materials",verifyAgent(["agent", "super"]),getMaterialsWithDetails);
//رؤية المواد من قبل العميل 
router.get("/Client_materials", getMaterialsForClient); 
// إضافة مادة جديدة
router.post("/createMaterials",verifyAgent(["agent", "super"]),createMaterial);
//حذف المادة من قبل الوكيل 
router.delete("/delete_materials", verifyAgent(["agent", "super"]), deleteMaterialWithDependencies);
export default router;
