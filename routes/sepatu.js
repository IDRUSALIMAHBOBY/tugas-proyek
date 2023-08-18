const Router = require("express");

const {
  getSepatu,
  postSepatu,
  patchSepatu,
  deleteSepatu,
} = require("../controller/SepatuController");
const route = Router.Router();
const { upload } = require("../config/upload");
const { cekAuth } = require("../lib/Auth");



route.get("/", cekAuth, getSepatu);

route.post("/", upload.array("gambar", 5), cekAuth, postSepatu);

route.patch("/:id", upload.array("gambar", 5), cekAuth, patchSepatu);

route.delete("/:id", cekAuth, deleteSepatu);

module.exports = route;
