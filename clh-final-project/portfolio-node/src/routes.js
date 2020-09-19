import { Router } from "express";

import * as endpoints from "./constants/endpoints";
import * as adminController from "./controllers/admin-login";
import {
  validateAdminLogin,
  validateAdminCreation,
} from "./schemas/admin-login";
import * as blogsController from "./controllers/blogs";

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

// router.

/**
 * routes for blogs page
 */
// router.post(endpoints.CREATE_BLOGS, blogsController.createBlogs);
// router.get(endpoints.GET_BLOGS, blogsController.getBlogs);
// router.get(endpoints.GET_BLOGS_BY_ID, blogsController.getBlogsById);
// router.put(endpoints.UPDATE_BLOGS, blogsController.updateBlogs);
// router.delete(endpoints.DELETE_BLOGS, blogsController.deleteBlogs);

export default router;
