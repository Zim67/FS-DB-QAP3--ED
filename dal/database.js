const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Zim67FS-DB-QAP3--ED",
  password: "admin", // Make sure to provide the correct password here
  port: 5432,
});

module.exports = pool;