var tooltip = document.getElementById('tooltip');
var hateWord = document.getElementById('hate-word-description');
var dotsArray = document.querySelectorAll('.dot');

//------PER IL TOOLTIP
function showTooltip(e) {
    var x = window.innerWidth;
    var y = window.innerHeight;
    tooltip.style.left = e.x + 'px';
    tooltip.style.top = e.y + 'px';
}

//------aggiungo i listener ai pallini
document.addEventListener('mousemove', showTooltip, false);
document.addEventListener('mouseout', (e) => {
    tooltip.classList.remove("summon");
}, false);

document.addEventListener('mouseout', (e) => {
    hateWord.classList.remove("appear");
}, false);

//------aggiunge a tutti gli elementi un EventListener per mouseover e mouseout
for (i = 0; i < dotsArray.length; i++) {
    dotsArray[i].addEventListener('mouseover', sameCategoriesOn, false);
    //usare nuova funzione per reverse + nascondere tooltip
    dotsArray[i].addEventListener('mouseout', sameCategoriesOff, false);
}

//------variabili globali per le funzioni
var lastDotIgnored;
var targetDotScale;
var dots = document.querySelectorAll('.dot');

//------accende tutti i dots // scrive il titolo nel box e lo mostra // mostra il tooltip
function sameCategoriesOn() {
    var dotToIgnore;

    //------controlla se tutti gli altri dots hanno la categoria del dot sul quale si trova il mouse
    for (t = 0; t < dots.length; t++) {

        //------controlla su quale pallino è hover
        if (dots[t].matches('.dot:hover')) {
            dotToIgnore = t;
            lastDotIgnored = dotToIgnore;
            scaleDotToIgnore = this.getAttribute('data-offensiveness');
            // dots[t].classList.add("hovered");
            this.style.transform = "scale(" + (scaleDotToIgnore * 0.12) + ")";
            dots[t].classList.add("onn");
            // console.log('Aggiungo onn al punto ' + t);
        }

        // console.log(dotToIgnore);

        if (typeof thisCategory != null && t != dotToIgnore) {
            var thisCategory = dots[t];
            var sourceCategory = thisCategory.getAttribute('data-category').split(", ");
            var targetCategory = this.getAttribute('data-category').split(", ");

            //------v conta le categorie che trova in un elemento
            for (v = 0; v < sourceCategory.length; v++) {
                for (w = 0; w < targetCategory.length; w++) {
                    if (sourceCategory[v] == targetCategory[w]) {
                        // console.log('MATCH!');

                        var scaleTargetDot = dots[t].getAttribute('data-offensiveness');
                        var valMap = mapper(scaleTargetDot, 1, 100, .3, 3);
                        dots[t].style.transform = "scale(" + (valMap) + ")";
                        dots[t].classList.add("on");
                        // console.log('aggiungo scala a ' + t);
                    }
                }
            }
        }

        dotIgnored = -1;
    }

    //------Cosa scrive nell'hate-word-container // TITOLO
    hateWord.innerHTML = 
                        `<h1 class="hate-title">
                            ${this.getAttribute('data-name')}
                        </h1>`

    hateWord.classList.add("appear");

    //------Cosa scrive nel tooltip // BOX HOVER
    tooltip.innerHTML =`
                        <span class="tooltip-content">
                            Category:  ${this.getAttribute('data-category')}
                        </span>
                        <br>
                        <span class="tooltip-content" style="line-height: 1.6">
                            Offensiveness: ${this.getAttribute('data-offensiveness')}
                        </span>
                        <br>
                        <br>
                        <span class="tooltip-content">
                            ${this.getAttribute('data-description')}
                        </span>
                        `

    tooltip.classList.add("summon");
}

// spegne tutti i dots
function sameCategoriesOff() {
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('on');
        dots[i].style.transform = "";

        if (i == lastDotIgnored) {
            dots[i].classList.remove("onn");
            // console.log('Rimuovo onn da ' + lastDotIgnored);
            this.style.transform = "";
        }
    }
}

// function to map some range of values to another range of values`
function mapper(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}