const connection = require("../config/database");

const cekAuth = (req, res, next) => {
  const key = req.headers["x-api-key"];
  if (key) {
    connection.execute(
      "SELECT * FROM `config` WHERE api_key = ?",
      [key],
      function (err, results) {
        if (err) {
          return res.status(500).json({ massage: "server error 500" });
        }
        if (results.length > 0) {
          return next();
        }
      }
    );
  } else {
    return res.status(401).json({ message: "Api Key is Required" });
  }
};

module.exports = { cekAuth };
