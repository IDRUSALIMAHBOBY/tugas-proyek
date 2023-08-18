const connection = require("../config/database");
const { genereteKey } = require("../lib/GenereteKey");


const getKey = (req, res) => {
  connection.execute("SELECT * FROM `config`", [], function (err, results) {
    if (err) {
      return res.status(500).json({ massage: "server error 500" });
    }
    return res.status(200).json({ 
      dataKey: results 
    });
  });
};
const postConfigKey = (req, res) => {
  connection.execute(
    "INSERT INTO `config`(`api_key`) VALUES (?)",
    [genereteKey()],
    function (err, results) {
      if (err) {
        return res.status(500).json({ massage: "server error 500" });
      }
      return res.status(201).json({ massage: "success Add Config Key" });
    }
  );
};

const deleteConfigKey = (req, res) => {
  const id = req.params.id;
  connection.execute(
    "DELETE FROM `config` WHERE id = ?",
    [id],
    function (err, results) {
      if (err) {
        return res.status(500).json({ massage: "server error 500" });
      }
      return res.status(200).json({ massage: "success Delete Config" });
    }
  );
};

module.exports = { getKey, deleteConfigKey, postConfigKey };
