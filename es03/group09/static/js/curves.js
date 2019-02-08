// Array per la posizione dei punti, si aggiorna ad ogni drag
var point_positions = [];

// Array per storare le curve degli utenti
var curves_data = [];

// Punti di partenza della curva
var json_data = [{
    "x": "0",
    "y": "0"
}, {
    "x": "66",
    "y": "0"
}, {
    "x": "199",
    "y": "0"
}, {
    "x": "333",
    "y": "0"
}, {
    "x": "466",
    "y": "0"
}, {
    "x": "599",
    "y": "0"
}, {
    "x": "733",
    "y": "0"
}, {
    "x": "800",
    "y": "0"
}];

var curva_arrivo = [{
    "x": "0",
    "y": "0"
}, {
    "x": "66",
    "y": "980"
}, {
    "x": "199",
    "y": "980"
}, {
    "x": "333",
    "y": "980"
}, {
    "x": "466",
    "y": "980"
}, {
    "x": "599",
    "y": "980"
}, {
    "x": "733",
    "y": "980"
}, {
    "x": "800",
    "y": "0"
}];

// ----- Raggio delle ellissi e offset delle maniglie per la bezier
var handleRadius = 6;
var handleOffset = 70;

// ----- Moltiplicatore del raggio per la funzione resized()
var multiplier = 10;
var multiplier2 = 17;

var minYoffset = 0;
var maxYOffset = 1060;

var jumpOffset = 80;

// ----- Larghezza e altezza della viewBox dell'SVG
var w = 800;
var h = 982;

// ----- Colore di path e maniglie
var sessionColor = setColor();

// ----- Pusha le posizioni dei punti nell'array point_position nel dato momento
json_data.forEach((el) => {
    var li_x = parseInt(el.x);
    var li_y = parseInt(el.y);

    point_positions.push({
        x: li_x,
        y: li_y
    })
})

// ----- Crea un svg con dimensioni definite
var svg = d3.select('#curves').append('svg').attr("viewBox", "0 0 " + w + ' ' + h).attr({"preserveAspectRatio": "none", "id": "curves-svg"});

// ------------ GRADIENT - crea il gradiente
var defs = svg.append("defs");

var gradient = defs.append("linearGradient")
    .attr("id", "svgGradient")
    .attr("x1", "100%")
    .attr("x2", "100%")
    .attr("y1", "0%")
    .attr("y2", "100%");

gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", sessionColor)
    .attr("stop-opacity", 1);

gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "red")
    .attr("stop-opacity", 1);

// Creo un rettangolo che sarà mascherato dalla linea, assegno il gradiente
var rect = svg.append('rect')
    .attr('mask', "url(#mask-line)")
    .attr('id', 'gradient')
    .attr('x', 0)
    .attr('y', -5)
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', "url(#svgGradient)");

// ----- CURVES INIT
function curves_init(point_positions) {
    var curves = [{
        type: 'Q',
        points: point_positions
    }];

    // crea dei gruppi nell'svg e da attributi
    // var controlLineLayer = svg.append('g').attr('class', 'control-line-layer');
    var mainLayer = svg.append('g').attr('class', 'main-layer');
    var handleTextLayer = svg.append('g').attr('class', 'handle-text-layer');
    var handleLayer = svg.append('g').attr('class', 'handle-layer');

    var drag = d3.behavior.drag()
        .origin(function (d) {
            return d;
        })
        .on('drag', dragmove);

    // ----- DRAGMOVE
    // Elementi draggabili, funzione che controlla il drag delle maniglie
    function dragmove(d, i) {

        // updates volume percentages in-session
        updatePercentage(i);

        // Qui assegna il valore y e aggiorna la posizione dei punti
        // d.x = d3.event.x;
        d.y = clamp(d3.event.y, minYoffset, maxYOffset - jumpOffset);

        // Se il mouse è inferiore a un certo valore y (maxYoffset), eseguire la funzione
        if (d.y < maxYOffset - jumpOffset) {
            d3.select(this).attr({
                // cx: d.x,
                cy: d.y
            });

            circlesToResizeB.attr("cy", function (d, ind) {
                if (ind == i) {
                    d3.select(this).classed("redHandleBehind", false)
                    return d.y
                } else {
                    return this.getAttribute("cy");
                }
            })

            d3.select(this).classed("redHandle", false);

            handleTextLayer.selectAll('text.handle-text.path' + d.pathID + '.p' + (d.handleID + 1))
                .attr({
                    // x: d.x,
                    y: d.y
                }).text(handleText(d, d.handleID));

        } else {

            d3.select(this).attr({
                // cx: d.x,
                cy: maxYOffset - jumpOffset
            });

            circlesToResizeB.attr("cy", function (d, ind) {
                if (ind == i) {
                    d3.select(this).classed("redHandleBehind", true)
                    return maxYOffset - jumpOffset
                } else {
                    return this.getAttribute("cy");
                }
            })

            d3.select(this).classed("redHandle", true);

            handleTextLayer.selectAll('text.handle-text.path' + d.pathID + '.p' + (d.handleID + 1))
                .attr({
                    // x: d.x,
                    y: maxYOffset - jumpOffset
                }).text(handleText(d, d.handleID));
        }

        playback.setContentVolume();

        // Aggiorna la curva
        d.pathElem.attr('d', pathData);
    }
    show_curves(mainLayer, handleTextLayer, handleLayer, curves, drag);
}

//----- ------------------------- -----
//----- PATH DATA e PATH SPEZZATA -----
//----- ------------------------- -----

//----- Prima curva deve essere C
//----- C x1 y1,             x2 y2,           x y
//-----   maniglia partenza, maniglia arrivo, punto arrivo

//----- Bezier quadratica, maniglia partenza specchia arrivo punto precedente
//----- viene definita solo quella di arrivo con x2,y2
//----- S x2 y2,             x y
//-----   maniglia partenza, punto arrivo

//----- In sintesi, dopo aver definito la prima C, saranno tutte S come a seguire
//----- M coord(mX) coord(mY)
//----- C offset,coord(mY)          coord(cX)-offset,coord(cY)      coord(cX),coord(cY)
//----- S coord(X)-offset,coord(Y)      coord(X) coordY

function pathData(d) {

    var p = d.points;

    d.points.forEach(el => {
        // console.log(el);
        el.y = clamp(el.y, minYoffset, maxYOffset);
        if (el.y >= maxYOffset - jumpOffset) {
            el.y = maxYOffset;
        }
    });

    curve = [
        //x y
        'M', parseInt(p[0].x), ',', parseInt(p[0].y),
        //x1 y1 x2 y2 x y
        'C', + ' ' + parseInt(p[0].x + (handleOffset/4)), ',', parseInt(p[0].y), ' ', parseInt(p[1].x - handleOffset), ',', parseInt(p[1].y), ' ', parseInt(p[1].x), ',', parseInt(p[1].y),
        //x2 y2 x y
        'S', + ' ' + parseInt(p[2].x - handleOffset), ',', parseInt(p[2].y), ' ', parseInt(p[2].x), ',', parseInt(p[2].y),
        ' ', parseInt(p[3].x - handleOffset), ',', parseInt(p[3].y), ' ', parseInt(p[3].x), ',', parseInt(p[3].y),
        ' ', parseInt(p[4].x - handleOffset), ',', parseInt(p[4].y), ' ', parseInt(p[4].x), ',', parseInt(p[4].y),
        ' ', parseInt(p[5].x - handleOffset), ',', parseInt(p[5].y), ' ', parseInt(p[5].x), ',', parseInt(p[5].y),
        ' ', parseInt(p[6].x - handleOffset), ',', parseInt(p[6].y), ' ', parseInt(p[6].x), ',', parseInt(p[6].y),
        ' ', parseInt(p[7].x - (handleOffset/4)), ',', parseInt(p[7].y), ' ', parseInt(p[7].x), ',', parseInt(p[7].y)
    ].join('');

    return curve;
}

// ----- Scrive il testo nel tooltip
function handleText(d, i) {
    if (0 < i < 7) {
        return 'volume' + (i + 0) + ': ' + d.y;
    }
}


// ------------ ----------- ------------
// ------------ SHOW CURVES ------------
// ------------ ----------- ------------

function show_curves(mainLayer, handleTextLayer, handleLayer, curves, drag) {

    mainLayer.selectAll('path.curves').data(curves)
        .enter().append('defs').append('mask').attr('id', 'mask-line').append('path')
        .attr({
            'class': function (d, i) {
                return 'curves path' + i;
            },
            d: pathData,
            'vector-effect': function() {
                // Chrome 1 - 71
                var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
                if (isChrome) {
                    return 'none';                    
                } else if (!isChrome) {
                    return 'non-scaling-stroke';
                }
            }
        })
        .each(function (d, i) {
            var pathElem = d3.select(this),
                controlLineElem,
                handleTextElem;

            // Sposta le maniglie cerchietti
            var handles = handleLayer.selectAll('circle.handle.path' + i).data(d.points)
            var handlesEnter = handles.enter().append("g");

            handlesEnter.append('ellipse').filter(function (d, i) {
                    if (i != 0 && i != 7) return d
                })
                .attr({
                    'class': 'handle-behind path' + i,
                    cx: function (d) {
                        return d.x
                    },
                    cy: function (d) {
                        return d.y;
                    },

                    rx: handleRadius,
                    ry: handleRadius,
                    'vector-effect': 'non-scaling-stroke'
                })
                .each(function (d, handleI) {
                    d.pathID = i;
                    d.handleID = handleI;
                    d.pathElem = pathElem;
                    d.controlLineElem = controlLineElem;
                })
                .call(drag);

            handlesEnter.append('ellipse').filter(function (d, i) {
                    if (i != 0 && i != 7) return d
                })
                .attr({
                    'class': 'handle path' + i,
                    cx: function (d) {
                        return d.x
                    },
                    cy: function (d) {
                        return d.y;
                    },

                    rx: handleRadius,
                    ry: handleRadius,
                    'vector-effect': 'non-scaling-stroke'
                })
                .each(function (d, handleI) {
                    d.pathID = i;
                    d.handleID = handleI;
                    d.pathElem = pathElem;
                    d.controlLineElem = controlLineElem;
                })
                .call(drag);
        });
}

// ----- inizializza la funzione
curves_init(point_positions);

// ------------ ----------------- ------------
// ------------ UTILITY FUNCTIONS ------------
// ------------ ----------------- ------------

// ----- Clamp function
function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

// ----- Store JSON
var userID = 0;

function storeJSON() {

    var obj = {
        "curveID": userID,
        "d": curve,
        "timestamp": Date(Date.now())
    }

    console.log("Da storare nel JSON")
    curves_data[userID] = obj;
    console.log(curves_data);
    userID++;
}


// ----- Resize ellipses

var circlesToResize = svg.selectAll(".handle");
var circlesToResizeB = svg.selectAll(".handle-behind");

// window.onresize = resized;

//la chiama la prima volta per resizare subito i cerchi appena vengono creati
resized();

function resized() {

    function SVGResize() {
        var crv = document.getElementById("curves");
        var tl = document.getElementById("timeline-line-units");
    
        crv.style.left = tl.offsetLeft + 'px';
        crv.style.width = tl.clientWidth + 'px';
        // crv.style.height = tl.clientHeight + 'px';
    }    

    SVGResize();

    var scaleX = w / (d3.select('#curves-svg').node().getBoundingClientRect().width);
    var scaleY = h / d3.select('#curves-svg').node().getBoundingClientRect().height;

    // cerchi maniglie frontali (con stroke)
    circlesToResize.each(function (d, i) {
        var circleSize = d3.select(this);

        // volendo qui si potrebbe resizare lo stroke delle maniglie
        // circleSize.style("stroke-width", multiplier / 4 + "px");

        circleSize.attr({
            rx: (scaleX * multiplier),
            ry: (scaleY * multiplier)
        });
    })

    // cerchi maniglie dietro
    circlesToResizeB.each(function (d, i) {
        // if (i != 0 && i != 7) {
            var circleSize = d3.select(this);

            circleSize.attr({
                rx: (scaleX * multiplier2),
                ry: (scaleY * multiplier2)
            });
        // }
    })

}

// ----- Setta il colore di maniglie e linea on page load
function setColor() {
    var url = new URLSearchParams(window.location.search);
    var param = parseInt(url.get('category'));

    var color = (function(param) {
        switch (param) {
            case 1:
                return '#003aff';
            case 2:
                return '#f3c605';
            case 3:
                return '#56efb6';
            case 4:
                return '#fa8b2e';
            default:
                return '#003aff';
        }
    })(param);

    // setto all'elemento :root per maniglie
    document.documentElement.style.setProperty('--strc', color);

    // ritorno valore per assegnare colore a linea tramite d3
    return color;
}