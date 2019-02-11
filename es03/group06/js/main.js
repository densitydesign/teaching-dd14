

/*** discover link ***/

$(document).ready(function(){
  $("#seemore").slideUp();
  $("#seemore1").slideUp();
  $("#seemore2").slideUp();

  $("#flip").click(function(){
    $("#seemore").slideDown("slow");
  });
  $("#meno1").click(function(){
    $("#seemore").slideUp("slow");
  });
  $("#flip1").click(function(){
    $("#seemore1").slideDown("slow");
  });
  $("#meno2").click(function(){
    $("#seemore1").slideUp("slow");
  });
  $("#flip2").click(function(){
    $("#seemore2").slideDown("slow");
  });
  $("#meno3").click(function(){
    $("#seemore2").slideUp("slow");
  });
  /*** effetto fading sui link AJAX ***/
  $("nav a").on("click", function(event){
    event.preventDefault()
  
    const href = $(this).attr("href")
  
    window.history.pushState(null, null, href)
  
    $.ajax({
      url: href,
      success: function(data) {
        $("main").fadeOut(400, function(){
          const newPage = $(data).filter("main").html()
  
          $("main").html(newPage)
  
          $("main").fadeIn(400)
        })
      }
    })
  })
  
  /**** Scrolling smooth nella pagina ****/
  
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
});




