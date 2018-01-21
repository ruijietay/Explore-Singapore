//Google maps
function initMap() {
    var waves = { lat: 1.2760, lng: 103.8154 };

    // Create new map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: waves
    });

    // Place flyer marker on map
    var wavesmarker = new google.maps.Marker({
        position: waves,
        map: map
    });

    //Creating information window content for Marina Bay Sands
    var wavesinfo = '<div class="info_content">' +
        '<h3>Henderson Waves Bridge</h3>' +
        '<p>At 36 metres above ground, the Henderson Waves bridge is the highest pedestrian bridge in Singapore.</p>' + '</div>'

    //Create new window for information (flyerinfo)
    var waveswindow = new google.maps.InfoWindow(), wavesmarker;

    google.maps.event.addListener(wavesmarker, 'click', (function (wavesmarker) {
        return function () {
            waveswindow.setContent(wavesinfo);
            waveswindow.open(map, wavesmarker);
        }
    })(wavesmarker));

}

function thankyou() {
    alert("Thank you for your feedback!")
}