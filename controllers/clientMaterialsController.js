import prisma from "../prisma/prismaClient.js";

const safeJson = (data) => {
  return JSON.parse(
    JSON.stringify(data, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
};

export const getMaterialsForClient = async (req, res) => {
  try {
    const materials = await prisma.materials.findMany({
      include: {
        agent: true,
        categories_of_materials: {
          include: {
            categories_details: {
            
            },
          },
        },
      },
    });

    // إزالة الحقول غير المخصصة للعميل
    const filtered = materials.map((material) => ({
      ...material,
      categories_of_materials: material.categories_of_materials.map((category) => ({
        ...category,
        categories_details: category.categories_details.map((detail) => {
          const { total, rest, remaining, ...safeDetail } = detail;
          return safeDetail;
        }),
      })),
    }));

    res.status(200).json({
      state: "success",
      data: safeJson(filtered),
    });
  } catch (err) {
    console.error("خطأ في جلب المواد للعميل:", err);
    res.status(500).json({
      state: "false",
      message: "خطأ داخلي في الخادم",
      error: err.message || err,
    });
  }
};

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
