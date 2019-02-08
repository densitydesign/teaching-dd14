var point_positions = [];
var curves_results_data = [
    // ----- Curve categoria 1
    [{
        d: "M0,0C12,0 0,93 50,93S100,147 150,147 200,244 250,244 300,164 350,164 400,411 450,411 500,116 550,116 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,140 50,140S100,198 150,198 200,167 250,167 300,281 350,281 400,343 450,343 500,198 550,198 587,0 600,0"    
    }, {
        d: "M0,0C12,0 0,183 50,183S100,137 150,137 200,221 250,221 300,60 350,60 400,289 450,289 500,155 550,155 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,211 50,211S100,157 150,157 200,313 250,313 300,198 350,198 400,211 450,211 500,118 550,118 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,257 50,257S100,93 150,93 200,290 250,290 300,265 350,265 400,362 450,362 500,232 550,232 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,208 50,208S100,125 150,125 200,239 250,239 300,265 350,265 400,332 450,332 500,122 550,122 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,286 50,286S100,141 150,141 200,412 250,412 300,301 350,301 400,374 450,374 500,122 550,122 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,353 50,353S100,188 150,188 200,505 250,505 300,362 350,362 400,276 450,276 500,360 550,360 587,0 600,0"
    }],
    // ----- Curve categoria 2
    [{
        d: "M0,0C12,0 0,251 50,251S100,190 150,190 200,77 250,77 300,343 350,343 400,189 450,189 500,446 550,446 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,234 50,234S100,219 150,219 200,109 250,109 300,268 350,268 400,246 450,246 500,483 550,483 587,0 600,0"    
    }, {
        d: "M0,0C12,0 0,376 50,376S100,244 150,244 200,188 250,188 300,161 350,161 400,324 450,324 500,397 550,397 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,351 50,351S100,151 150,151 200,234 250,234 300,80 350,80 400,295 450,295 500,182 550,182 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,335 50,335S100,135 150,135 200,251 250,251 300,174 350,174 400,236 450,236 500,371 550,371 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,307 50,307S100,166 150,166 200,290 250,290 300,258 350,258 400,254 450,254 500,341 550,341 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,216 50,216S100,282 150,282 200,223 250,223 300,183 350,183 400,314 450,314 500,201 550,201 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,174 50,174S100,299 150,299 200,209 250,209 300,145 350,145 400,351 450,351 500,162 550,162 587,0 600,0"
    }],
    // ----- Curve categoria 3
    [{
        d: "M0,0C12,0 0,380 50,380S100,104 150,104 200,200 250,200 300,460 350,460 400,81 450,81 500,141 550,141 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,337 50,337S100,148 150,148 200,180 250,180 300,421 350,421 400,234 450,234 500,165 550,165 587,0 600,0"    
    }, {
        d: "M0,0C12,0 0,301 50,301S100,171 150,171 200,116 250,116 300,359 350,359 400,247 450,247 500,206 550,206 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,259 50,259S100,196 150,196 200,215 250,215 300,328 350,328 400,290 450,290 500,185 550,185 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,357 50,357S100,127 150,127 200,247 250,247 300,391 350,391 400,259 450,259 500,320 550,320 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,357 50,357S100,127 150,127 200,272 250,272 300,301 350,301 400,273 450,273 500,289 550,289 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,215 50,215S100,240 150,240 200,148 250,148 300,251 350,251 400,200 450,200 500,389 550,389 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,150 50,150S100,275 150,275 200,192 250,192 300,279 350,279 400,163 450,163 500,420 550,420 587,0 600,0"
    }],
    // ----- Curve categoria 4
    [{
        d: "M0,0C12,0 0,129 50,129S100,483 150,483 200,310 250,310 300,131 350,131 400,206 450,206 500,148 550,148 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,169 50,169S100,452 150,452 200,293 250,293 300,255 350,255 400,193 450,193 500,292 550,292 587,0 600,0"    
    }, {
        d: "M0,0C12,0 0,193 50,193S100,375 150,375 200,334 250,334 300,171 350,171 400,243 450,243 500,204 550,204 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,220 50,220S100,347 150,347 200,254 250,254 300,192 350,192 400,305 450,305 500,178 550,178 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,284 50,284S100,398 150,398 200,278 250,278 300,156 350,156 400,376 450,376 500,165 550,165 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,313 50,313S100,274 150,274 200,358 250,358 300,245 350,245 400,276 450,276 500,130 550,130 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,334 50,334S100,258 150,258 200,267 250,267 300,72 350,72 400,228 450,228 500,219 550,219 587,0 600,0"
    }, {
        d: "M0,0C12,0 0,158 50,158S100,288 150,288 200,174 250,174 300,207 350,207 400,183 450,183 500,245 550,245 587,0 600,0"
    }]]    ;

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
var w = 400;
var h = 400;

// ----- Curva iniziale, per definire la partenza della prima
var pathData = "M0,0C17,0 -20,0 50,0S80,0 150,0 180,0 250,0 280,0 350,0 380,0 450,0 480,0 550,0 582,0 600,0"

// ----- Pusha le posizioni dei punti nell'array point_position nel dato momento
results_start.forEach((el) => {
    var li_x = parseInt(el.x);
    var li_y = parseInt(el.y);

    point_positions.push({
        x: li_x,
        y: li_y
    })
})

// ----- Crea un svg con dimensioni definite
var svg = d3.select('#home-curves').append('svg').attr("viewBox", "0 0 " + w + ' ' + h).attr("preserveAspectRatio", "none").attr("id", "users-results");

// ------------ GRADIENT - crea 4 gradients
var defs = svg.append("defs");

for (i = 0; i < 4; i++) {
    // creo 4 rettangoli che saranno mascherati dalla linea, assegno il gradiente corrispettivo
    var rect = svg.append('rect')
    .attr('id', 'rectGradient' + (i+1))
    .attr('class', 'rect')
    .attr('class', 'off')
    .attr('mask', "url(#mask-line)")
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', '100%')
    .attr('height', '100%')
    .attr('fill', setColor(i+1))
    // .attr('fill', "url(#svgGradient" + (i+1) + ")");
}


// ------------ ----------- ------------
// ------------ SHOW CURVES ------------
// ------------ ----------- ------------

function curves_init(point_positions) {
    var curves = [{
        type: 'Q',
        points: point_positions
    }];

    // crea dei gruppi nell'svg e da attributi
    var mainLayer = svg.append('g').attr('class', 'main-layer');

    // playback.setContentVolume();

    show_curves(mainLayer, curves);
}

function show_curves(mainLayer, curves) {
    mainLayer.selectAll('path.curves').data(curves)
        .enter().append('defs').append('mask').attr('id', 'mask-line').append('path')
        .attr('data', pathData).attr("class", "main-path")
}

// ----- inizializza la funzione
curves_init(point_positions);


// ------------ ------------- ------------
// ------------ ANIMATE LINES ------------
// ------------ ------------- ------------

var usersLayer = d3.select("#mask-line").append('g').attr('class', 'users-layer');

    // crea n curve in base al JSON, le imposta uguali alla curva d'arrivo
    usersLayer.selectAll('path.curves-layer').data(curves_results_data[0])
    .enter().append('path')
    .attr({
        'class': function (d, i) {
            return 'users-curve users-path' + i;
        },
        'd': pathData, //was curve
        'vector-effect': 'non-scaling-stroke'
    })

function animateLines(e) {
    const ease = 'easeInOutQuad';
    const duration = 1500;

    var cat = e.getAttribute("js-data") - 1;
    var cd = curves_results_data[cat];

    var tl = anime.timeline({
        easing: ease,
        duration: duration
    });

    tl.add({
        targets: '.users-curve',
        d: function (el, i) {
            return cd[i].d
        },
        opacity: 1,
        duration: 750,
        delay: anime.stagger(30),

        begin: function () {
            // Rimuove on dal rettangolo precedente
            var rectz = Array.from(document.querySelectorAll(".on"));
            // rectz.classList.remove('on');
            for (i = 0; i < rectz.length; i++){
                rectz[i].classList.remove('on');
            }

            // Assegna on al rettangolo corrispettivo
            for (i=0; i<4; i++){
                if(i == cat) {
                    var gradient = document.getElementById("rectGradient" + (i+1));
                    gradient.classList.add('on');
                } 
            }
        }
    }, 0)
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



function resized() {

    function SVGResize() {
        var crv = document.getElementById("home-curves");
    
        crv.style.left = window.offsetLeft + 'px';
        crv.style.width = window.clientWidth + 'px';
        // crv.style.height = tl.clientHeight + 'px';
    }    

    SVGResize();

}