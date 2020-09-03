import fs from "fs";
import { Router } from "express";
import logger from "./utils/logger";

import {
  GET_USERS,
  GET_USER_BY_ID,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from "./constants/endpoints";
import { validateUserCreation } from "./schemas/user";

const router = Router();

const usersJsonPath = "./data/users.json";
// import validateUserCreation from "./schemas/user";

//router halepachhi app.get, app.post lai router.get garna payo
// routes haru sabai index.js ma najali routes.js ma haleko

router.get(GET_USERS, (request, response, next) => {
  logger.info("Fetching all users");
  const userJson = require(usersJsonPath);
  response.json(userJson);
});

router.get(GET_USER_BY_ID, (request, response, next) => {
  logger.info(`Fetching all users with user id ${userId}`);
  const userId = +request.params.userId;

  //   import gareko jastai gari users.json file taneko
  const userJson = require(usersJsonPath);

  const requestedUser = userJson.find((user) => user.id === userId);

  if (!requestedUser) {
    logger.info(`Cannot find user with userid ${userId}`);
    response.json({
      message: "Cannot find the user with id" + userId,
    });
  }

  response.json(requestedUser);
});

router.post(CREATE_USER, validateUserCreation, (request, response, next) => {
  const params = request.body;

  //post ma agade bata aako input valid chha ki nai yaha test garna bhanda schema banayera check gareko chum

  const userJson = require(usersJsonPath);
  const maxId = userJson.reduce((acc, current) => {
    return current.id > acc ? current.id : acc;
  }, 0);

  const updatedJson = [
    //usersjson ma aako value lai same rakhyo ani thapna paryo
    ...userJson,
    {
      //params ma postman bata halko fn, ln, pn aauchha, but id chain +1 hudai badhchha
      id: maxId + 1,
      ...params,
    },
  ];

  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));

  response.json({
    message: "New user added sucessfully!!",
    data: {
      id: maxId + 1,
      ...params,
    },
  });
});

router.delete(DELETE_USER, (request, response, next) =>
  //users.json ko data leyera id mileko data lai bhanda aaru lai array ma leyera with filter file ma write garchaam
  {
    const userId = +request.params.userId;
    //request.params.userId bata string aauchha teslai number banauna we use +

    const doesUserExist = usersJson.find((user) => user.id === userId);
    if (!doesUserExist) {
      response.json({
        message: "Cannot find user with id " + userId,
      });
    }

    //The filter() method creates an array filled with all array elements that pass a test
    //updatedlist ma chain array nai aauchha jun array ma delete gareko userId wala data hudaina
    const updatedUsersList = usersJson.filter((user) => user.id !== userId);
    fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsersList, null, 2));

    response.json({
      message: "Deleted user with id" + userId,
    });
  }
);

router.put(UPDATE_USER, (request, response, next) => {
  const userId = +request.params.userId;
  const params = request.body;

  const usersJson = require(usersJsonPath);
  const updatedJson = usersJson.map((user) => {
    if (user.id === userId) {
      return {
        ...user,
        ...params,
      };
    }
    //if userid match garyo bhanay update garera data pathaunay, else yetikai pathaunay
    return user;
  });
  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));

  response.json({
    message: "Updated user with id" + userId,
  });
});

router.get("/abcd", (req, res, next) => {
  res.json({
    message: "OK",
  });
});

export default router;
