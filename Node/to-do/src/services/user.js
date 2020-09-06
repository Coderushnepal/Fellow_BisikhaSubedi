import logger from "../utils/logger";
import usersJson from "../data/users.json";
import NotFoundError from "../utils/NotFoundError";
import connection from "../db";

/**
 * Get all users
 */
export async function getAllUsers() {
  logger.info("Fetching all users");
  const data = await connection.select("*").from("users");
  return {
    data,
    message: "List of all users",
  };
}

/**
 * Get user by id
 *
 * @param userId
 */
//file bhitra kai json bata tanda chai async await ko kura aaudaina thyo but when database connection ko kura ayo, aba need to use async await
export async function getUserById(userId) {
  logger.info(`Fetching all users with user id ${userId}`);

  // const requestedUser = usersJson.find((user) => user.id === userId);

  //array destructure gareko chha. [result] garda sadhai 0 index ko value aauchha, result matra garda sabai array nai aayera basthyo
  //0th element nai kina linay bhanda, id lay search garda sadhai 1ota matrai aauchha
  const [result] = await connection
    .select("*")
    .from("users")
    .where("id", userId);
  if (!result) {
    logger.error(`Cannot find user with userid ${userId}`);
    throw new NotFoundError("Cannot find the user");
  }

  return {
    data: result,
    message: `Information about user ID ${userId}`,
  };
}

/**
 * To create a user
 *
 * @param {*} params
 */
export function createUser(params) {
  //Finding the maximum id from existing JSON file
  const maxId = userJson.reduce((acc, current) => {
    return current.id > acc ? current.id : acc;
  }, 0);

  usersJson.push({
    id: maxId + 1,
    ...params,
  });

  return {
    message: "New user added sucessfully!!",
    data: {
      id: maxId + 1,
      ...params,
    },
  };
}

/**
 * Delete a user
 *
 * @param {*} userId
 */
export function deleterUser(userId) {
  const doesUserExist = usersJson.find((user) => user.id === userId);

  if (!doesUserExist) {
    logger.error(`Cannot find user with id ${userId}`);
    throw new Error(`Cannot find user with id ${userId}`);
  }

  //The filter() method creates an array filled with all array elements that pass a test
  //updatedlist ma chain array nai aauchha jun array ma delete gareko userId wala data hudaina
  const updatedUsersList = usersJson.filter((user) => user.id !== userId);
  fs.writeFileSync(usersJsonPath, JSON.stringify(updatedUsersList, null, 2));

  return {
    message: "Deleted user with id" + userId,
  };
}

/**
 * Update the user info
 *
 * @param userId
 * @param params
 */
export function updateUser(userId, params) {
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

  return {
    message: "Updated user with id" + userId,
  };
}
