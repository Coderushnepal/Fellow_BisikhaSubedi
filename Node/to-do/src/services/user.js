import logger from "../utils/logger";
import usersJson from "../data/users.json";
import NotFoundError from "../utils/NotFoundError";
import * as User from "../models/User";
import * as UserPhoneNumber from "../models/UserPhoneNumber";
/**
 * Get all users
 */
export async function getAllUsers() {
  logger.info("Fetching all users");
  const users = await User.getAll();
  const data = users.map((user) => {
    const { phoneNumbers } = user;

    const hasEmptyPhoneNumber = Object.keys(phoneNumbers[0]).length === 0;

    return {
      ...user,
      phoneNumbers: hasEmptyPhoneNumber ? [] : phoneNumbers,
    };
  });
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
  const result = await verifyUserExistence(userId);
  const phoneNumbers = await UserPhoneNumber.getPhoneNumbersByUserId(userId);

  return {
    data: {
      ...result,
      phoneNumbers,
    },
    message: `Information about user ID ${userId}`,
  };
}

/**
 * To create a user
 *
 * @param {*} params
 */
export async function createUser(params) {
  const { firstName, lastName, email, password, phoneNumbers } = params;
  const userInsertData = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  const insertDataForPhoneNumbers = phoneNumbers.map((phone) => ({
    userId: userInsertData.id,
    phoneNumber: phone.number,
    type: phone.type,
  }));

  const phoneNumberInsertedData = await UserPhoneNumber.add(
    insertDataForPhoneNumbers
  );
  // console.log("here????");
  return {
    data: params,
    message: "New user added sucessfully!!",
  };
}

/**
 * Delete a user
 *
 * @param {*} userId
 */
export async function deleteUser(userId) {
  await verifyUserExistence(userId);
  await User.remove(userId);

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
export async function updateUser(userId, params) {
  //first ma user chha ki nai verify garyo
  await verifyUserExistence(userId);

  await User.update(userId, params);
  return {
    data: {
      ...result,
      ...params,
    },
    message: "Updated user with id" + userId,
  };
}

async function verifyUserExistence(userId) {
  logger.info(`Fetching user information with id ${userId}`);

  const result = await User.getById(userId);
  if (!result) {
    logger.error(`Cannot find user with userid ${userId}`);
    throw new NotFoundError(`Cannot find user with userid ${userId}`);
  }

  return result;
}
