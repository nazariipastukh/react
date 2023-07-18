import Joi from 'joi'

export const commentValidators = Joi.object({
    email: Joi.string().required().min(10).pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/).messages({
        "string.empty": "You must be at least 18 years old",
        "string.min": "Minimum 10",
        "string.pattern.base": "Not email",
    }),
    postId: Joi.string().required().pattern(/\b([1-9]|[1-9][0-9]|100)\b/),
    name: Joi.string().required(),
    body: Joi.string().required()
})