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