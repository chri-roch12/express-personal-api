// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

 var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

 app.get('/api/profile', function (req, res) {
   var chris = {
     name: "Chris Prochnow",
     githubLink: "https://github.com/chri-roch12/express-personal-api",
     githubProfileImage: "https://avatars2.githubusercontent.com/u/25183085?v=3&s=400",
     personalSiteLink: "https://chri-roch12.github.io",
     currentCity: "Berkeley, CA",
     siblings: "Jon Prochnow"
   };
   res.send(chris);
 });


//find all beer recipes
app.get('/api/beer', function (req, res) {
  db.Beer.find(function(err, beers){
    if (err) { return console.log("index error: " + err); }
    if (req.query.limit === undefined) {
      res.json(beers);
    } else {
      var limit = Number(req.query.limit);
      var beers = beers.slice(0, limit);
      res.json(beers)
    }
  });
});

//find one beer recipe
app.get('/api/beer/:id', function (req, res) {
  var beerId = eq.params.id;
  db.Beer.findOne({_id: id}, function(err, beer) {
    res.json(beer);
  });
});

//Create new beer recipe. *BUG broken.
app.post('/api/beer', function (req, res) {
  console.log('Beer to create', req.newBeerForm);
  var newBeer = new db.Beer(req.newBeerForm);
  newBeer.save(function handleDBBeerSaved(err, savedBeer) {
    res.json(savedBeer);
  });
});

//Delete a beer recipe. BUG broken.
app.delete('/api/beer/:id', function (req, res) {
  console.log('beer deleted', req.params);
  var beerId = req.params.id;
  db.Beer.findOneAndRemove({ _id: beerId }, function (err, deletedBeer) {
    res.json(deletedBeer);
  });
});


app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/chri-roch12/express_self_api/README.md", // Changed to me
    baseUrl: "http://stormy-wave-21523.herokuapp.com", // Changed to me
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "GET", path: "/api/beers", description: "Gets all beer recipes"},
      {method: "POST", path: "/api/beers", description: "Creates new beer recipe"}, //
      {method: "GET", path: "/api/beers/:id", description: "Gets a beer recipes"},
      {method: "PUT", path: "/api/beers/:id", description: "Updates a beer recipe"},
      {method: "DELETE", path: "/api/beers/:id", description: "Destroys a beer recipe"}
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
