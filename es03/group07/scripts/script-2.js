//////////////////////////////////////////////////////////
//MENU
//////////////////////////////////////////////////////////
var hamburger = $('#hamburger-icon');

$(document).ready(function () {
    hamburger.click(function () {
        hamburger.toggleClass('active');
        return false;
    });
    $('#about-2').click(function (){
        hamburger.toggleClass('active');
        return false;
    })
});

//MENUBAR

var menuState;

document.getElementById("hamburger-icon").addEventListener("click", toggleNav);
document.getElementById("about").addEventListener("click", showAbout);

function toggleNav() {
    navSize = document.getElementById("nav").style.width;
    if (navSize == "100%") {
        return closeMenu();
    }
    return openMenu();
}
/* Open the menu */
function openMenu() {
    document.getElementById("nav").style.width = "100%";
    document.getElementsByClassName("menu-links")[0].style.opacity = "1";
    document.getElementsByClassName("menu-links")[0].style.pointerEvents = "all";
}

/* Close/hide the menu */
function closeMenu() {
    document.getElementById("nav").style.width = "0";
    document.getElementsByClassName("menu-links")[0].style.opacity = "0";
    document.getElementsByClassName("about-container")[0].style.opacity = "0";
    document.getElementsByClassName("about-container")[0].style.pointerEvents = "none";
}

function showAbout() {
    openMenu();
    document.getElementsByClassName("menu-links")[0].style.opacity = "0";
    document.getElementsByClassName("menu-links")[0].style.pointerEvents = "none";
    document.getElementsByClassName("about-container")[0].style.opacity = "1";
    document.getElementsByClassName("about-container")[0].style.pointerEvents = "all";
}


//////////////////////////////////////////////////////////
//SCROLLMAGIC
/////////////////////////////////////////////////////////

//BOLSO_CONTAINER 
var bolsodeniro_fadein = TweenMax.to('#bolso', 0.4, {
    opacity: 1
});
var bolsodeniro_fadeout = TweenMax.to('#bolso', 0.4, {
    opacity: 0
});
//BOLSO_FADE
var bolso_fadein = TweenMax.to('.b', 0.4, {
    opacity: 1
});
var bolso_fadeout = TweenMax.to('.b', 0.4, {
    opacity: 0
});

//INITALIZE SCROLLMAGIC
var controller = new ScrollMagic.Controller({
    globalSceneOptions: { // options for every scene
        reverse: true,
        triggerHook: 'onLeave'
        },
        addIndicators: false
});

// build scene 01  LANDING goes up and...
new ScrollMagic.Scene({
        triggerElement: "#outcome",
        duration: 600,
        offset: 0
    })
    .setPin("#outcome")
    .setTween(".outcome-container", {
        y: -100,
        autoAlpha: 0,
        ease: Linear.easeNone
    })
    .addTo(controller);


// build scene 02  fadein BOLSO
new ScrollMagic.Scene({
    triggerElement: "#bolso",
    triggerHook: 'onCenter',
    duration: 200,
})
.setTween(bolsodeniro_fadein)
.addTo(controller);

// build scene 03 - pinna div bolso
    new ScrollMagic.Scene({
        triggerElement: "#bolso",
    })
    .setPin("#bolso")
    .addTo(controller);

// build scene 04  fadein bolsy
new ScrollMagic.Scene({
        triggerElement: "#bolso",
        triggerHook: 'onEnter',
        duration: 0,
        offset: 200
    })
    .setTween(bolso_fadein)
    .addTo(controller);

// build scene 05 - pinna bolsy
new ScrollMagic.Scene({
    triggerElement: ".b",
})
.setPin(".b")
.addTo(controller);

//CARICAMENTO
window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
}