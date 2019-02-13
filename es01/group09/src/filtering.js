var curvesArray = document.querySelectorAll('.graph-curve');
var percLabelsArray = document.querySelectorAll('.perc-labels')
var graphContainer = document.getElementById('curve-graph-container');

var curves, lower, higher, x;
lower = document.getElementById('x-axis');
higher = document.querySelectorAll('.higher');

//------listeners
for (i = 0; i < curvesArray.length; i++) {
    curvesArray[i].addEventListener('mouseover', highlightOn, false);
    //usare nuova funzione per reverse + nascondere tooltip
    curvesArray[i].addEventListener('mouseout', highlightOff, false);
}

graphContainer.addEventListener('mouseenter', offsetOn, false);
graphContainer.addEventListener('mouseleave', offsetOff, false);

//------one time offset

window.onload = offsetOff();

//------functions


function offsetOff() {
    // arrow = document.getElementById('y-axis');
    x = -100;

    lower.style.transform = "translateX(" + ((x*-1) + 46) + "px)";

    for (t = 0; t < higher.length; t++) {
        higher[t].style.transform = "translateX(" + x + "px)";
    }

    for (i = 0; i < curvesArray.length; i++) {
        curvesArray[i].style.transform = "translateX(" + x + "px)";
        x += 9;
    }
}

function offsetOn() {
    // arrow = document.getElementById('y-axis');
    x = 0;

    lower.style.transform = "translateX(" + x + "px)";

    for (t = 0; t < higher.length; t++) {
        higher[t].style.transform = "translateX(" + x + "px)";
    }

    for (i = 0; i < curvesArray.length; i++) {
        curvesArray[i].style.transform = "translateX(" + x + "px)";
        x -= .1;
    }
}

function highlightOn() {
    var curveToIgnore;

    //------controlla se tutti gli altri dots hanno la categoria del dot sul quale si trova il mouse
    for (t = 0; t < curvesArray.length; t++) {

        //------controlla su quale pallino è hover
        if (curvesArray[t].matches('.graph-curve:hover')) {
            curveToIgnore = t;
            percLabelsArray[t].classList.add("highlight");
        } else if (t != curveToIgnore) {
            curvesArray[t].classList.add("disappear");
        }
    }
}

function highlightOff() {
    for (i = 0; i < curvesArray.length; i++) {
        curvesArray[i].classList.remove('disappear');
        percLabelsArray[i].classList.remove("highlight");
    }
}