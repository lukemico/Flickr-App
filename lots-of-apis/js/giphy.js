
var GIPHY_BASE_URL = "http://api.giphy.com/v1/gifs/random";
var API_KEY = "dc6zaTOxFJmzC";

var displayGif = function ( url ){
  var $img = $("<img>");
  $img.attr( "src", url );

  $img.prependTo( ".giphy .content" );
};

var getGiphyInformation = function ( searchTerm ) {
  $.ajax({
    url: GIPHY_BASE_URL,
    method: "GET",
    dataType: "JSON",
    data: {
      api_key: API_KEY,
      tag: searchTerm
    }
  }).done(function (response) {
    var url = response.data.image_original_url;
    displayGif( url );
  });
};

$(document).ready(function () {
  $(".giphy button").on("click", function (){
    var searchTerm = $(".giphy input").val();
    console.log( "SEARCH GIPHY" );

    getGiphyInformation( searchTerm );
  });
});
