import express from "express";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import agentRoutes from "./routes/agent/dashboard.routes.js";
import categoriesRoutes from './routes/categories.routes.js';
import materialsRoutes from "./routes/materials.routes.js";
import ordersRoutes from "./routes/orders.routes.js";
import notificationsRoutes from "./routes/notifications_routes.js";
// أضف dotenv قبل إنشاء التطبيق ليتم تحميل المتغيرات البيئية
dotenv.config();

// إنشاء التطبيق أولاً
const app = express();

// استخدام middlewares المطلوبة
app.use(express.json()); // تأكد من إضافتها فقط مرة واحدة
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors());

app.use("/auth", authRoutes);        
app.use("/agents", agentRoutes);      
app.use("/materials", materialsRoutes); 
app.use('/categories', categoriesRoutes); 
app.use("/orders",ordersRoutes);
app.use("/notifications", notificationsRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`)); // بدء السيرفر بعد إعداد التطبيق
