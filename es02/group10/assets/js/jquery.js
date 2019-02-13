$('[id^="node"').hover(function () {
        $(this).find('text').addClass('is-active')
    },
    function () {
        $('text').removeClass('is-active')
    })


$('[id^="blueballwords"').hover(function () {
        $(this).find('text').addClass('is-active')
    },
    function () {
        $('text').removeClass('is-active')
    })





$('.pulsante1').click(function () {
    var id = $(this).attr('id')
    // i.e. #genre
    console.log(id);
    $('.image-question09').removeClass("shown");
    $('#img-' + id).addClass("shown");
})

$('#layer1').click(function () {
    var id = $(this).attr('id')
    // i.e. #genre
    console.log(id);

    $('svg#1').find('#' + id).toggleClass('is-active')

})

$("circle").hover(function () {
    $("circle").toggleClass("changeColorClass")
})
