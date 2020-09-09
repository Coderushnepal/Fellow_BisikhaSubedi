//migrations ma sadhai 2ta file hunchha up and down
// Up lay table banauchha, down lay tei table hatauchha

export function up(knex) {
  return knex.schema.alterTable("users", (table) => {
    table.boolean("is_deleted").notNull().defaultTo(false);
  });
}

export function down(knex) {
  return knex.schema.alterTable("users", (table) => {
    table.dropColumn("is_deleted");
  });
}
