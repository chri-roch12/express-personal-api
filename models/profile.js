var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  name: String,
  githubLink: "https://github.com/chri-roch12/express-personal-api",
  githubProfileImage: "https://avatars2.githubusercontent.com/u/25183085?v=3&s=400",
  personalSiteLink: "https://chri-roch12.github.io",
  currentCity: "Berkeley, CA",
  Siblings: [{name: "Jon Prochnow", type: "brother", age: "32"}],
});

var Beer = mongoose.model("Beer", BeerRecipeSchema);

module.exports = Beer;
