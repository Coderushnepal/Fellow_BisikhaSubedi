import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";
import morgan from "morgan";
import crypto from "crypto";
// import ejs from "ejs";

import logger from "./util/logger";
import routes from "./routes";

const server = express();

//Middlewares
dotenv.config();
server.use(cors());
// server.use(express.static(__dirname, "uploads"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(routes);

//to get the path of the file
server.listen(process.env.PORT, () => {
  logger.info(`listening on port ${process.env.PORT}`);
});
