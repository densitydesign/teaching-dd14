// ----------------------------------- //
//           DISCLAIMER                //
// Tu che stai guardando questo codice //
// lo so che il codice fa schifo       //
// però boh, i cicli for sono belli    //
// e adesso fa freddo.                 //
// La CPU del tuo computer ti aiuterà  //
// a scaldarti.                        //
// ----------------------------------- //

var categories = ['neutral', 'convincing', 'resentment', 'fear', 'self-celebration', 'concitate', 'ironic', 'severe', 'not-found', 'aggressive'];

// determina tutte le categorie dei cerchi
for (i = 0; i < categories.length; i++) {
    var thisCategory = categories[i];
    var query = '.' + thisCategory + '';
    var catEls = document.querySelectorAll(query);

    // seleziona cerchi della stessa categoria
    for (t = 0; t < catEls.length; t++) {
        catEls[t].addEventListener('mouseover', function (thisCategory) {
            thisCategoryClass = thisCategory.srcElement.classList[0];
            document.getElementsByClassName(thisCategoryClass);

            fadeElements(thisCategory.srcElement);

        }, false);
        catEls[t].addEventListener('mouseout', function () {
            for (i = 0; i < categories.length; i++) {
                allEls = document.getElementsByClassName(categories[i]);
                allLabels = document.getElementsByClassName(categories[i] + '-label');
                // console.log(allEls);
                for (t = 0; t < allEls.length; t++) {
                    allEls[t].classList.remove('fade');

                }
                for (t = 0; t < allLabels.length; t++) {
                    // console.log(allLabels[t]);
                    allLabels[t].classList.remove('fade');
                }
            }
        }, false);
    }
}

function fadeElements(toExclude) {

    // calcola categorie da escludere
    for (i = 0; i < categories.length; i++) {
        if (categories[i] == toExclude.classList[0]) {
            // console.log('------------');
        } else {

            // prendi elementi di ogni categoria
            var categoriesToFade = categories[i];

            var fadedCategory = document.getElementsByClassName(categoriesToFade);
            var fadedLabels = document.getElementsByClassName(categoriesToFade + '-label');
            // console.log(fadedLabels);

            // ogni elemento della categoria da escludere
            for (v = 0; v < fadedCategory.length; v++) {
                // console.log(fadedLabels[v]);
                fadedCategory[v].classList.add('fade');
            }
            for (v = 0; v < fadedLabels.length;v++) {
                fadedLabels[v].classList.add('fade');
            }
        }
    }
}

function getAllElementsWithAttribute(attribute) {
    var matchingElements = [];
    var allElements = document.getElementsByTagName('*');
    for (var i = 0, n = allElements.length; i < n; i++) {
        if (allElements[i].getAttribute(attribute) !== null) {
            // Element exists with attribute. Add to array.
            matchingElements.push(allElements[i]);
        }
    }
    // console.log(matchingElements);
    return matchingElements;
}


// -------------------- //
// ---- IL TOOLTIP ---- //
// -------------------- //

var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
tooltip.innerHTML = '';
document.body.appendChild(tooltip);
toolTxt = document.createElement('p');
tooltip.appendChild(toolTxt);

document.addEventListener('mousemove', function (event) {
    updateTooltipPos(event, tooltip);
}, false)

function updateTooltipPos(e, el) {
    var x = e.clientX;
    var y = e.clientY;

    elWidth = el.getBoundingClientRect().width + 20;
    elLeft = el.getBoundingClientRect().left;

    elHeight = el.getBoundingClientRect().height + 20;
    elBottom = el.getBoundingClientRect().bottom;

    clientHeight = document.documentElement.clientHeight;
    clientWidth = document.documentElement.clientWidth;

    // console.log(clientWidth - elWidth);
    // console.log(elLeft);

    if (clientWidth - x <= elWidth && clientHeight - y <= elHeight) {
        el.style.left = x - (x + elWidth - clientWidth) + 'px';
        el.style.top = y - elHeight - 20 + 'px';

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

loadJSON();

function loadJSON() {

    var file = "/assets/about.json";
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            storeJSONData(xobj.responseText);
        }
    };
    xobj.send(null);
}

var circles = document.querySelectorAll('a > circle');

// circles.forEach(element => {
//     console.log(element);
//     element.addEventListener('mouseover', function(e) {
//         tooltip.classList.add('summon');
//     }, false);
// })

function storeJSONData(jsonObject) {
    var parsed = JSON.parse(jsonObject);
    // console.log(parsed);
    circles.forEach(element => {
        element.addEventListener('mouseover', function (e) {
            elId = element.getAttribute('js-id');
            tooltip.classList.add('summon');

            parsed.forEach(element => {
                if (elId == element.id) {
                    // console.log(element.id);

                    // tooltip con dati dell'element
                    injectComment(element, tooltip);
                }
            })
        }, false);
        element.addEventListener('mouseout', function() {
            tooltip.classList.remove('summon');
        }, false);
    });
}

function injectComment(content, target) {
    // console.log(content);
    target.innerHTML = content.name + '<br>' + 
    (content.clusters.length == 1 ? 'Cluster: ' : 'Clusters: ') + content.clusters + '<br><br>' + 
    content.body;
}
