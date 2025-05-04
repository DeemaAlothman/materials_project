import prisma from "../prisma/prismaClient.js";

export const getOrderDetailsForClient = async (req, res) => {
  const { id } = req.body;

  try {
    const order = await prisma.orders.findUnique({
      where: { id: parseInt(id) },
      include: {
        client: true,
        agent: true,
        order_details: {
          include: {
            categories_details: true, // لتضمين تفاصيل المادة المطلوبة
          },
        },
      },
    });

    if (!order) {
      return res.status(404).json({ message: "الطلب غير موجود" });
    }

    res.status(200).json({
      state: "success",
      data: order,
    });
  } catch (error) {
    console.error("خطأ في جلب تفاصيل الطلب:", error);
    res.status(500).json({
      state: "false",
      message: "خطأ داخلي في الخادم",
      error: error.message,
    });
  }
};



export const getAllAgents = async (req, res) => {
    try {
        const agents = await prisma.agents.findMany({
            select: {
              id: true,
              agent_name: true,
              role: true
            }
          });
  
      res.status(200).json({
        success: true,
        message: "List of agents retrieved successfully.",
        data: agents
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch agents.",
        error: error.message
      });}
  
    }


  export const ClientCreateOrder = async (req, res) => {
    const { client_id, agent_id, order_date, order_details } = req.body;
  
    try {
      const newOrder = await prisma.orders.create({
        data: {
          client_id: parseInt(client_id),
          agent_id: parseInt(agent_id),
          order_date: new Date(order_date),
          order_status:"Pending",
          order:"",
        },
      });
  
      res.status(201).json({
        success: true,
        message: "Order and details created successfully.",
        data: newOrder
      });
  
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({
        success: false,
        message: "Failed to create order.",
        error: error.message
      });
    }}


    
export const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { order_status } = req.body;

  if (!order_status) {
    return res.status(400).json({ error: "يرجى تحديد حالة الطلب الجديدة." });
  }

  try {
    const updated = await prisma.orders.update({
      where: { id: parseInt(id) },
      data: { order_status }
    });

    res.status(200).json({
      state: "success",
      message: "تم تحديث حالة الطلب بنجاح.",
      data: updated
    });
  } catch (error) {
    console.error("خطأ في تحديث حالة الطلب:", error);
    res.status(500).json({ error: "فشل في تحديث حالة الطلب." });
  }
};


export const getOrdersForAgent = async (req, res) => {
  try {
    const agentId = parseInt(req.body.agentId);

    if (!agentId) {
      return res.status(400).json({ error: "رقم الوكيل (agentId) مطلوب ويجب أن يكون رقمًا" });
    }

    const orders = await prisma.orders.findMany({
      where: {
        agent_id: agentId
      },
      include: {
        client: true,
        order_details: {
          include: {
            categories_details: true
          }
        }
      },
      orderBy: {
        order_date: 'desc'
      }
    });

    res.status(200).json(orders);
  } catch (error) {
    console.error("خطأ في جلب الطلبات:", error);
    res.status(500).json({ error: "فشل في جلب الطلبات" });
  }
};




export const ClientTrackOrder = async (req, res) => {
  const { orderId } = req.body;

  try {
    const order = await prisma.orders.findUnique({
      where: {
        id: parseInt(orderId)
      },
      include: {
        client: {
          select: { client_name: true }
        },
        agent: {
          select: { agent_name: true }
        },
        order_details: {
          select: {
            count: true,
            price: true,
            categories_details: {
              select: {
                It_detail_name: true,
                code: true,
                dimensions: true
              }
            }
          }
        }
      }
    });

    if (!order) {
      return res.status(404).json({
        state: "false",
        message: "الطلب غير موجود"
      });
    }

    res.status(200).json({
      state: "success",
      data: order
    });

  } catch (error) {
    console.error("خطأ في تتبع الطلب:", error);
    res.status(500).json({
      state: "false",
      message: "فشل في تتبع الطلب"
    });
  }
};


