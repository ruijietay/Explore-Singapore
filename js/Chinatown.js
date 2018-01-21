
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