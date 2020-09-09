//Model file ko main kaam is
// 1. Database bata data extract garne ra service lai pathaunay
// 2. kei kura service bata linay ani db ma insert garnay

//Model ma business logic kei aaudaina, all business logic goes to services
// Model is a class. Every model ekota table sanga associated hunchha
// db ma user table chha then, user model bannay bhayo, same if user_phone_number bhannay table chha then same model bannay bhayo

import connection from "../db";
import snakeize from "snakeize";
import camelize from "camelize";

import { FETCH_USERS_WITH_PHONE_NUMBERS } from "../db/queries/user";
import { func } from "joi";

const table = "users";

export async function getAll() {
  //users bhannay table bata data dinay bhayo
  const { rows } = await connection.raw(FETCH_USERS_WITH_PHONE_NUMBERS);

  return camelize(rows);
}

export async function getById(id) {
  // console.log("undefined here ?****************************");
  const [result] = await connection
    .select("*")
    .from(table)
    .where({ id })
    .where("is_active", true);

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

export function remove(userId) {
  return connection(table)
    .update({
      is_active: false,
    })
    .where({ id: userId });
}

export function update(userId, params) {
  return connection(table).update(snakeize(params)).where({ id: userId });
}
