import connection from "../db";
import snakeize from "snakeize";
import camelize from "camelize";

const table = "admin_log_in";

export async function create(params) {
  // console.log(params);
  const [data] = await connection
    .insert(snakeize(params))
    .into(table)
    .returning("*");

  return camelize(data);
}

export async function getAdminCredentials(data) {
  const data = await connection.select("*").from(table);
  console.log("Is credential here?", data);
  return data ? camelize(data) : null;
}
