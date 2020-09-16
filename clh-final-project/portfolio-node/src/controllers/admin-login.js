// import { func } from "joi";
import * as adminService from "../services/admin-login";

/**
 * Controller to create an admin
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function createAdmin(req, res, next) {
  adminService
    .createAdmin(req.body)
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => next(err));
}

/**
 * Controller for admin login
 *
 * @param req
 * @param res
 * @param next
 */

export function adminLogin(req, res, next) {
  // console.log(req.body);
  adminService
    .adminLogin(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
