//Google maps
function initMap() {
    var dragon = { lat: 1.3320, lng: 103.8543 };

    // Create new map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: dragon
    });

    // Place dragon marker on map
    var dragonmarker = new google.maps.Marker({
        position: dragon,
        map: map
    });

    //Creating information window content for Marina Bay Sands
    var dragoninfo = '<div class="info_content">' +
        '<h3>The Dragon Playground</h3>' +
        '<p>The dragon-shaped sand-based playground used to be a popular design for playgrounds in Ang Mo Kio and Toa Payoh.</p>' + '</div>'

    //Create new window for information (dragoninfo)
    var dragonwindow = new google.maps.InfoWindow(), dragonmarker;

    google.maps.event.addListener(dragonmarker, 'click', (function (dragonmarker) {
        return function () {
            dragonwindow.setContent(dragoninfo);
            dragonwindow.open(map, dragonmarker);
        }
    })(dragonmarker));

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