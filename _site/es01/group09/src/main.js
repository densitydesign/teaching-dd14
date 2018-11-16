// questa è la variabile globale dove andiamo a salvare il risultato dell'interpolazione del volume/percentuale
// var globalResult = 0;

var mouseX, mouseY;
var toc = document.getElementsByClassName("toc")[0];
// contiene tutti i titoli delle sezioni
var lis = [];
var line = document.getElementById("current-line");

var mouseX = 0;
var mouseY = 0;

var delay = 200;
// var updateInterval = 25;

var mp3 = document.getElementById("mp3");

// function to map some range of values to another range of values
function mapper(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

// get mouse coordinates
document.addEventListener("mousemove", function(e) {
  mouseX = mapper(e.clientX / window.innerWidth, 0, 1, 0, 1);
  mouseY = mapper(e.clientY / window.innerHeight, 0, 1, 0, 1);
});

// apertura/chiusura indice dei contenuti
var line = document.getElementById("current-line");
document.addEventListener("mousemove", function(e) {
  // mouseX = e.clientX / window.innerWidth;
  // mouseY = e.clientY / window.innerHeight;
  // console.log(mouseX);
  if (mouseX > 0.75) {
    toc.classList.add("summon");
    line.classList.add("active");
  } else if (mouseX < 0.75) {
    toc.classList.remove("summon");
    line.classList.remove("active");
  }
});
// document.addEventListener("mouseleave", function(e) {
//   toc.classList.remove("summon");
//   line.classList.remove("active");
// });

var points = 100;
// generate wave dots
function generateDots() {
  var svgNS = "http://www.w3.org/2000/svg",
    container = document.getElementById("wave");
  for (var i = 0; i <= points; i++) {
    var svgLine = document.createElementNS(svgNS, "line");
    var spacing = container.clientWidth / (points * 1.825);
    svgLine.setAttributeNS(null, "x1", 0 + spacing * i);
    svgLine.setAttributeNS(null, "x2", 0 + spacing * i);
    svgLine.setAttributeNS(null, "y1", 0 + spacing * i);
    svgLine.setAttributeNS(null, "y2", 0 + spacing * i);
    svgLine.classList.add("wave-line");
    container.appendChild(svgLine);
    // console.log(points[i]);
  }
}
generateDots();

// animate the wave dots
var norm = 0;
setTimeout(function() {
  var el = document.getElementsByClassName("hide")[0];
  el.classList.remove("hide");
  el.classList.add("show");
  function anim() {
    document.querySelectorAll("svg line.wave-line").forEach((c, i) => {
      var amp = 1 - i / points;
      var freq = 1 / 50;
      var osc_freq = 0.15;
      var phase = osc_freq * i;
      var t = performance.now();
      // norm = 1;

      var maths = 50 + amp * 2 * norm * i * Math.sin(freq * t + phase);

      c.setAttribute("y1", maths);
      c.setAttribute("y2", maths);
    });
    requestAnimationFrame(anim);
  }
  requestAnimationFrame(anim);
}, delay);

// CountUp anima percentage values e waveform volume
var options_numAnim = {
  suffix: "%"
};
var numAnim = new CountUp("map-percentage", 0, 0, 0, 3, options_numAnim);
// console.log(numAnim.printValue);
// if (!numAnim.error) {
//     numAnim.start(console.log(numAnim));
// } else {
//     console.error(numAnim.error);
// }

// funzioni che prendono la percentuale dei dati nella mappa – grafico 1
var els = document.getElementsByClassName("graph1-area");
// console.log(els);
var oldp, newp, pct;
for (i = 0; i < els.length; i++) {
  els[i].onmouseenter = function() {
    newp = this.getAttribute("data-percentage");
    // norm controlla l'ampiezza dell'onda nella funzione *dalle un cazzo di nome però*
    // norm = newp / 100;
    // console.log(norm);
    pct = document.getElementById("map-percentage");
    mp3.play();

    pct.style.opacity = "1";

    // aggiorna il contatore percentuale
    numAnim.update(newp);
  };
}
for (i = 0; i < els.length; i++) {
  els[i].onmouseleave = function() {
    // riporta percentuale a zero
    numAnim.update(0);
  };
}

// prende tutti i titoli delle sezioni h1 e h2 con classe 'section-title'
// e li inserisce come tag <li> nell'indice dei contenuti
var where = [];
function tocTitles() {
  var ul = document.createElement("UL");
  toc.appendChild(ul);

  // l'HTMLCollection non è un array - ma vaffanculo.
  // HTMLCollection dei titoli nel documento HTML
  // var liTxt = document.getElementsByTagName("section-title");

  // HTMLCollection dei titoli h1 nel documento HTML
  var liTxt = document.getElementsByTagName("h1");

  var li;
  // insieme di tutte le sezioni con testo
  // var anchor = document.getElementsByClassName("narrative-section");

  for (i = 0; i < liTxt.length; i++) {
    li = document.createElement("li");
    // link da inserire dentro ogni 'li'
    a = document.createElement("a");
    // setta il collegamento di ogni 'a'
    where.push(liTxt[i].parentElement.id);
    // console.log(liTxt[i].parentElement.id);
    a.href = "#" + where[i];

    // prende il primo elemento figlio di 'section-title', cioè i titoli delle sezioni
    // a.innerHTML = liTxt[i].childNodes[1].innerHTML;

    // questo prende tutti i titoli h1
    a.innerHTML = liTxt[i].innerHTML;

    // inserisce il 'li' in 'ul'
    ul.appendChild(li);

    // inserisce il collegamento 'a' in 'li'
    li.appendChild(a);
    lis.push(li);
    // valore dato all'inizio
    if (liTxt[i] == liTxt[0]) {
      li.classList.add("current");
      //   console.log(li);
    }
  }
  // console.log(lis);
}
window.onload = tocTitles();

var sectionHeights = [];
// questo è l'elemento che viene considerato come sezione.
var sections = document.getElementsByTagName("h1");

function calcHeights() {
  var height;
  for (i = 0; i < sections.length; i++) {
    // prendi il contenitore del titolo di ogni sezione (per capire quando comincia la sezione)
    height = sections[i].parentElement.parentElement.parentElement.offsetTop;
    sectionHeights.splice(i, 1, height);
  }
  // console.log(sectionHeights);
}

function updateIndicator(currLi) {
  var indicator = document.getElementById("current-line");
  var currLi = document.getElementsByClassName("current")[0];
  var currLiHeight = currLi.getBoundingClientRect().top;
  // console.log(currentLiHeight.top);
  indicator.style.top = currLiHeight;
}

function updateSection() {
  var doc = document.documentElement;
  var top =
    (window.pageYOffset || doc.scrollTop) -
    (doc.clientTop || 0) +
    window.innerHeight / 2;
  // var top = (window.pageYOffset / window.innerHeight) / 2;

  calcHeights();
  // console.log('Current height: ' + top);

  for (i = 0; i < sections.length; i++) {
    var currSectionHeight = sectionHeights[i];
    // console.log(sections[i].innerHTML + ' — ' + currSectionHeight);
    var nextSectionHeight = sectionHeights[i + 1];
    var oldSectionHeight = sectionHeights[i - 1] || sectionHeights[0];
    // console.log(oldSectionHeight);

    // var oldSection = sections[i - 1] || sections[0];
    // var currSection = sections[i];
    // var nextSection = sections[i + 1];

    var currLi = document.querySelectorAll(".toc > ul > li")[i];
    // console.log(currLi);
    var oldLi = document.querySelectorAll(".toc > ul > li")[i - 1];
    if (
      (top >= currSectionHeight && top < nextSectionHeight) ||
      (top >= currSectionHeight && top < document.body.scrollHeight)
    ) {
      // ora sai in quale sezione sei nel documento
      // console.log('current section: ' + currLi.innerHTML);

      // ora bisogna selezionare il 'li' corrispondente e mettergli la classe 'current'
      if (typeof oldLi === "undefined") {
        document.querySelectorAll(".toc > ul > li")[0].classList.add("current");
      } else {
        oldLi.classList.remove("current");
      }

      currLi.classList.add("current");
    } else if (top <= currSectionHeight && top > oldSectionHeight) {
      oldLi.classList.add("current");
      currLi.classList.remove("current");
      // oldLi = currLi;
    }
  }
  updateIndicator(currLi);
}


var infoTooltip;
infoTooltip = document.getElementById("info-tooltip");
//------TOOLTIP SU LINK ESTERNI
var moreInfo = document.getElementsByClassName("more-info");
var definition;
document.addEventListener("mouseover", showLinkInfo);
function showLinkInfo() {
  for (i = 0; i < moreInfo.length; i++) {
    if (moreInfo[i].matches('.more-info:hover')) {
      infoTooltip.innerHTML = moreInfo[i].getAttribute('data-definition');
      console.log(definition);
      infoTooltip.classList.add("summon");
    }
  }
}
document.addEventListener("mouseout", hideLinkInfo);
function hideLinkInfo() {
  infoTooltip.classList.remove("summon");
}

//------PER IL TOOLTIP
function showInfoTooltip(event) {
  var tooltip = document.getElementById("info-tooltip");
  var x = window.innerWidth;
  var y = window.innerHeight;
  tooltip.style.left = event.x + "px";
  tooltip.style.top = event.y + "px";
}
document.addEventListener("mousemove", showInfoTooltip);
//------TOOLTIP SU SVG
var tmMoreInfo = document.getElementsByClassName("timeline-more-info");
var info;
document.addEventListener("mouseover", showTimelineInfo);
function showTimelineInfo() {
  for (i = 0; i < tmMoreInfo.length; i++) {
    if (tmMoreInfo[i].matches('.timeline-more-info:hover')) {
      infoTooltip.innerHTML = tmMoreInfo[i].getAttribute('data-info');
      infoTooltip.classList.add("summon");
    }
  }
}
document.addEventListener("mouseout", hideTimelineInfo);
function hideTimelineInfo() {
  infoTooltip.classList.remove("summon");
}



// ////////////////// START ////////////////// //
// //////// SCROLLMAGIC + GSAP SCENES //////// //
// /////////////////////////////////////////// //

var waveformController = new ScrollMagic.Controller();
var mapScene = new ScrollMagic.Scene({
  triggerElement: "#map-percentage",
  triggerHook: 0.235,
  duration: "200%"
})
  .setPin("#main-question") // pins the element for the the scene's duration
  .addTo(waveformController); // assign the scene to the controller

mapScene.on("enter", function(event) {
  document
    .getElementById("section-1")
    .parentElement.parentElement.classList.add("bg", "dark");
  document.getElementById("main-question-paragraph").classList.add("dark");
  document.getElementById("wave").classList.add("focus");
  numAnim.update(100);
});
mapScene.on("leave", function(event) {
  document
    .getElementById("section-1")
    .parentElement.parentElement.classList.remove("bg", "dark");
  document.getElementById("main-question-paragraph").classList.remove("dark");
  document.getElementById("main-question-paragraph").style.marginBottom = "0";
  document.getElementById("wave").classList.remove("focus");
  numAnim.update(0);
});

var timelineController = new ScrollMagic.Controller();
// define movement of panels
var wipeAnimation = new TimelineMax().fromTo(
  "#timeline",
  1,
  { x: "20%" },
  { x: "-80%", ease: Linear.easeNone }
); // in from left

var timelineScene = new ScrollMagic.Scene({
  triggerElement: "#section-2-2",
  triggerHook: 0,
  duration: "200%"
})
  .setPin("#section-3-pin")
  .setTween(wipeAnimation)
  // .addIndicators()
  .addTo(timelineController);

timelineScene.on("enter", function(event) {
  // console.log("entered");
  document.getElementById("section-3-pin").style.marginTop =
    "calc(var(--spacing) * 1)";
});

// /////////////////////////////////////////// //
// //////// SCROLLMAGIC + GSAP SCENES //////// //
// /////////////////// END /////////////////// //

// /////////////////////////////////////////// //
// ///////// GESTIONE EVENTI PAGINA ////////// //
// /////////////////////////////////////////// //

window.onload = e => {
  generateDots();
  tocTitles();
  updateSection();
};
document.addEventListener("scroll", e => {
  updateSection();
});
