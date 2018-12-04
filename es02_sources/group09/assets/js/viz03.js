// **           FADE CATEGORIE          ** //

var labels = document.getElementsByClassName('line-label');

for (var i = 0; i < labels.length; i++) {
    thisLabel = labels[i];
    thisLabel.addEventListener('mouseover', function (thisLabel) {
        var toIgnore = thisLabel.srcElement;
        for (t = 0; t < labels.length; t++) {
            if (labels[t] != toIgnore) {
                labels[t].parentElement.classList.add('faded');
            }
        }
    }, false);
    thisLabel.addEventListener('mouseout', function () {
        for (t = 0; t < labels.length; t++) {
            labels[t].parentElement.classList.remove('faded');
        }
    }, false);
}

var popups = document.getElementsByClassName('hover-popup');
var isOnPopup = false;

for(var i = 0; i < popups.length; i++){
    popups[i].addEventListener('mouseover', function (e) {
        isOnPopup = true;
    });
    popups[i].addEventListener('mouseout', function (e) {
        isOnPopup = false;
    });
}



// **           CURSORE GRAFICO          ** //

showCursor();

//          I TACOS CI SALVERANNO TUTTI
//          SE HAI LETTO QUESTO MESSAGGIO
//          SEI STATO VISITATO DAL TACO MAGIKO
//          CONDIVIDI CON ALTRE 20 PERSONE
//          O PREPARATI AD ESSERE SCHERZATO
//          PER IL RESTO DELLA TUA VITA

var cursor;
var cursorTag;
var cursorLabel;
var cursorCaption;

var context = document.getElementById('svg-box');
var svg = document.getElementsByTagName('svg')[0];
var svgHeight;
var grid = document.getElementById('griglia');


function showCursor() {
    cursor = document.createElementNS("http://www.w3.org/2000/svg", "line");
    var lineAttributes = ['id', 'x1', 'y1', 'x2', 'y2', 'stroke'];
    var lineValues = ['cursor', 0, 0, 0, 0, 'grey'];
    setAttributes(cursor, lineAttributes, lineValues);

    cursorTag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    var tagAttributes = ['id', 'x', 'y', 'width', 'height', 'fill', 'stroke', 'stroke-width'];
    var tagValues = ['tag', 0, 0, 120, 72, 'white', 'blue', 2];
    setAttributes(cursorTag, tagAttributes, tagValues);

    cursorLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var labelAttributes = ['id', 'x', 'y', 'fill'];
    var labelValues = ['tag-label', '50', '50', 'black'];
    cursorLabel.innerHTML = '0';
    setAttributes(cursorLabel, labelAttributes, labelValues);

    cursorTag2 = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    var tagAttributes2 = ['id', 'x', 'y', 'width', 'height', 'fill', 'stroke', 'stroke-width'];
    var tagValues2 = ['tag2', 0, 0, 120, 72, 'white', '#F78028', 2];
    setAttributes(cursorTag2, tagAttributes2, tagValues2);

    cursorLabel2 = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var labelAttributes2 = ['id', 'x', 'y', 'fill'];
    var labelValues2 = ['tag-label2', '50', '50', 'black'];
    cursorLabel2.innerHTML = '0';
    setAttributes(cursorLabel2, labelAttributes2, labelValues2);

    cursorCaption = document.createElementNS("http://www.w3.org/2000/svg", "text");
    var cursorAttributes = ['id', 'x', 'y', 'fill'];
    var cursorValues = ['tag-caption', '50', '50', 'black'];
    cursorCaption.innerHTML = 'Values over time';
    setAttributes(cursorCaption, cursorAttributes, cursorValues);

    document.getElementsByTagName('svg')[0].appendChild(cursor);
    document.getElementsByTagName('svg')[0].appendChild(cursorTag);
    document.getElementsByTagName('svg')[0].appendChild(cursorLabel);
    document.getElementsByTagName('svg')[0].appendChild(cursorTag2);
    document.getElementsByTagName('svg')[0].appendChild(cursorLabel2);
    document.getElementsByTagName('svg')[0].appendChild(cursorCaption);
}

function setAttributes(svgEl, attributes, values) {
    for (i = 0; i < attributes.length; i++) {
        svgEl.setAttribute(attributes[i], values[i]);
    }
}

document.addEventListener('mousemove', function () {
    updateCursor(event, cursor);
    updateCursor(event, cursorTag);
    updateCursor(event, cursorLabel);
    updateCursor(event, cursorTag2);
    updateCursor(event, cursorLabel2);
    updateCursor(event, cursorCaption);
}, false);

function updateCursor(e, el) {
    var x = e.clientX;
    var y = e.clientY;
    var svgCoord = svgPoint(cursor, x, y);
    svgHeight = svg.viewBox.baseVal.height;

    var mouseCoordSvg = svgPoint(cursorTag, x, y);

    var gridLeft = grid.getBoundingClientRect().left;
    var gridRight = grid.getBoundingClientRect().right;
    var gridTop = grid.getBoundingClientRect().top;
    var gridBottom = grid.getBoundingClientRect().bottom;

    // function isOverPopup(el) {
    //     popups = document.getElementsByClassName('hover-popup');
    //     popups.hover(function() {
    //         $(this).removeClass('show');
    //     })
    // }

    if (x > gridLeft && x < gridRight && y > gridTop && y < gridBottom && isOnPopup != true) {
        el.classList.add('show');
        // isOverPopup(el);
    } else {
        el.classList.remove('show');
    };

    
    var newAttributes = ['x1', 'x2', 'y1', 'y2'];
    var newValues = [svgCoord.x, svgCoord.x, 100, svgHeight];

    var newAttributesTag = ['x', 'y'];
    var newXTag = mouseCoordSvg.x - cursorTag.getAttribute('width') / 2;
    var newYTag = mouseCoordSvg.y - cursorTag.getAttribute('height') - 12;
    var newValuesTag = [newXTag, newYTag];

    var newAttributesLabel = ['x', 'y'];
    var newValuesLabel = [svgCoord.x, mouseCoordSvg.y - cursorLabel.getBoundingClientRect().height - 24 * 1.3];

    var newAttributesTag2 = ['x', 'y'];
    var newXTag2 = mouseCoordSvg.x - cursorTag.getAttribute('width') / 2;
    var newYTag2 = mouseCoordSvg.y - cursorTag.getAttribute('height') - 96;
    var newValuesTag2 = [newXTag2, newYTag2];
    
    var newAttributesLabel2 = ['x', 'y'];
    var newValuesLabel2 = [svgCoord.x, mouseCoordSvg.y - cursorLabel2.getBoundingClientRect().height - 24 * 4.75];
    
    var newAttributesCursor = ['x', 'y'];
    var newValuesCursor = [svgCoord.x, mouseCoordSvg.y - cursorCaption.getBoundingClientRect().height - 24 * 7.2];

    for (i = 0; i < newAttributes.length; i++) {
        setAttributes(cursor, newAttributes, newValues);
    }
    for (i = 0; i < newAttributesTag.length; i++) {
        setAttributes(cursorTag, newAttributesTag, newValuesTag);
    }
    for (i = 0; i < newAttributesLabel.length; i++) {
        setAttributes(cursorLabel, newAttributesLabel, newValuesLabel);
    }
    for (i = 0; i < newAttributesTag2.length; i++) {
        setAttributes(cursorTag2, newAttributesTag2, newValuesTag2);
    }
    for (i = 0; i < newAttributesLabel2.length; i++) {
        setAttributes(cursorLabel2, newAttributesLabel2, newValuesLabel2);
    }
    for (i = 0; i < newAttributesCursor.length; i++) {
        setAttributes(cursorCaption, newAttributesCursor, newValuesCursor);
    }
    updateLabelValue(svgCoord.x, 'japan-path', 'tag-label');
    updateLabelValue(svgCoord.x, 'us-path', 'tag-label2');
}

function updateLabelValue(coordX, el, labelid) {
    var points = calculateSvgPath(el);
    var Ys = getYs(points);
    var minY = calculateGraphValues(Ys).min;
    var maxY = calculateGraphValues(Ys).max;
    var dataMin = document.getElementById(el).getAttribute('data-min');
    var dataMax = document.getElementById(el).getAttribute('data-max');
    // console.log(minY + " " + maxY);

    for (i = 0; i < points.length; i++) {
        if (coordX > points[i].x && points[i] == points[points.length - 1]) {
            return;
        } else if (coordX > points[i].x && coordX < points[i + 1].x) {
            graphValue = points[i + 1].y;
            graphValue = scale(graphValue, minY, maxY, parseFloat(dataMax), parseFloat(dataMin));
            document.getElementById(labelid).innerHTML = Math.floor(graphValue);
        }
    }
}

function calculateSvgPath(el) {
    path = document.getElementById(el);
    pointsList = path.points;
    pointsArray = [];
    for (i = 0; i < pointsList.numberOfItems; i++) {
        pointsArray.push(pointsList.getItem(i));
    }
    return pointsArray;
}

function calculateGraphValues(points) {
    var minY = Math.min.apply(null, points);
    var maxY = Math.max.apply(null, points);
    // console.log(minY + " " + maxY);
    return {
        min: minY,
        max: maxY
    };
}

function getYs(pointsArray) {
    coordsArray = [];
    for (i = 0; i < pointsArray.length; i++) {
        coordsArray.push(pointsArray[i].y);
    }
    // console.log(coordsArray);
    return coordsArray;
}

// mapping a number from range [in_min, in_max] to range [out_min, out_max]
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// translate page to SVG co-ordinate
function svgPoint(element, x, y) {
    var pt = svg.createSVGPoint();
    pt.x = x;
    pt.y = y;
    var output = pt.matrixTransform(element.getScreenCTM().inverse());
    return output;
}