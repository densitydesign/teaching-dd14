console.log('prova');


//ANIMAZIONE INVESTIMENTI

$('.animazione-investimenti').mouseenter(
    function () {
        $('.investments-trend').css({
            "opacity": "1",
            "stroke-dasharray": "500",
            "stroke-dashoffset": "500",
            "animation": "1.5s dash linear forwards",

        });

    });

$('.animazione-investimenti').mouseenter(
    function () {
        $('.investments-prevision').css({
            "opacity": "1",
            "stroke-dasharray": "500",
            "stroke-dashoffset": "500",
            "animation": "1.5s dash linear forwards",
            "animation-delay": "1s",
        });

    });


//ANIMAZIONE BENEFIT

$('.animazione-benefit').mouseenter(
    function () {
        $('.benefit0').css({
            "opacity": "1",
            "stroke-dasharray": "500",
            "stroke-dashoffset": "500",
            "animation": "5s dash linear forwards",
        });

    });

$('.animazione-benefit').mouseenter(
    function () {
        $('.benefit1').css({
            "opacity": "1",
            "stroke-dasharray": "500",
            "stroke-dashoffset": "500",
            "animation": "2s dash linear forwards",
        });

    });


//ANIMAZIONE RESPONSABILITY

$('.animazione-responsability').mouseenter(
    function () {
        $('.responsability24alto').css({
            "transition": "2.7s ease-in-out",
            "transform": "scale(1,0)",
            "transition-delay": "0s",

        });

    });


$('.animazione-responsability').mouseenter(
    function () {
        $('.responsability22').css({
            "transition": "2s ease-in-out",
            "transform": "scale(1,0)",
            "transition-delay": "0s",

        });

    });

$('.animazione-responsability').mouseenter(
    function () {
        $('.responsability23').css({
            "transition": "2s ease-in-out",
            "transform": "scale(1,0)",
            "transition-delay": "0s",

        });

    });


$('.animazione-responsability').mouseenter(
    function () {
        $('.responsability24basso').css({
            "transition": "2.3s ease-in-out",
            "transform": "scale(1,0)",
            "transition-delay": "0s",

        });

    });


// MAP PRIVACY CHART

$(document).ready(function () {

    $(".pallinitext").hide();
});

$(document).ready(function () {
    console.log("readyyy");
    $(".pallini").on('click', function () {
        $(".pallini").css('opacity', '0.4');
        $(this).css('opacity', '1')
    })
    $('#backgroundmap').on('click', function () {
        $('.pallini').css('opacity', '1')
        $('.pallinitext').hide();
        $(".textmap").css('opacity', '1');
    })

});

$(document).ready(function () {
    $("#moderate").click(function () {
        $(".pallinitext").hide();
        $("#moderate_text").show();
        $(".textmap").css('opacity', '1');
        $(".mod").css('opacity', '0.4');

    });
});

$(document).ready(function () {
    $("#heavy").click(function () {
        $(".pallinitext").hide();
        $("#heavytext").show();
        $(".textmap").css('opacity', '1');
        $(".heav").css('opacity', '0.4');
    });
});

$(document).ready(function () {
    $("#draft").click(function () {
        $(".pallinitext").hide();
        $("#drafttext").show();
        $(".textmap").css('opacity', '1');
        $(".draf").css('opacity', '0.4');
    });
});

$(document).ready(function () {
    $("#nodata").click(function () {
        $(".pallinitext").hide();
        $("#nodatatext").show();
        $(".textmap").css('opacity', '1');
        $(".nod").css('opacity', '0.4');
    });

});


//WILLINGNESS CHART

$(document).ready(function () {
    $(".starthide").hide();
});

$("#ugermany").click(function () {
    $("#wgermanyB").fadeIn("fast");
    $("#qgermany").fadeIn("fast");
});

$("#qgermany").click(function () {
    $("#wgermanyB").fadeOut("fast");
    $("#qgermany").fadeOut("fast");
});


$("#uaustralia").click(function () {
    $("#waustraliaB").fadeIn("fast");
    $("#qaustralia").fadeIn("fast");
});

$("#qaustralia").click(function () {
    $("#waustraliaB").fadeOut("fast");
    $("#qaustralia").fadeOut("fast");
});


$("#ufrance").click(function () {
    $("#wfranceB").fadeIn("fast");
    $("#qfrance").fadeIn("fast");
});

$("#qfrance").click(function () {
    $("#wfranceB").fadeOut("fast");
    $("#qfrance").fadeOut("fast");
});

$("#ucanada").click(function () {
    $("#wcanadaB").fadeIn("fast");
    $("#qcanada").fadeIn("fast");
});

$("#qcanada").click(function () {
    $("#wcanadaB").fadeOut("fast");
    $("#qcanada").fadeOut("fast");
});

$("#uuk").click(function () {
    $("#wukB").fadeIn("fast");
    $("#quk").fadeIn("fast");
});

$("#quk").click(function () {
    $("#wukB").fadeOut("fast");
    $("#quk").fadeOut("fast");
});
$("#uusa").click(function () {
    $("#wusaB").fadeIn("fast");
    $("#qusa").fadeIn("fast");
});

$("#qusa").click(function () {
    $("#wusaB").fadeOut("fast");
    $("#qusa").fadeOut("fast");
});

$("#unetherland").click(function () {
    $("#wnetherlandB").fadeIn("fast");
    $("#qnetherland").fadeIn("fast");
});

$("#qnetherland").click(function () {
    $("#wnetherlandB").fadeOut("fast");
    $("#qnetherland").fadeOut("fast");
});

$("#ubrasil").click(function () {
    $("#wbrasilB").fadeIn("fast");
    $("#qbrasil").fadeIn("fast");
});

$("#qbrasil").click(function () {
    $("#wbrasilB").fadeOut("fast");
    $("#qbrasil").fadeOut("fast");
});

$("#uitaly").click(function () {
    $("#witalyB").fadeIn("fast");
    $("#qitaly").fadeIn("fast");
});

$("#qitaly").click(function () {
    $("#witalyB").fadeOut("fast");
    $("#qitaly").fadeOut("fast");
});

$("#uchina").click(function () {
    $("#wchinaB").fadeIn("fast");
    $("#qchina").fadeIn("fast");
});

$("#qchina").click(function () {
    $("#wchinaB").fadeOut("fast");
    $("#qchina").fadeOut("fast");
});

$("#umiddle").click(function () {
    $("#wmiddleB").fadeIn("fast");
    $("#qmiddle").fadeIn("fast");
});

$("#qmiddle").click(function () {
    $("#wmiddleB").fadeOut("fast");
    $("#qmiddle").fadeOut("fast");
});
$("#ujapan").click(function () {
    $("#wjapanB").fadeIn("fast");
    $("#qjapan").fadeIn("fast");
});

$("#qjapan").click(function () {
    $("#wjapanB").fadeOut("fast");
    $("#qjapan").fadeOut("fast");
});

$("#urussia").click(function () {
    $("#wrussiaB").fadeIn("fast");
    $("#qrussia").fadeIn("fast");
});

$("#qrussia").click(function () {
    $("#wrussiaB").fadeOut("fast");
    $("#qrussia").fadeOut("fast");
});

$("#umexico").click(function () {
    $("#wmexicoB").fadeIn("fast");
    $("#qmexico").fadeIn("fast");
});

$("#qmexico").click(function () {
    $("#wmexicoB").fadeOut("fast");
    $("#qmexico").fadeOut("fast");
});
$("#uindia").click(function () {
    $("#windiaB").fadeIn("fast");
    $("#qindia").fadeIn("fast");
});

$("#qindia").click(function () {
    $("#windiaB").fadeOut("fast");
    $("#qindia").fadeOut("fast");
});


//ANIMAZIONE TITOLO

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};