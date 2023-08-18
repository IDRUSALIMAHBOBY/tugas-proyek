
const mysql = require("mysql2");

// membuat koneksi ke database mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sepatu_web",
});

module.exports = connection;
