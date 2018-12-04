$(document).ready(function () {

    if ($('#news').length) {

        console.log("init queries");

        $.get("./assets/js/viz/data/news.svg", function (data) {
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


        $.getJSON("./assets/js/viz/data/imageDir.json", function (data) {

            console.log(data);


            var events = [];
            var icons = [];
            var movies = [];
            var people = [];
            var stock = [];



            for (var i = 0; i < 5; i++) {
                var obj = data.children[i];

                switch (obj.name) {
                    case 'events':
                        events = obj.children;
                        break;
                    case 'icons':
                        icons = obj.children;
                        break;
                    case 'movies':
                        movies = obj.children;
                        break;
                    case 'people':
                        people = obj.children;
                        break;
                    case 'stock':
                        stock = obj.children;
                        break;
                }
            }


            $('[data-id="images"]').each(function () {



                var ID = $(this).attr('id');

                console.log(ID);

                switch (ID) {
                    case 'events':
                        array = events;
                        break;
                    case 'icons':
                        array = icons;
                        break;
                    case 'movie':
                        array = movies;
                        break;
                    case 'people':
                        array = people;
                        break;
                    case 'stock':
                        array = stock;
                        break;
                }



                $(this).find('rect').each(function (i) {

                    var random = 'img' + Math.floor((Math.random() * 99999) + 1);

                    var x = $(this).attr('x');
                    var y = $(this).attr('y');
                    var width = $(this).attr('width');
                    var height = $(this).attr('height');

                    var path = 'dataset/viz04/' + array[i].path;

                    var img = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                    img.setAttributeNS(null, 'height', height);
                    img.setAttributeNS(null, 'width', width);
                    img.setAttributeNS('http://www.w3.org/1999/xlink', 'href', path);
                    img.setAttributeNS(null, 'x', x);
                    img.setAttributeNS(null, 'y', y);
                    img.setAttributeNS(null, 'visibility', 'visible');
                    img.setAttribute('filter', 'url(#grayscale)');
                    $('svg').append(img);


                })


            });


        });

        $('#news').on('mousemove', function (evt) {
            var x = evt.pageX - $(this).offset().left + 10;
            var y = evt.pageY - $(this).offset().top + 20;





            $('image').hoverIntent(function () {
                var img = $(this).attr('href');

                $('#news .popup').css({
                    top: y,
                    left: x
                });

                $('.popup').html('<img src="' + img + '" />').addClass('is-visible');


            }, function () {
                $('.popup').removeClass('is-visible');

            })


        })






    };

});
