$(document).ready(function () {

    if ($('#meme').length) {



        $.get("./assets/js/viz/data/meme/meme2.svg", function (data) {
            var svg = new XMLSerializer().serializeToString(data.documentElement);
            $('#meme-viz').append(svg);
            callback();
        });

    }




    function callback() {


        $('#meme .overlay').click(function (e) {

            $(this).addClass('disable');

            $this = $('#meme-viz');

            if ($this.hasClass('zoom-out')) {
                console.log("ce");

            } else {


                $this.addClass('zoom-out');
                $this.css({
                    'transform': 'scale(5)',
                    'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
                });

                $('#meme')
                    .on('mousemove', function (e) {
                        $(this).children('#meme-viz.zoom-out').css({
                            'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%'
                        });
                    })


            };
        })


        $('#meme #bg rect').click(function (e) {



            $this = $('#meme-viz');

            if ($this.hasClass('zoom-out')) {

                $('#meme .overlay').removeClass('disable');

                console.log($this);

                $this.removeClass('zoom-out');
                $this.css({
                    'transform': 'scale(1)'
                });

            }



        })






        $('#meme-viz image').click(function (e) {

            $this = $('#lightbox');

            $this.addClass('is-visible');

            var src = $(this).attr('xlink:href');

            $this.html('<img src="' + src + '">')



        })


        $('#lightbox').click(function (e) {

            $(this).removeClass('is-visible');

        });



        // tiles set u



    }

});
