/**
 * Create 'admin_sessions' table
 *
 * @param knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable("admin_sessions", (table) => {
    table.increments("id");
    table
      .string("admin_email")
      .notNull()
      .references("email")
      .inTable("admin_log_in");
    table.string("token", 500).notNull();
    table.boolean("is_active").notNull().defaultTo(true);
    table.timestamp("created_at").defaultTo(knex.raw("now()"));
  });
}

/**
 * Drop table 'admin_sessions'
 *
 * @param knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.dropTable("admin_sessions");
}
