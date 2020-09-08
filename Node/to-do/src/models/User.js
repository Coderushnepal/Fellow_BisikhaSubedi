//Model file ko main kaam is
// 1. Database bata data extract garne ra service lai pathaunay
// 2. kei kura service bata linay ani db ma insert garnay

//Model ma business logic kei aaudaina, all business logic goes to services
// Model is a class. Every model ekota table sanga associated hunchha
// db ma user table chha then, user model bannay bhayo, same if user_phone_number bhannay table chha then same model bannay bhayo

import connection from "../db";
import snakeize from "snakeize";
import camelize from "camelize";

const table = "users";

export async function getAll() {
  //users bhannay table bata data dinay bhayo
  const result = await connection.select("*").from(table);
  return camelize(result);
}

export async function getById(id) {
  const [result] = connection.select("*").from(table).where({ id });

  return result ? camelize(result) : null;
}

export async function create(params) {
  // console.log("here??");
  const [data] = await connection
    .insert(snakeize(params))
    .into(table)
    .returning("*");

  return camelize(data);
}
