const dbConfig = require("../config/db1.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.ressources = require("./ressource.model.js")(mongoose);

module.exports = db;