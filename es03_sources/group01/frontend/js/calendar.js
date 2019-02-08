 if ($('#animals').length) {



     $.get("./frontend/img/page01/calendar.svg", function (data) {
         var svg = new XMLSerializer().serializeToString(data.documentElement);
         $('#calendar').append(svg);

         $("#calendar svg [id*='x32']").hover(function () {

             console.log($(window).width());

             if ($(window).width() > 600) {

                 var $this = $(this),
                     text = $this.data("text");

                 $(".calendarpopup").addClass("is-visible").html(text);

                 $(this).addClass("is-hover");
                 $("#calendar svg [id*='x32']").not($this).addClass("is-disabled");
             }
         }, function () {
             $("#calendar svg [id*='x32']").removeClass("is-disabled is-hover");
             $(".calendarpopup").removeClass("is-visible");
         });



         $(document).on("mousemove", function (event) {
             $(".calendarpopup").css({
                 left: event.pageX + 10,
                 top: event.pageY + 10
             });
         });



         $("#calendar svg [id*='x32']").click(function () {

             console.log("click");

             if ($(window).width() < 600) {

                 console.log("mobile");

                 var $this = $(this),
                     text = $this.data("text");

                 $(".calendarpopup-mobile").html(text).slideDown();

                 $(this).addClass("is-hover");
                 $("#calendar svg [id*='x32']").not($this).addClass("is-disabled");

             }

         });






     })

 }
