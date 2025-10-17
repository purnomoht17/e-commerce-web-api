import Joi from "joi";

const mongoId = Joi.string().length(24);

const createAddressValidation = Joi.object({
    recipientName: Joi.string().max(100).required(),
    phone: Joi.string().min(8).max(15).required(), 
    
    fullAddress: Joi.string().max(500).required(),
    subdistrict: Joi.string().max(100).required(),
    district: Joi.string().max(100).required(),
    city: Joi.string().max(100).required(),
    province: Joi.string().max(100).required(),
    postalCode: Joi.string().length(5).required(), 

    label: Joi.string().max(50).optional(),
    isPrimary: Joi.boolean().optional(),
    latitude: Joi.number().optional(),
    longitude: Joi.number().optional(),
});

const updateAddressValidation = Joi.object({
    recipientName: Joi.string().max(100).optional(),
    phone: Joi.string().min(8).max(15).optional(), 
    
    fullAddress: Joi.string().max(500).optional(),
    subdistrict: Joi.string().max(100).optional(),
    district: Joi.string().max(100).optional(),
    city: Joi.string().max(100).optional(),
    province: Joi.string().max(100).optional(),
    postalCode: Joi.string().length(5).optional(), 
    
    label: Joi.string().max(50).optional(),
    isPrimary: Joi.boolean().optional(),
    latitude: Joi.number().optional(),
    longitude: Joi.number().optional(),
});

const addressIdValidation = Joi.object({
    addressId: mongoId.required(),
});


export {
    createAddressValidation,
    updateAddressValidation,
    addressIdValidation
};