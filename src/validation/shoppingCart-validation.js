import Joi from "joi";

const mongoId = Joi.string().length(24);
const addItemToCartValidation = Joi.object({
    productId: mongoId.required(),
    quantity: Joi.number().integer().min(1).required(),
});

const updateCartItemValidation = Joi.object({
    cartItemId: mongoId.required(),
    newQuantity: Joi.number().integer().min(1).required(),
});

const deleteCartItemValidation = Joi.object({
    cartItemId: mongoId.required(),
});

export {
    addItemToCartValidation,
    updateCartItemValidation,
    deleteCartItemValidation
}