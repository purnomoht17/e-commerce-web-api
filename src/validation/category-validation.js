import Joi from "joi";

const createCategoryValidation = Joi.object({
    name: Joi.string().max(100).required(),
    slug: Joi.string().max(100).required(),
    description: Joi.string().max(500).optional(),
});

const updateCategoryValidation = Joi.object({
    name: Joi.string().max(100).optional(),
    slug: Joi.string().max(100).optional(),
    description: Joi.string().max(500).optional(),
});

export {
    createCategoryValidation,
    updateCategoryValidation
}