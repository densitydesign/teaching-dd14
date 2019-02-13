 if ($('#animals').length) {



     $.get("./frontend/img/page04/animals.svg", function (data) {
         var svg = new XMLSerializer().serializeToString(data.documentElement);
         $('#animals').append(svg);


         $('#animals svg > g').click(function () {
             $('.explain').slideUp();
             $('#animals svg > g').removeClass('is-hidden');
             var $this = $(this);

             var ID = $this.attr("id");



             $('#animals svg > g').not($this).addClass('is-hidden');


             $('.explain[data-animal="' + ID + '"]').slideDown();


             setTimeout(function () {
                 var scrollPos = $('.n4').scrollTop() + 1000

                 console.log(scrollPos);

                 $('.n4').animate({
                     scrollTop: scrollPos
                 }, 500);

             }, 0);

         });


     });

 }
