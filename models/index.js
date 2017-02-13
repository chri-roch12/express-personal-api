var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");

module.exports.Beer = require("./beer.js");
// If time, referene data for hops.
//module.exports.Hops = require("./hops.js");
