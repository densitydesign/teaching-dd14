// ---- LOADER ---- //

$(document).ready(function () {
    console.log("ready!");
    $(".loader").delay(5000).fadeOut("slow");
    $(".darkpart").fadeOut("fast");
    $(".homo").fadeOut("fast");
    $(".aggiunto").fadeOut("fast");
    $(".answers").fadeOut("fast");
});



// ---- WHERE ARE YOU ---- //

$(document).ready(function () {
    $(".esc").click(function () {
        $(".where").fadeOut("fast");
        $(".esc").fadeOut("fast");
    });
});

$(document).ready(function () {
    $(".warningbutton").click(function () {
        $(".where").fadeIn("fast");
        $(".esc").fadeIn("fast");
    });
});



// ---- BALOON ---- //

$(document).ready(function () {
    $(".baloonbutton").click(function () {
        $(".baloon").toggle("fast");
    });
});



// ---- HOVER DARK SQUARE ---- //

$(document).ready(function () {
    $(".lightuncertain").mouseenter(function () {
        $(".darkpart").fadeOut("fast");
        $(".darkuncertain").fadeIn("fast");
    });
    $(".lightneutral").mouseenter(function () {
        $(".darkpart").fadeOut("fast");
        $(".darkneutral").fadeIn("fast");
    });
    $(".lightinfavor").mouseenter(function () {
        $(".darkpart").fadeOut("fast");
        $(".darkinfavor").fadeIn("fast");
    });
    $(".lightagainst").mouseenter(function () {
        $(".darkpart").fadeOut("fast");
        $(".darkagainst").fadeIn("fast");
    });
    $(".lightironic").mouseenter(function () {
        $(".darkpart").fadeOut("fast");
        $(".darkironic").fadeIn("fast");
    });
    $(".lightconcerned").mouseenter(function () {
        $(".darkpart").fadeOut("fast");
        $(".darkconcerned").fadeIn("fast");
    });

    $(".darkpart").mouseleave(function () {
        $(this).fadeOut("fast");
    });
});



// ---- APPOACH OMINI ---- //

$(document).ready(function () {
    $(".darkironic").click(function () {
        $(".homo").fadeOut("fast");
        $(".homoironic").fadeIn("fast");
    });
    $(".darkconcerned").click(function () {
        $(".homo").fadeOut("fast");
        $(".homoconcerned").fadeIn("fast");
    });
    $(".darkuncertain").click(function () {
        $(".homo").fadeOut("fast");
        $(".homouncertain").fadeIn("fast");
    });
    $(".darkneutral").click(function () {
        $(".homo").fadeOut("fast");
        $(".homoneutral").fadeIn("fast");
    });
    $(".darkinfavor").click(function () {
        $(".homo").fadeOut("fast");
        $(".homoinfavor").fadeIn("fast");
    });
    $(".darkagainst").click(function () {
        $(".homo").fadeOut("fast");
        $(".homoagainst").fadeIn("fast");
    });
});


// ---- ABOUT ---- //

$(document).ready(function () {
    $(".desc").fadeOut("fast");
    $(".eri").mouseenter(function () {
        $(".eridesc").fadeIn("fast");
    });
    $(".eri").mouseleave(function () {
        $(".eridesc").fadeOut("fast");
    });
    $(".sara").mouseenter(function () {
        $(".saradesc").fadeIn("fast");
    });
    $(".sara").mouseleave(function () {
        $(".saradesc").fadeOut("fast");
    });
    $(".yi").mouseenter(function () {
        $(".yidesc").fadeIn("fast");
    });
    $(".yi").mouseleave(function () {
        $(".yidesc").fadeOut("fast");
    });
    $(".ale").mouseenter(function () {
        $(".aledesc").fadeIn("fast");
    });
    $(".ale").mouseleave(function () {
        $(".aledesc").fadeOut("fast");
    });
    $(".mane").mouseenter(function () {
        $(".manedesc").fadeIn("fast");
    });
    $(".mane").mouseleave(function () {
        $(".manedesc").fadeOut("fast");
    });
    $(".cami").mouseenter(function () {
        $(".camidesc").fadeIn("fast");
    });
    $(".cami").mouseleave(function () {
        $(".camidesc").fadeOut("fast");
    });
});



// ---- GAME HOVER ---- //

$(document).ready(function () {
    $(".desc").fadeOut("fast");
    $(".chr").fadeOut("fast");
    $(".ch1").mouseenter(function () {
        $(".d1").fadeIn("fast");
    });
    $(".ch1").mouseleave(function () {
        $(".d1").fadeOut("fast");
    });

    $(".ch2").mouseenter(function () {
        $(".d2").fadeIn("fast");
    });
    $(".ch2").mouseleave(function () {
        $(".d2").fadeOut("fast");
    });
    $(".ch3").mouseenter(function () {
        $(".d3").fadeIn("fast");
    });
    $(".ch3").mouseleave(function () {
        $(".d3").fadeOut("fast");
    });
    $(".ch4").mouseenter(function () {
        $(".d4").fadeIn("fast");
    });
    $(".ch4").mouseleave(function () {
        $(".d4").fadeOut("fast");
    });
    $(".ch5").mouseenter(function () {
        $(".d5").fadeIn("fast");
    });
    $(".ch5").mouseleave(function () {
        $(".d5").fadeOut("fast");
    });
    $(".ch6").mouseenter(function () {
        $(".d6").fadeIn("fast");
    });
    $(".ch6").mouseleave(function () {
        $(".d6").fadeOut("fast");
    });
    $(".ch7").mouseenter(function () {
        $(".d7").fadeIn("fast");
    });
    $(".ch7").mouseleave(function () {
        $(".d7").fadeOut("fast");
    });
    $(".ch8").mouseenter(function () {
        $(".d8").fadeIn("fast");
    });
    $(".ch8").mouseleave(function () {
        $(".d8").fadeOut("fast");
    });
    $(".ch9").mouseenter(function () {
        $(".d9").fadeIn("fast");
    });
    $(".ch9").mouseleave(function () {
        $(".d9").fadeOut("fast");
    });
    $(".ch10").mouseenter(function () {
        $(".d10").fadeIn("fast");
    });
    $(".ch10").mouseleave(function () {
        $(".d10").fadeOut("fast");
    });
    $(".ch11").mouseenter(function () {
        $(".d11").fadeIn("fast");
    });
    $(".ch11").mouseleave(function () {
        $(".d11").fadeOut("fast");
    });
    $(".ch12").mouseenter(function () {
        $(".d12").fadeIn("fast");
    });
    $(".ch12").mouseleave(function () {
        $(".d12").fadeOut("fast");
    });
    $(".ch13").mouseenter(function () {
        $(".d13").fadeIn("fast");
    });
    $(".ch13").mouseleave(function () {
        $(".d13").fadeOut("fast");
    });
    $(".ch14").mouseenter(function () {
        $(".d14").fadeIn("fast");
    });
    $(".ch14").mouseleave(function () {
        $(".d14").fadeOut("fast");
    });
    $(".ch15").mouseenter(function () {
        $(".d15").fadeIn("fast");
    });
    $(".ch15").mouseleave(function () {
        $(".d15").fadeOut("fast");
    });
    $(".ch16").mouseenter(function () {
        $(".d16").fadeIn("fast");
    });
    $(".ch16").mouseleave(function () {
        $(".d16").fadeOut("fast");
    });
    $(".ch17").mouseenter(function () {
        $(".d17").fadeIn("fast");
    });
    $(".ch17").mouseleave(function () {
        $(".d17").fadeOut("fast");
    });
    $(".ch18").mouseenter(function () {
        $(".d18").fadeIn("fast");
    });
    $(".ch18").mouseleave(function () {
        $(".d18").fadeOut("fast");
    });
    $(".ch19").mouseenter(function () {
        $(".d19").fadeIn("fast");
    });
    $(".ch19").mouseleave(function () {
        $(".d19").fadeOut("fast");
    });
    $(".ch20").mouseenter(function () {
        $(".d20").fadeIn("fast");
    });
    $(".ch20").mouseleave(function () {
        $(".d20").fadeOut("fast");
    });
    $(".ch21").mouseenter(function () {
        $(".d21").fadeIn("fast");
    });
    $(".ch21").mouseleave(function () {
        $(".d21").fadeOut("fast");
    });
    $(".ch22").mouseenter(function () {
        $(".d22").fadeIn("fast");
    });
    $(".ch22").mouseleave(function () {
        $(".d22").fadeOut("fast");
    });
    $(".ch23").mouseenter(function () {
        $(".d23").fadeIn("fast");
    });
    $(".ch23").mouseleave(function () {
        $(".d23").fadeOut("fast");
    });
    $(".ch24").mouseenter(function () {
        $(".d24").fadeIn("fast");
    });
    $(".ch24").mouseleave(function () {
        $(".d24").fadeOut("fast");
    });
    $(".ch25").mouseenter(function () {
        $(".d25").fadeIn("fast");
    });
    $(".ch25").mouseleave(function () {
        $(".d25").fadeOut("fast");
    });
    $(".ch26").mouseenter(function () {
        $(".d26").fadeIn("fast");
    });
    $(".ch26").mouseleave(function () {
        $(".d26").fadeOut("fast");
    });
    $(".ch27").mouseenter(function () {
        $(".d27").fadeIn("fast");
    });
    $(".ch27").mouseleave(function () {
        $(".d27").fadeOut("fast");
    });
    $(".ch28").mouseenter(function () {
        $(".d28").fadeIn("fast");
    });
    $(".ch28").mouseleave(function () {
        $(".d28").fadeOut("fast");
    });
    $(".ch29").mouseenter(function () {
        $(".d29").fadeIn("fast");
    });
    $(".ch29").mouseleave(function () {
        $(".d29").fadeOut("fast");
    });
    $(".ch30").mouseenter(function () {
        $(".d30").fadeIn("fast");
    });
    $(".ch30").mouseleave(function () {
        $(".d30").fadeOut("fast");
    });
});



// ---- GAME RED ---- //

$(document).ready(function () {
    $(".chrlist").fadeOut("fast");

    $(".ch2").click(function () {
        $(".chr2").fadeIn("fast");
        $(".chr1list").fadeIn("fast");
    });
    $(".ch7").click(function () {
        $(".chr7").fadeIn("fast");
        $(".chr2list").fadeIn("fast");
    });
    $(".ch11").click(function () {
        $(".chr11").fadeIn("fast");
        $(".chr3list").fadeIn("fast");
    });
    $(".ch14").click(function () {
        $(".chr14").fadeIn("fast");
        $(".chr4list").fadeIn("fast");
    });
    $(".ch16").click(function () {
        $(".chr16").fadeIn("fast");
        $(".chr5list").fadeIn("fast");
    });
    $(".ch17").click(function () {
        $(".chr17").fadeIn("fast");
        $(".chr6list").fadeIn("fast");
    });
    $(".ch21").click(function () {
        $(".chr21").fadeIn("fast");
        $(".chr7list").fadeIn("fast");
    });
    $(".ch22").click(function () {
        $(".chr22").fadeIn("fast");
        $(".chr8list").fadeIn("fast");
    });
    $(".ch25").click(function () {
        $(".chr25").fadeIn("fast");
        $(".chr9list").fadeIn("fast");
    });
    $(".ch29").click(function () {
        $(".chr29").fadeIn("fast");
        $(".chr10list").fadeIn("fast");
    });

    
    // ---- BLACKLIST ---- //

    var countMyClicks = 0;
    $('.chh').on('click', function () {
        countMyClicks++;
        $(this).prop('disabled', true);

        if (countMyClicks == 10) {
            $(".blacklists").addClass("blacklistshover");
            $(".warningadvise").delay(3000).fadeIn("fast");
            $(".warningesc").delay(3000).fadeIn("fast");
            $('html, body').animate({
                scrollTop: $(".ch30").offset().top
            }, 2000);
//            $(".scroll-page").slideDown("slow");
        }
    });

    

// ---- WARNING OUT ---- //

    $(".warningesc").click(function () {
        $(".warningesc").fadeOut("fast");
        $(".warningadvise").fadeOut("fast");

    });
});



// ---- WARNING IN ---- //

console.log("hello");
$(document).ready(function () {
    $(".warningesc").fadeOut("fast");
    $(".warningadvise").fadeOut("fast");
//    $(".scroll-page").fadeOut("fast");
});



// ---- SHAKE---- //

$(document).ready(function () {

    $(".ch1").click(function () {
        $(".ch1").addClass("shake");
    });
    $(".ch1").mouseleave(function () {
        $(".ch1").delay(2000).removeClass("shake");
    });
    $(".ch3").click(function () {
        $(".ch3").addClass("shake");
        });
    $(".ch3").mouseleave(function () {
        $(".ch3").delay(2000).removeClass("shake");
        });
    $(".ch4").click(function () {
        $(".ch4").addClass("shake");
        });
    $(".ch4").mouseleave(function () {
        $(".ch4").delay(2000).removeClass("shake");
        });
    $(".ch5").click(function () {
        $(".ch5").addClass("shake");
        });
    $(".ch5").mouseleave(function () {
        $(".ch5").delay(2000).removeClass("shake");
        });
    $(".ch6").click(function () {
        $(".ch6").addClass("shake");
        });
    $(".ch6").mouseleave(function () {
        $(".ch6").delay(2000).removeClass("shake");
        });
    $(".ch8").click(function () {
        $(".ch8").addClass("shake");
        });
    $(".ch8").mouseleave(function () {
        $(".ch8").delay(2000).removeClass("shake");
        });
    $(".ch9").click(function () {
        $(".ch9").addClass("shake");
        });
    $(".ch9").mouseleave(function () {
        $(".ch9").delay(2000).removeClass("shake");
        });
    $(".ch10").click(function () {
        $(".ch10").addClass("shake");
        });
    $(".ch10").mouseleave(function () {
        $(".ch10").delay(2000).removeClass("shake");
        });
    $(".ch12").click(function () {
        $(".ch12").addClass("shake");
        });
    $(".ch12").mouseleave(function () {
        $(".ch12").delay(2000).removeClass("shake");
        });
    $(".ch13").click(function () {
        $(".ch13").addClass("shake");
        });
    $(".ch13").mouseleave(function () {
        $(".ch13").delay(2000).removeClass("shake");
        });
    $(".ch15").click(function () {
        $(".ch15").addClass("shake");
        });
    $(".ch15").mouseleave(function () {
        $(".ch15").delay(2000).removeClass("shake");
        });
    $(".ch18").click(function () {
        $(".ch18").addClass("shake");
        });
    $(".ch18").mouseleave(function () {
        $(".ch18").delay(2000).removeClass("shake");
        });
    $(".ch19").click(function () {
        $(".ch19").addClass("shake");
        });
    $(".ch19").mouseleave(function () {
        $(".ch19").delay(2000).removeClass("shake");
        });
    $(".ch20").click(function () {
        $(".ch20").addClass("shake");
        });
    $(".ch20").mouseleave(function () {
        $(".ch20").delay(2000).removeClass("shake");
        });
    $(".ch23").click(function () {
        $(".ch23").addClass("shake");
        });
    $(".ch23").mouseleave(function () {
        $(".ch23").delay(2000).removeClass("shake");
        });
    $(".ch24").click(function () {
        $(".ch24").addClass("shake");
        });
    $(".ch24").mouseleave(function () {
        $(".ch24").delay(2000).removeClass("shake");
        });
    $(".ch26").click(function () {
        $(".ch26").addClass("shake");
        });
    $(".ch26").mouseleave(function () {
        $(".ch26").delay(2000).removeClass("shake");
        });
    $(".ch27").click(function () {
        $(".ch27").addClass("shake");
        });
    $(".ch27").mouseleave(function () {
        $(".ch27").delay(2000).removeClass("shake");
        });
    $(".ch28").click(function () {
        $(".ch28").addClass("shake");
        });
    $(".ch28").mouseleave(function () {
        $(".ch28").delay(2000).removeClass("shake");
        });
    $(".ch30").click(function () {
        $(".ch30").addClass("shake");
        });
    $(".ch30").mouseleave(function () {
        $(".ch30").delay(2000).removeClass("shake");
        });

});



// ---- SCROLL HOMEPAGE TO GAME ---- //

$(document).ready(function() {
$(".arrow").click(function() {
     $('html, body').animate({
         scrollTop: $(".gamescroll").offset().top
     }, 2000);
 });
});