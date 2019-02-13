var strokes = document.querySelectorAll('.stroke');

for (i = 0; i < strokes.length; i++) {
    strokes[i].addEventListener('mouseover', highlightStrokesOn, false);
    strokes[i].addEventListener('mouseout', highlightStrokesOff, false);
}

function highlightStrokesOn() {
    for (i = 0; i < strokes.length; i++) {
        if (strokes[i].matches('.stroke:hover') && strokes[i].classList.contains('1st')) {
            for (l = 0; l < strokes.length; l++) {
                if (strokes[l].classList.contains('1st') == false) {
                    strokes[l].classList.add("highlight-strokes");
                }
            }
        } else if (strokes[i].matches('.stroke:hover') && strokes[i].classList.contains('2nd')) {
            for (l = 0; l < strokes.length; l++) {
                if (strokes[l].classList.contains('2nd') == false) {
                    strokes[l].classList.add("highlight-strokes");
                }
            }
        } else if (strokes[i].matches('.stroke:hover') && strokes[i].classList.contains('3rd')) {
            for (l = 0; l < strokes.length; l++) {
                if (strokes[l].classList.contains('3rd') == false) {
                    strokes[l].classList.add("highlight-strokes");
                }
            }
        }
    }
}

function highlightStrokesOff() {
    for (i = 0; i < strokes.length; i++) {
        strokes[i].classList.remove("highlight-strokes");
    }
}