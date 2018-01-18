// JavaScript source code
function initMap() {
    var victoriaTheatre = { lat: 1.2883375, lng: 103.85181260000002 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: victoriaTheatre
    });
    var marker = new google.maps.Marker({
        position: victoriaTheatre,
        map: map
    });
}