var wikiPages = document.querySelectorAll('.page-entry');

for (i = 0; i < wikiPages.length; i++) {
    var currentPage = wikiPages[i];

    currentPage.addEventListener('mouseover', highlightSingleOn, false);
    currentPage.addEventListener('mouseout', highlightSingleOff, false);
}

function highlightSingleOn() {
    var toIgnore;
    for (t = 0; t < wikiPages.length; t++) {
        if (wikiPages[t].matches('.page-entry:hover')) {
            toIgnore = t;
        } else if (t != toIgnore) {
            wikiPages[t].classList.add("faded");
        }
    }
}

function highlightSingleOff() {
    for (i = 0; i < wikiPages.length; i++) {
        wikiPages[i].classList.remove('faded');
    }
}

// ---------------------------------------------------

var lawsRect = document.querySelectorAll('.single-law');
var datesLines = document.querySelectorAll('.date-line');

for (i = 0; i < lawsRect.length; i++) {
    lawsRect[i].addEventListener('mouseover', highlightThisOn, false);
    lawsRect[i].addEventListener('mouseout', highlightThisOff, false);
}

function highlightThisOn() {
    var toIgnore;
    for (t = 0; t < lawsRect.length; t++) {
        if (lawsRect[t].matches('.single-law:hover')) {
            toIgnore = t;
            datesLines[t].classList.add("stroke-3");
        } else if (t != toIgnore) {
            datesLines[t].classList.add("faded");
        }
    }
}

function highlightThisOff() {
    for (i = 0; i < lawsRect.length; i++) {
        datesLines[i].classList.remove("faded");
        datesLines[i].classList.remove("stroke-3");
    }
}

// ---------------------------------------------------


// for (i = 0; i < entries.length; i++) {
//     entries[i].addEventListener('mousemove', summonTooltip, false);
//     entries[i].addEventListener('mouseout', hideTooltip, false);
// }


var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
document.body.appendChild(tooltip);

entries = document.querySelectorAll('.page-entry');
createds = document.querySelectorAll('.page-entry > g > polygon.st7');

for (i = 0; i < entries.length; i++) {
    entries[i].addEventListener('mouseover', (e) => {
        currentEntry = entries[i];
        for (t = 0; t < entries.length; t++) {
            // // console.log(entries[t].childNodes[t]);
            // currentEntry = entries[t];
            // currentCreateds = createds[t];
            // if (currentEntry.matches('.page-entry:hover')) {
            //     if (entries.indexOf == (4 || 11 || 15 || 18)) {
            //         anchoredTooltip(e, entries[t])
            //     } else anchoredTooltip(e, currentCreateds);
            // }
            if (entries[t].matches('.page-entry:hover')) {
                anchoredTooltip(e, createds[t]);
            } else anchoredTooltip(e, entries[t]);
        }
    }, false);
    entries[i].addEventListener('mouseleave', hideTooltip, false);
}

var datesLines = document.getElementsByClassName('date-line');

for (i = 0; i < datesLines.length; i++) {
    datesLines[i].addEventListener('mouseover', function () {
        lawsRect.forEach(element => {
            // console.log(element);
            if (element.id == this.id) {
                element.classList.add('active');
                return;
            }
        })
    }, false);
    datesLines[i].addEventListener('mouseout', function () {
        lawsRect.forEach(element => {
            element.classList.remove('active');
        })
    }, false);
}

function anchoredTooltip(e, el) {
    var x = el.getBoundingClientRect().left;
    var y = e.clientY;
    tooltip.style.left = x + 20 + 'px';
    tooltip.style.top = y - 20 + 'px';
    summonTooltip();
}

function updateTooltipPos(e, el) {
    var x = e.clientX;
    var y = e.clientY;

    elWidth = el.getBoundingClientRect().width + 20;
    elLeft = el.getBoundingClientRect().left;

    elHeight = el.getBoundingClientRect().height + 20;
    elBottom = el.getBoundingClientRect().bottom;

    clientHeight = document.documentElement.clientHeight;
    clientWidth = document.documentElement.clientWidth;

    if (clientWidth - x <= elWidth && clientHeight - y <= elHeight) {
        el.style.left = x - (x + elWidth - clientWidth) + 'px';
        el.style.top = y - (y + elHeight - clientHeight) + 'px';
    } else if (clientWidth - x >= elWidth && clientHeight - y <= elHeight) {
        el.style.left = x + 'px'
        el.style.top = y - (y + elHeight - clientHeight) + 'px';
    } else if (clientWidth - x <= elWidth && clientHeight - y >= elHeight) {
        el.style.left = x - (x + elWidth - clientWidth) + 'px';
        el.style.top = y + 'px';
    } else if (x < clientWidth - elWidth || y < clientWidth - elWidth) {
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    }

    return {
        x: x,
        y: y
    }
}

function summonTooltip(text) {
    for (t = 0; t < entries.length; t++) {
        currentEntry = entries[t].childNodes;
        if (entries[t].matches('.page-entry:hover')) {
            text = entries[t].getElementsByTagName('text')[0].textContent + " page.<br>" + "Created: <br>" + entries[t].getAttribute("js-creation-date");
            tooltip.innerHTML = text;
            tooltip.classList.add('summon');
        }
    }
}

function hideTooltip() {
    tooltip.classList.remove('summon');
}