$(document).ready(function () {

    if ($('#queries').length) {

        console.log("init queries");

        $.get("./assets/js/viz/data/queries2.svg", function (data) {
            var svg = new XMLSerializer().serializeToString(data.documentElement);
            $('#queries-viz').append(svg);
            callback();
        });
    };


    function callback() {

        $.getJSON("./assets/js/viz/data/queries-woman.json", function (data) {
            var count = Object.keys(data.rows).length;
            $('svg #query1 > g').each(function (i) {

                if (i < count) {
                    console.log(data.rows[i].title);

                    var title = data.rows[i].title;
                    var source = data.rows[i].source;
                    var orientation = data.rows[i].orientation;
                    var url = data.rows[i].url;

                    $(this)
                        .attr('data-title', title)
                        .attr('data-url', url)
                        .attr('data-source', source)
                        .attr('data-orientation', orientation)
                }

            })
        });

        $.getJSON("./assets/js/viz/data/queries-man.json", function (data) {
            var count = Object.keys(data.rows).length;
            $('svg #query2 > g').each(function (i) {

                if (i < count) {
                    console.log(data.rows[i].title);

                    var title = data.rows[i].title;
                    var source = data.rows[i].source;
                    var orientation = data.rows[i].orientation;
                    var url = data.rows[i].url;

                    $(this)
                        .attr('data-title', title)
                        .attr('data-url', url)
                        .attr('data-source', source)
                        .attr('data-orientation', orientation)
                }

            })
        });



        $('svg #query1 > g, svg #query2 > g').click(function () {
            var url = $(this).data('url');
            window.open(url);
        })


        //
        //
        //        $('svg #query2 > g').each(function (i) {
        //            if (i < 47) {
        //                $(this).attr('data-orientation', "woman")
        //            } else {
        //                $(this).attr('data-orientation', "man")
        //            }
        //        })



        // HOVER ANIMATION

        $('svg #query1 > g, svg #query2 > g').hoverIntent(function () {
                var $this = $(this);
                var parent = $this.parent().attr('id');
                var source = '#tick #' + $this.data('source');
                var title = $(this).data('title');

                $('#query1 > g, #query2 > g').not($this).addClass('is-disabled');
                var orientation = $this.data('orientation');
                var orientation2 = '#tick #' + orientation;

                $('[id^="orientation"]').not('#orientation_' + parent + '_' + orientation).addClass('is-disabled');
                $('#tick > g').not(source + ', ' + orientation2).addClass('is-disabled');
                $('#queries .popup').addClass('is-visible').find("span").html(title);

            },
            function () {
                $('#query1 g, #query2 g, [id^="orientation"], #tick > g').removeClass('is-disabled');
                $('#queries .popup').removeClass('is-visible');

            });



        $('#queries').on('mousemove', function (evt) {
            var x = evt.pageX - $(this).offset().left + 10;
            var y = evt.pageY - $(this).offset().top + +20;

            $('#queries .popup').css({
                top: y,
                left: x
            });
        })




    }


});
