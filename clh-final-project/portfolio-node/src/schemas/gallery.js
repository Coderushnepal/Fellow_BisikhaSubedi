import Joi from "joi";
const ADD_POST_SCHEMA = Joi.object().keys({
  postCaption: Joi.string().max(500).required().allow(""),
  postPhoto: Joi.string().max(500).required().allow(""),
});
const UPDATE_POST_SCHEMA = Joi.object()
  .keys({
    postCaption: Joi.string().max(500),
  })
  .min(1);
export function validateAddPost(req, res, next) {
  try {
    Joi.assert(req.body, ADD_POST_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}
export function validateUpdatePost(req, res, next) {
  try {
    Joi.assert(req.body, UPDATE_POST_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}
