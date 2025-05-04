import prisma from '../prisma/prismaClient.js';

export const createCategory = async (req, res) => {
  try {
    const { name, image, material_id, parent_id } = req.body;

    const newCategory = await prisma.categoriesOfMaterials.create({
      data: {
        name,
        image,
        material_id,
        parent_id: parent_id || null,
      },
    });

    res.status(201).json(newCategory);
  } catch (error) {
    console.error("خطأ في إنشاء الفئة:", error);
    res.status(500).json({ error: "حدث خطأ أثناء إنشاء الفئة" });
  }
};


export const createCategoryDetail = async (req, res) => {
  try {
    const {
      It_detail_name,
      code,
      dimensions,
      total,
      rest,
      remaining,
      category_material_id,
    } = req.body;

    const newCategoryDetail = await prisma.categoriesDetails.create({
      data: {
        It_detail_name,
        code,
        dimensions,
        total,
        rest,
        remaining,
        category_material_id,
      },
    });

    // حل مشكلة BigInt عبر تحويلهم لسترينغ قبل الإرجاع
    const response = {
      ...newCategoryDetail,
      total: newCategoryDetail.total.toString(),
      rest: newCategoryDetail.rest.toString(),
      remaining: newCategoryDetail.remaining.toString(),
    };

    res.status(201).json(response);
  } catch (error) {
    console.error("خطأ في إنشاء تفاصيل الفئة:", error);
    res.status(500).json({ error: "حدث خطأ أثناء إضافة تفاصيل الفئة" });
  }
};