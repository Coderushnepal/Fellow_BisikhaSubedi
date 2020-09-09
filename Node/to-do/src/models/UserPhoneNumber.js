import connection from "../db";
import snakeize from "snakeize";
import camelize from "camelize";
import { response } from "express";

const table = "user_phone_number";

export async function getPhoneNumbersByUserId(userId) {
  const result = await connection
    .select("id", "phone_number", "type")
    .from(table)
    .where("user_id", userId);

  return camelize(result);
}

export async function add(params) {
  //users bhannay table bata data dinay bhayo
  const insertData = snakeize(params);
  const [result] = await connection.batchInsert(table, insertData);

  return camelize(result);
}
