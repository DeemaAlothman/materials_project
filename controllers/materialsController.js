import prisma from '../prisma/prismaClient.js';

const safeJson = (data) => {
  return JSON.parse(
    JSON.stringify(data, (_, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
};

export const getMaterialsWithDetails = async (req, res) => {
  try {
    const materials = await prisma.materials.findMany({
      include: {
        agent: true,
        categories_of_materials: {
          include: {
            categories_details: {
              include: {
                order_details: true,
              }
            }
          }
        }
      }
    });

    res.status(200).json({
      state: "success",
      data: safeJson(materials),
    });
  } catch (err) {
    console.error("خطأ في جلب المواد مع التفاصيل:", err);
    res.status(500).json({
      state: "false",
      message: "خطأ داخلي في الخادم",
      error: err.message || err,
    });
  }
};

export const createMaterial = async (req, res) => {
  try {
    const { name, date_added, agent_id } = req.body;

    // تحقق من وجود المدخلات المطلوبة
    if (!name || !date_added) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newMaterial = await prisma.materials.create({
      data: {
        name,
        date_added: new Date(date_added).getTime(), 
        agent_id: agent_id || null,
      },
    });

    res.status(201).json(newMaterial);
  } catch (error) {
    console.error('خطأ في إدخال المادة:', error);
    res.status(500).json({ error: 'حدث خطأ أثناء إدخال البيانات' });
  }
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

export const deleteMaterialWithDependencies = async (req, res) => {
  const { material_id } = req.body;

  try {
    // ✅ Step 1: جلب كل الفئات المرتبطة بالمادة
    const categories = await prisma.categoriesOfMaterials.findMany({
      where: { material_id: parseInt(material_id) },
      include: {
        categories_details: true,
      },
    });

    for (const category of categories) {
      for (const detail of category.categories_details) {
        // ✅ Step 2: حذف OrderDetails المرتبطة بـ detail
        await prisma.orderDetails.deleteMany({
          where: {
            categories_detail_id: detail.id,
          },
        });

        // ✅ Step 3: حذف detail نفسه
        await prisma.categoriesDetails.delete({
          where: { id: detail.id },
        });
      }

      // ✅ Step 4: حذف الفئة نفسها
      await prisma.categoriesOfMaterials.delete({
        where: { id: category.id },
      });
    }

    // ✅ Step 5: حذف المادة نفسها
    await prisma.materials.delete({
      where: { id: parseInt(material_id) },
    });

    res.status(200).json({ message: "تم حذف المادة وكل التفاصيل المرتبطة بها بنجاح." });
  } catch (error) {
    console.error("خطأ أثناء الحذف:", error);
    res.status(500).json({ error: "فشل في حذف المادة أو التفاصيل المرتبطة." });
  }
};