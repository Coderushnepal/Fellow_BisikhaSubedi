import { sign, decode } from "jsonwebtoken";

export function generateToken(admin) {
  return sign(admin, process.env.TOKEN_SECRET, {
    expiresIn: 1200,
  });
}

export function decodeToken(token) {
  return decode(token);
}
