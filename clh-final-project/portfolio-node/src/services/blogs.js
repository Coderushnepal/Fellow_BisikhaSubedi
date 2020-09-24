import { func } from "joi";
import * as Blogs from "../models/blogs";
import logger from "../util/logger";

/**
 * Create Blogs Page
 * @param {} payload
 */
export async function createBlogs(payload) {
  logger.info("Blogs created successfully");
  const data = await Blogs.create(payload);

  return {
    data,
    message: "Blogs created successfully",
  };
}

/**
 * Get Blogs
 */
export async function getBlogs() {
  logger.info("Fetching Blogs");
  const data = await Blogs.getAll();
  return {
    data,
    message: "Blogs received",
  };
}

/**
 * get Blogs by ID
 *
 * @param {*} blogsID
 *
 */
export async function getBlogsById(blogsId) {
  const data = await Blogs.getById(blogsId);

  return {
    data,
    message: `Blogs Id ${blogsId}`,
  };
}

/**
 * Update Blog
 *
 * @param {*} blogsID
 * @param {*} params
 */
export async function updateBlogs(blogsId, params) {
  const data = await Blogs.update(blogsId, params);

  return {
    data,
    message: `updated blogs by id ${blogsId}`,
  };
}

/**
 * Delete blogs
 *
 * @param blogsId
 */

export async function deleteBlogs(blogsId) {
  await Blogs.remove(blogsId);

  return {
    message: `Deleted blog with blog id ${blogsId}`,
  };
}
