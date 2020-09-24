import { func } from "joi";
// // import { func } from "joi";
import * as blogsService from "../services/blogs";

/**
 * Controller to create blogs
 *
 * @param req
 * @param res
 */

export function createBlogs(req, res, next) {
  blogsService
    .createBlogs(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get blogs
 *
 * @param req
 * @param res
 * @param next
 */

export function getBlogs(req, res, next) {
  blogsService
    .getBlogs()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get blogs by ID
 *
 * @param req
 * @param res
 * @param next
 */
export function getBlogsById(req, res, next) {
  blogsService
    .getBlogsById(+req.params.blogsId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to update the blogs
 *
 * @param req
 * @param res
 * @param next
 */
export function updateBlogs(req, res, next) {
  blogsService
    .updateBlogs(+req.params.blogsId, req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to delete blogs
 *
 * @param req
 * @param res
 * @param next
 */
export function deleteBlogs(req, res, next) {
  blogsService
    .deleteBlogs(+req.params.blogsId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
