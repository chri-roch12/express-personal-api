var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HopsSchema = new Schema({
  name: String,
  type: String,
  Acidity: Number,
  description: String,
});

var Beer = mongoose.model("Hops", HopsSchema);

module.exports = Hops;
