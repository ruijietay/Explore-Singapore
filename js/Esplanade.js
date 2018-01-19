// JavaScript source code

//Google Maps
function initMap() {
    var NationalGallery = { lat: 1.289704, lng: 103.85128499999996 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: NationalGallery
    });
    var marker = new google.maps.Marker({
        position: NationalGallery,
        map: map
    });
    // Info Window Content
    var infoWindowContent =
        '<div class="info_content">' +
        '<h3>National Gallery Singapore</h3>' +
        '<p>Museum of Singapore & Southeast Asian arts housed in a restored municipal building dating to 1929.</p>' + '</div>';

    var infoWindow = new google.maps.InfoWindow(), marker;

    // Allow each marker to have an info window    
    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map, marker);
        }
    })(marker));
}