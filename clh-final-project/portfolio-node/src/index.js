import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import logger from "./util/logger";
import routes from "./routes";

const server = express();

dotenv.config();
server.use(cors());
server.use(bodyParser.json());
server.use(routes);

//Middlewares

server.listen(process.env.PORT, () => {
  logger.info(`listening on port ${process.env.PORT}`);
});
