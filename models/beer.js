var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BeerRecipeSchema = new Schema({
  name: String,
  ibu: Number,
  hops: String,
  malt: String,
  dryhop: Boolean,
  description: String,
});

var Beer = mongoose.model("Beer", BeerRecipeSchema);

module.exports = Beer;
