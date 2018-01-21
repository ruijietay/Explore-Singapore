//Google maps
function initMap() {
    var railway = { lat: 1.330165, lng: 103.787687 };

    // Create new map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: railway
    });

    // Place railway marker on map
    var railwaymarker = new google.maps.Marker({
        position: railway,
        map: map
    });

    //Creating information window content for Marina Bay Sands
    var railwayinfo = '<div class="info_content">' +
        '<h3>Bukit Timah Railway</h3>' +
        '<p>The frenzy that ensued the Bukit Timah Railway after reports of it closing down has since died down, with the place being thrust out of the public eye. Even though the railway track is no longer in use, it still exists as a sentimental reminder of Singapore\'s railway history and heritage.</p>' + '</div>'

    //Create new window for information (railwayinfo)
    var railwaywindow = new google.maps.InfoWindow(), railwaymarker;

    google.maps.event.addListener(railwaymarker, 'click', (function (railwaymarker) {
        return function () {
            railwaywindow.setContent(railwayinfo);
            railwaywindow.open(map, railwaymarker);
        }
    })(railwaymarker));

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