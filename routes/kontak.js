const Router = require("express");
const {
  deleteKontak,
  patchKontak,
  postKontak,
  getKontak,
} = require("../controller/KontakController");
const route = Router.Router();
const { cekAuth } = require("../lib/Auth");

route.get("/", cekAuth, getKontak);

route.post("/", cekAuth, postKontak);

route.patch("/:id", cekAuth, patchKontak);

route.delete("/:id", cekAuth, deleteKontak);

module.exports = route;
