import { Router } from "express";

import * as endpoints from "./constants/endpoints";
import * as adminController from "./controllers/admin-login";
import {
  validateAdminLogin,
  validateAdminCreation,
} from "./schemas/admin-login";
// import imageUpload from "./services/image-upload";
import * as blogsController from "./controllers/blogs";
import * as postController from "./controllers/image-upload";
import { validateAddPost } from "./schemas/gallery";

const router = Router();

router.get("/", (req, res, next) => {
  res.json({
    name: "Personal Portfolio",
    version: "1.0.0",
  });
});

/**
 * Sign up and login routes for admin page
 */
router.post(
  endpoints.ADMIN_SIGNUP,
  validateAdminCreation,
  adminController.createAdmin
);

router.post(
  endpoints.ADMIN_LOGIN,
  validateAdminLogin,
  adminController.adminLogin
);

/**
 * routes for blogs page
 */
router.post(endpoints.CREATE_BLOGS, blogsController.createBlogs);
router.get(endpoints.GET_BLOGS, blogsController.getBlogs);
router.get(endpoints.GET_BLOGS_BY_ID, blogsController.getBlogsById);
router.put(endpoints.UPDATE_BLOGS, blogsController.updateBlogs);
router.delete(endpoints.DELETE_BLOGS, blogsController.deleteBlogs);

//Upload image in server
router.get(endpoints.ALL_POSTS, postController.getAllPosts);
router.get(endpoints.GET_POST_BY_ID, postController.getPostById);
router.post(endpoints.CREATE_POST, postController.createPost);
// router.put("/posts/:postId", validateUpdatePost, postController.updatePost);
// router.delete("/posts/:postId", postController.removePost);

export default router;
