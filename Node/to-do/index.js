import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";

import routes from "./src/routes";
import logger from "./src/utils/logger";
import genericErrorHandler from "./src/middlewares/genericErrorHandler";

// Babel halepachhi balla es6 ko syntax anusar import garna paryo, natra tala commented way ma import garna parthyo which is not a es6 way

// const express = require("express");
// file write garna use gareko library
// const fs = require("fs");
// const bodyParser = require("body-parser");

// const { response, request } = require("express");

// const routes = require("./src/routes");

const loggingMiddleware = (req, res, next) => {
  const url = req.url;
  const method = req.method;

  logger.info(`${method} ${url}`);

  next();
};

const app = express();

//app.use chain middleware haru nai ho sabai
//first ma aako bodylai json ma parse garchha then tala janchha
app.use(bodyParser.json()); //yo line lekhena bhanay postman bata json format mai data pathaye pani express lay kun datatype ko request aayo bhaera nai bujhdaina so parse garna parchha. json data ma kaam garnay bitikai parsing garnai paryo
app.use(morgan("tiny"));
app.use(loggingMiddleware);
app.use(routes);
app.use(genericErrorHandler);

dotenv.config();

app.listen(process.env.APP_PORT, () => {
  logger.info(`Listening on port ${process.env.APP_PORT}`);
});
