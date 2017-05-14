// Create the XMLHttp request - tell the browser you are about to use AJX
var request = new XMLHttpRequest();
  console.log( request.readyState );
// Specify the HTTP Method andthe URL - make the handshake

var url = "http://omdbapi.com/?t=satantango";
var method = "GET";

request.open( method, url );
  console.log( request.readyState);
// request.open( "GET", "http://omdbapi.com/?t=satantango");

// Send the request - making the request

request.send();
  console.log( request.readyState );

request.onreadystatechange = function () {
  if ( request.readyState !== 4 ){
    return false;
  }

// console.log( "The data is finally loaded" );
var data = request.responseText;
var parsedData = JSON.parse( data );

var title = parsedData['title']
var plot = parsedData["Plot"];
var poster = parsedData["Poster"];

  console.log( parsedData, typeof data );
};
