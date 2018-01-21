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

/*signupform*/
function haveoverlay1() {
    document.getElementById("overlay1").style.display = "block";
}

function turnoffoverlay1() {
    document.getElementById("overlay1").style.display = "none";
} /*element with id "overlay" will have a style of att display set to none; (display:none;)*/

function myPassword() {
    var pass = document.getElementById("passwordsignup");
    if (pass.type === "password") { /*if the type of input is password, then change the type to text if on click*/
        pass.type = "text";
    }
    else {
        pass.type = "password" /*else if the type is not password (text), change back to password. This happens when checkbox is unclicked.*/
    }
}