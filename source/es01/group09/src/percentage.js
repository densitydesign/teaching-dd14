var socialLabels = document.querySelectorAll('.social-label');
var fbElements = document.querySelectorAll(".graph-section-fb");
var twElements = document.querySelectorAll(".graph-section-tw");
var ytElements = document.querySelectorAll(".graph-section-yt");

var fbBox = document.getElementById("fb-box");
var twBox = document.getElementById("tw-box");
var ytBox = document.getElementById("yt-box");
var fbText = document.getElementById("fb-text");
var twText = document.getElementById("tw-text");
var ytText = document.getElementById("yt-text");

var redTiming = 600;
var whiteTiming = 500;

let numero = 2;

var s = Snap("#bar_chart");

// rect(xCoords, yCoords, width, height, border-radius)
// b = bar
// w = white, r = red

var b1w = (s.rect(550, -946, 200, 0, 0).attr({fill: "white"})).addClass("white-column");
var b2w = (s.rect(930, -946, 200, 0, 0).attr({fill: "white"})).addClass("white-column");
var b3w = (s.rect(1300, -946, 200, 0, 0).attr({fill: "white"})).addClass("white-column");

var b1r = (s.rect(550, -946, 200, 0, 0).attr({fill: "red"})).addClass("red-column");
var b2r = (s.rect(930, -946, 200, 0, 0).attr({fill: "red"})).addClass("red-column");
var b3r = (s.rect(1300, -946, 200, 0, 0).attr({fill: "red"})).addClass("red-column");

var wBarGroup = s.group(b1w, b2w, b3w);
var rBarGroup = s.group(b1r, b2r, b3r);

var myMatrix = new Snap.Matrix();
myMatrix.scale(1, -1);
wBarGroup.animate({ transform: myMatrix }, 0);
rBarGroup.animate({ transform: myMatrix }, 0);

b1w.animate({height:70}, whiteTiming, mina.easeinout);
b2w.animate({height:329}, whiteTiming, mina.easeinout);
b3w.animate({height:363}, whiteTiming, mina.easeinout);
b1r.animate({height:20}, redTiming, mina.easeinout);
b2r.animate({height:220}, redTiming, mina.easeinout);
b3r.animate({height:328}, redTiming, mina.easeinout);


// var bar1red = document.getElementById("bar1-red");


window.onload = fbText.classList.add("blue-text"),
                fbBox.classList.add("white-box"),
                fbElements[0].classList.add("on"),
                fbElements[1].classList.add("on");
                // fbElements[2].classList.add("on");
                

for (i = 0; i < socialLabels.length; i++) {
    socialLabels[i].addEventListener('click', highlightsocialLabelsOn, false);
    // socialLabels[i].addEventListener('mouseout', highlightsocialLabelsOff, false);
}

function highlightsocialLabelsOn() {
    for (i = 0; i < numero; i++) {
        fbElements[i].classList.remove("on");
        twElements[i].classList.remove("on");
        ytElements[i].classList.remove("on");
        fbText.classList.remove("blue-text");
        fbBox.classList.remove("white-box");
        twText.classList.remove("blue-text");
        twBox.classList.remove("white-box");
        ytText.classList.remove("blue-text");
        ytBox.classList.remove("white-box");
    }

    // fbElements.classList.remove("on");
    // twElements.classList.remove("on");
    // ytElements.classList.remove("on");

    if (this.classList.contains('fb-label')) {
        b1w.animate({height:70}, whiteTiming, mina.easeinout);
        b2w.animate({height:329}, whiteTiming, mina.easeinout);
        b3w.animate({height:363}, whiteTiming, mina.easeinout);
        b1r.animate({height:20}, redTiming, mina.easeinout);
        b2r.animate({height:220}, redTiming, mina.easeinout);
        b3r.animate({height:328}, redTiming, mina.easeinout);

        fbText.classList.add("blue-text");
        fbBox.classList.add("white-box");
        for (i = 0; i < numero; i++) {
            fbElements[i].classList.add("on");
        }
    } else if (this.classList.contains('tw-label')) {
        b1w.animate({height:42}, whiteTiming, mina.easeinout);
        b2w.animate({height:168}, whiteTiming, mina.easeinout);
        b3w.animate({height:205}, whiteTiming, mina.easeinout);
        b1r.animate({height:9}, redTiming, mina.easeinout);
        b2r.animate({height:63}, redTiming, mina.easeinout);
        b3r.animate({height:95}, redTiming, mina.easeinout);

        twText.classList.add("blue-text");
        twBox.classList.add("white-box");
        for (i = 0; i < numero; i++) {
            twElements[i].classList.add("on");
        }
    } else if (this.classList.contains('yt-label')) {
        b1w.animate({height:32}, whiteTiming, mina.easeinout);
        b2w.animate({height:170}, whiteTiming, mina.easeinout);
        b3w.animate({height:202}, whiteTiming, mina.easeinout);
        b1r.animate({height:15}, redTiming, mina.easeinout);
        b2r.animate({height:112}, redTiming, mina.easeinout);
        b3r.animate({height:152}, redTiming, mina.easeinout);

        ytText.classList.add("blue-text");
        ytBox.classList.add("white-box");
        for (i = 0; i < numero; i++) {
            ytElements[i].classList.add("on");
        }
    } 

}

function highlightsocialLabelsOff() {
    for (i = 0; i < socialLabels.length; i++) {
        socialLabels[i].classList.remove("highlight-socialLabels");
    }
}