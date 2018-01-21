// JavaScript source code

//Google Maps
function initMap() {
    var LittleIndia = { lat: 1.3068, lng: 103.849647 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: LittleIndia
    });
    var marker = new google.maps.Marker({
        position: LittleIndia,
        map: map
    });
    // Info Window Content
    var infoWindowContent =
        '<div class="info_content">' +
        '<h3>Little India MRT</h3>' +
        '<p>Train station closes to Little India</p>' + '</div>';

    var infoWindow = new google.maps.InfoWindow(), marker;

    // Allow each marker to have an info window    
    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map, marker);
        }
    })(marker));
}