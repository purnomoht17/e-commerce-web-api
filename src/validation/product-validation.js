import Joi from "joi";

const createProductValidation = Joi.object({
    name: Joi.string().max(255).required(),
    description: Joi.string().min(10).required(),
    shortDescription: Joi.string().max(500).optional(),
    price: Joi.number().min(0).strict().required(),

    stock: Joi.number().integer().min(0).strict().required(),
    categoryId: Joi.string().length(24).required(),
    thumbnail: Joi.string().uri().required(),
    images: Joi.array().items(Joi.string().uri()).optional(),
});

const updateProductValidation = Joi.object({
    slug: Joi.string().max(255).optional(),
    name: Joi.string().max(255).optional(),
    shortDescription: Joi.string().max(500).optional(),
    price: Joi.number().min(0).strict().optional(),
    stock: Joi.number().integer().min(0).strict().optional(),
    isAvailable: Joi.boolean().optional(),
    categoryId: Joi.string().length(24).optional(),
    thumbnail: Joi.string().uri().optional(),
    images: Joi.array().items(Joi.string().uri().optional()),
});

export {
    createProductValidation,
    updateProductValidation
};