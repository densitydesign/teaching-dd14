var cluster = document.querySelectorAll('.opinion-cluster');

for (var i = 0; i < cluster.length; i++) {
    thisCluster = cluster[i];
    thisCluster.addEventListener('mouseover', function (thisCluster) {
        var toIgnore = thisCluster.srcElement.parentElement;
        for (t = 0; t < cluster.length; t++) {
            if (cluster[t] != toIgnore) {
                cluster[t].classList.add('fade');
                tooltip.classList.add('summon');
            }
            // injectComment(toIgnore, tooltip);
        }
    }, false);
    thisCluster.addEventListener('mouseout', function () {
        for (t = 0; t < cluster.length; t++) {
            cluster[t].classList.remove('fade');
            tooltip.classList.remove('summon');
        }
    }, false);
}

var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
tooltip.innerHTML = '';
document.body.appendChild(tooltip);

document.addEventListener('mousemove', function (e) {
    updateTooltipPos(e, tooltip);
    // var currentDepth = checkDepth(e, gridYLevels);
    // var currentOpinion = checkOpinion(e, gridXLevels);
    // console.log("Current depth: " + currentDepth);
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




/* -------------------------------------------------------------- */
/* -----------       METTE COMMENTO NEL TOOLTIP       ----------- */
/* -------------------------------------------------------------- */

// function injectComment(data, target) {
//     // console.log(data);
//     var attribute = data.getAttribute('js-comment');
//     target.innerHTML = attribute;
// }

/* -------------------------------------------------------------- */
/* -----------       METTE COMMENTO NEL TOOLTIP       ----------- */
/* -------------------------------------------------------------- */




//     // var unit = size / levels;// var grid = document.getElementById('griglia');
// var gridYLevels = getLevelCoordinates('h-line');
// var gridXLevels = getLevelCoordinates(gridWidth, 13);

// document.addEventListener('resize', function () {
//     gridHeight = grid.getBoundingClientRect().height;
//     gridWidth = grid.getBoundingClientRect().width;
//     gridYLevels = getLevelCoordinates(gridHeight, 9);
//     gridXLevels = getLevelCoordinates(gridWidth, 13);
// }, false);

// function checkDepth(e, levels) {
//     var y = e.clientY;
//     // var ysvg = svgPoint(grid, 0, y);
//     for (var i = 0; i < levels.length; i++) {
//         if (y > levels[i] && y < levels[i + 1] && levels[i] != levels[levels.length - 1]) {
//             console.log(i + 1);
//             return i + 1;
//         }
//     }
// }

// function checkOpinion(e, opinions) {
//     var x = e.clientX;
//     // console.log(x);
//     // var xsvg = svgPoint(grid, x, 0);
//     // console.log(xsvg.x);
//     for (var i = 0; i < opinions.length; i++) {
//         if (x > opinions[i] && x < opinions[i + 1] && opinions[i] != opinions[opinions.length - 1]) {
//             // console.log(i + 1);
//             return i + 1;
//         }
//     }
// }

// function getLevelCoordinates(elClass) {

//     // var sizes = []
//     // for (var i = 1; i <= levels; i++) {
//     //     var thisLevel = unit * i;
//     //     sizes.push(thisLevel);
//     // }
//     var elements = document.getElementsByClassName(elClass);
//     var sizes = [];
//     // console.log(elements);
//     for (var i = 0; i < elements.length; i++) {
//         sizes.push(svgPoint(elements[i], elements[i].getBoundingClientRect().left, elements[i].getBoundingClientRect().top).y);
//         console.log(sizes[i]);
//     }
//     return sizes;
// }


// translate page to SVG co-ordinate
function svgPoint(element, x, y) {
    var pt = document.getElementsByTagName('svg')[0].createSVGPoint();
    pt.x = x;
    pt.y = y;
    var output = pt.matrixTransform(element.getScreenCTM().inverse());
    return output;
}



/* ------------------------------------------------ */
/* -----------       LETTURA JSON       ----------- */
/* ------------------------------------------------ */

loadJSON();

function loadJSON() {

    var file = "/assets/kialo.json";
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


function storeJSONData(jsonObject) {
    var parsed = JSON.parse(jsonObject);
    cluster.forEach(element => {
        element.addEventListener('mouseover', function (e) {

            // PRIMA DI PRENDERE IL COMMENTO A CASO DEVI PRENDERE QUELLI DEL CLUSTER HOVERATO
            var whichOpinion = this.id.replace('c', '');
            
            var selectedEls = [];
            parsed.forEach(element => {
                if (element.opinion == whichOpinion) {
                    selectedEls.push(element);
                } else return false;
            })
            var randomCommentNumber = getRandomInt(1, selectedEls.length);
            var randomComment = selectedEls[randomCommentNumber - 1];
            selectEntry(randomComment);
        }, false);
    });
}

function selectEntry(el) {
    injectComment(el, tooltip);
}

function injectComment(content, target) {
    // console.log(content);
    target.innerHTML = "&lsquo;" + content.body + "&rsquo;" + "<br><br>" + 
    "Tree: " + content.tree + " (Level " + content.level + ")";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}