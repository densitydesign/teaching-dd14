console.log("ciao");


//REDPALL
$(document).ready(function () {
$(".twitter").mouseenter(function () {
    $(".percorsi").css("opacity","0.2");
    $(".twitter").css("opacity","1");
});
$(".twitter").mouseleave(function () {
    $(".percorsi").css("opacity","1");
});

    $(".weibo").mouseenter(function () {
    $(".percorsi").css("opacity","0.2");
    $(".weibo").css("opacity","1");
});
$(".weibo").mouseleave(function () {
    $(".percorsi").css("opacity","1");
});

    });

