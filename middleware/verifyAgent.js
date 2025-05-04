import jwt from "jsonwebtoken";
import prisma from "../prisma/prismaClient.js";


export const verifyAgent = (roles) => {
  return async (req, res, next) => {
    const token = req.headers["authorization"];
    try {
      if (!token) {
        return res.status(403).send({
          status: 403,
          message: "غير مصرح لك أو انتهت جلستك. يرجى تسجيل الدخول.",
          data: {},
        });
      }

      const accessToken = token.split(" ")[1];



      console.log("accessToken :" , accessToken);
      
      const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

      const roleAllowed = roles.includes(decoded.role);
      if (!roleAllowed) {
        return res.status(403).send({
          status: 403,
          message: "ليس لديك صلاحية لتنفيذ هذا الإجراء.",
          data: {},
        });
      }

      const agent = await prisma.agents.findUnique({
        where: {
          id: +decoded.id,
          // إذا كنت تستخدم Audit أو حقل IsDeleted
          // isDeleted: false
        },
      });

      if (!agent) {
        return res.status(404).send({
          status: 404,
          message: "الوكيل غير موجود.",
          data: {},
        });
      }

      // إضافة البيانات إلى الطلب
      req.agentId = agent.id;
      req.agentRole = agent.role;
      req.agentName = agent.agent_name;

      next();
    } catch (error) {
      return res.status(403).send({
        status: 403,
        message: "رمز الدخول غير صالح أو منتهي.",
        data: {},
      });
    }
  };
};
