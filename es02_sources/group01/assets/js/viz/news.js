$(document).ready(function () {

    if ($('#news').length) {

        console.log("init queries");

        $.get("./assets/js/viz/data/news02.svg", function (data) {
            var svg = new XMLSerializer().serializeToString(data.documentElement);
            $('#news-viz').append(svg);
            callback();
        });


    }


    function callback() {

        $('#news-viz svg #flux > g').hoverIntent(function () {
            $this = $(this);

            $('#news-viz svg #flux g').not($this).addClass('is-hidden');



        }, function () {
            $('#news-viz svg #flux g').removeClass('is-hidden');
        })



        // ------

        var images = 35;

        $('#images > g').each(function (i) {

            $(this).attr('data-image', images - i);

        });

        $('#images > g').click(function () {

            var file = $(this).data('image');


            $.get("./assets/js/viz/data/news/" + file + ".svg", function (data) {
                var svg = new XMLSerializer().serializeToString(data.documentElement);
                $('.popup').html(svg);
                $('.popup').addClass('is-visible');



            });


        })


        $('.popup').click(function () {
            $(this).removeClass('is-visible');
        })




        //
        //        $('#news').on('mousemove', function (evt) {
        //            var x = evt.pageX - $(this).offset().left + 10;
        //            var y = evt.pageY - $(this).offset().top + 20;
        //
        //            $('#news .popup').css({
        //                top: y,
        //                left: x
        //            });
        //        })






    };

});
