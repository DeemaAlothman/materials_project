import express from 'express';
import { createCategoryDetail, createCategory } from '../controllers/categoriesController.js';
import { verifyAgent } from '../middleware/verifyAgent.js';


const router = express.Router();

router.post('/createCategories',verifyAgent(['agent', 'super']),createCategory);

router.post('/create_category_details', verifyAgent(['agent', 'super']), createCategoryDetail );

export default router;
