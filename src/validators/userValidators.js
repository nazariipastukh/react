import Joi from "joi";

export const userValidator = Joi.object({
    email: Joi.string().required().min(10).pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).messages({
        "string.empty": "You must be at least 18 years old",
        "string.min": "Minimum 10",
        "string.pattern.base": "Not email",
    }),
    name: Joi.string().required(),
    userName: Joi.string().required(),
    street: Joi.string().required(),
    suite: Joi.string().required(),
    city: Joi.string().required(),
    zipcode: Joi.number().required(),
    lng: Joi.number().required(),
    lat: Joi.number().required(),
    phone: Joi.number().required(),
    website: Joi.string().required(),
    companyName: Joi.string().required(),
    catchPhrase: Joi.string().required(),
    bs: Joi.string().required()
});