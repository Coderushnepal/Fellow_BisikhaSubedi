import logger from "../util/logger";
import NotFoundError from "../util/NotFoundError";
import * as UserPost from "../models/image-upload";
/**
 *
 * @param  postCaption
 * @param  postPhoto
 */
export async function addPost(postCaption, postPhoto) {
  const data = await UserPost.add(postCaption, postPhoto);
  return {
    data,
    message: "New Post added successfully.",
  };
}

/**
 * Get all posts.
 *
 * @param
 */
export async function getAllPosts() {
  logger.info(`Getting the gallery images`);
  const data = await UserPost.getAll();
  // console.log(data);
  return {
    data,
    message: "Post details",
  };
}

/**
 * Get specific post by id
 *
 * @param postId
 */
export async function getPostById(postId) {
  logger.info(`Getting postId ${postId}`);
  const data = await UserPost.getById(postId);
  if (!data) {
    logger.error(`Cannot find postId ${postId}`);
    throw new NotFoundError(`Cannot find postId ${postId} `);
  }
  return {
    data,
    message: `Post details for post id ${postId}`,
  };
}

// /**
//  * Update a post for a user.
//  *
//  * @param userId
//  * @param postId
//  * @param updateParams
//  */
// export async function updatePost(userId, postId, updateParams) {
//   logger.info(`Updating postId ${postId} for postId ${postId}`);
//   const data = await UserPost.update(userId, postId, updateParams);
//   return {
//     data,
//     message: "Post updated",
//   };
// }
// /**
//  * Remove a post for a user.
//  *
//  * @param  userId
//  * @param  postId
//  */
// export async function deletePost(userId, postId) {
//   logger.info(`Removing postId ${postId} for postId ${postId}`);
//   const data = await UserPost.remove(userId, postId);
//   return {
//     message: "Post deleted",
//   };
// }

// import * as imageUploadModels from "../models/image-upload";

// /**
//  * Upload image for gallery page
//  *
//  */

// export function imageUpload() {
//   const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, "uploads");
//     },
//     filename: (req, file, cb) => {
//       console.log(file);
//       cb(null, Date.now() + path.extname(file.originalname));
//     },
//   });

//   //gallery filefilter
//   const fileFilter = (req, file, cb) => {
//     if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };

//   const upload = multer({ storage: storage, fileFilter: fileFilter });
// }
