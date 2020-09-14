/**
 * Create 'personal_details' table
 *
 * @param knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.createTable("personal_details", (table) => {
    table.string("name", 100).notNull();
    table.specificType("iam", "text ARRAY");
  });
}

/**
 * Drop table 'personal_details'
 *
 * @param knex
 * @returns {Promise}
 */
export function down(knex) {
  knex.schema.dropTable("personal_details");
}
