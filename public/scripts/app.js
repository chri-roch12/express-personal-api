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

  $("#newBeerForm").on("click", function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/api/beer",
      data: $(this).serialize(),
      success: newBeerSuccess,
      error: newBeerError
    });
  });

  $(".deleteBtn").on("click", function() {
    $ajax({
      method: "DELETE",
      url: "/api/beer/" + $(this).attr("data-id"),
      succcess: function deleteBookSuccess("data-id") {
        $("data-id").remove();
        render();
      };
      error: function deleteBookError() {
        console.log("Delete beer recipe error.");
      };
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

//Trying to move the functions into the ajax call. Maybe some sort of issue with process order
// function deleteBookSuccess() {
//   $("data-id").remove();
//   render();
// };

function deleteBookError() {
  console.log("Delete beer recipe error.");
}
