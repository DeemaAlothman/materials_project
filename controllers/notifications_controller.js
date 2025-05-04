import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const createNotificationForClient = async (req, res) => {
    try {
      const { client_id, agent_id, title, body } = req.body;
  
      // تحقق من البيانات المطلوبة
      if (!client_id , !agent_id , !title , !body) {
        return res.status(400).json({ error: "جميع الحقول مطلوبة" });
      }
  
      const newNotification = await prisma.notificationsAndNotes.create({
        data: {
          client_id,
          agent_id,
          title,
          body,
          Notice_Date: new Date(), // ممكن ترسل التاريخ من العميل أو تتركه تلقائي
        }
      });
  
      res.status(201).json(newNotification);
    } catch (error) {
      console.error("خطأ في إنشاء الإشعار:", error);
      res.status(500).json({ error: "حدث خطأ أثناء إنشاء الإشعار" });
    }
  };
  

  
export const createNotificationForAgent = async (req, res) => {
    try {
      const { client_id, agent_id, title, body } = req.body;
  
      if (!client_id || !agent_id || !title || !body) {
        return res.status(400).json({ error: "جميع الحقول مطلوبة" });
      }
      
      const newNotification = await prisma.NotificationsAndNotes.create({
        data: {
          client_id,
          agent_id,
          title,
          body,
          Notice_Date: new Date(), // ممكن ترسل التاريخ من العميل أو تتركه تلقائي
        }
      });
  
      res.status(201).json(newNotification);
    } catch (error) {
      console.error("خطأ في إنشاء الإشعار:", error);
      res.status(500).json({ error: "حدث خطأ أثناء إنشاء الإشعار" });
    }
  };
  

  export const getNotificationsForAgent = async (req, res) => {
    try {
      const agentId = parseInt(req.body.agentId);
  
      if (!agentId) {
        return res.status(400).json({ error: "رقم الوكيل (agentId) مطلوب ويجب أن يكون رقمًا" });
      }
  
      const notifications = await prisma.notificationsAndNotes.findMany({
        where: {
          agent_id: agentId
        },
        orderBy: {
          Notice_Date: 'desc' // ترتيب من الأحدث للأقدم (اختياري)
        }
      });
  
      res.status(200).json(notifications);
    } catch (error) {
      console.error("خطأ في جلب إشعارات الوكيل:", error);
      res.status(500).json({ error: "فشل في جلب الإشعارات" });
    }
  };
  

  export const getNotificationsForClient = async (req, res) => {
    try {
      const clientId = parseInt(req.body.clientId);
  
      if (!clientId) {
        return res.status(400).json({ error: "رقم العميل (clientId) مطلوب ويجب أن يكون رقمًا" });
      }
  
      const notifications = await prisma.notificationsAndNotes.findMany({
        where: {
          client_id: clientId
        },
        orderBy: {
          Notice_Date: 'desc'
        }
      });
  
      res.status(200).json(notifications);
    } catch (error) {
      console.error("خطأ في جلب إشعارات العميل:", error);
      res.status(500).json({ error: "فشل في جلب الإشعارات" });
    }
  };