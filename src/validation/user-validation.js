import Joi from "joi";

const registerCustomerValidation = Joi.object({
    email: Joi.string().email().max(100).required(),
    password: Joi.string().min(6).max(100).required(),
    name: Joi.string().max(255).required(),
});

const createAdminValidation = Joi.object({
    email: Joi.string().email().max(100).required(),
    password: Joi.string().min(6).max(100).required(),
    name: Joi.string().max(255).optional(),
    role: Joi.string().valid('ADMIN', 'SUPER_ADMIN').required(),
});

const loginValidation = Joi.object({
    email: Joi.string().email().max(100).required(),
    password: Joi.string().max(100).required(),
});

const updateProfileValidation = Joi.object({
    email: Joi.string().email().max(100).optional(),
    name: Joi.string().max(255).optional()
});

const updatePasswordValidation = Joi.object({
    oldPassword: Joi.string().max(100).required(),
    newPassword: Joi.string().min(6).max(100).required(),
});

export {
    registerCustomerValidation,
    createAdminValidation,
    loginValidation,
    updateProfileValidation,
    updatePasswordValidation
}
