import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  res.json({
    name: "Personal Portfolio",
    version: "1.0.0",
  });
});

export default router;
