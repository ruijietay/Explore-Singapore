/*set input type date to today's date*/
function todaydate() {
    var date = new Date();
    document.getElementById("DateVisit").valueAsDate = date;
    document.getElementById("expirydate").valueAsDate = date; /*set date input as today's date*/
}

/*when customer choose ticket and confirm date and place, box appears*/
function choosenticket() {
    if (document.getElementById("ticketuss").checked) {
        document.getElementById("formtableuss").removeAttribute("hidden");
        document.getElementById("ticketpark").removeAttribute("required");
        document.getElementById("ticketwater").removeAttribute("required");
    }

    if (document.getElementById("ticketpark").checked) {
        document.getElementById("formtablemap").removeAttribute("hidden");
        document.getElementById("ticketuss").removeAttribute("required");
        document.getElementById("ticketwater").removeAttribute("required");
    }
    if (document.getElementById("ticketwater").checked) {
        document.getElementById("formtableacw").removeAttribute("hidden");
        document.getElementById("ticketuss").removeAttribute("required");
        document.getElementById("ticketpark").removeAttribute("required");
    }
}

/*if customer changes mind and don't want to go to that place*/
function unchoosenticket() {
    if (document.getElementById("ticketuss").checked == false) {
        document.getElementById("formtableuss").setAttribute("hidden", "hidden")
    }

    if (document.getElementById("ticketpark").checked == false) {
        document.getElementById("formtablemap").setAttribute("hidden", "hidden");
    }
    if (document.getElementById("ticketwater").checked == false) {
        document.getElementById("formtableacw").setAttribute("hidden", "hidden");
    }
}

/*uss*/
/*One-day ticket*/
function ussoneday() {
    var valueadult = document.getElementById("1dayAdult").value;
    var valuechild = document.getElementById("1dayChild").value;
    var valuesenior = document.getElementById("1daySenior").value;
    var totaladult = valueadult * 76;
    var totalchild = valuechild * 56;
    var totalsenior = valuesenior * 38;
    var total = totaladult + totalchild + totalsenior;
    return total;
}
function ussonedaysingapore() {
    var valueadult = document.getElementById("singaporean1dayAdult").value;
    var valuechild = document.getElementById("singaporean1dayChild").value;
    var totaladult = valueadult * 72;
    var totalchild = valuechild * 53;
    var total = totaladult + totalchild;
    return total;
}
function ussannualpass() {
    var valueadult = document.getElementById("annualpassAdult").value;
    var valuechild = document.getElementById("annualpassChild").value;
    var valuesenior = document.getElementById("annualpassSenior").value;
    var totaladult = valueadult * 188;
    var totalchild = valuechild * 158;
    var totalsenior = valuesenior * 158;
    var total = totaladult + totalchild + totalsenior;
    return total;
}

function ussannualpassExp() {
    var valueadult = document.getElementById("annualpassExpAdult").value;
    var valuechild = document.getElementById("annualpassExpChild").value;
    var valuesenior = document.getElementById("annualpassExpSenior").value;
    var totaladult = valueadult * 318;
    var totalchild = valuechild * 288;
    var totalsenior = valuesenior * 288;
    var total = totaladult + totalchild + totalsenior;
    return total;
}

function ussseasonpass() {
    var valueadult = document.getElementById("seasonpassAdult").value;
    var valuechild = document.getElementById("seasonpassChild").value;
    var valuesenior = document.getElementById("seasonpassSenior").value;
    var totaladult = valueadult * 98;
    var totalchild = valuechild * 88;
    var totalsenior = valuesenior * 88;
    var total = totaladult + totalchild + totalsenior;
    return total;
}

function ussseasonpassExp() {
    var valueadult = document.getElementById("seasonpassExpAdult").value;
    var valuechild = document.getElementById("seasonpassExpChild").value;
    var valuesenior = document.getElementById("seasonpassExpSenior").value;
    var totaladult = valueadult * 198;
    var totalchild = valuechild * 188;
    var totalsenior = valuesenior * 188;
    var total = totaladult + totalchild + totalsenior;
    return total;
}

function ussstudentseasonpass() {
    var valuestudent = document.getElementById("studentseasonpass").value;
    var totalvaluestudent = valuestudent * 88;
    return totalvaluestudent;
}

function ussstudentseasonpassExp() {
    var valuestudent = document.getElementById("studentseasonpassExp").value;
    var totalvaluestudent = valuestudent * 188;
    return totalvaluestudent;
}

function USSall() {
    var total = ussoneday() + ussonedaysingapore() + ussannualpass() + ussannualpassExp() + ussseasonpass() + ussseasonpassExp() + ussstudentseasonpass() + ussstudentseasonpassExp();
    return total;
}//total for USS

/*Mega Adventure Park*/

function megazip() {
    var valuemega = document.getElementById("megazipTABLE").value;
    var totalmega = valuemega * 50;
    return totalmega;
}
function megaclimb() {
    var valuemega = document.getElementById("megaclimbTABLE").value;
    var totalmega = valuemega * 45;
    return totalmega;
}
function megajump() {
    var valuemega = document.getElementById("megajumpTABLE").value;
    var totalmega = valuemega * 25;
    return totalmega;
}
function megabounce() {
    var valuemega = document.getElementById("megabounceTABLE").value;
    var totalmega = valuemega * 15;
    return totalmega;
}

function MAPall() {
    var total = megazip() + megaclimb() + megajump() + megabounce();
    return total;
}

/*Adventure Cove Waterpark*/

function acwonedayticket() {
    var valueadult = document.getElementById("acwonedayticketAdult").value;
    var valuechild = document.getElementById("acwonedayticketChild").value;
    var valuesenior = document.getElementById("acwonedayticketSenior").value;
    var totaladult = valueadult * 38;
    var totalchild = valuechild * 30;
    var totalsenior = valuesenior * 30;
    var total = totaladult + totalchild + totalsenior;
    return total;
}

function acwonedayticketsingapore() {
    var valueadult = document.getElementById("acwsingaporeonedayticketAdult").value;
    var valuechild = document.getElementById("acwsingaporeonedayticketChild").value;
    var valuesenior = document.getElementById("acwsingaporeonedayticketSenior").value;
    var totaladult = valueadult * 32;
    var totalchild = valuechild * 24;
    var totalsenior = valuesenior * 24;
    var total = totaladult + totalchild + totalsenior;
    return total;
}

function acwannualpass() {
    var valueadult = document.getElementById("acwattractionsannualpassAdult").value;
    var valuechild = document.getElementById("acwattractionsannualpassChild").value;
    var valuesenior = document.getElementById("acwattractionsannualpassSenior").value;
    var totaladult = valueadult * 98;
    var totalchild = valuechild * 68;
    var totalsenior = valuesenior * 68;
    var total = totaladult + totalchild + totalsenior;
    return total;
}

function acwseasonpass() {
    var valueadult = document.getElementById("acwattractionsseasonpassAdult").value;
    var valuechild = document.getElementById("acwattractionsseasonpassChild").value;
    var valuesenior = document.getElementById("acwattractionsseasonpassSenior").value;
    var totaladult = valueadult * 68;
    var totalchild = valuechild * 58;
    var totalsenior = valuesenior * 58;
    var total = totaladult + totalchild + totalsenior;
    return total;
}

function acwstudentpass() {
    var valuestudent = document.getElementById("acwattractionsstudentseasonpass").value;
    var totalstudent = valuestudent * 58;
    return totalstudent;
}

function ACWall() {
    var total = acwonedayticket() + acwonedayticketsingapore() + acwannualpass() + acwseasonpass() + acwstudentpass();
    return total;
}
/*card payment validation----------------------------------------------------------------------------------------------------------------*/
function Visacard() {
    document.getElementById("cardno").setAttribute("pattern", "[4][0-9]{15}");
    document.getElementById("cardno").setAttribute("placeholder", "4"); //starts with 4 for Visa
}

function Mastercard() {
    document.getElementById("cardno").setAttribute("pattern", "[5][0-9]{15}");
    document.getElementById("cardno").setAttribute("placeholder", "5"); //starts with 5 for Mastercard
}

/*FINAL TOTAL VALUE*/
function CalculateAllTickets() {
    var total = USSall() + MAPall() + ACWall();
    document.getElementById("displayprice").innerHTML = "$" + total;
    return total;/*display price on popupscreen*/
}

/*Form PopUp---------------------------------------------------------------------------------------------------------*/
function haveoverlay() {
    document.getElementById("overlay").style.display = "block";
}

function turnoffoverlay() {
    document.getElementById("overlay").style.display = "none";
} /*element with id "overlay" will have a style of att display set to none; (display:none;)*/

/*Form Validation?---------------------------------------------------------------------------------------------*/
function thankYou() {
    if (CalculateAllTickets() == 0) {
        alert("You did not purchase anything.");
    }
}/*When customer tries to click confirm order when cart is empty, that happens*/

function myForm() {
    if (CalculateAllTickets() > 0) {
        document.getElementById("confirmationbutton").setAttribute("form", "myForm");
    }
}/*This means if calculate all ticket is the same as zero dollars, then you cannot submit the form since customer did not buy anything*/


/*------------------------------------------------------------Show suggested route-------------------------------------------------*/
/*USS*/
function showRoute() {
    var popup = document.getElementById("lastcontent");
    popup.classList.toggle("show");
}/*popup for location uss suggested route*/

/*Mega Adv Park*/
function showRoute2() {
    var popup = document.getElementById("lastcontent2");
    popup.classList.toggle("show");
}/*popup for location uss suggested route*/

/*Adventure Cove Waterpark*/
function showRoute3() {
    var popup = document.getElementById("lastcontent3");
    popup.classList.toggle("show");  /*classList is useful to add, remove and toggle CSS classes on an element.*/
}/*popup for location uss suggested route*/
/*-------------------------------------------------------------------------------------------------------------------------------------*/
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
        pass.type="password" /*else if the type is not password (text), change back to password. This happens when checkbox is unclicked.*/
    }
}