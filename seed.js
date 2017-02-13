// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// var db = require('./models');

// var new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

var db = require('./models');

var beer_list = [
  {
  name: "Sleepy-Time Ale",
  ibu: 75,
  hops: "Centennial, Zeus, Cascade",
  malt: "Briess Organic 2-row, Crystal malt L20, Crystal malt L60",
  dryhop: false,
  description: "This sharp ale is brewed with sleep enhancing herbs valerian, hawthorn, and rosebuds. The inclusion of a strong bittering hops like Zeus helps give this brew a crisp, clean finish.",
  },
  {
  name: "Negro Leche",
  ibu: 65,
  hops: "Centennial, Zeus, Apollo, Nugs",
  malt: "Briess Organic 2-row,Crystal malt L60, Chocolate Malt",
  dryhop: true,
  description: "This devious brew is a highly sessionable black IPA. The strong influences of darker malts and heady punches of Apollo and Zeus hops give a great big mouthy flavor.",
  },
  {
  name: "Fog-Horn Red ESP",
  ibu: 60,
  hops: "Centennial, Cascade, Chinook",
  malt: "Briess Organic 2-row,Crystal malt L40, Vienna malt",
  dryhop: false,
  description: "A bew that truely stands up for Extra Special Bitters everywhere. Rich red color wrapped in a solid boquet of aromatic hops.",
  },
];

db.Beer.create(beer_list, function(err, beer){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new beer list", beer._id)
  process.exit(); // we're all done! Exit the program.
})
