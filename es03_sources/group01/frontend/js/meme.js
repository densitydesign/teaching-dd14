//for (var i = 1; i < 25; i++) {
//
//    $('.meme-carousel').append("<img src='https://dd-group01.github.io/phase03/frontend/img/page02/meme/" + i + ".jpg' class='meme-img' />");
//
//}


//
var $carousel = $('.meme-carousel').flickity({
    // options
    freeScroll: true,
    wrapAround: true,
    cellAlign: 'center',
    contain: true,
    pageDots: false,
    prevNextButtons: false,
    lazyLoad: 3
});

if (!Cookies.get('accepted')) {
    $('.cookies').addClass('is-visible');
}

$('.agree').click(function (e) {
    e.preventDefault();
    Cookies.set('accepted', 'true');
    console.log('cuai');
    $('.cookies').removeClass('is-visible');
});

var rouletteFirst = true;


$carousel.on('lazyLoad.flickity', function (event, cellElement) {
    console.log("TRIG");




    setTimeout(function () {
        main.removeClass('is-blur');
        loader.addClass('is-loaded');
    }, 1000)




});
