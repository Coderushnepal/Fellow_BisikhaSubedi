const Joi = require('joi');

// we create blueprints or schemas for JavaScript objects (an object that stores information) 
// to ensure validation of key information.

//String ko case ma default mai null not allowed hudo raichha.
//allow garna chain allow('') garna parchha

const NOTE_ADDITION_SCHEMA = Joi.object ({
    title: Joi.string().min(0).max(200).required(), 
    details: Joi.string().max(1000).required(),
    typeID: Joi.number().required().deep.equal([1,2,3,4,5]),
    attachments: Joi.array().items({
        url: Joi.string().url().required(),
        filename: Joi.string(),
    }),
   isPrivate: Joi.boolean().required()
});


