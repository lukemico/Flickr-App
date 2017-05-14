// I need to be able to listen to clicks on the button

// Make an XML HTTP Request to OMDB API

// Handle the data that is returned from the OMDB API

// I need to represent that data on the page
  // Create an image tag
    // Set the image tag's src attribute to be the Poster URL that comes back from OMDB API


    // Everything to do with XML HTTP Request comes back to the readyState
      // 0 - Request has been initialised, but has not been sent (it is still sitting on our computer)
      // 1 - Server connection has been established (after the handshake)
      // 2 - Request has been received by the server, and the server is processing it
      // 3 - Processing response in the browser (the server has given us some data, but we can't work with it yet)
      // 4 - Response is ready to be worked with

// var request = new XMLHttpRequest();
//
// request.onreadystatechange = function () {
//   console.log( request.readyState );
//     return false;
// // We don't want to do anhything until we can work =with the data
// };
//
// var data = request.responseText;
// var parseData = JSON.parse( data );
// var title = parsedData
//
// request.open("GET", "http://www.omdbapi.com/?");
//
// request.send();

window.onload = function () {
  var btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    // Get the input's current value
    // Construct a URL using the value
      // http://omdbapi.com/?t=SOME_TITLE_HERE
    // Make the request
    // Once the data comes back
      // Parse it
        // Represent the movie on the page
        // Try and show the poster
          // var img = document.createElement( "img" );
          // img.setAttribute( "src", _______ );
  });
};
