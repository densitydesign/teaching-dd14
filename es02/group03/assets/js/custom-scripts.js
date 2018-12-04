$(document).ready(function() {

    $('.group-viz01').on('mouseenter', function(event){
      $('.group-viz01').addClass('faded');
      $(this).removeClass('faded');
    })

    $('.group-viz01').on('mouseleave', function(event){
      $('.group-viz01').removeClass('faded');
    })
//Q4 interective
    $('.group-viz02').addClass('faded');
$('.group-viz03').addClass('faded');
$('.group-viz02').on('mouseenter', function(event){
  $(this).removeClass('faded');
})

$('.group-viz04').on('mouseenter', function(event){
  $(this).removeClass('faded');
})

    $('.group-viz02').click(function(event){
      $('.group-viz05').addClass('faded');
      $('.group-viz04').addClass('faded');
      $(this).removeClass('faded');
$('.group-viz03').removeClass('faded');
    })
    $('.group-viz04').click(function(event){
      $('.group-viz03').addClass('faded');
      $('.group-viz02').addClass('faded');
      $(this).removeClass('faded');
$('.group-viz05').removeClass('faded');
    })

});
$(".nav > a").click(function() {
    $(".nav > a").removeClass("active");
    $(this).addClass("active");
})
$(function() {
    $(".navbar-nav li a").on('click', function() {
        $(".navbar-nav li a").css('text-decoration', 'none');
        $(this).css('text-decoration', 'underline');
    });

});

//Q3 interective
$('.group-3Qmx').addClass('faded');
$('.group-3Qmxc').addClass('faded');
$('.group-3Qusa').addClass('faded');
$('.group-3Qusac').addClass('faded');

$('.group-3Qmx').on('mouseenter', function(event){
  $(this).removeClass('faded');
})

$('.group-3Qusa').on('mouseenter', function(event){
  $(this).removeClass('faded');
})

$('.group-3Qc').on('mouseenter', function(event){
  $(this).removeClass('faded');
})

    $('.group-3Qmx').click(function(event){
      $('.group-3Qc').addClass('faded');
      $('.group-3Qcc').addClass('faded');
        $('.group-3Qusa').addClass('faded');
        $('.group-3Qusac').addClass('faded');
      $(this).removeClass('faded');
$('.group-3Qmxc').removeClass('faded');
    })

    $('.group-3Qusa').click(function(event){
      $('.group-3Qmx').addClass('faded');
      $('.group-3Qmxc').addClass('faded');
      $('.group-3Qc').addClass('faded');
      $('.group-3Qcc').addClass('faded');
      $(this).removeClass('faded');
$('.group-3Qusac').removeClass('faded');
    })

    $('.group-3Qc').click(function(event){
      $('.group-3Qmx').addClass('faded');
      $('.group-3Qmxc').addClass('faded');
      $('.group-3Qusa').addClass('faded');
      $('.group-3Qusac').addClass('faded');
      $(this).removeClass('faded');
$('.group-3Qcc').removeClass('faded');
    })

//Q8 interective
$('.n1').addClass('faded');
$('.c1').on('mouseenter', function(event){
  $('.n1').removeClass('faded');
  $(this).addClass('faded');
})
$('.n1').on('mouseenter', function(event){
  $('.c1').addClass('faded');
  $(this).removeClass('faded');
})
$('.c1').on('mouseleave', function(event){
  $('.n1').addClass('faded');
  $(this).removeClass('faded');
})

$('.n2').addClass('faded');
$('.c2').on('mouseenter', function(event){
  $('.n2').removeClass('faded');
  $(this).addClass('faded');
})
$('.n2').on('mouseenter', function(event){
  $('.c2').addClass('faded');
  $(this).removeClass('faded');
})
$('.c2').on('mouseleave', function(event){
  $('.n2').addClass('faded');
  $(this).removeClass('faded');
})

$('.n3').addClass('faded');
$('.c3').on('mouseenter', function(event){
  $('.n3').removeClass('faded');
  $(this).addClass('faded');
})
$('.n3').on('mouseenter', function(event){
  $('.c3').addClass('faded');
  $(this).removeClass('faded');
})
$('.c3').on('mouseleave', function(event){
  $('.n3').addClass('faded');
  $(this).removeClass('faded');
})

$('.n4').addClass('faded');
$('.c4').on('mouseenter', function(event){
  $('.n4').removeClass('faded');
  $(this).addClass('faded');
})
$('.n4').on('mouseenter', function(event){
  $('.c4').addClass('faded');
  $(this).removeClass('faded');
})
$('.c4').on('mouseleave', function(event){
  $('.n4').addClass('faded');
  $(this).removeClass('faded');
})

$('.n5').addClass('faded');
$('.c5').on('mouseenter', function(event){
  $('.n5').removeClass('faded');
  $(this).addClass('faded');
})
$('.n5').on('mouseenter', function(event){
  $('.c5').addClass('faded');
  $(this).removeClass('faded');
})
$('.c5').on('mouseleave', function(event){
  $('.n5').addClass('faded');
  $(this).removeClass('faded');
})

$('.n6').addClass('faded');
$('.c6').on('mouseenter', function(event){
  $('.n6').removeClass('faded');
  $(this).addClass('faded');
})
$('.n6').on('mouseenter', function(event){
  $('.c6').addClass('faded');
  $(this).removeClass('faded');
})
$('.c6').on('mouseleave', function(event){
  $('.n6').addClass('faded');
  $(this).removeClass('faded');
})
$('.n6').on('mouseleave', function(event){
  $('.c6').removeClass('faded');
  $(this).addClass('faded');
})

$('.n7').addClass('faded');
$('.c7').on('mouseenter', function(event){
  $('.n7').removeClass('faded');
  $(this).addClass('faded');
})
$('.n7').on('mouseenter', function(event){
  $('.c7').addClass('faded');
  $(this).removeClass('faded');
})
$('.c7').on('mouseleave', function(event){
  $('.n7').addClass('faded');
  $(this).removeClass('faded');
})
$('.n7').on('mouseleave', function(event){
  $('.c7').removeClass('faded');
  $(this).addClass('faded');
})

$('.n8').addClass('faded');
$('.c8').on('mouseenter', function(event){
  $('.n8').removeClass('faded');
  $(this).addClass('faded');
})
$('.n8').on('mouseenter', function(event){
  $('.c8').addClass('faded');
  $(this).removeClass('faded');
})
$('.c8').on('mouseleave', function(event){
  $('.n8').addClass('faded');
  $(this).removeClass('faded');
})

$('.n9').addClass('faded');
$('.c9').on('mouseenter', function(event){
  $('.n9').removeClass('faded');
  $(this).addClass('faded');
})
$('.n9').on('mouseenter', function(event){
  $('.c9').addClass('faded');
  $(this).removeClass('faded');
})
$('.c9').on('mouseleave', function(event){
  $('.n9').addClass('faded');
  $(this).removeClass('faded');
})
