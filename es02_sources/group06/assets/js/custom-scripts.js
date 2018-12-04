let counter = 1;

function changeImage(direction) {
	let image = document.getElementById('image');
	
	if(direction == 'prev') {
		counter--;
		if(counter == 0) {
			counter = 5;
		}
	} else if (direction == 'next') {
		counter--;
		if(counter == 6) {
			counter = 1;
		}
	}
	
	image.src = counter + '.jpg';
}


$('#right-link').hide(500)
$('#left-link').hide(500)

$('#right-btn').click(function(){
    $('#right-link').toggle(500)
})

$('#left-btn').click(function(){
    $('#left-link').toggle(500)
})


$('#Gen-01').show(10)
$('#Gen-02').hide(10)
$('#Gen-03').hide(10)
$('#Gen-04').hide(10)
$('#Gen-05').hide(10)
$('#Com-01').show(10)
$('#Com-02').hide(10)
$('#Com-03').hide(10)
$('#Com-04').hide(10)
$('#Com-05').hide(10)

$(".buttons-viz03.button button").click(function(event){
	$(".buttons-viz03.button button").removeClass("clicked");
	$(this).addClass("clicked");
})
$(".buttons-viz03.button-2 button").click(function(event){
	$(".buttons-viz03.button-2 button").removeClass("clicked");
	$(this).addClass("clicked");
})

$('.button1').click(function(){
    $('#Gen-01').fadeIn(500)
	$('#Gen-02').fadeOut(500)
	$('#Gen-03').fadeOut(500)
	$('#Gen-04').fadeOut(500)
	$('#Gen-05').fadeOut(500)
})

$('.button2').click(function(){
    $('#Gen-02').fadeIn(500)
	$('#Gen-01').fadeOut(500)
	$('#Gen-03').fadeOut(500)
	$('#Gen-04').fadeOut(500)
	$('#Gen-05').fadeOut(500)
})

$('.button3').click(function(){
    $('#Gen-03').fadeIn(500)
	$('#Gen-02').fadeOut(500)
	$('#Gen-01').fadeOut(500)
	$('#Gen-04').fadeOut(500)
	$('#Gen-05').fadeOut(500)
})

$('.button4').click(function(){
    $('#Gen-04').fadeIn(500)
	$('#Gen-02').fadeOut(500)
	$('#Gen-01').fadeOut(500)
	$('#Gen-03').fadeOut(500)
	$('#Gen-05').fadeOut(500)
})

$('.button5').click(function(){
    $('#Gen-05').fadeIn(500)
	$('#Gen-01').fadeOut(500)
	$('#Gen-03').fadeOut(500)
	$('#Gen-04').fadeOut(500)
	$('#Gen-02').fadeOut(500)
})

$('.button11').click(function(){
    $('#Com-01').fadeIn(500)
	$('#Com-05').fadeOut(500)
	$('#Com-03').fadeOut(500)
	$('#Com-04').fadeOut(500)
	$('#Com-02').fadeOut(500)
})

$('.button22').click(function(){
    $('#Com-02').fadeIn(500)
	$('#Com-05').fadeOut(500)
	$('#Com-03').fadeOut(500)
	$('#Com-04').fadeOut(500)
	$('#Com-01').fadeOut(500)
})

$('.button33').click(function(){
    $('#Com-03').fadeIn(500)
	$('#Com-05').fadeOut(500)
	$('#Com-01').fadeOut(500)
	$('#Com-04').fadeOut(500)
	$('#Com-02').fadeOut(500)
})

$('.button44').click(function(){
    $('#Com-04').fadeIn(500)
	$('#Com-05').fadeOut(500)
	$('#Com-03').fadeOut(500)
	$('#Com-01').fadeOut(500)
	$('#Com-02').fadeOut(500)
})

$('.button55').click(function(){
    $('#Com-05').fadeIn(500)
	$('#Com-01').fadeOut(500)
	$('#Com-03').fadeOut(500)
	$('#Com-04').fadeOut(500)
	$('#Com-02').fadeOut(500)
})

$(document).ready(function() {
  $('.zoom').magnify();
});

/* scripts for vizualization 05 */
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

