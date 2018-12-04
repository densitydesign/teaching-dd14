//start
$(document).ready(function () {
    $(".zoom-frame").hide();
    $(".buttontext").removeClass("cliccato");
});
$(document).ready(function () {
    $(".frame1").show();
    $(".testo0").addClass("cliccato");
});
//buttons
$(document).ready(function () {    
      $(".testo0").click(function () {
        $(".zoom-frame").fadeOut("fast");
        $(".frame1").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo0").addClass("cliccato");
    });

    $(".testo1").click(function () {
        $(".zoom-frame").fadeOut("fast");
        $(".frame2").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo1").addClass("cliccato");
    });

    $(".testo2").click(function () {
        $(".zoom-frame").fadeOut("fast");
        $(".frame3").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo2").addClass("cliccato");
    });

    $(".testo3").click(function () {
           $(".zoom-frame").fadeOut("fast");
        $(".frame4").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo3").addClass("cliccato");
    });

    $(".testo4").click(function () {
           $(".zoom-frame").fadeOut("fast");
        $(".frame5").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo4").addClass("cliccato");
    });


    $(".testo5").click(function () {
           $(".zoom-frame").fadeOut("fast");
        $(".frame6").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo5").addClass("cliccato");
    });

    $(".testo6").click(function () {
           $(".zoom-frame").fadeOut("fast");
        $(".frame7").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo6").addClass("cliccato");
    });


    
    
      });