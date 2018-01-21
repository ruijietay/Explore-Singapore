function initMap() {
    var marinabay = { lat: 1.2839, lng: 103.8609 };
    var artscience = { lat: 1.2863, lng: 103.8593 };
    var merlion = { lat: 1.2868, lng: 103.8545 };

    // Create new map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: artscience
    });

    // Place various attractions on the map
    
    var mbsmarker = new google.maps.Marker({
        position: marinabay,
        map: map
    });

    var asmmarker = new google.maps.Marker({
        position: artscience,
        map: map
    });

    var merlionmarker = new google.maps.Marker({
        position: merlion,
        map: map
    });

    //Creating information window content for Marina Bay Sands
    var marinabayinfo = '<div class="info_content">' +
        '<h3>Marina Bay Sands</h3>' +
        '<p>The Marina Bay Sands Hotel is one of the most luxurious hotels in Singapore, featuring an infinity pool blanketing the Central Business District (CBD) Area on the 57th floor.</p>' + '</div>'

    var marinabaywindow = new google.maps.InfoWindow(), mbsmarker;

    google.maps.event.addListener(mbsmarker, 'click', (function (mbsmarker) {
        return function () {
            marinabaywindow.setContent(marinabayinfo);
            marinabaywindow.open(map, mbsmarker);
        }
    })(mbsmarker));

    //Creating information window content for ArtScience Museum
    var artscienceinfo = '<div class="info_content">' +
        '<h3>ArtScience Museum</h3>' +
        '<p>Completed in 2011, the ArtScience Museum is the only museum in the world to bridge two cultural opposites, Arts and Science.</p>' + '</div>'

    var artsciencewindow = new google.maps.InfoWindow(), asmmarker;

    google.maps.event.addListener(asmmarker, 'click', (function (asmmarker) {
        return function () {
            artsciencewindow.setContent(artscienceinfo);
            artsciencewindow.open(map, asmmarker);
        }
    })(asmmarker));

    //Creating information window content for Marina Bay Sands
    var merlioninfo = '<div class="info_content">' +
        '<h3>Merlion Park</h3>' +
        '<p>The Merlion, a reimagining of a mermaid and a lion, is an unmissable Singapore attraction.</p>' + '</div>'

    var merlionwindow = new google.maps.InfoWindow(), merlionmarker;

    google.maps.event.addListener(merlionmarker, 'click', (function (merlionmarker) {
        return function () {
            marinabaywindow.setContent(merlioninfo);
            marinabaywindow.open(map, merlionmarker);
        }
    })(merlionmarker));

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