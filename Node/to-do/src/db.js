import dotenv from "dotenv";
import Knex from "knex";

//.env file lai gitignore garepani tyo bhitra bhako content lai code ma integarte garna ko lagi, dotenv.config() chainchha
import { dbConfig } from "./knexfile";

const connection = Knex(dbConfig);

export default connection;
