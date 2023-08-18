const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const App = express();


const routerSepatu = require("./routes/sepatu");
const routerKontak = require("./routes/kontak");
const routerConfig = require("./routes/config");

App.use(cors());

App.use(bodyParser.urlencoded({extended: true}));
App.use(bodyParser.json());


App.use("/uploads", express.static("public/uploads"));


App.use(express.json());


App.use("/api/sepatu", routerSepatu);
App.use("/api/kontak", routerKontak);
App.use("/api/config", routerConfig);

App.listen(4000, () => {
  console.log("server started port 4000");
});
