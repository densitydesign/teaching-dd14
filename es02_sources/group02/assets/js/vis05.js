//positive
$("#positive").on('mouseenter', function(event) {
    $('.color1').removeClass('color1-hide');
    $('.color1').addClass('color1-show');
});
    $("#positive").on('mouseleave', function(event) {
    $('.color1').removeClass('color1-show');
    $('.color1').addClass('color1-hide');
});
//netrual
$("#netrual").on('mouseenter', function(event) {
  $('.color2').removeClass('color2-hide');
  $('.color2').addClass('color2-show')
});
  $("#netrual").on('mouseleave', function(event) {
  $('.color2').removeClass('color2-show');
  $('.color2').addClass('color2-hide');
});
//negative
$("#negative").on('mouseenter', function(event) {
  $('.color3').removeClass('color3-hide');
  $('.color3').addClass('color3-show')
});
  $("#negative").on('mouseleave', function(event) {
  $('.color3').removeClass('color3-show');
  $('.color3').addClass('color3-hide');
});

$("#government").on('mouseenter', function(event) {
  $(".color4").removeClass('color4-hide');
  $(".color4").addClass('color4-show')
});
  $(".color4").on('mouseleave', function(event) {
  $(".color4").removeClass('color4-show');
  $(".color4").addClass('color4-hide');
});

$("#generalstatement").on('mouseenter', function(event) {
  $(".color5").removeClass('color5-hide');
  $(".color5").addClass('color5-show')
});
  $(".color5").on('mouseleave', function(event) {
  $(".color5").removeClass('color5-show');
  $(".color5").addClass('color5-hide');
});

$("#organization").on('mouseenter', function(event) {
  $(".color6").removeClass('color6-hide');
  $(".color6").addClass('color6-show')
});
  $(".color6").on('mouseleave', function(event) {
  $(".color6").removeClass('color6-show');
  $(".color6").addClass('color6-hide');
});

$("#starcompany").on('mouseenter', function(event) {
  $(".color7").removeClass('color7-hide');
  $(".color7").addClass('color7-show')
});
  $(".color7").on('mouseleave', function(event) {
  $(".color7").removeClass('color7-show');
  $(".color7").addClass('color7-hide');
});

$("#supplier").on('mouseenter', function(event) {
  $(".color8").removeClass('color8-hide');
  $(".color8").addClass('color8-show')
});
  $(".color8").on('mouseleave', function(event) {
  $(".color8").removeClass('color8-show');
  $(".color8").addClass('color8-hide');
});
