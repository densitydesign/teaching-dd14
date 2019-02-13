var buttons = document.querySelectorAll('.button');
var onlineText = document.getElementById("online-text");
var nodataText = document.getElementById("nodata-text");
var shutteddownText = document.getElementById("shutteddown-text");

var onlineGraph = document.getElementById("online");
var nodataGraph = document.getElementById("nodata");
var shutteddownGraph = document.getElementById("shutteddown");

var onlineRect = document.getElementById("online-box")
var nodataRect = document.getElementById("nodata-box")
var shutteddownRect = document.getElementById("shutteddown-box")

var divider = document.getElementById("rect-divider");

var cat = document.getElementById("cat");

// Onload
window.onload = onlineGraph.classList.add("on"),
                onlineText.classList.add("white"),
                onlineRect.classList.add("filled"),
                console.log("caricato");

// Aggiungo event listeners
for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', highlightButton, false);
}


// Funzioni
function highlightButton() {
    onlineGraph.classList.remove("on");
    nodataGraph.classList.remove("on");
    shutteddownGraph.classList.remove("on");

    cat.classList.remove("faded");

    onlineRect.classList.remove("filled");
    nodataRect.classList.remove("filled");
    shutteddownRect.classList.remove("filled");
    
    onlineText.classList.remove("white");
    nodataText.classList.remove("white");
    shutteddownText.classList.remove("white");

    divider.classList.remove("online");
    divider.classList.remove("nodata");
    divider.classList.remove("shutteddown");


    if (this.classList.contains('online')) {
        onlineGraph.classList.add("on");
        onlineRect.classList.add("filled");
        onlineText.classList.add("white");
        divider.classList.add("online");
    }

    if (this.classList.contains('nodata')) {
        nodataGraph.classList.add("on");
        nodataRect.classList.add("filled");
        nodataText.classList.add("white");
        divider.classList.add("nodata");
        cat.classList.add("faded");
    }

    if (this.classList.contains('shutteddown')) {
        shutteddownGraph.classList.add("on");
        shutteddownRect.classList.add("filled");
        shutteddownText.classList.add("white");
        divider.classList.add("shutteddown");
        cat.classList.add("faded");
    }
}   

/* ------------------------------------------- */
/* -----------       TOGGLES       ----------- */
/* ------------------------------------------- */



$(document).ready(function(){
    $(".direct, .direct-numbers").click(function(){
        $(".direct").toggleClass("direct-on");
        $(".direct-numbers").toggleClass("numbers-on");
        $(".direct-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $(".referrals, .referrals-numbers").click(function(){
        $(".referrals").toggleClass("referrals-on");
        $(".referrals-numbers").toggleClass("numbers-on");
        $(".referrals-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $(".search, .search-numbers").click(function(){
        $(".search").toggleClass("search-on");
        $(".search-numbers").toggleClass("numbers-on");
        $(".search-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $(".social, .social-numbers").click(function(){
        $(".social").toggleClass("social-on");
        $(".social-numbers").toggleClass("numbers-on");
        $(".social-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $(".mail, .mail-numbers").click(function(){
        $(".mail").toggleClass("mail-on");
        $(".mail-numbers").toggleClass("numbers-on");
        $(".mail-box").toggleClass("box-on");
    });
});

$(document).ready(function(){
    $(".display, .display-numbers").click(function(){
        $(".display").toggleClass("display-on");
        $(".display-numbers").toggleClass("numbers-on");
        $(".display-box").toggleClass("box-on");
    });
});