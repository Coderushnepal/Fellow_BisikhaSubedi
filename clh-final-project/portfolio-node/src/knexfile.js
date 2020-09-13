require("@babel/register");

const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/../.env" });

const dbConfig = {
  client: process.env.DB_CLIENT,
  connection: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    directory: "./migrations",
    table: "migrations",
    stub: "./stubs/migration.stub",
  },
  seed: {
    directory: "./seeds",
  },
};

module.exports = dbConfig;
