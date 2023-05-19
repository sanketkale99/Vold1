
function initMap() {
  // Create a new map instance
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
    zoom: YOUR_ZOOM_LEVEL
  });

  // Add a marker to the map
  var marker = new google.maps.Marker({
    position: { lat: YOUR_MARKER_LATITUDE, lng: YOUR_MARKER_LONGITUDE },
    map: map,
    title: 'Marker Title'
  });
}

// Call the initMap function when the Google Maps API script is loaded
google.maps.event.addDomListener(window, 'load', initMap);

