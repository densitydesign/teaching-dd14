$(document).ready(function () {

    $.get("./assets/js/viz/data/speaker/speaker.svg", function (data) {
        var svg = new XMLSerializer().serializeToString(data.documentElement);
        $('#speaker-viz').append(svg);
        callback()
    });


    function callback() {

        $.getJSON("./assets/js/viz/data/speaker/video.json", function (data) {

            var leng = Object.keys(data.video).length;


            $('#speaker-viz svg #video').find('circle').each(function (i, el) {


                if (i < leng) {
                    var remap = i;
                    var name = data.video[remap].title;
                    var url = data.video[remap].url;

                    $(this).attr("data-title", name).attr("data-url", url);

                }
            })


        });





        $.getJSON("./assets/js/viz/data/speaker/people.json", function (data) {

            var leng = Object.keys(data.people).length - 1;

            //            console.log(leng);

            $('#speaker-viz svg #views > g').each(function (i, el) {

                if (i < 15) {
                    var remap = i;
                    var name = data.people[remap].name;

                    $(this).attr("data-name", name);

                }
            })

            $('#speaker-viz svg #video > g').each(function (i, el) {

                if (i < 15) {
                    var remap = i;
                    var name = data.people[remap].name;

                    $(this).attr("data-name", name);

                }
            })

            $('#speaker-viz svg #people > g').each(function (i, el) {

                if (i < 15) {
                    var remap = leng - i;
                    var name = data.people[remap].name;

                    $(this).attr("data-name", name);

                }
            })

        })

        $.getJSON("./assets/js/viz/data/speaker/reaction.json", function (data) {

            var leng = Object.keys(data.reaction).length - 1

            $('#speaker-viz svg #people > g').each(function (i, el) {

                if (i < 15) {
                    var remap = leng - i;
                    var like = data.reaction[remap].like;
                    var dislike = data.reaction[remap].dislike;

                    $(this).attr("data-like", like).attr("data-dislike", dislike);

                }



            })

        })

        $('#speaker-viz svg #people > g').hoverIntent(function (evt) {

            $this = $(this);

            var name = $(this).data('name');
            var orientation;

            if (name == "Milo Yiannopoulus") {

                orientation = "antifeminism"

            } else {
                orientation = "pro feminism"
            }

            $('#speaker .orientation').toggleClass('is-visible').removeClass("pro feminism antifeminism").addClass(orientation).html(orientation);


            $('#speaker .reactions').toggleClass('is-visible');

            $('#speaker').on('mousemove', function (evt) {
                var x = evt.pageX - $(this).offset().left + 10;
                var y = evt.pageY - $(this).offset().top + +20;




                $('#speaker .orientation').css({
                    top: y,
                    left: x
                });
            })

            $('#speaker-viz svg #people > g').not($this).toggleClass('is-hidden');
            $('#speaker-viz svg #views > g, #speaker-viz svg #video > g ').not("[data-name='" + name + "']").toggleClass('is-hidden');

            var x, y;


            var like = $(this).data('like');
            var dislike = $(this).data('dislike');
            $('#speaker .reactions').find('.like').html(like);
            $('#speaker .reactions').find('.dislike').html(dislike);

        })



        $('svg #video circle').hoverIntent(function () {
            var $this = $(this);

            var title = $this.data('title');
            var url = $this.data('url');
            $('#speaker .popup').toggleClass('is-visible');
            $('#speaker .popup span').html(title);

            $('#speaker').on('mousemove', function (evt) {
                var x = evt.pageX - $(this).offset().left + 10;
                var y = evt.pageY - $(this).offset().top + +20;

                $('#speaker .popup').css({
                    top: y,
                    left: x
                });
            })


            $(this).click(function () {
                window.open(url, '_blank');
            })

        });



    }



    $('.svg svg g > g').hoverIntent(function () {
        var $this = $(this);

        var count = $this.data('count');

        console.log(count);


        $('#speaker .popup').toggleClass('is-visible');
        $('#speaker .popup span').html(title);

        $('#speaker').on('mousemove', function (evt) {
            var x = evt.pageX - $(this).offset().left + 10;
            var y = evt.pageY - $(this).offset().top + +20;

            $('#speaker .popup').css({
                top: y,
                left: x
            });
        })


        $(this).click(function () {
            window.open(url, '_blank');
        })

    });


    // ——————


    //    var videoEmma = getId("https://www.youtube.com/watch?v=p-iFl4qhBsE");
    //    var iframeEmma = '<iframe id="emma" height="315" src="//www.youtube.com/embed/' + videoEmma + '" frameborder="0" allowfullscreen></iframe>';
    //
    //    var videoOprah = getId("https://www.youtube.com/watch?v=fN5HV79_8B8");
    //    var iframeOprah = '<iframe height="315" src="//www.youtube.com/embed/' + videoOprah + '" frameborder="0" allowfullscreen></iframe>';
    //
    //    var videoMichelle = getId("https://www.youtube.com/watch?v=SJ45VLgbe_E");
    //    var iframeMichelle = '<iframe height="315" src="//www.youtube.com/embed/' + videoMichelle + '" frameborder="0" allowfullscreen></iframe>';
    //
    //    $('.row_video[data-actor="Emma Watson"]').html(iframeEmma);
    //    $('.row_video[data-actor="Oprah Winfrey"]').html(iframeOprah);
    //    $('.row_video[data-actor="Michelle Obama"]').html(iframeMichelle);
    //
    //    ytplayer = document.getElementById("emma");
    //    var yourVariable = ytplayer.getCurrentTime() || 0;
    //    console.log(yourVariable);







    //    $.get("./assets/js/viz/data/speaker/second/emma-topic.svg", function (data) {
    //
    //
    //
    //        var svg = new XMLSerializer().serializeToString(data.documentElement);
    //        $('#emma').append(svg);
    //
    //
    //    });
    //
    //
    //    $.get("./assets/js/viz/data/speaker/second/oprah-topic.svg", function (data) {
    //        var svg = new XMLSerializer().serializeToString(data.documentElement);
    //        $('#oprah').append(svg);
    //
    //    });
    //
    //    $.get("./assets/js/viz/data/speaker/second/michelle-topic.svg", function (data) {
    //        var svg = new XMLSerializer().serializeToString(data.documentElement);
    //        $('#michelle').append(svg);
    //
    //    });
    //
    //
    //
    //
    //
    //
    //
    //    function getId(url) {
    //        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    //        var match = url.match(regExp);
    //
    //        if (match && match[2].length == 11) {
    //            return match[2];
    //        } else {
    //            return 'error';
    //        }
    //    }


    $.get("./assets/js/viz/data/speaker/second/second-new.svg", function (data) {

        var svg = new XMLSerializer().serializeToString(data.documentElement);
        $('.speaker3-viz .svg').append(svg);

        $('.speaker3-viz .svg svg g > g').hoverIntent(function () {
            var $this = $(this);

            var count = $this.data('count');

            console.log(count);


            $('.counter').addClass('is-visible');
            $('.counter').html("~" + count + " words");

            $('#speaker3').on('mousemove', function (evt) {
                var x = evt.pageX - $(this).offset().left + 10;
                var y = evt.pageY - $(this).offset().top + +20;

                $('.counter').css({
                    top: y,
                    left: x
                });
            })

        }, function () {
            $('.counter').removeClass('is-visible');

        });



    });






});
