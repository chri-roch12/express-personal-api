console.log("Sanity Check: JS is working!");

var $beerList;
var allBeers = [];
$beerlist = $("#beerList");

$(document).ready(function(){



  $.ajax({
    method: "GET",
    url: "api/beer",
    success: handleSuccess,
    error: handleError
  });

  $("#newBeerForm").submit(function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/api/beer",
      data: $(this).serialize(),
      success: newBeerSuccess,
      error: newBeerError
    });
  });

  $(".deleteBtn").click( function() {
    $ajax({
      method: "DELETE",
      url: "/api/beer/" + $(this).attr("data-id"),
      succcess: deleteBookSuccess,
      error: deleteBookError
    });
  });
});

function getBeerHtml(beer) {
  return `<hr>
          <p>
            <large>${beer.name}</large></br>
            <small>Beer hops ${beer.description}</small>
            <button type="button" name="button" class="deleteBtn btn btn-alert pull-right" data-id=${beer._id}>Delete</button>
          </p>`;
};

function getAllBeerHtml(beers) {
  return beers.map(getBeerHtml).join("");
};

function render() {
  var beerHtml = getAllBeerHtml(recipeList);
  $("#beerList").append(beerHtml);
};

function handleSuccess(json) {
  recipeList = json;
  render();
};

function handleError(e) {
  console.log('uh oh');
  $('#beerList').text('Failed to load recipes');
};

function newBeerSuccess(json) {
  $("#newBeerForm input").val("");
  allBeers.push(json);
  render();
};

function newBeerError() {
  console.log("Beer creation error.");
};
