$('.pulsante1').click(function () {
    var id = $(this).attr('id')
    // i.e. #genre
    console.log(id);
    $('.image-question05').removeClass("shown");
	$('#img-' + id).addClass("shown");
})



$('#layer1').click(function () {
    var id = $(this).attr('id')
    // i.e. #genre
    console.log(id);

    $('svg#1').find('#' + id).toggleClass('is-active')
})

