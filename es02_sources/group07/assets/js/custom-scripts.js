// This is Javascript code to make the example in question02 work, fell free to remove this when you start working on your project
$(document).ready(function() {

    $('.bubble').on('click', function(event) {

        event.stopPropagation();
        let listIndex = $(event.currentTarget).index() + 1;

        $('.label').removeClass('is-visible');
        $('.label:nth-child(' + listIndex + ')').addClass('is-visible');

    });

    $(':not(.bubble)').on('click', function(event) {

        // console.log('event fired!');
        $('.label').removeClass('is-visible');

    })

/* opacity on hover */
    $('.hoverable').on('mouseenter', function(event) {

        $('.hoverable').removeClass('is-visible');

        $('.hoverable').addClass('is-out-focus');
        $(event.currentTarget).removeClass('is-out-focus');
        $('#STATIC_GRAPH').removeClass('is-out-focus');
        $('#STATIC_Legenda').removeClass('is-out-focus');
        $('#STATIC').removeClass('is-out-focus');

    }).on('mouseleave', function(event) {

        $('.hoverable').removeClass('is-out-focus');
        $('.hoverable-2').addClass('is-visible');
    })

    /* EVEN MOAR OPACITY on hover */
        $('.hoverable-2').on('mouseenter', function(event) {

            $('.hoverable-2').removeClass('is-visible');

            $('.hoverable-2').addClass('is-nearly-hidden');
            $(event.currentTarget).removeClass('is-nearly-hidden');
            $('#STATIC_GRAPH').removeClass('is-nearly-hidden');
            $('#STATIC_Legenda').removeClass('is-nearly-hidden');
            $('#STATIC').removeClass('is-nearly-hidden');

        }).on('mouseleave', function(event) {
              $('.hoverable-2').removeClass('is-nearly-hidden');
              $('.hoverable-2').addClass('is-visible');
        })

        var id_network;
        /*SPECIAL NODES NO-OVERLAPPING*/

        $('.special-ed').on('mouseenter', function(event) {
          id_network = $(this).attr('id') + "_Special";
          console.log(id_network);
          $('#' + id_network).removeClass('is-hidden');
        })
        .on('mouseleave', function(event) {
            $('#' + id_network).addClass('is-hidden');
        })

    /* sticky */
    $(window).scroll(function() {
        var legend_sticky = $(window).scrollTop();

        if (legend_sticky >= 460) {
            $(".tricky-2").addClass("line");
            $(".tricky-2").addClass("scaled-2");
        } else {
            $(".tricky-2").removeClass("line");
            $(".tricky-2").removeClass("scaled-2");
        }
    });


    /* Switch Immagini*/
    $("#eng_img_switch").on('click', function(event){
        $("#google_images").attr("src","./assets/images/GoogleImages/bifras/google_images_eng.png");
        $('.zoomLens').attr('style','background-position: -0.37503px -4810.74px; float: left; border: 1px solid rgb(136, 136, 136); width: 250px; height: 250px; background-repeat: no-repeat; position: absolute; border-radius: 126px; background-image: url("./assets/images/GoogleImages/bifras/google_images_eng_large.png"); left: -107px; top: 600px; display: none;');
    })
    $("#braz_img_switch").on('click', function(event){
        $("#google_images").attr("src","./assets/images/GoogleImages/bifras/google_images_braz.png");
        $('.zoomLens').attr('style','background-position: -0.37503px -4810.74px; float: left; border: 1px solid rgb(136, 136, 136); width: 250px; height: 250px; background-repeat: no-repeat; position: absolute; border-radius: 126px; background-image: url("./assets/images/GoogleImages/bifras/google_images_braz_large.png"); left: -107px; top: 600px; display: none;');
    })


    /* colora bottoni */
    $(".switch").on('click', function(event){
        $(".switch").removeClass("rosso");
        $(".switch").removeClass("rosso");
        $(this).addClass("rosso");
    })

    /* fill treemap */
    $(".treemap_group").on('mouseenter', function(event) {
        $(this).children(".rettangolo").attr('style','fill: rgb(175, 214, 237, 0.2)');

    }).on('mouseleave', function(event) {

        $(this).children(".rettangolo").attr('style','fill: white');

    });

    var questo;
    $(".treemap_group").on('click', function(event) {
        questo = $(this).children(".rettangolo");
        questo.attr('style','fill: rgb(white)')
        setTimeout(function()
          {
            questo.attr('style','fill: rgb(175, 214, 237, 0.2)');
          }, 100);
    });



    /* mostra barcharts */
    var id_piechart;
    /* eng */
    $(".chiama-cream").on('mouseenter', function() {
        id_piechart = $(this).parent().attr('id');
        $("#porta-cream-pie").attr("src", "./assets/svg/barcharts_ENG/" + id_piechart + ".svg");
    });
    $(".chiama-cream").on('mouseenter', function(e) {
        $("#cream-pie").removeClass("is-away");
    }).on('mouseleave', function(e) {

        $("#cream-pie").addClass("is-away");
    });

    /* braz */
    $(".chiama-cream-brazi").on('mouseenter', function() {
        id_piechart = $(this).parent().attr('id');
        $("#porta-cream-pie").attr("src", "./assets/svg/barcharts_BRA/" + id_piechart + ".svg");
    });
    $(".chiama-cream-brazi").on('mouseenter', function(e) {
        $("#cream-pie").removeClass("is-away");
    }).on('mouseleave', function(e) {

        $("#cream-pie").addClass("is-away");
    });


    /* mostra labels nella wordcloud */

    $(".labelista").on('mouseenter', function() {
        $(".label").removeClass("is-hidden");
    }).on('mouseleave', function() {
        $(".label").addClass("is-hidden");
    });

    /* nascondi pulsanti  nella wordcloud */

    $(".labelista").on('mouseenter', function() {
        $(".pulsanti_wordcloud").addClass("is-away");
    }).on('mouseleave', function() {
        $(".pulsanti_wordcloud").removeClass("is-away");
    });


    /* mostra parole nell'ultimo grafico */
    var inbassopx;
    var inbasso;
    var inbassonum;

    $(".show_pie").on('mouseenter', function(e) {
        inbassopx = $("#apple-pie").css("height");
        inbasso = inbassopx.replace('px', '');
        inbassonum = parseInt(inbasso, 10);
        $("#apple-pie").css('top', e.pageY - inbassonum - 5);
        $("#apple-pie").css('left', e.pageX);
        $("#apple-pie").css('opacity', '1');
    }).on('mouseleave', function(e) {

        $("#apple-pie").css('opacity', '0');
    });

     $(".show_pie").on('mouseenter', function(e) {
    });
});
