require("@babel/register");
const dotenv = require("dotenv");
// import Knex from "knex";

//.env file lai gitignore garepani tyo bhitra bhako content lai code ma integarte garna ko lagi, dotenv.config() chainchha
dotenv.config({ path: __dirname + "/../.env" });

const dbConfig = {
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  migrations: {
    directory: "./migrations",
    table: "migrations",
  },
};

module.exports = dbConfig;
