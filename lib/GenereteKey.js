const crypto = require("crypto");

const genereteKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

module.exports = { genereteKey };
