import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";
// import ejs from "ejs";

import logger from "./util/logger";
import routes from "./routes";

const server = express();

//Middlewares
dotenv.config();
server.use(cors());
// server.use("/uploads", express.static("uploads"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(routes);

//gallery upload
server.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//gallery storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

//gallery filefilter
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//Init upload
const upload = multer({ storage: storage, fileFilter: fileFilter });

//upload route
server.post("/upload", upload.single("image"), (req, res, next) => {
  try {
    return res.status(201).json({
      message: "File uploded successfully",
    });
  } catch (error) {
    console.error(error);
  }
});

server.listen(process.env.PORT, () => {
  logger.info(`listening on port ${process.env.PORT}`);
});
