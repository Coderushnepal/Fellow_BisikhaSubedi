import logger from "../util/logger";
import * as adminLoginModels from "../models/admin-login";
import { generateToken } from "../util/jwt";
import { hash, compare } from "../util/crypt";
import NotFoundError from "../util/NotFoundError";
// import * as adminSession from "../models/adminSession";
import BadRequestError from "../util/BadRequestError";

/**
 * Create an admin
 *
 * @param params
 */
export async function createAdmin(params) {
  const hashedPassword = hash(params.password);
  const existingAdmin = await adminLoginModels.create({
    email: params.email,
    password: hashedPassword,
  });

  return {
    data: {
      existingAdmin,
    },
  };
}

/**
 * Verify email and password and login
 *
 * @param params
 */
export async function adminLogin(preq) {
  //postman bata aako data
  const { email, password } = preq;

  //database sanga compare garne data
  const admin = await adminLoginModels.getAdminCredentials({
    email,
    password,
  });

  if (!admin) {
    logger.error("Invalid Login Credentials");

    throw new BadRequestError("Invalid login credentials");
  }

  //postman bata aako password ra
  const isPasswordValid = compare(password, admin.password);
  if (!isPasswordValid) {
    logger.error("Invalid login credentials");

    throw new BadRequestError("Invalid login credentials");
  }

  // const tokenPreq = {
  //   id: adminLogin.id,
  //   email: adminLogin.email,
  // };

  const token = generateToken(admin);

  return {
    data: {
      admin,
      token,
    },
    message: "Logged In Successfully!!",
  };
}
