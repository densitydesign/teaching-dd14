 if ($('#urbino').length) {



     $.get("./frontend/viz/page05/slideshow-new.svg", function (data) {
         var svg = new XMLSerializer().serializeToString(data.documentElement);
         $('#urbino').append(svg);


         $('#urbino circle').hover(function () {
             var text = $(this).data('text');

             $('.urbino-popup').html(text);
             $('.urbino-popup').addClass('is-visible');
         }, function () {
             $('.urbino-popup').removeClass('is-visible');
         });



         $('#urbino circle').click(function () {
             var $this = $(this);

             if ($(window).width() < 600) {
                 var text = $(this).data('text');
                 $('#urbino circle').removeClass("is-active");
                 $('.urbino-popup-mobile').html(text).slideDown();
                 $this.addClass("is-active");

             }
             //             $('.urbino-popup').addClass('is-visible');
         });





     });

 }
