// var buttons = document.querySelectorAll('.button');
// var onlineText = document.getElementById("online-text");

// // Onload
// window.onload = onlineGraph.classList.add("on"),
//                 onlineText.classList.add("white"),
//                 onlineRect.classList.add("filled"),
//                 console.log("caricato");

// // Aggiungo event listeners
// for (i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', highlightButton, false);
// }


//------
//------ LISTENERS
//------ a tutti i .circles (sono gruppi che contengono tutti i cerchi)
var circles = document.querySelectorAll('.circles');
var arrows = document.querySelectorAll('.arrows');
var toggle = document.getElementById('toggle');
var testiSeed = document.getElementById('Testi_Seed');

testiSeed.addEventListener('mouseover', highlightOnn, false);
testiSeed.addEventListener('mouseout', highlightOff, false);

for (i = 0; i < circles.length; i++) {
    circles[i].addEventListener('mouseover', highlightOn, false);
    circles[i].addEventListener('mouseout', highlightOff, false);
}



//------
//------ FUNCTIONS HIGHLIGHTACOS
//------
function highlightOn() {
    var circleToIgnore;

    //------controlla se tutti gli altri dots hanno la categoria del dot sul quale si trova il mouse
    for (t = 0; t < circles.length; t++) {
        //------controlla su quale pallino è hover
        if (circles[t].matches('.circles:hover')) {
            circleToIgnore = t;
            console.log(t + " tacos")
            arrows[t].classList.add("stroke-on");
        } else if (t != circleToIgnore) {
            circles[t].classList.add("off");
            arrows[t].classList.add("off");
        }
    }
}

function highlightOff() {
    for (i = 0; i < circles.length; i++) {
        circles[i].classList.remove("off");
        arrows[i].classList.remove("off");
        arrows[i].classList.remove("stroke-on");
    }
}

function highlightOnn() {
    var circleToIgnore = 5;
    //------controlla se tutti gli altri dots hanno la categoria del dot sul quale si trova il mouse
    for (t = 0; t < circles.length; t++) {
        //------controlla su quale pallino è hover
        if (t == circleToIgnore) {
            arrows[circleToIgnore].classList.add("stroke-on");
        } else if (t != circleToIgnore) {
            circles[t].classList.add("off");
            arrows[t].classList.add("off");
        }
    }
}

//------ Higlight testi out
$(document).ready((function(){
    $('.c-ref-out').hover(function() {
      $('.text-ref-out').toggleClass('text-on');
    }, function() {
        $('.text-ref-out').toggleClass('text-on');
    })
  })
);

$(document).ready((function(){
    $('.c-dest-out').hover(function() {
      $('.text-dest-out').toggleClass('text-on');
    }, function() {
        $('.text-dest-out').toggleClass('text-on');
    })
  })
);

//------
//------ TOGGLE
//------

// $(document).ready(function(){
//     $("#toggle-button").mouseenter(function(){
//         $(".hl-red").toggleClass("toggle-on"),
//         $(".fade").toggleClass("faded");
//         $(".toggle-box").toggleClass("box-on");
//     });
// });

// $(document).ready(function(){
//     $("#toggle-button").mouseleave(function(){
//         $(".hl-red").toggleClass("toggle-on"),
//         $(".fade").toggleClass("faded");
//     });
// });

$(document).ready((function(){
    $('.b-toggle').hover(function() {
      $(".b-toggle-rosso").attr("height", "48.3");
      $(".b-toggle-rosso").attr("width", "86");
      $(".b-toggle-rosso").attr("x", "41.2");
      $(".b-toggle-rosso").attr("y", "426.2");
    }, function() {
        $(".b-toggle-rosso").attr("height", "40.3");
        $(".b-toggle-rosso").attr("width", "78"); 
        $(".b-toggle-rosso").attr("x", "45.2"); 
        $(".b-toggle-rosso").attr("y", "430.2"); 
    })
  })
);

$(document).ready(function(){
    $(".b-toggle").click(function(){
        $(".b-toggle-box").toggleClass("b-toggle-box-on")
        $(".hl-red").toggleClass("toggle-on"),
        $(".fade").toggleClass("faded");
    });
});

// $(function(){
//     $('#toggle-button').hover(function() {
//         console.log("fired"),
//       $('.hl-red').removeClass('toggle-on'),
//       $('.toggle-box').addClass('toggle-box-on');
//     }, function() {
//         console.log("watered"),
//       $('.hl-red').addClass('toggle-on');
//     })
//   })