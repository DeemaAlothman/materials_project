import pool from "../../database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/prismaClient.js"; 
//log in register
export const AgentsLogin = async (req, res) => {
    try {
        const { agent_name, password } = req.body; 

        const agent = await prisma.agents.findFirst({
            where: {
                agent_name: agent_name
            }
        });

        if (!agent) {
            console.log("Login failed: Agent_name not found");
            return res.status(400).json({ state: "false", msg: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, agent.password);

        if (!isPasswordValid) {
            console.log("Login failed: Invalid password");
            return res.status(400).json({ state: "false", msg: "Invalid credentials" });
        }

        const token = jwt.sign(
            {
                id: agent.id,
                agent_name: agent.agent_name,
                role: agent.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ 
            state: "success", 
            msg: "Login successful", 
            token: token, 
            agent: {
                id: agent.id,
                agent_name: agent.agent_name,
                role: agent.role
            }
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ state: "false", error: "Internal server error" });
    }
};



export const AgentsRegister = async (req, res) => {
    try {
        const { agent_name, password } = req.body; 

        // التحقق هل الاسم موجود مسبقًا
        const existingAgent = await prisma.agents.findFirst({
            where: {
                agent_name: agent_name
            }
        });

        if (existingAgent) {
            console.log("Registration failed: Agent_name already exists");
            return res.status(400).json({ state: "false", msg: "Agent_name already exists" });
        }

        // تحديد الدور بناءً على الاسم
        let role = "agent";
        if (agent_name.toLowerCase().startsWith("super")) {
            role = "super";
        }

        // تشفير كلمة المرور
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(password, saltRounds);

        // إنشاء سجل جديد في قاعدة البيانات
        await prisma.agents.create({
            data: {
                agent_name: agent_name,
                password: passwordHash,
                role: role
            }
        });

        res.status(201).json({ state: "success", role: role });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ state: "false", error: "Internal server error" });
    }
};



export const createAgent = async (req, res) => {
    try {
      const { agent_name, password } = req.body;
  
      // تحقق من الحقول المطلوبة
      if (!agent_name || !password) {
        return res.status(400).json({ error: "اسم الوكيل وكلمة المرور مطلوبة" });
      }
  
      // تحقق إذا كان الوكيل موجود سابقًا بناءً على الاسم أو أي حقل فريد آخر مثل البريد الإلكتروني
      const existingAgent = await prisma.agents.findFirst({
        where: { agent_name }
      });
  
      if (existingAgent) {
        return res.status(409).json({ error: "الوكيل موجود بالفعل" });
      }
  
      // إنشاء وكيل جديد مع تحديد الـrole ليكون "agent"
      const newAgent = await prisma.agents.create({
        data: {
          agent_name,
          password, // تأكد من تشفير كلمة المرور في بيئة الإنتاج!
          role: "agent"
        }
      });
  
      res.status(201).json(newAgent);
    } catch (error) {
      console.error("خطأ في إنشاء الوكيل:", error);
      res.status(500).json({ error: "فشل في إنشاء الوكيل" });
    }
  };
 