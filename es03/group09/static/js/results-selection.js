var point_positions = [];
var all_results_data = [[], [], [], []];

var results_start = [{
    "x": "0",
    "y": "0"
}, {
    "x": "50",
    "y": "0"
}, {
    "x": "150",
    "y": "0"
}, {
    "x": "250",
    "y": "0"
}, {
    "x": "350",
    "y": "0"
}, {
    "x": "450",
    "y": "0"
}, {
    "x": "550",
    "y": "0"
}, {
    "x": "600",
    "y": "0"
}];

// ----- Offset delle maniglie per la bezier
var handleOffset = 70;

// ----- Larghezza e altezza della viewBox dell'SVG
var w = 800;
var h = 900;

// ----- Curva iniziale, per definire la partenza della prima
var pathData = "M0,0C17,0 -20,0 50,0S80,0 150,0 180,0 250,0 280,0 350,0 380,0 450,0 480,0 550,0 582,0 600,0"

// ----- Crea un svg con dimensioni definite
var svgRace = d3.select('#race-svg').append('svg').attr("viewBox", "0 0 " + w + ' ' + h).attr("preserveAspectRatio", "none").attr("class", "svg-el");
var svgGender = d3.select('#gender-svg').append('svg').attr("viewBox", "0 0 " + w + ' ' + h).attr("preserveAspectRatio", "none").attr("class", "svg-el");
var svgDisability = d3.select('#disability-svg').append('svg').attr("viewBox", "0 0 " + w + ' ' + h).attr("preserveAspectRatio", "none").attr("class", "svg-el");
var svgReligion = d3.select('#religion-svg').append('svg').attr("viewBox", "0 0 " + w + ' ' + h).attr("preserveAspectRatio", "none").attr("class", "svg-el");
 



// ------------ ------ ------------
// ------------ EVENTS ------------
// ------------ ------ ------------

window.onload = () => {
    resized();
    getAllEntries(() => {
        curves_init(svgRace, 0, mainLayerRace);
        curves_init(svgGender, 1, mainLayerGender);
        curves_init(svgDisability, 2, mainLayerDisability);
        curves_init(svgReligion, 3, mainLayerReligion);
    });
}

window.onresize = () => {
    resized();
}




// ------------ GRADIENT - crea 4 gradients
var defsRace = svgRace.append("defs");
var defsGender = svgGender.append("defs");
var defsDisability = svgDisability.append("defs");
var defsReligion = svgReligion.append("defs");

function appendGradient(svg, defs, i){
    var gradient = defs.append("linearGradient")
    .attr("id", "svgGradient" + (i+1))
    .attr("x1", "100%").attr("x2", "100%")
    .attr("y1", "0%").attr("y2", "100%");

    gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", setColor(i+1))
    .attr("stop-opacity", 1);

    gradient.append("stop")
    .attr("offset", "50%")
    .attr("stop-color", setColor(i+1))
    .attr("stop-opacity", 1);

    gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "red")
    .attr("stop-opacity", 1);

    // creo il rettangolo che sarà mascherato

    var layer = svg.append('g').attr("mask", "url(#mask-line" + (i+1) + ")")

    layer.append('rect')
    .attr('id', 'rectGradient' + (i+1))
    .attr('class', 'rect')
    .attr('mask', "url(#mask-line" + (i+1) + ")") 
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', "url(#svgGradient" + (i+1) + ")");

    layer.append('rect')
    .attr('id', 'rectWhite' + (i+1))
    .attr('class', 'rect')
    .attr('class', 'off')
    .attr('mask', "url(#mask-line" + (i+1) + ")") 
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', 'var(--c-bg)')
}

appendGradient(svgRace, defsRace, 0);
appendGradient(svgGender, defsGender, 1);
appendGradient(svgDisability, defsDisability, 2);
appendGradient(svgReligion, defsReligion, 3);

var blocks = Array.from(document.querySelectorAll("a > .module"));

blocks.forEach((block) => {
    var rect = block.querySelector(".svg-container rect.off");
    block.addEventListener("mouseover", () => {
        rect.classList.add("on");
    }, false)
    block.addEventListener("mouseout", () => {
        rect.classList.remove("on");
    }, false)
})


// ------------ ----------- ------------
// ------------ SHOW CURVES ------------
// ------------ ----------- ------------

// variabili della funzione
// svg - quale svg dichiarato sopra
// i - indice
// data - array composto da 4 array che contengono gli oggetti

var mainLayerRace = svgRace.append('g').attr('id', 'mask' + 1).append('defs').append('mask').attr('id', 'mask-line' + 1); //----------------- aggiungi i
var mainLayerGender = svgGender.append('g').attr('id', 'mask' + 2).append('defs').append('mask').attr('id', 'mask-line' + 2); //----------------- aggiungi i
var mainLayerDisability = svgDisability.append('g').attr('id', 'mask' + 3).append('defs').append('mask').attr('id', 'mask-line' + 3); //----------------- aggiungi i
var mainLayerReligion = svgReligion.append('g').attr('id', 'mask' + 4).append('defs').append('mask').attr('id', 'mask-line' + 4); //----------------- aggiungi i

function curves_init(svg, i, mainLayer) {

    // crea dei gruppi nell'svg e da attributi
    mainLayer.selectAll('path.curves').data(all_results_data[i])
        .enter()
        // .append('defs').append('mask').attr('id', 'mask-line')
        .append('path')
        .attr("d", function (d) {return d.d})
        .attr("class", "curves")
        .attr('vector-effect', 'non-scaling-stroke')
}



// ------------ ----------------- ------------
// ------------ UTILITY FUNCTIONS ------------
// ------------ ----------------- ------------

// ----- Clamp function
function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

// ----- Setta il colore di maniglie e linea on page load
function setColor(i) {
    var color = (function(i) {
        switch (i) {
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
    })(i);

    // Ritorno valore per assegnare colore allo stop del gradient tramite d3
    return color;
}

// ----- Ridimensiona SVG on-the-fly Per Diana
function resized() {

    function SVGResize() {
        var crv = document.getElementsByClassName("svg-container");
        
        for (i = 0; i < crv.length; i++) {
            // console.log(crv[i]);
            
            crv[i].style.left = crv[i].parentElement.offsetLeft + 'px';
            crv[i].style.top = crv[i].parentElement.offsetTop + 'px';
            crv[i].style.width = crv[i].parentElement.clientWidth + 'px';
            crv[i].style.height = crv[i].parentElement.clientHeight + 'px';
        }
    }    

    SVGResize();

}