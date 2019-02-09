//////////////////////////////////////////////////////////
//MENU
//////////////////////////////////////////////////////////

$(document).ready(function () {
    var hamburger = $('#hamburger-icon');
    hamburger.click(function () {
        hamburger.toggleClass('active');
        return false;
    });
});

//MENUBAR

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
    document.getElementsByClassName("menu-links")[0].style.opacity = "0";
    document.getElementsByClassName("menu-links")[0].style.pointerEvents = "none";
    document.getElementsByClassName("about-container")[0].style.opacity = "1";
    document.getElementsByClassName("about-container")[0].style.pointerEvents = "all";
}

//////////////////////////////////////////////////////////
//SCROLLMAGIC
//////////////////////////////////////////////////////////


//BRAZIL_MAP_FADE
var fadein_tween_brazil = TweenMax.to('#brazil_map', 0.4, {
    opacity: 1
});
var fadeout_tween_brazil = TweenMax.to('#brazil_map', 0.4, {
    opacity: 0
});

//RIVER_MAP_FADE
var fadein_tween_river = TweenMax.to('#river_map', 0.4, {
    opacity: 1
});
var fadeout_tween_river = TweenMax.to('#river_map', 0.4, {
    opacity: 0
});

//BELOMONTE_INTRO_FADE
var fadein_tween_belomonte = TweenMax.to('#belomonte_intro', 0.4, {
    opacity: 1
});
var fadeout_tween_belomonte = TweenMax.to('#belomonte_intro', 0.4, {
    opacity: 0
});


//XINGU_MAP_FADE
var fadein_tween_xingu = TweenMax.to('#xingu_map', 0.4, {
    opacity: 1
});
var fadeout_tween_xingu = TweenMax.to('#xingu_map', 0.4, {
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

// build scene 00  - LANDING goes up and...
new ScrollMagic.Scene({
    triggerElement: "#cover-image"
})
.setPin("#cover-image")
.addTo(controller);

// build scene 01  - LANDING IMAGE goes up and...
new ScrollMagic.Scene({
        triggerElement: "#landing",
        duration: 400,
        offset: 0
    })
    .setPin("#landing")
    .setTween("#landing-text", {
        y: -100,
        autoAlpha: 0,
        ease: Linear.easeNone
    })
    .addTo(controller);

// build scene 02  - LANDING goes up and...
new ScrollMagic.Scene({
    triggerElement: "#landing",
    duration: 400,
    offset: 0
})
.setTween("#cover-image", {
    autoAlpha: 0,
    ease: Linear.easeNone
})
.addTo(controller);

// 03 - pinno introduzione
new ScrollMagic.Scene({
    triggerElement: "#world-map-text",
})
.setPin("#world-map-text")
.addTo(controller);

// build scene 04 - map appears
new ScrollMagic.Scene({
        triggerElement: '#world-map-text',
        duration: 300,
        offset: 200
    })
    .setTween(fadein_tween_brazil)
    .addTo(controller);

// build scene 05 - intro disappears
new ScrollMagic.Scene({
    triggerElement: '#world-map-text',
    duration: 200,
})
.setTween("#world-map-text", {
    autoAlpha: 0,
    ease: Linear.easeNone
})
.addTo(controller);

// build scene 05 - pinna brasile
new ScrollMagic.Scene({
        triggerElement: "#world-map-text",
    })
    .setPin("#brazil_map")
    .addTo(controller);

// build scene 07 - overlay appears
new ScrollMagic.Scene({
        triggerElement: '#brazil_map',
        duration: 500,
        offset: 600
    })
    .setTween(fadein_tween_river)
    .addTo(controller);

// build scene 08 - pinna overlay
new ScrollMagic.Scene({
        triggerElement: "#river_map",
    })
    .setPin("#river_map")
    .addTo(controller);

// build scene 09 - brazil disappears
new ScrollMagic.Scene({
    triggerElement: '#brazil-map-text',
    duration: 200,
})
.setTween("#brazil-map", {
    autoAlpha: 0,
    ease: Linear.easeNone
})
.addTo(controller);

//build scene 10 - Appare belomonte intro
new ScrollMagic.Scene({
        triggerElement: '#brazil-map-text',
        offset: 300,
        duration: 200
    })
    .setTween(fadein_tween_belomonte)
    .addTo(controller);

// build scene 12 - pinna belomonte intro
new ScrollMagic.Scene({
    triggerElement: "#belomonte_intro",
})
.setPin("#belomonte_intro")
.addTo(controller);

//build scene 12 - Appare XINGU_MAP
new ScrollMagic.Scene({
        triggerElement: '#brazil-map-text',
        offset: 800,
        duration: 300
    })
    .setTween(fadein_tween_xingu)
    .addTo(controller);

// build scene 13 - pinna mappa
new ScrollMagic.Scene({
        triggerElement: "#xingu_map",
    })
    .setPin("#xingu_map")
    .addTo(controller);



//////////////////////////////////////////////////////////
//MAPPA
//////////////////////////////////////////////////////////

//INIZIALIZZAZIONE DELLA MAPPA
var map = L.map('mapid', {
    crs: L.CRS.Simple,
    attributionControl: false,
    maxBoundsViscosity: 1,
    zoomControl: false
});

//CALCOLO BOUNDS CORRETTI
var h = window.innerHeight;
var boundH = h;
var boundW = boundH * 1.896;

//POSIZIONAMENTO IMMAGINE
var bounds = [
        [0, 0],
        [boundH, boundW]
    ];
var image = L.imageOverlay('mappina.jpg', bounds).addTo(map);


var ultima_mappa = L.imageOverlay('', bounds);

function cambiaMappa(argomento) {
    ultima_mappa = L.imageOverlay('assets/img/mappina' + argomento + '.png', bounds).addTo(map);
    document.getElementById("legenda_overlay").style.display = "block";
    document.getElementById("legenda_overlay").src = "assets/img/legenda_overlay" + argomento + ".svg";
}

function resetMappa() {
    map.removeLayer(ultima_mappa);
    document.getElementById("legenda_overlay").style.display = "none";
    document.getElementById("legenda_overlay").src = "";
}

//IMPEDIMENTI ZOOM E PAN
map.scrollWheelZoom.disable()
map.fitBounds(bounds);
map.setMaxBounds(bounds);
map.setMaxZoom(2);
map.doubleClickZoom.disable(); 

//ICONE

var iconAnchorX = 30;
var iconAnchorY = 30;

var iconAnchorXBig = 40;
var iconAnchorYBig = 40;

var iconScale = h/15;
var iconScaleBig = h/12;

var iconsPath = 'assets/iconsfolder/';

var icona_altamira = L.icon({
    iconUrl: iconsPath + 'icona_altamira.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_altamira_I = L.icon({
    iconUrl: iconsPath + 'icona_altamira_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_altamira_now = L.icon({
    iconUrl: iconsPath + 'icona_altamira_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig]
});

var icona_altamira2 = L.icon({
    iconUrl: iconsPath + 'icona_altamira.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_altamira2_I = L.icon({
    iconUrl: iconsPath + 'icona_altamira_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_altamira2_now = L.icon({
    iconUrl: iconsPath + 'icona_altamira_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig]
});

var icona_altamira3 = L.icon({
    iconUrl: iconsPath + 'icona_altamira.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_altamira3_I = L.icon({
    iconUrl: iconsPath + 'icona_altamira_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_altamira3_now = L.icon({
    iconUrl: iconsPath + 'icona_altamira_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig]
});

var icona_diga = L.icon({
    iconUrl: iconsPath + 'icona_diga.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_diga_I = L.icon({
    iconUrl: iconsPath + 'icona_diga_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_diga_now = L.icon({
    iconUrl: iconsPath + 'icona_diga_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig]
});

var icona_diga2 = L.icon({
    iconUrl: iconsPath + 'icona_diga.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_diga2_I = L.icon({
    iconUrl: iconsPath + 'icona_diga_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_diga2_now = L.icon({
    iconUrl: iconsPath + 'icona_diga_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig]
});

var icona_ambiente = L.icon({
    iconUrl: iconsPath + 'icona_ambiente.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_ambiente2 = L.icon({
    iconUrl: iconsPath + 'icona_ambiente.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_ambiente_I = L.icon({
    iconUrl: iconsPath + 'icona_ambiente_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_ambiente2_I = L.icon({
    iconUrl: iconsPath + 'icona_ambiente_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_ambiente_now = L.icon({
    iconUrl: iconsPath + 'icona_ambiente_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig]
});

var icona_ambiente2_now = L.icon({
    iconUrl: iconsPath + 'icona_ambiente_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig]
});

var icona_indios = L.icon({
    iconUrl: iconsPath + 'icona_indios.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_indios2 = L.icon({
    iconUrl: iconsPath + 'icona_indios.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_indios3 = L.icon({
    iconUrl: iconsPath + 'icona_indios.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_indios_I = L.icon({
    iconUrl: iconsPath + 'icona_indios_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_indios2_I = L.icon({
    iconUrl: iconsPath + 'icona_indios_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_indios3_I = L.icon({
    iconUrl: iconsPath + 'icona_indios_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY]
});

var icona_indios_now = L.icon({
    iconUrl: iconsPath + 'icona_indios_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig]
});

var icona_indios2_now = L.icon({
    iconUrl: iconsPath + 'icona_indios_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig]
});

var icona_indios3_now = L.icon({
    iconUrl: iconsPath + 'icona_indios_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig]
});

//MARKERS
var altamira = L.latLng([(boundH/4)*2.62, (boundW/12)*3.1]);
var altamira2 = L.latLng([(boundH/4)*2.4, (boundW/12)*2.93]);
var altamira3 = L.latLng([(boundH/4)*2.3, (boundW/12)*2.50]);
var diga = L.latLng([(boundH/4)*2.97, (boundW/12)*6.42]);
var diga2 = L.latLng([(boundH/4)*1.4, (boundW/12)*5]);
var ambiente = L.latLng([(boundH/4)*1.4, (boundW/12)*6.9]);
var ambiente2 = L.latLng([(boundH/4)*2, (boundW/12)*7]);
var indios = L.latLng([(boundH/4)*1.26, (boundW/12)*6.1]);
var indios2 = L.latLng([(boundH/4)*0.89, (boundW/12)*6.75]);
var indios3 = L.latLng([(boundH/4)*0.6, (boundW/12)*7.2]);

var marker_altamira = L.marker(altamira, {
    icon: icona_altamira,
}).addTo(map)


var marker_altamira2 = L.marker(altamira2, {
    icon: icona_altamira2
}).addTo(map)

var marker_altamira3 = L.marker(altamira3, {
    icon: icona_altamira3
}).addTo(map)


var marker_diga = L.marker(diga, {
    icon: icona_diga
}).addTo(map)

var marker_diga2 = L.marker(diga2, {
    icon: icona_diga2
}).addTo(map)

var marker_ambiente = L.marker(ambiente, {
    icon: icona_ambiente
}).addTo(map)

var marker_ambiente2 = L.marker(ambiente2, {
    icon: icona_ambiente2
}).addTo(map)

var marker_indios = L.marker(indios, {
    icon: icona_indios
}).addTo(map)

var marker_indios2 = L.marker(indios2, {
    icon: icona_indios2
}).addTo(map)

var marker_indios3 = L.marker(indios3, {
    icon: icona_indios3
}).addTo(map)


//DO UN id AI MARKER

marker_altamira._icon.id = "markerID_altamira";
marker_altamira2._icon.id = "markerID_altamira2";
marker_altamira3._icon.id = "markerID_altamira3";
marker_diga._icon.id = "markerID_diga";
marker_diga2._icon.id = "markerID_diga2";
marker_ambiente._icon.id = "markerID_ambiente";
marker_ambiente2._icon.id = "markerID_ambiente2";
marker_indios._icon.id = "markerID_indios";
marker_indios2._icon.id = "markerID_indios2";
marker_indios3._icon.id = "markerID_indios3";


let div_popup = document.getElementById('popup_container');
var over_left;
var over_top;

//APRO I POPUP AL MOUSEOVER

markerID_altamira.addEventListener('mouseenter', function (e) {
    over_left  = e.clientX  + "px";
    over_top  = e.clientY + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
    div_popup.innerHTML = '<p class="titolo_popup">Altamira - Hospitals</p><p class="testo_popup">Sanitation is one of the main problems addressed by families living in the city of Altamira.</p><p class="hint">Click to inspect</p>';
    div_popup.style.opacity = 1;
});

markerID_altamira.addEventListener('mousemove', function (e) {
    over_left  = e.clientX  + "px";
    over_top  = e.clientY + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
});

markerID_altamira.addEventListener('mouseleave', function (e) {
    div_popup.style.opacity = 0;
});

markerID_altamira2.addEventListener('mouseenter', function (e) {
    div_popup.innerHTML = '<p class="titolo_popup">Altamira - Sewers</p><p class="testo_popup">The construction works for the sewers and the water supply system have been going on in Altamira for a long time, but their service is still cited as problematic.</p><p class="hint">Click to inspect</p>';
    div_popup.style.opacity = 1;
});

markerID_altamira2.addEventListener('mousemove', function (e) {
    over_left  = e.clientX  + "px";
    over_top  = e.clientY + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
});

markerID_altamira2.addEventListener('mouseleave', function (e) {
    div_popup.style.opacity = 0;
});

markerID_altamira3.addEventListener('mouseenter', function (e) {
    div_popup.innerHTML = '<p class="titolo_popup">Altamira - Housing</p><p class="testo_popup">The dramatic increase of the population of Altamira in the last years is linked to the presence of the workers in the dam construction and of thousands of indigenous people displaced.</p><p class="hint">Click to inspect</p>';
    div_popup.style.opacity = 1;
});

markerID_altamira3.addEventListener('mousemove', function (e) {
    over_left  = e.clientX  + "px";
    over_top  = e.clientY + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
});

markerID_altamira3.addEventListener('mouseleave', function (e) {
    div_popup.style.opacity = 0;
});

markerID_diga.addEventListener('mouseenter', function (e) {
    div_popup.innerHTML = '<p class="titolo_popup">UHE Belo Monte, Main Site - Electric Coverage</p><p class="testo_popup">Belo Monte is the main powerhouse of the hydroelectric complex built by Norte Energia on the Xingu River. </p><p class="hint">Click to inspect</p>';
    div_popup.style.opacity = 1;
});

markerID_diga.addEventListener('mousemove', function (e) {
    over_left  = e.clientX  + "px";
    over_top  = e.clientY + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
});

markerID_diga.addEventListener('mouseleave', function (e) {
    div_popup.style.opacity = 0;
});

markerID_diga2.addEventListener('mouseenter', function (e) {
    div_popup.innerHTML = '<p class="titolo_popup">UHE Belo Monte, Pimental Site - Efficiency</p><p class="testo_popup">The Pimental Site is the auxiliary powerhouse of the complex built by Norte Energia on the Xingu River.</p><p class="hint">Click to inspect</p>';
    div_popup.style.opacity = 1;
});

markerID_diga2.addEventListener('mousemove', function (e) {
    var altezza = div_popup.clientHeight;
    over_left  = e.clientX  + "px";
    over_top  = e.clientY - altezza + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
});

markerID_diga2.addEventListener('mouseleave', function (e) {
    div_popup.style.opacity = 0;
});

markerID_ambiente.addEventListener('mouseenter', function (e) {
    div_popup.innerHTML = '<p class="titolo_popup">Xingu River - Flora and Fauna</p><p class="testo_popup">The flooding of a previously wooded area and the desiccation of a part of the river caused deadly consequences on the fauna and flora of the Amazon.</p><p class="hint">Click to inspect</p>';
    div_popup.style.opacity = 1;
});

markerID_ambiente.addEventListener('mousemove', function (e) {
    var altezza = div_popup.clientHeight;
    over_left  = e.clientX  + "px";
    over_top  = e.clientY - altezza + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
});

markerID_ambiente.addEventListener('mouseleave', function (e) {
    div_popup.style.opacity = 0;
});

markerID_ambiente2.addEventListener('mouseenter', function (e) {
    div_popup.innerHTML = '<p class="titolo_popup">Xingu River - River Flow</p><p class="testo_popup">The building of the dam meant the diversion of the river flow, to obtain a more controllable water flow in the turbines.</p><p class="hint">Click to inspect</p>';
    div_popup.style.opacity = 1;
});

markerID_ambiente2.addEventListener('mousemove', function (e) {
    over_left  = e.clientX  + "px";
    over_top  = e.clientY + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
});

markerID_ambiente2.addEventListener('mouseleave', function (e) {
    div_popup.style.opacity = 0;
});

markerID_indios.addEventListener('mouseenter', function (e) {
    div_popup.innerHTML = '<p class="titolo_popup">Indigenous Peoples - Relocation</p><p class="testo_popup">The territories under the influence of the dam overlap with numerous indian reserves, whose inhabitants had to be relocated.</p><p class="hint">Click to inspect</p>';
    div_popup.style.opacity = 1;
});

markerID_indios.addEventListener('mousemove', function (e) {
    var altezza = div_popup.clientHeight;
    over_left  = e.clientX  + "px";
    over_top  = e.clientY - altezza + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
});

markerID_indios.addEventListener('mouseleave', function (e) {
    div_popup.style.opacity = 0;
});

markerID_indios2.addEventListener('mouseenter', function (e) {
    div_popup.innerHTML = '<p class="titolo_popup">Indigenous Peoples - Cooperation</p><p class="testo_popup">Despite the attempt for dialogue and cooperation, the feud between the construction companies and the Indios has been going on since the first project of the dam.</p><p class="hint">Click to inspect</p>';
    div_popup.style.opacity = 1;
});

markerID_indios2.addEventListener('mousemove', function (e) {
    var altezza = div_popup.clientHeight;
    over_left  = e.clientX  + "px";
    over_top  = e.clientY - altezza + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
});


markerID_indios2.addEventListener('mouseleave', function (e) {
    div_popup.style.opacity = 0;
});

markerID_indios3.addEventListener('mouseenter', function (e) {
    div_popup.innerHTML = '<p class="titolo_popup">Indigenous Peoples - Human Rights </p><p class="testo_popup">The degradation of the quality of life for the natives has been one of the main topics of protest for the dam detractors.</p><p class="hint">Click to inspect</p>';
    div_popup.style.opacity = 1;
});

markerID_indios3.addEventListener('mousemove', function (e) {
    var altezza = div_popup.clientHeight;
    over_left  = e.clientX  + "px";
    over_top  = e.clientY - altezza + "px";
    div_popup.style.left = over_left;
    div_popup.style.top = over_top;
});

markerID_indios3.addEventListener('mouseleave', function (e) {
    div_popup.style.opacity = 0;
});

//Overlays
document.getElementById("gotIt").addEventListener("click", viaOverlay1);

function viaOverlay1() {
    document.getElementsByClassName('overlay')[0].classList.add("hidden");
}

function vieniOverlay1() {
    closeNav();
    document.getElementsByClassName('overlay')[0].classList.remove("hidden");
}

function viaOverlay2() {
    document.getElementsByClassName('overlay')[1].classList.add("hidden");
}

function vieniOverlay2() {
    closeNav();
    document.getElementsByClassName('overlay')[1].classList.remove("hidden");
    document.getElementById("hai_finito").style.display = "none";
    document.getElementById('tutorial').style.display = "none";
    document.getElementById('counter').style.display = "none";
}

//Cambiare contenuto agli scenari
function scenario1() {
    var a = "<p class='title-text'>License granted.</p><p class='base_text'>Belo Monte Dam will now work at its full power. The Ministry of Mines and Energy estimates that the dam will grant a minimum capacity production of 4.571 MW and will fuel the whole Parà region, preventing the emission of further CO2 in the next years. Nevertheless, according to the Institute of Geosciences of the University of Sao Paulo, Xingu river flow will be affected by the dam, causing a decrease in its discharge and eventually in the energy production of the dam itself.</p><a href='https://www.researchgate.net/publication/329103585_The_Belo_Monte_effect_how_an_enormous_dam_has_already_affected_a_rich_Amazon_ecosystem_-_and_what_the_future_might_hold_for_it' target='_blank'class='btn-2'>Source&#x2197;</a><img src='./assets/img/scenario_1.png' class='scenario-viz'><button type='button' class='btn-2' onclick='scenario2()'>What if the license was denied?</button><a href='outcome.html'><button type='button' class='btn-1'>Got it</button></a>"
    document.getElementsByClassName('contenuto_overlay')[1].innerHTML = a;
}

function scenario2() {
    var b = "<p class='title-text'>License denied.</p><p class='base_text'>Belo Monte dam will be shut down. According to the Interamerican Association for Environmental Defense (AIDA) its construction has irreversibly damaged Xingu River ecosystem, and the promotion of restoration programs can just mitigate these effects. Brazilian Electricity Regulatory Agency (ANEEL) estimated that CO2 emissions will increase by 10 million tons per year, as fossil fuels are assumed to be used instead for energy production.</p><a href='http://franke.uchicago.edu/bigproblems/BPRO29000-2014/Team09-EnergyPolicyPaperBeloMonte.pdf' target='_blank'class='btn-2'>Source&#x2197;</a><img src='./assets/img/scenario_2.png' class='scenario-viz'><button type='button' class='btn-2' onclick='scenario1()'>What if the license was granted?</button><a href='outcome.html'><button type='button' class='btn-1'>Got it</button></a>"
    document.getElementsByClassName('contenuto_overlay')[1].innerHTML = b;
}


//Cambiare overlay mappa
marker_indios.on('click', function (e) {
    resetMappa();
    cambiaMappa("_indios");
});
marker_indios2.on('click', function (e) {
    resetMappa();
    cambiaMappa("_indios");
});
marker_indios3.on('click', function (e) {
    resetMappa();
    cambiaMappa("_indios");
});
marker_altamira.on('click', function (e) {
    resetMappa();
    cambiaMappa("_altamira");
});
marker_altamira2.on('click', function (e) {
    resetMappa();
    cambiaMappa("_altamira");
});
marker_altamira3.on('click', function (e) {
    resetMappa();
    cambiaMappa("_altamira");
});
marker_diga.on('click', function (e) {
    resetMappa();
    cambiaMappa("_diga");
});
marker_diga2.on('click', function (e) {
    resetMappa();
    cambiaMappa("_diga");
});
marker_ambiente.on('click', function (e) {
    resetMappa();
    cambiaMappa("_ambiente");
});
marker_ambiente2.on('click', function (e) {
    resetMappa();
    cambiaMappa("_ambiente");
});

//SIDEBAR

var navState;
var current_marker;
var nome_icona_now;

function openNav() {
    document.getElementById("mySidenav").style.width = "30vw";
    navState = true;
    document.getElementById("map-title").style.opacity = "1";
    document.getElementById("map-legenda").style.opacity = "1";
    document.getElementById('hai_finito').style.display = "block";
    document.getElementById('hai_finito').classList.add("move");

    document.getElementsByClassName("left")[0].style.display = "block";
    document.getElementsByClassName("right")[0].style.display = "block";
    document.getElementsByClassName("statement")[0].style.opacity = "1";
    document.getElementsByClassName("statement")[1].style.opacity = "1";
}   

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    navState = false;
    document.getElementById("map-title").style.opacity = "0";
    document.getElementById("map-legenda").style.opacity = "0";
    document.getElementById('hai_finito').classList.remove("move");
    document.getElementsByClassName("left")[0].style.display = "none";
    document.getElementsByClassName("right")[0].style.display = "none";
    document.getElementsByClassName("statement")[0].style.opacity = "0";
    document.getElementsByClassName("statement")[1].style.opacity = "0";
    current_marker = window["marker_" + switchIcona];
    nome_icona_now = window["icona_" + switchIcona + "_I"];
    current_marker.setIcon(nome_icona_now);
};

//CAMBIARE ICONE
var vecchia_icona;
var vecchio_marker;
var it_happened = false;

function cambiaIcone() {
    if (it_happened) {
        var nome_icona_I = window["icona_" + vecchia_icona + "_I"];
        vecchio_marker.setIcon(nome_icona_I);
    };
    current_marker = window["marker_" + switchIcona];
    nome_icona_now = window["icona_" + switchIcona + "_now"];
    if (navState){
        current_marker.setIcon(nome_icona_now);
        vecchia_icona = switchIcona;
        vecchio_marker = current_marker;
        it_happened = true;
    }
}

//CONTENUTO

//CONTA SE HAI LETTO TUTTO
var altamira_letto = false;
var altamira2_letto = false;
var altamira3_letto = false;
var diga_letto = false;
var diga2_letto = false;
var ambiente_letto = false;
var ambiente2_letto = false;
var indios_letto = false;
var indios2_letto = false;
var indios3_letto = false;

var array_icone = ["altamira", "altamira2", "altamira3", "diga", "diga2", "ambiente", "ambiente2", "indios", "indios2", "indios3"];


function contaLetture() {

    if (altamira_letto & altamira2_letto & altamira3_letto & diga_letto & diga2_letto & ambiente_letto & ambiente2_letto & indios_letto & indios2_letto & indios3_letto) {
        closeNav();
        document.getElementsByClassName('overlay')[1].classList.remove("hidden");
        document.getElementById("hai_finito").style.display = "none";

        document.getElementById("title_overlay2").innerHTML = "Time to Decide...";
        document.getElementById("text_overlay2").innerHTML = "If you were in charge of the dam's future, would you grant the Operational License?";
        document.getElementsByClassName("btn-1")[1].style.display = "block";
        document.getElementsByClassName("btn-1")[2].style.display = "block";
        document.getElementsByClassName("btn-3")[0].style.display = "none";
        document.getElementsByClassName("btn-3")[1].style.display = "none";
    } else {
        closeNav();
        document.getElementsByClassName('overlay')[1].classList.remove("hidden");
        document.getElementById("hai_finito").style.display = "none";

        document.getElementById("title_overlay2").innerHTML = "Are you sure?";
        document.getElementById("text_overlay2").innerHTML = "You haven't inspected all the impacts of the dam yet, do you still want to take a decision?";
        document.getElementsByClassName("btn-1")[1].style.display = "none";
        document.getElementsByClassName("btn-1")[2].style.display = "none";
        document.getElementsByClassName("btn-3")[0].style.display = "block";
        document.getElementsByClassName("btn-3")[1].style.display = "block";
    }
}

function areYouSure(decisione) {

    if (decisione === "torna") {
        document.getElementsByClassName('overlay')[1].classList.add("hidden");
        document.getElementById("hai_finito").style.display = "block";
    }

    if (decisione === "avanti") {
        document.getElementById("title_overlay2").innerHTML = "Time to Decide...";
        document.getElementById("text_overlay2").innerHTML = "If you were in charge of the dam's future, would you grant the Operational License?";
        document.getElementsByClassName("btn-1")[1].style.display = "block";
        document.getElementsByClassName("btn-1")[2].style.display = "block";
        document.getElementsByClassName("btn-3")[0].style.display = "none";
        document.getElementsByClassName("btn-3")[1].style.display = "none";
    }
}

var switchIcona;

marker_altamira.addEventListener("click", function (e) {
    switchIcona = "altamira";
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    altamira_letto = true;
});
marker_altamira2.addEventListener("click", function (e) {
    switchIcona = "altamira2";
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    altamira2_letto = true;
});
marker_altamira3.addEventListener("click", function (e) {
    switchIcona = "altamira3";
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    altamira3_letto = true;
});

marker_diga.addEventListener("click", function (e) {
    switchIcona = "diga";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    diga_letto = true;
});
marker_diga2.addEventListener("click", function (e) {
    switchIcona = "diga2";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    diga2_letto = true;
});

marker_ambiente.addEventListener("click", function (e) {
    switchIcona = "ambiente";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    ambiente_letto = true;
});
marker_ambiente2.addEventListener("click", function (e) {
    switchIcona = "ambiente2";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    ambiente2_letto = true;
});

marker_indios.addEventListener("click", function (e) {
    switchIcona = "indios";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    indios_letto = true;
});
marker_indios2.addEventListener("click", function (e) {
    switchIcona = "indios2";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    indios2_letto = true;
});
marker_indios3.addEventListener("click", function (e) {
    switchIcona = "indios3";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    indios3_letto = true;
});


//MANDO AVANTI LE ICONE CON LA FRECCETTA
var posizione = 0;

function avanti() {
    posizione = array_icone.indexOf(switchIcona);
    posizione++;
    switchIcona = array_icone[posizione];
    document.getElementById('markerID_' + switchIcona).click();
    map.closePopup();
};

function indietro() {
    posizione = array_icone.indexOf(switchIcona);
    posizione--;
    if (posizione < 0) {
        posizione = 7;
    };
    switchIcona = array_icone[posizione];
    document.getElementById('markerID_' + switchIcona).click();
    map.closePopup();
};

var loco = '<i class="fas fa-map-marker-alt" style="font-size:0.8rem;color:#ffffff;"></i>'

function unveilStatements(switchIcona) {
    switch (switchIcona) {
        case "altamira":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "./assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "Norte Energia invested in the construction and renovation of hospitals, which have already been delivered and equipped." ';
            document.getElementById("location-name").innerHTML = loco + ' Altamira ';
            document.getElementById("topic-name").innerHTML = ' Hospitals ';
            document.getElementById("source_norte").href="https://pt.calameo.com/read/005631827e3560a3d7f49?authid=nrF0vTTowPtV";
            break;
        case "altamira2":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "./assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "Belo Monte built a modern system of sewage collection and treatment, with more than 200 km of network, and expanded the water supply system." ';
            document.getElementById("location-name").innerHTML = loco + ' Altamira ';
            document.getElementById("topic-name").innerHTML = ' Sewers ';
            document.getElementById("source_norte").href="https://www.norteenergiasa.com.br/pt-br/sustentabilidade/legados-sociais/saneamento-basico";
            break;
        case "altamira3":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "./assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "The construction of five new neighborhoods in Altamira was completed in 2015. In total, 3,700 houses were built." ';
            document.getElementById("location-name").innerHTML = loco + ' Altamira ';
            document.getElementById("topic-name").innerHTML = ' Housing ';
            document.getElementById("source_norte").href="https://www.norteenergiasa.com.br/pt-br/sustentabilidade/legados-sociais/habitacao";
            break;
        case "diga":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "./assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "60 million people are going to be reached." ';
            document.getElementById("location-name").innerHTML = loco + ' UHE Belo Monte, Main Site ';
            document.getElementById("topic-name").innerHTML = ' Electric Coverage ';
            document.getElementById("source_norte").href="https://www.norteenergiasa.com.br/pt-br/imprensa/releases/na-reta-final-100282";
            break;
        case "diga2":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "./assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "Belo Monte confers greater security to the Electric System, due to the better use of the hydrological differences of flood and drought between the different regions of Brazil, which contribute to the Brazilian energy matrix." ';
            document.getElementById("location-name").innerHTML = loco + ' UHE Belo Monte, Pimental Site ';
            document.getElementById("topic-name").innerHTML = ' Efficiency ';
            document.getElementById("source_norte").href="https://www.norteenergiasa.com.br/pt-br/uhe-belo-monte/geracao-e-operacao";
            break;
        case "ambiente":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "./assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "More than 395 thousand wild animals were rescued. Healthy animals (92%) were returned to the natural habitat, while the rest were sent to scientific institutions or breeding grounds for conservation purposes. " ';
            document.getElementById("location-name").innerHTML = loco + ' Xingu River ';
            document.getElementById("topic-name").innerHTML = ' Flora and Fauna ';
            document.getElementById("source_norte").href="https://www.norteenergiasa.com.br/pt-br/sustentabilidade/legados-ambientais/fauna-resgate";
            break;
        case "ambiente2":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "./assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "The environmental conditions around Volta Grande are kept stable by a "hydrograph of consensus" - a model that establishes the minimum river flow rate to keep the area environmentally healthy." ';
            document.getElementById("location-name").innerHTML = loco + ' Xingu River ';
            document.getElementById("topic-name").innerHTML = ' River Flow ';
            document.getElementById("source_norte").href="https://www1.folha.uol.com.br/internacional/en/brazil/2018/09/nearing-completion-belo-monte-dam-receives-criticisms-from-all-sides.shtml";
            break;
        case "indios":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "./assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "The evolution of the Belo Monte project ensured that no centimeter of the more than 5 million hectares occupied by 9 ethnic groups was flooded by the reservoirs of the Plant." ';
            document.getElementById("location-name").innerHTML = loco + ' Indigenous Peoples ';
            document.getElementById("topic-name").innerHTML = ' Relocation ';
            document.getElementById("source_norte").href="https://www.norteenergiasa.com.br/pt-br/sustentabilidade/povos-tradicionais/povos-tradicionais";
            break;
        case "indios2":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "./assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "The indigenous communities actively participate in the discussions to define the actions that will be carried out in their territories. " ';
            document.getElementById("location-name").innerHTML = loco + ' Indigenous Peoples ';
            document.getElementById("topic-name").innerHTML = ' Cooperation ';
            document.getElementById("source_norte").href="https://www.norteenergiasa.com.br/pt-br/sustentabilidade/povos-tradicionais/protagonismo-indigena";
            break;
        case "indios3":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "./assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "The Basic Indigenous Environmental Component Project has been guaranteeing fundamental rights, promoting the quality of life and integrity of some 4,000 indigenous people." ';
            document.getElementById("location-name").innerHTML = loco + ' Indigenous Peoples ';
            document.getElementById("topic-name").innerHTML = ' Human Rights ';
            document.getElementById("source_norte").href="https://www.norteenergiasa.com.br/pt-br/sustentabilidade/povos-tradicionais/povos-tradicionais";
            break;
        default:
            console.log("Non sto andando");
    }
}

function unveilVersions(switchIcona) {
    switch (switchIcona) {
        case "altamira":
            document.getElementsByClassName("actor-icon")[1].src = "assets/iconsfolder/icona_internetpress.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Internet Press Service";
            document.getElementsByClassName("actor-type")[1].innerHTML = "News Agency";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "The hospital was already there, and it had shut its doors in April 2014, leaving the 22,000 people of Brasil Novo without a hospital." ';
            document.getElementById("source_other").href="http://www.ipsnews.net/2015/06/amazon-dam-also-brings-health-infrastructure-for-local-population/";
            break;
        case "altamira2":
            document.getElementsByClassName("actor-icon")[1].src = "assets/iconsfolder/icona_mongabay.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Mongabay";
            document.getElementsByClassName("actor-type")[1].innerHTML = "News";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "Over the past year, Norte Energia´s license has been suspended because of its failure to fulfill the building of an adequate sewer and water system for the city of Altamira." ';
            document.getElementById("source_other").href="https://news.mongabay.com/2017/09/belo-monte-dam-installation-license-suspended-housing-inadequacy-cited/";
            break;
        case "altamira3":
            document.getElementsByClassName("actor-icon")[1].src = "assets/iconsfolder/icona_ministerio.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Ministério Público Federal";
            document.getElementsByClassName("actor-type")[1].innerHTML = "Brazilian Ministry";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "The houses proposed by Norte Energia violated the Altamira municipality Construction Code." ';
            document.getElementById("source_other").href="https://news.mongabay.com/2017/09/belo-monte-dam-installation-license-suspended-housing-inadequacy-cited/";
            break;
        case "diga":
            document.getElementsByClassName("actor-icon")[1].src = "assets/iconsfolder/icona_antunes.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Walter Coronado Antunes";
            document.getElementsByClassName("actor-type")[1].innerHTML = "Former Secretary of the Environment of the state of São Paulo";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "Only 70% of the energy will go to the Brazilian population. The remaining 30% will be sold to power mining and industrial companies." ';
            document.getElementById("source_other").href="https://en.wikipedia.org/wiki/Belo_Monte_Dam#cite_note-antunes-50";
            break;
        case "diga2":
            document.getElementsByClassName("actor-icon")[1].src = "assets/iconsfolder/icona_amazonwatch.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Amazon Watch";
            document.getElementsByClassName("actor-type")[1].innerHTML = "NGO";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "Belo Monte Dam Complex is one of the least efficient hydro-power projects in the history of Brazil." ';
            document.getElementById("source_other").href="https://amazonwatch.org/work/belo-monte-facts";
            break;
        case "ambiente":
            document.getElementsByClassName("actor-icon")[1].src = "assets/iconsfolder/icona_survival.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Survival International";
            document.getElementsByClassName("actor-type")[1].innerHTML = "NGO";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "The proposed flow through the Volta Grande meant the river will not be capable of maintaining species diversity, risking extinction of hundreds of species." ';
            document.getElementById("source_other").href="http://assets.survivalinternational.org/documents/266/Experts_Panel_BeloMonte_summary_oct2009.pdf";
            break;
        case "ambiente2":
            document.getElementsByClassName("actor-icon")[1].src = "assets/iconsfolder/icona_amazonconservation.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Amazon Conservation";
            document.getElementsByClassName("actor-type")[1].innerHTML = "NGO";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "A canal diverts much (up to 80%) of the river’s flow from the main reservoir to the canal reservoir, which feeds the turbines generating the electricity. As a result, downstream of the main dam is left with a much reduced flow (20%) for a stretch of 100 km." ';
            document.getElementById("source_other").href="https://maaproject.org/2017/belo-monte/";
            break;
        case "indios":
            document.getElementsByClassName("actor-icon")[1].src = "assets/iconsfolder/icona_internationalrivers.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "International Rivers";
            document.getElementsByClassName("actor-type")[1].innerHTML = "NGO";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "20,000 people were displaced by the dam." ';
            document.getElementById("source_other").href="https://www.internationalrivers.org/campaigns/belo-monte-dam";
            break;
        case "indios2":
            document.getElementsByClassName("actor-icon")[1].src = "assets/iconsfolder/icona_openglobal.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Open Global Rights";
            document.getElementsByClassName("actor-type")[1].innerHTML = "NGO";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "The meetings held to explain the impacts of the dam were highly inadequate—indigenous people had two days to review 26,000 pages of the technical study, with no interpreters." ';
            document.getElementById("source_other").href="https://www.openglobalrights.org/how-not-to-produce-energy-lessons-from-brazils-belo-monte-dam/";
            break;
        case "indios3":
            document.getElementsByClassName("actor-icon")[1].src = "assets/iconsfolder/icona_ministerio.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Ministério Público Federal";
            document.getElementsByClassName("actor-type")[1].innerHTML = "Brazilian Ministry";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "Norte Energia violated 55 different obligations it had agreed to in order to guarantee the survival of indigenous groups, farmers and fishermen whose homes and lands will be lost." ';
            document.getElementById("source_other").href="https://www.theguardian.com/world/2015/jun/16/brazil-belo-monte-dam-indigenous-groups-at-risk";
            break;
        default:
    }
}


//CARICAMENTO
window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
}
