import Joi from "joi";

// Definisi skema untuk AddressDetails (embedded document)
const addressDetailsSchema = Joi.object({
    recipientName: Joi.string().max(100).required(),
    phone: Joi.string().min(8).max(15).required(),

    fullAddress: Joi.string().max(500).required(),
    subdistrict: Joi.string().max(100).required(),
    district: Joi.string().max(100).required(),
    city: Joi.string().max(100).required(),
    province: Joi.string().max(100).required(),
    postalCode: Joi.string().length(5).required(),

    label: Joi.string().max(50).optional(),
    latitude: Joi.number().optional(),
    longitude: Joi.number().optional(),
}).required();

// Definisikan skema untuk Order Item (bukan array di Order, tetapi data keranjang)
// Meskipun OrderItem dibuat dari CartItem di backend
const orderItemSChema = Joi.object({
    productId: Joi.string().length(24).required(),
    quantity: Joi.number().integer().min(1).required()
});

const createOrderValidation = Joi.object({
    shippingAddress: addressDetailsSchema,
    paymentMethod: Joi.string().valid("MIDTRANS_SNAP", "CASH_ON_DELIVERY", "BANK_TRANSFER"),
    shippingCost: Joi.number().min(0).optional(),
    couponCode: Joi.string().max(50).optional()
});

export {
    createOrderValidation
}