import { Router } from "express";

import * as endpoints from "./constants/endpoints";
import * as adminController from "./controllers/admin-login";
import {
  validateAdminLogin,
  validateAdminCreation,
} from "./schemas/admin-login";

const router = Router();

router.get("/", (req, res, next) => {
  res.json({
    name: "Personal Portfolio",
    version: "1.0.0",
  });
});

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

export default router;
