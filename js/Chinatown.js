
//Google Maps
function initMap() {
    var Chinatown = { lat: 1.2816722, lng: 103.84388660000002 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: Chinatown
    });
    var marker = new google.maps.Marker({
        position: Chinatown,
        map: map
    });
    // Info Window Content
    var infoWindowContent =
        '<div class="info_content">' +
        '<h3>Chinatown Visitor Centre</h3>' +
        '<p>Visitor Centre serves as the first and complete stop for visitors looking for information about Chinatown\'s shops, history, culture and more.</p>' + '</div>';

    var infoWindow = new google.maps.InfoWindow(), marker;

    // Allow each marker to have an info window    
    google.maps.event.addListener(marker, 'click', (function (marker) {
        return function () {
            infoWindow.setContent(infoWindowContent);
            infoWindow.open(map, marker);
        }
    })(marker));
}

//Upcoming Events
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//Animation for accordion
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
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