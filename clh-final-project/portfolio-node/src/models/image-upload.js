import snakeize from "snakeize";
import camelize from "camelize";
import connection from "../db";

const TABLE = "gallery";

//Model to add post
export async function add(postCaption, postPhoto) {
  const [insertedData] = await connection
    .insert({
      post_caption: postCaption,
      post_photo: postPhoto,
    })
    .into(TABLE)
    .returning("*");
  console.log(insertedData);
  return camelize(insertedData);
}
//Model to get post by Id
export async function getById(postId) {
  const data = await connection
    .select("id", "post_caption")
    .from(TABLE)
    .where({ id: postId });
  return data[0] ? camelize(data[0]) : null;
}

//Model to get all posts.
export async function getAll() {
  const result = await connection.select("*").from(TABLE);
  return camelize(result);
}
// //Model to update post.
// export async function update(userId, postId) {
//   const [updatedData] = await connection(table)
//     .update(snakeize(updateParams))
//     .where({ user_id: userId, id: postId })
//     .returning("*");
//   return camelize(updatedData);
// }
// //Model to delete a post.
// export async function remove(userId, postId) {
//   await connection(TABLE)
//     .update({ is_active: false })
//     .where({ user_id: userId, id: postId });
// }
