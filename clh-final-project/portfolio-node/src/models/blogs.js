// import snakeize from "snakeize";
// import camelize from "camelize";
// import connection from "../db";

// const table = "blogs";

// /**
//  * Create blogs
//  *
//  * @param {*} payload
//  */
// export async function create(payload) {
//   const [result] = await (await connection.insert(snakeize(payload)))
//     .into(table)
//     .returning("*");

//   return camelize(result);
// }
