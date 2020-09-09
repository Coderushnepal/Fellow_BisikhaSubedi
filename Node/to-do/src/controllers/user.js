import * as userService from "../services/user";
import logger from "../utils/logger";

/**
 * Controller to get all the users
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
export function getAllUsers(request, response, next) {
  userService
    .getAllUsers()
    .then((data) => response.json(data))
    .catch((err) => next(err));

  //mathi ra tala ko same kaam ho. mathi chain after using database case ho
  //tala ko try catch chain json data ma find garera service bata return gareko kura ho
  // try {
  //   const data = userService.getAllUsers();
  // } catch (err) {
  //   next(err);
  // }
}

/**
 * Controller to get users by ID
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
export function getUserById(req, res, next) {
  userService
    .getUserById(+req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
  // try {
  //   const data = userService.getUserById(+req.params.userId);

  //   res.json(data);
  // } catch (err) {
  //   next(err);
  // }
}

/**
 * Controller to create users
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
export function createUser(req, res, next) {
  userService
    .createUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to delete users
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
export function deleteUser(req, res, next) {
  console.log("Unhandled Promise from here ??????????????");
  userService
    .deleteUser(+req.params.userId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to update users
 *
 * @param {*} request
 * @param {*} response
 * @param {*} next
 */
export function updateUser(req, res, next) {
  userService
    .updateUser(+req.params.userId, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));

  // try {
  //   const data = userService.updateUser(userId, params);

  //   res.json(data);
  // } catch (err) {
  //   next(err);
  // }
}
