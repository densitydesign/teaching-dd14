// ---- BURGER ---- //

$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});


// ---- CLICK ---- //

$(document).ready(function () {
    $(".click-menu1").click(function () {

        $('html, body').animate({
            scrollTop: $(".intro").offset().top
        }, 01);
        $('#toggle').removeClass('active');
        $('#overlay').removeClass('open');
    });

    $(".click-menu2").click(function () {

        $('html, body').animate({
            scrollTop: $(".gamescroll").offset().top
        }, 01);
        $('#toggle').removeClass('active');
        $('#overlay').removeClass('open');
    });

    $(".click-menu3").click(function () {

        $('html, body').animate({
            scrollTop: $(".research").offset().top
        }, 01);
        $('#toggle').removeClass('active');
        $('#overlay').removeClass('open');
    });

    $(".click-menu4").click(function () {

        $('html, body').animate({
            scrollTop: $(".square").offset().top
        }, 01);
        $('#toggle').removeClass('active');
        $('#overlay').removeClass('open');
    });

    $(".click-menu5").click(function () {

        $('html, body').animate({
            scrollTop: $(".mane").offset().top
        }, 01);
        $('#toggle').removeClass('active');
        $('#overlay').removeClass('open');
    });
});


// ---- HOVER ---- //

$(document).ready(function () {
    $('.click-menu1').mouseenter(function () {
        $('.allmenu').css("opacity", "0.3")
        $(this).css("opacity", "1")
    });
    $('.click-menu2').mouseenter(function () {
        $('.allmenu').css("opacity", "0.3")
        $(this).css("opacity", "1")
    });
    $('.click-menu3').mouseenter(function () {
        $('.allmenu').css("opacity", "0.3")
        $(this).css("opacity", "1")
    });
    $('.click-menu4').mouseenter(function () {
        $('.allmenu').css("opacity", "0.3")
        $(this).css("opacity", "1")
    });
    $('.click-menu5').mouseenter(function () {
        $('.allmenu').css("opacity", "0.3")
        $(this).css("opacity", "1")
    });
    $('.allmenu').mouseleave(function () {
        $('.allmenu').css("opacity", "1")
    });
});
