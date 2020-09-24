import * as postService from "../services/image-upload";
/**
 * Controller to add a post
 *
 * @param  req
 * @param  res
 * @param  next
 */
export async function createPost(req, res, next) {
  postService
    .addPost(req.body.postCaption, req.body.postPhoto)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
/**
 * Controller to get all posts
 *
 * @param  req
 * @param  res
 * @param  next
 */
export async function getAllPosts(req, res, next) {
  postService
    .getAllPosts(+req.params.postId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
/**
 * Controller to get specific post for a user.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export async function getPostById(req, res, next) {
  const { postId } = req.params;
  postService
    .getPostById(+postId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
/**
//  * Controller to update a post for a user.
//  *
//  * @param req
//  * @param res
//  * @param next
//  */
// export async function updatePost(req, res, next) {
//   postService
//     .updatePost(+req.user.id, +req.params.postId, req.body)
//     .then((data) => res.json(data))
//     .catch((err) => next(err));
// }
// /**
//  * Controller to remove a post for a user.
//  *
//  * @param  req
//  * @param  res
//  * @param  next
//  */
// export async function removePost(req, res, next) {
//   postService
//     .deletePost(+req.user.id, req.params.postId)
//     .then((data) => res.json(data))
//     .catch((err) => next(err));
// }
