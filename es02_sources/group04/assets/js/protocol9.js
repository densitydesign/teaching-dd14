console.log("ciao");

$(document).ready(function () {
    $(".comments").hide();
});


//REDPALL
$(document).ready(function () {
    $(".pop").click(function () {
        $(".comments").fadeOut("fast");
        $(".percorsi").css("opacity", "0.2");
        $(this).css("opacity", "1");
        $(".popL").fadeIn("fast");
    });
$(".et").click(function () {
        $(".comments").fadeOut("fast");
        $(".percorsi").css("opacity", "0.2");
        $(this).css("opacity", "1");
        $(".etL").fadeIn("fast");
    });
$(".pol").click(function () {
        $(".comments").fadeOut("fast");
        $(".percorsi").css("opacity", "0.2");
        $(this).css("opacity", "1");
        $(".polL").fadeIn("fast");
    });    
$(".free").click(function () {
        $(".comments").fadeOut("fast");
        $(".percorsi").css("opacity", "0.2");
        $(this).css("opacity", "1");
        $(".freeL").fadeIn("fast");
    });    
$(".habits").click(function () {
        $(".comments").fadeOut("fast");
        $(".percorsi").css("opacity", "0.2");
        $(this).css("opacity", "1");
        $(".habitsL").fadeIn("fast");
    });    
$(".eco").click(function () {
        $(".comments").fadeOut("fast");
        $(".percorsi").css("opacity", "0.2");
        $(this).css("opacity", "1");
        $(".ecoL").fadeIn("fast");
    });    
    
$(".sfondo").click(function () {
        $(".comments").fadeOut("fast");
        $(".percorsi").css("opacity", "1");
    });    
    
    
    
});