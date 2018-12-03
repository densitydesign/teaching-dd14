//start
$(document).ready(function () {
    $(".percorsi").hide();
//    $(".pieno").hide();
    $(".buttontext").removeClass("cliccato");
});
$(document).ready(function () {
    $(".pieno").show();
    $(".testo0").addClass("cliccato");
});


////links with "percorsi" class


$(document).ready(function () {
    $(".testo1").click(function () {
        $(".percorsi").fadeOut("fast");
        $(".against").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo1").addClass("cliccato");
    });
//
//    $(".testo0").click(function () {
//        $(".100pieno").toggle("fast");
//        $(".buttontext").removeClass("cliccato");
//        $(".percorsi").hide("fast");
//    });
//    
  $(".testo0").click(function () {
        $(".percorsi").fadeOut("fast");
        $(".pieno").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo0").addClass("cliccato");
    });

    
    $(".testo2").click(function () {
        $(".percorsi").fadeOut("fast");
        $(".ironic").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo2").addClass("cliccato");
    });

    $(".testo3").click(function () {
           $(".percorsi").fadeOut("fast");
        $(".concerned").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo3").addClass("cliccato");
    });


    $(".testo4").click(function () {
           $(".percorsi").fadeOut("fast");
        $(".uncertain").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo4").addClass("cliccato");
    });


    $(".testo5").click(function () {
           $(".percorsi").fadeOut("fast");
        $(".neutral").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo5").addClass("cliccato");
    });

    $(".testo6").click(function () {
           $(".percorsi").fadeOut("fast");
        $(".infavor").fadeIn("fast");
        $(".buttontext").removeClass("cliccato");
        $(".testo6").addClass("cliccato");
    });



    //    
    //    
    // $(".background").click(function(){
    //    $(".percorsi").hide("fast");
    //$(".buttontext").removeClass("cliccato");
    // 
    // });   

});