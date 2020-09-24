import snakeize from "snakeize";
import camelize from "camelize";
import connection from "../db";

const table = "blogs";

/**
 * Create blogs
 *
 * @param {*} payload
 */
export async function create(payload) {
  console.log(payload);
  const [result] = await connection
    .insert(snakeize(payload))
    .into(table)
    .returning("*");

  return camelize(result);
}

/**
 * getAll
 */
export async function getAll() {
  const result = await connection.select("*").from(table);
  return camelize(result);
}

/**
 * getById
 */
export async function getById(id) {
  const [result] = await connection.select("*").from(table).where({ id });
  return result ? camelize(result) : null;
}

/**
 * update blogs
 *
 * @param {*} blogsId
 * @param {*} params
 */
export async function update(blogsId, params) {
  return connection(table).update(snakeize(params)).where({ id: blogsId });
}

/**
 * delete
 *
 * @param {*} blogsId
 */
export async function remove(blogsId) {
  return connection(table).delete().where({ id: blogsId });
}
