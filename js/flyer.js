// JavaScript source code

//To enable sidebar to follow user
$(window).scroll(function () {
    var winScrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var floaterHeight = $('#sidebar').outerHeight(true);

    //true so the function takes margins into account
    var fromBottom = 20;

    var top = winScrollTop + winHeight - floaterHeight - fromBottom;
    $('#sidebar').css({ 'top': top + 'px' });
});

//Google maps
function initMap() {
    var flyer = { lat: 1.2893, lng: 103.8631 };

    // Create new map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: flyer
    });

    // Place flyer marker on map
    var flyermarker = new google.maps.Marker({
        position: flyer,
        map: map
    });

    //Creating information window content for Marina Bay Sands
    var flyerinfo = '<div class="info_content">' +
        '<h3>Singapore Flyer</h3>' +
        '<p>Standing at 165 metres, this giant observation wheel offers 360-degree city views of Singapore and parts of Malaysia and Indonesia on a clear day.</p>' + '</div>'

    //Create new window for information (flyerinfo)
    var flyerwindow = new google.maps.InfoWindow(), flyermarker;

    google.maps.event.addListener(flyermarker, 'click', (function (flyermarker) {
        return function () {
            flyerwindow.setContent(flyerinfo);
            flyerwindow.open(map, flyermarker);
        }
    })(flyermarker));

}

//Check date and bold opening hours accordingly
function checkDate() {
    var date = new Date();
    var day = date.getDay();

    if (day == 0) {
        var orghtml = document.getElementById("sun").innerHTML;
        var newhtml = "<strong>" + orghtml + " (Today)</strong>";
        document.getElementById("sun").innerHTML = newhtml;
    }
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