//Google maps
function initMap() {
    var tank = { lat: 1.2950, lng: 103.7968 };

    // Create new map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: tank
    });

    // Place tank marker on map
    var tankmarker = new google.maps.Marker({
        position: tank,
        map: map
    });

    //Creating information window content for Marina Bay Sands
    var tankinfo = '<div class="info_content">' +
        '<h3>Portsdown Water Tank</h3>' +
        '<p>A UFO looking water tank, the Portsdown Water Tank is located in the quiet neighbourhood of Portsdown Road and is an old water tank that would not be out of place in American films.</p>' + '</div>'

    //Create new window for information (tankinfo)
    var tankwindow = new google.maps.InfoWindow(), tankmarker;

    google.maps.event.addListener(tankmarker, 'click', (function (tankmarker) {
        return function () {
            tankwindow.setContent(tankinfo);
            tankwindow.open(map, tankmarker);
        }
    })(tankmarker));

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