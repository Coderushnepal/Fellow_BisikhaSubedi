/**
 * Create 'gallery' table
 *
 * @param knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable("gallery", (table) => {
    table.increments("id");
    // table.integer("user_id").notNull().references("id").inTable("admin_log_in");
    table.string("post_caption", 1000);
    table.string("post_photo", 300);
    table.boolean("is_active").notNull().defaultTo(true);
    // table.string("posted_by").notNull().references("username").inTable("users");
  });
}

/**
 * Drop table 'gallery'
 *
 * @param knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable("gallery");
}
