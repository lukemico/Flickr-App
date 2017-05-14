var BASE_WEATHER_URL = "https://api.darksky.net/forecast/";
var API_KEY = "8563ae7484b88beb694ab0dbc16e3a07";

var latitude = 37.8267;
var longitude = -122.4233;

var url = BASE_WEATHER_URL + API_KEY + "/" + latitude + "," + longitude;

var displayWeather = function ( info ) {
  var temp = info.currently.temperature;
  var humidity = info.currently.humidity;

  $(".temperature").text( temp );
  $(".humidity").text( humidity );
};

var getCurrentWeather = function ( lat, long ) {
  $.ajax({
    url: url + lat + "," + long,
    method: "GET",
    dataType: "JSONP",
    data: {
      units: "auto"
    }
  }).done( displayWeather );
};

// getCurrentWeather();

var latitude = -33.8698544;
var longitude = 151.2062719;

getCurrentWeather( latitude, longitude );

// navigator.geolocation.getCurrentPosition(function ( data ) {
//   console.log( data );
// });







// For Homework

// $.ajax({
//   url:
//   method:
//   dataType:
// }).done(function (data) {
//   console.log( data );
// });
//
