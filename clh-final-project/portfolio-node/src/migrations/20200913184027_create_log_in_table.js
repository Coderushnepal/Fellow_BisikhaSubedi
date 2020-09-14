/**
 * Create 'admin_log_in' table
 *
 * @param knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable("admin_log_in", (table) => {
    table.string("email", 100).notNull().unique;
    table.string("password", 200).notNull();
  });
}

/**
 * Drop table 'admin_log_in'
 *
 * @param knex
 * @returns {Promise}
 */
export function down(knex) {
  knex.schema.dropTable("admin_log_in");
}
