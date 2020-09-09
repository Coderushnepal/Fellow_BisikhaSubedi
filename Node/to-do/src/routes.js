import { Router } from "express";

// import {
//   GET_USERS,
//   GET_USER_BY_ID,
//   CREATE_USER,
//   DELETE_USER,
//   UPDATE_USER,
// } from "./constants/endpoints";

import * as endpoints from "./constants/endpoints";
import * as userController from "./controllers/user";
import { validateUserCreation, validateUserUpdate } from "./schemas/user";

const router = Router();

// const usersJsonPath = "./data/users.json";
// import validateUserCreation from "./schemas/user";

//router halepachhi app.get, app.post lai router.get garna payo
// routes haru sabai index.js ma najali routes.js ma haleko

router.get(endpoints.GET_USERS, userController.getAllUsers);

router.get(endpoints.GET_USER_BY_ID, userController.getUserById);

router.post(
  endpoints.CREATE_USER,
  validateUserCreation,
  userController.createUser
);

router.delete(endpoints.DELETE_USER, userController.deleteUser);

router.put(
  endpoints.UPDATE_USER,
  validateUserUpdate,
  userController.updateUser
);

export default router;

//**************sabai remove gareko but bujhna parne code ho**************************************/

//post ma agade bata aako input valid chha ki nai yaha test garna bhanda schema banayera check gareko chum

// const userJson = require(usersJsonPath);

// router.delete(DELETE_USER, (request, response, next) =>
//   //users.json ko data leyera id mileko data lai bhanda aaru lai array ma leyera with filter file ma write garchaam
//   {
//     const userId = +request.params.userId;
//     //request.params.userId bata string aauchha teslai number banauna we use +

//     const doesUserExist = usersJson.find((user) => user.id === userId);
//     if (!doesUserExist) {
//       response.json({
//         message: "Cannot find user with id " + userId,
//       });
//     }

//     //The filter() method creates an array filled with all array elements that pass a test
//     //updatedlist ma chain array nai aauchha jun array ma delete gareko userId wala data hudaina
//     const updatedUsersList = usersJson.filter((user) => user.id !== userId);
//     fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsersList, null, 2));

//     response.json({
//       message: "Deleted user with id" + userId,
//     });
//   }
// );

// router.put(UPDATE_USER, (request, response, next) => {
//   const userId = +request.params.userId;
//   const params = request.body;

//   const usersJson = require(usersJsonPath);
//   const updatedJson = usersJson.map((user) => {
//     if (user.id === userId) {
//       return {
//         ...user,
//         ...params,
//       };
//     }
//     //if userid match garyo bhanay update garera data pathaunay, else yetikai pathaunay
//     return user;
//   });
//   fs.writeFileSync(usersJsonPath, JSON.stringify(updatedJson, null, 2));

//   response.json({
//     message: "Updated user with id" + userId,
//   });
// });

// router.get("/abcd", (req, res, next) => {
//   res.json({
//     message: "OK",
//   });
// });
