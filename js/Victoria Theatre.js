
//Google Maps
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
    // Info Window Content
    var infoWindowContent =
        '<div class="info_content">' +
            '<h3>Victoria Theatre & Concert Hall</h3>' +
            '<p>Home to the Singapore Symphony Orchestra, the refurbished Victorian building features a clock tower.</p>' + '</div>';

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