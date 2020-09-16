import Joi from "joi";

const CREATE_ADMIN_SCHEMA = Joi.object().keys({
  email: Joi.string().max(100).required(),
  password: Joi.string().min(8).max(30).required(),
});

const CREATE_ADMIN_LOGIN_SCHEMA = Joi.object().keys({
  email: Joi.string().max(20).required(),
  password: Joi.string().min(8).max(30).required(),
});

export function validateAdminCreation(req, res, next) {
  try {
    Joi.assert(req.body, CREATE_ADMIN_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}

export function validateAdminLogin(req, res, next) {
  try {
    Joi.assert(req.body, CREATE_ADMIN_LOGIN_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}
