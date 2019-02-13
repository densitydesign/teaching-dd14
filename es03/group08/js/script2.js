var planetSelected="";

$("#L2").click(function() {
  window.location.href="index.html#4thpage"
});

$("#goMars").click(function(event) {
  planetSelected="MARS";
  $("#earthbottom").fadeIn(1600);
    document.getElementById("infoS1").innerHTML=planetSelected;
    $(".here-mars").addClass("opacity1");
    $(".here-earth").addClass("opacity0");
    $(".confirm-mars").fadeIn(1600);
    $(".planetselection").addClass("slideup");
    $("#plus").fadeOut(700);
    $("#plusTxt").fadeOut(700);
    setTimeout(function(){
      $(".cardMars").addClass("fadein");
      $(".cardMars").removeClass("fadeout");
    },400);
    setTimeout(function(){
      $("#mars").addClass("slideupplanet");
    },800);
});
$("#goMoon").click(function(event) {
  planetSelected="MOON";
  $("#earthbottom").fadeIn(1600);
  document.getElementById("infoS1").innerHTML=planetSelected;
  $(".here-moon").addClass("opacity1");
  $(".here-earth").addClass("opacity0");
  $(".confirm-moon").fadeIn(1600);
  $(".planetselection").addClass("slideup");
  $("#plus").fadeOut(700);
  $("#plusTxt").fadeOut(700);
  setTimeout(function(){
    $(".cardMoon").addClass("fadein");
    $(".cardMoon").removeClass("fadeout");
  },400);
  setTimeout(function(){
    $("#moon").addClass("slideupplanetMoon");
  },800);
});

$('#plus').click(function() {
  $.fn.toggleAttrVal = function(attr, val1, val2) {
    var test = $(this).attr(attr);
    if ( test === val1) {
      $(this).attr(attr, val2);
      return this;
    }
    if ( test === val2) {
      $(this).attr(attr, val1);
      return this;
    }
    // default to val1 if neither
    $(this).attr(attr, val1);
    return this;
  };
  $("#sunSVG").fadeToggle(700);
  $("#plusr").toggleAttrVal('transform',"matrix(0.7071 0.7071 -0.7071 0.7071 331.3407 -575.1772)","");
    $(".planetselection").toggleClass("slideside")
    $(".hab-div").toggleClass("opacity1");
    $("#sunSVG").toggleClass("opacity1");
    // $(".planetselection").toggleClass("slideup");
});

$('#sunSVG').click(function() {

  $.fn.toggleOrange = function(attr, val1, val2) {
    var test = $(this).attr(attr);
    if ( test === val1) {
      $(this).attr(attr, val2);
      return this;
    }
    if ( test === val2) {
      $(this).attr(attr, val1);
      return this;
    }
    // default to val1 if neither
    $(this).attr(attr, val1);
    return this;
  };
  $.fn.toggleScale = function(css, val1, val2) {
    var test = $(this).attr(css);
    if ( test === val1) {
      $(this).css(css, val2);
      return this;
    }
    if ( test === val2) {
      $(this).css(css, val1);
      return this;
    }
    // default to val1 if neither
    $(this).css(css, val1);
    return this;
  };

  $('#sunSVG').toggleClass('scaleSun');
  $('#sunCircle').toggleOrange('fill','#f05a24','#faaf3b');
  $('.hab-txt1').toggleClass('hide');
  $('.hab-txt2').toggleClass('hide');
  $('.hab-CHZ').toggleClass('scaleCHZ');
});

$("#earthbottom").click(function() {
    $("#earthbottom").fadeOut(700);
    $(".confirm-mars").fadeOut(700);
    $(".confirm-moon").fadeOut(700);
    $("#plus").fadeIn(700);
    $("#plusTxt").fadeIn(700);

    if(planetSelected=="MARS"){

      document.getElementById("infoS1").innerHTML="";
      $(".here-mars").removeClass("opacity1");
      $(".here-earth").removeClass("opacity0");
      $(".planetselection").removeClass("slideup");
      // $(".planetselection").addClass("slidedown");
      setTimeout(function(){
        $(".cardMars").addClass("fadeout");
        $(".cardMars").removeClass("fadein");
      },400);
      setTimeout(function(){
        $("#mars").removeClass("slideupplanet");
      },800);
    }
    if(planetSelected=="MOON"){
      document.getElementById("infoS1").innerHTML="";
      $(".here-moon").removeClass("opacity1");
      $(".planetselection").removeClass("slideup");
      // $(".planetselection").addClass("slidedown");
      setTimeout(function(){
        $(".cardMoon").addClass("fadeout");
        $(".cardMoon").removeClass("fadein");
      },400);
      setTimeout(function(){
        $("#moon").removeClass("slideupplanetMoon");
      },800);
    }
});

$("#mars").click(function(event) {
  $(".here-earth").fadeIn();
  $("#moon").removeClass("rotation");
  $(".pdesc-moon").removeClass("slideptitle");
  $("#plinemoon").removeClass("extendline");

  $("#europa").removeClass("rotation");
  $(".pdesc-europa").removeClass("slideptitle");
  $("#plineeuropa").removeClass("extendline");

  $("#trappist").removeClass("rotation");
  $(".pdesc-trappist").removeClass("slideptitle");
  $("#plinetrappist").removeClass("extendline");

  $("#mars").toggleClass("rotation");
  $(".pdesc-mars").toggleClass("slideptitle");
  $("#plinemars").toggleClass("extendline");


  event.stopImmediatePropagation();
});
$("#moon").click(function(event) {
  $(".here-earth").fadeIn();
  $("#mars").removeClass("rotation");
  $(".pdesc-mars").removeClass("slideptitle");
  $("#plinemars").removeClass("extendline");

  $("#europa").removeClass("rotation");
  $(".pdesc-europa").removeClass("slideptitle");
  $("#plineeuropa").removeClass("extendline");

  $("#trappist").removeClass("rotation");
  $(".pdesc-trappist").removeClass("slideptitle");
  $("#plinetrappist").removeClass("extendline");

  $("#moon").toggleClass("rotation");
  $(".pdesc-moon").toggleClass("slideptitle");
  $("#plinemoon").toggleClass("extendline");

  event.stopImmediatePropagation();
});
$("#europa").click(function(event) {
  $(".here-earth").fadeToggle(700);
  $("#mars").removeClass("rotation");
  $(".pdesc-mars").removeClass("slideptitle");
  $("#plinemars").removeClass("extendline");

  $("#moon").removeClass("rotation");
  $(".pdesc-moon").removeClass("slideptitle");
  $("#plinemoon").removeClass("extendline");

  $("#trappist").removeClass("rotation");
  $(".pdesc-trappist").removeClass("slideptitle");
  $("#plinetrappist").removeClass("extendline");

  $("#europa").toggleClass("rotation");
  $(".pdesc-europa").toggleClass("slideptitle");
  $("#plineeuropa").toggleClass("extendline");

  event.stopImmediatePropagation();
});
$("#trappist").click(function(event) {
  $(".here-earth").fadeIn();
  $("#europa").removeClass("rotation");
  $(".pdesc-europa").removeClass("slideptitle");
  $("#plineeuropa").removeClass("extendline");

  $("#moon").removeClass("rotation");
  $(".pdesc-moon").removeClass("slideptitle");
  $("#plinemoon").removeClass("extendline");

  $("#mars").removeClass("rotation");
  $(".pdesc-mars").removeClass("slideptitle");
  $("#plinemars").removeClass("extendline");

  $("#trappist").toggleClass("rotation");
  $(".pdesc-trappist").toggleClass("slideptitle");
  $("#plinetrappist").toggleClass("extendline");

  event.stopImmediatePropagation();
});
