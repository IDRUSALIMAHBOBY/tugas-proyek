const connection = require("../config/database");



const getSepatu = (req, res) => {
  connection.execute("SELECT * FROM `produk`", [], function (err, results) {
    if (err) {
      return res.status(500).json({ massage: "server error 500" });
    }
    return res.status(200).json({ 
      data: results 
    });
  });
};
//`${file.originalname},`
const postSepatu = (req, res) => {   
  if(req.files) {
    let gambar = "";
    req.files.forEach((file) => {
    gambar += req.protocol + "://" + req.get("host") + "/uploads/" + `${file.originalname}`;
  });
  }
  
 
  connection.execute(
    "INSERT INTO `produk`( `merek`, `nmSepatu`, `deskripsi`, `harga`, `gambar`, `diskon`) VALUES (?,?,?,?,?,?)",
    [
      req.body.merek,
      req.body.nama,
      req.body.deskripsi,
      req.body.harga,
      gambar,
      req.body.diskon,
    ],
    function (err, results) {
      if (err) {
        return res.status(500).json({ massage: "server error 500" });
      }
      return res.status(201).json({ 
          massage: "success Add Sepatu" ,
          data   : req.body,
          image : gambar
        });
    }
  );
};
const patchSepatu = (req, res) => {
  const id = req.params.id;
  if(req.files) {
    let gambar = "";
    req.files.forEach((file) => {
    gambar += req.protocol + "://" + req.get("host") + "/uploads/" + `${file.originalname}`;
  });
    connection.execute(
      "UPDATE `produk` SET`merek`= ?,`nmSepatu`= ?,`deskripsi`= ?,`harga`= ?,`gambar`=? ,`diskon`=? WHERE id = ?",
      [
        req.body.merek,
        req.body.nama,
        req.body.deskripsi,
        req.body.harga,
        gambar,
        req.body.diskon,
        id,
      ],
      function (err, results) {
        if (err) {
          return res.status(500).json({ massage: "server error 500" });
        }
        return res.status(200).json({ 
          massage: "success Edit Sepatu",
          data   : req.body
        });
      }
    );
  } else {
    connection.execute(
      "UPDATE `produk` SET `merek`= ?,`nmSepatu`=?,`deskripsi` = ?,`harga`= ?,`diskon`= ? WHERE id = ?",
      [
        req.body.merek,
        req.body.nama,
        req.body.deskripsi,
        req.body.harga,
        req.body.diskon,
        id,
      ],
      function (err, results) {
        if (err) {
          return res.status(500).json({ massage: "server error 500" });
        }
        return res.status(200).json({ 
          massage: "success Edit Sepatu",
          data   : req.body
        });
      }
    );
  }
};


const deleteSepatu = (req, res) => {
  const id = req.params.id;
  connection.execute(
    "DELETE FROM `produk` WHERE id = ?",
    [id],
    function (err, results) {
      if (err) {
        return res.status(500).json({ massage: "server error 500" });
      }
      return res.status(200).json({ massage: "success Delete Sepatu" });
    }
  );
};
module.exports = { getSepatu, postSepatu, patchSepatu, deleteSepatu };
