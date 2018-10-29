$(document).ready(function () {

    ///////// NAVIGATION (NOT GOOD)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    $(window).scroll(function () {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scolling
        $('.section').each(function (i) {
            if ($(this).position().top <= scrollDistance) {
                $('.menu a.underline').removeClass('underline');
                $('.menu a').eq(i).addClass('underline');
                //NON VA!
                /*
                if ($('.section').css('background-color') === 'rgb(168, 86, 55)') {
                    console.log("eua");
                    $('slider-parent').css('background-color', 'rgb(238, 239, 233)');
                } else {
                    $('slider-parent').css('background-color', 'rgb(168, 86, 55)');
                }*/
            }
        });
    }).scroll();

    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });

    ///////////////// mobile
    if ($(window).width() < 800) {
        // alert('mobile');
        $('#fullpage').fullpage({
            autoScrolling: false, //scroll
            verticalCentered: false, //flex
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
        });
    }
    ///////////////// desktop
    else {
        //alert('desktop'); 
        $('#fullpage').fullpage({
            autoScrolling: true, //scroll
            scrollingSpeed: 700, //scrollinspeed
            easing: 'easeInOutCubic',
            easingcss3: 'cubic-bezier(0.92,0.13,0.84,0.86)',
            verticalCentered: false, //flex
            scrollBar: true,
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
        });
    }

    //visible trial
    var mer;
    var pisc;

    //view timeline
    $(window).scroll(function () {
        mer = $('#two').visible();
        pisc = $("#time").attr('src');

        if (mer === true) {
            if (pisc === 'assets/timeline_first.png') {
                $("#time").attr('src', 'assets/timeline.gif');
                setTimeout(function () {
                    $("#time").attr('src', 'assets/timeline_last.png');
                    $(".number").addClass("number-active");
                }, 1000);
            }
        }

    });

    //image sequence
    var counter = 1;

    $(window).mousemove(function () {
        var images = "url(css/wave" + counter + ".png)";
        console.log(images);

        $('#one').css({
            "background-image": images
        });
        counter++;
        if (counter > 50) {
            counter = 1;
        }
    });


    //move active class
    $('.toggle-button').click(function (e) {
        $('.toggle-button.butt-active').removeClass('butt-active');

        var $toggle = $(this);
        $toggle.addClass('butt-active');
        e.preventDefault();
    });

    //move active class
    $('.slider-parent a').click(function (e) {
        $('.slider-parent a.underline').removeClass('underline');

        var $toggle = $(this);
        $toggle.addClass('underline');
        e.preventDefault();
    });

});

//MENU
var sliderTrigger = document.getElementsByClassName("slider-trigger")[0];

var slider = document.getElementsByClassName('slider-parent')[0];

sliderTrigger.addEventListener("click", function (el) {
    if (slider.classList.contains("active")) {
        slider.classList.remove("active");
    } else {
        slider.classList.add("active");
    }
});



//MAP

let val;
let index;
let index2;
let index3;
let ultimo = " ";
let last = " ";

var riskList = ["AMNO_risk", "AMCC_risk", "AMSO_risk", "ENWS_risk", "EUES_risk", "AFWM_risk", "AFES_risk", "ANAW_risk", "ASSO_risk", "ASSE_risk", "ASEC_risk", "OMCP_risk", "AUNZ_risk"];
var areaList = ["AMNO", "AMCC", "AMSO", "ENWS", "EUES", "AFWM", "AFES", "ANAW", "ASSO", "ASSE", "ASEC", "OMCP", "AUNZ"];
var areaListLength = areaList.length;

let newText = document.getElementById("show-conflicts");

/*/////////////////////////////////////////////////////////*/

function showGraph(obj) {
    if (ultimo !== " ") {
        document.getElementById(ultimo).classList.add("is-hidden");
    }
    val = obj.id; //metto l'id rilevato dal click nella variabile
    console.log(val);

    //ciclo l'array delle aree ed estraggo la posizione dell'id nell'array
    for (i = 0; i < areaListLength; i++) {
        if (areaList.indexOf(val) >= 0) {
            console.log("area found!");
            index = areaList.indexOf(val); //metto l'index nella variabile
            console.log(index);
            //assegno a index2 l'elemento corrispettivo al primo nel secondo array
            index2 = riskList[index];
            console.log(index2);
            //seleziono l'elemento html che ha lo stesso nome di index2 e gli rimuovo la classe invisibile
            document.getElementById(index2).classList.remove("is-hidden");
            ultimo = index2;
            console.log('ultimo elemento cliccato: ' + ultimo);
        }
        return;
    }
};

/*/////////////////////////////////////////////////////////*/

function getConflicts(obj) {
    let newCountry = document.getElementById("country");
    let newNumber = document.getElementById("n-country");

    val = obj.id; //metto l'id rilevato dal click nella variabile
    console.log(val);

    last = val;

    let countryName;
    //splitto l'ID in base all'underscore
    let countryConflicts = val.split("_");
    console.log(countryConflicts);

    //metto il secondo valore - numero di conflitti - in una variabile
    let countrySpoopy = countryConflicts[1];
    console.log(countrySpoopy);

    //metto il primo valore - nome nazione - in una variabile
    let countrySpace = countryConflicts[0];

    //splitto il nome della nazione in base al dash
    let splittedCountry = countrySpace.split("-");
    console.log(splittedCountry);

    //unisco i valori splittati separati da uno spazio
    countryName = Array.prototype.join.call(splittedCountry, " ");

    newCountry.innerHTML = countryName.toString();
    newNumber.innerHTML = countrySpoopy.toString() + " conflicts";
    newText.classList.remove("is-hidden");
};

function removeConflicts() {
    if (last !== " ") {
        newText.classList.add("is-hidden");
    }
};

/*///////////////////////////GRAFICO FINALE//////////////////////////////*/
let left = document.getElementById("viz-contour-aa");
let right = document.getElementById("viz-contour-bb");
let sourceA = document.getElementById("source-aa");
let sourceB = document.getElementById("source-bb");
let titleA = document.getElementById("title-aa");
let titleB = document.getElementById("title-bb");

function toggleGraphA() {
    left.classList.remove("is-hidden");
    right.classList.remove("is-hidden");
    sourceA.innerHTML = "Source: ACQUASTAT, October 2018";
    sourceB.innerHTML = "Source: ACQUASTAT, October 2018";
    titleA.innerHTML = "People Without Access to Freshwater Distribution";
    titleB.innerHTML = "Water Stress Distribution";
    left.src = "assets/scatter_no_access.png";
    right.src = "assets/scatter_stress.png";
};

function toggleGraphB() {
    left.classList.remove("is-hidden");
    right.classList.remove("is-hidden");
    sourceA.innerHTML = "Source: ACQUASTAT, October 2018";
    sourceB.innerHTML = "Source: UNEP/GEF, October 2018";
    titleA.innerHTML = "Flood Occurrency";
    titleB.innerHTML = "Drought Risk";
    left.src = "assets/scatter_floods.png";
    right.src = "assets/scatter_droughts.png";
};

//ALLUVIAL

function hide(type) {
    if (type === 'trigger') {
        document.getElementById('Trigger').classList.remove('opacity-low');

        document.getElementById('Casualty').classList.add('opacity-low');
        document.getElementById('Weapon').classList.add('opacity-low');
    }
    if (type === 'casualty') {
        document.getElementById('Casualty').classList.remove('opacity-low');

        document.getElementById('Trigger').classList.add('opacity-low');
        document.getElementById('Weapon').classList.add('opacity-low');
    }
    if (type === 'weapon') {
        document.getElementById('Weapon').classList.remove('opacity-low');

        document.getElementById('Trigger').classList.add('opacity-low');
        document.getElementById('Casualty').classList.add('opacity-low');
    }
};

function coloraTesto(type) {
    if (type === 'trigger') {
        document.getElementById('Trigger-word').classList.add('boldRed');

        document.getElementById('Casualty-word').classList.remove('boldRed');
        document.getElementById('Weapon-word').classList.remove('boldRed');
    }
    if (type === 'casualty') {
        document.getElementById('Casualty-word').classList.add('boldRed');

        document.getElementById('Trigger-word').classList.remove('boldRed');
        document.getElementById('Weapon-word').classList.remove('boldRed');
    }
    if (type === 'weapon') {
        document.getElementById('Weapon-word').classList.add('boldRed');

        document.getElementById('Trigger-word').classList.remove('boldRed');
        document.getElementById('Casualty-word').classList.remove('boldRed');
    }
};

//relations
var moveRelationz = function (value) {
    console.log(value);
    $('.horizontal-scroll').css({
        'margin-left': -value + 'px'
    });
};

var spostaSlider = function (value) {
    document.getElementById("sliderino").value = value;
    moveRelationz(value);
};


function calcolaLarghezza() {
    var w = window.innerWidth;
    var h = window.innerHeight * 0.8;
    var rationalized = h * 6.81;
    var wConPadding = w * 0.75;
    var offset = rationalized - wConPadding;
    document.getElementById("sliderino").max = offset;
};
