const Router = require("express");
const {
  deleteConfigKey,
  postConfigKey,
  getKey,
} = require("../controller/configController");
const route = Router.Router();
const { cekAuth } = require("../lib/Auth");
route.get("/", cekAuth, getKey);

route.post("/", cekAuth, postConfigKey);

route.delete("/:id", cekAuth, deleteConfigKey);

module.exports = route;
