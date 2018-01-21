// JavaScript source code
/* For slideshow */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Check to see if there is any empty field
function check_empty() {
    if (document.getElementById("iName").value == "" || document.getElementById("iEmail").value == "" || document.getElementById("iMessage").value == "") {
        alert("Fill All Fields !");
    } else {
        document.getElementById('form').submit();
        alert("Form Submitted Successfully");
    }
}
