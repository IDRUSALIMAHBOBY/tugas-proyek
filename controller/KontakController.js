const connection = require("../config/database");

const getKontak = (req, res) => {
  connection.execute("SELECT * FROM `kontak`", [], function (err, results) {
    if (err) {
      return res.status(500).json({ massage: "server error 500" });
    }
    return res.status(200).json({ 
      dataKontak: results 
    });
  });
};
const postKontak = (req, res) => {
  connection.execute(
    "INSERT INTO `kontak`(`icon`, `nama`) VALUES (?,?)",
    [req.body.icon, req.body.nama],
    function (err, results) {
      if (err) {
        return res.status(500).json({ 
            massage: "server error 500" 
          });
      }
      return res.status(201).json({ 
        massage: "success Add Kontak",
        dataKontak : req.body
      });
    }
  );
};


//edit kontak
const patchKontak = (req, res) => {
  const id = req.params.id;
  connection.execute(
    "UPDATE `kontak` SET`icon`= ?,`nama`=? WHERE id = ?",
    [req.body.icon, req.body.nama, id],
    function (err, results) {
      if (err) {
        return res.status(500).json({ 
          massage: "server error 500" 
         
        });
      }
      return res.status(200).json({ 
        massage: "success Edit Kontak",
        dataKontak : req.body
      });
    }
  );
};


//hapus kontak
const deleteKontak = (req, res) => {
  const id = req.params.id;
  connection.execute(
    "DELETE FROM `kontak` WHERE id = ?",
    [id],
    function (err, results) {
      if (err) {
        return res.status(500).json({ massage: "server error 500" });
      }
      return res.status(200).json({ 
        massage: "success Delete Kontak" 
      });
    }
  );
};
module.exports = { getKontak, postKontak, patchKontak, deleteKontak };
