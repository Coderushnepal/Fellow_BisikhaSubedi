import { sign, decode } from "jsonwebtoken";

export function generateToken(admin) {
  return sign(admin, process.env.TOKEN_SECRET, {
    expiresIn: 12000,
  });
}

export function decodeToken(token) {
  return decode(token);
}
