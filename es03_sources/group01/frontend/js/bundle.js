/*jslint browser: true*/
/*eslint-env browser*/
/*jslint node: true */
/*jshint esnext: true, expr: true, unused: false */
/*jshint validthis: true */
/*global $*/

var main = $('main'),
    page = $('.page'),
    loader = $('.loader');




// INIT

$(document).ready(function () {



    // WIDOW FIX
    $('.title, h1, h3, p, .snap.intro .module, .page_title').widowFix();

    page.click(function (evt) {

        if (evt.target.matches('span')) {
            asterisk();
            return;
        }

        if (!$(this).closest('.page').hasClass('is-active')) {


            var $this = $(this),
                number = $this.data('number');

            page.removeClass('is-active');
            $this.addClass('is-active');

            page.not($this).animate({ // animate your right div
                scrollTop: 0 // to the position of the target 
            }, 500);


            page.each(function (i) {

                if (i < number) {
                    $(this).addClass('is-slided');
                } else {
                    $(this).removeClass('is-slided');
                }
            })

        }
    })


    initRoulette();


})



function asterisk() {

    if ($(window).width() < 587) {
        $('html,body').animate({
            scrollTop: $('#end').offset().top
        }, 'fast');

    } else {
        // OPEN END PAGE
        page.removeClass('is-active');
        var number = 6;

        page.each(function (i) {

            if (i < number) {
                $(this).addClass('is-slided');
            }
        })

        $('.is-end').addClass('is-active');

    }
}


function share() {

    $('.fb, .tw').click(function (e) {

        gtag('event', 'share', {
            'event_label': 'SHARING',
            'event_category': 'sharing'
        });

        window.open($(this).data('href'), 'fbShareWindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
        return false;
    });


    $('.ig, .st').click(function (e) {

        gtag('event', 'share', {
            'event_label': 'SHARING',
            'event_category': 'sharing'
        });

        var href = $(this).data('href');
        window.open(href, '_blank');

    });

    $('.start.button').click(generate);


}

function refresh(num) {

    var fbLink = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fbit.ly%2FAFManifesto' + num,
        twLink = 'https://twitter.com/intent/tweet?url=http%3A%2F%2Fbit.ly%2FAFManifesto' + num,
        igLink = 'https://dd-group01.github.io/phase03/frontend/img/share/' + num + '/ig.png',
        stLink = 'https://dd-group01.github.io/phase03/frontend/img/share/' + num + '/st.png';

    console.log(fbLink);

    $('.fb').data('href', fbLink);
    $('.tw').data('href', twLink);
    $('.ig').data('href', igLink);
    $('.st').data('href', stLink);

    console.log("FATTO");

}



function initRoulette() {

    share();


    var parent = $(".page_roulette_img_images");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
    parent.find("img:first-child").addClass('is-visible');

    var ID = parent.find("img:first-child").data("number");

    console.log(ID);
    refresh(ID);
}



function generate() {

    $('.page_roulette_img_loading').addClass("is-visible");
    $('.page_roulette_share, .page_roulette_img_images').addClass("is-disabled");

    var parent = $(".page_roulette_img_images");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }

    setTimeout(function () {
        $('.page_roulette_img_images img').removeClass("is-visible");
        parent.find("img:first-child").addClass('is-visible');

        $('.page_roulette_img_loading').removeClass("is-visible");
        $('.page_roulette_share, .page_roulette_img_images').removeClass("is-disabled");


        var ID = parent.find("img:first-child").data("number");

        console.log(ID);
        refresh(ID);

    }, 1000)




}
