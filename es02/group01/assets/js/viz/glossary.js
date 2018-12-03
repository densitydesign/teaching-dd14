/* global $ */
/* global document */

$(document).ready(function () {

    $.get("./assets/js/viz/data/glossary/heatmap.svg", function (data) {
        var svg = new XMLSerializer().serializeToString(data.documentElement);
        $('#glossary-viz2 #viz #glossary').append(svg);

        glossary();

    });


    $.get("./assets/js/viz/data/glossary/legenda.svg", function (data) {
        var svg = new XMLSerializer().serializeToString(data.documentElement);
        $('#glossary-viz2 #viz #legend').prepend(svg);



    });


    function glossary() {


        $('#tagcloud span').each(function (i, el) {

            var count = $(this).data('count');
            var size = map(count, 0, 2164, 14, 72);

            console.log(size);

            $(this).css({
                'font-size': size + 'px'
            }).append("<sup> " + count + "</sup>")





        })









        $.getJSON("./assets/js/viz/data/glossary/glossary.json", function (data) {

            $('#glossary-viz2 svg #words > g').each(function (i, el) {

                var word = data.glossary[i].Word

                $(el).attr('data-word', word)

            })




            $.getJSON("./assets/js/viz/data/glossary/data.json", function (data) {




                // LOAD FIRST TOPIC

                var dataset = []

                $.each(data.rows, function (i, v) {
                    if (v.Topic == "Blue Pill Hell") {
                        dataset.push(v)
                        return;
                    }
                });

                var category = "Blue Pill Hell";

                var dataset = []
                $.each(data.rows, function (i, v) {
                    if (v.Topic == category) {
                        dataset.push(v)
                        return;
                    }
                });

                var maximum = getMax(dataset, "Count");

                var legendCount = Math.round(maximum / 5);

                $('.legend-text span').each(function (i, el) {
                    $(this).html(legendCount * i)
                })


                $.each(dataset, function (i, v) {
                    var word = v.Word;
                    var value = v.Count;

                    var element = $('svg #words > g[data-word="' + word + '"]')

                    //                    console.log(element);
                    var countMapped = map(value, 0, maximum, 0, 1)

                    //                console.log(word, countMapped);
                    var color = '#FF3502';
                    var rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) +
                        ',' + parseInt(color.slice(-4, -2), 16) +
                        ',' + parseInt(color.slice(-2), 16) +
                        ',' + countMapped + ')';


                    element.addClass('is-active').find('rect.st1').css('fill', rgbaCol);
                });

                // CLICK TO CHANGE


                $('#topics li').click(function () {

                    $('#topics li').removeClass('is-active');

                    $(this).addClass('is-active');

                    $('svg #words > g').removeClass('is-active').find('rect.st1').removeAttr('style');

                    var category = $(this).data('category');

                    var dataset = []
                    $.each(data.rows, function (i, v) {
                        if (v.Topic == category) {
                            dataset.push(v)
                            return;
                        }
                    });

                    var maximum = getMax(dataset, "Count");


                    $.each(dataset, function (i, v) {
                        var word = v.Word;
                        var value = v.Count;

                        var element = $('svg #words > g[data-word="' + word + '"]')

                        var countMapped = map(value, 0, maximum, 0, 1)

                        //                console.log(word, countMapped);
                        var color = '#FF3502';
                        var rgbaCol = 'rgba(' + parseInt(color.slice(-6, -4), 16) +
                            ',' + parseInt(color.slice(-4, -2), 16) +
                            ',' + parseInt(color.slice(-2), 16) +
                            ',' + countMapped + ')';

                        //                        console.log(element.closest('.st1'));
                        element.addClass('is-active').find('rect.st1').css('fill', rgbaCol);
                    });

                    var legendCount = Math.round(maximum / 5);

                    $('.legend-text span').each(function (i, el) {
                        $(this).html(legendCount * i)
                    })
                })




                // ——————
                $('svg #words > g, #tagcloud span').click(function () {

                    $('#overlay, #terms').addClass('is-visible');
                    var target = $(this).data('word');

                    console.log(target);

                    var scrollPos = $('#terms section[data-id="' + target + '"]').position().top;

                    setTimeout(function () {
                        $('#terms').animate({ // animate your right div
                            scrollTop: scrollPos // to the position of the target 
                        }, 400);

                    }, 400)



                })

                $('#overlay').click(function () {
                    $('#overlay, #terms').removeClass('is-visible');
                    $('#terms').animate({ // animate your right div
                        scrollTop: 0 // to the position of the target 
                    }, 0);
                })



            })


        });
    }



    $('#glossary-viz2 #topics li').hoverIntent(function (evt) {

        $this = $(this);

        var description = $(this).data('description');

        $('#glossary-viz2 .popup').toggleClass('is-visible');
        $('#glossary-viz2 .popup').find('span').html(description);

    })



    $('#glossary-viz2 #topics li').hoverIntent(function () {
        var $this = $(this);

        var description = $(this).data('description');

        $('#glossary-viz2 .popup').addClass('is-visible');
        $('#glossary-viz2 .popup').find('span').html(description);

        $('#glossary-viz2').on('mousemove', function (evt) {
            var x = evt.pageX - $(this).offset().left + 10;
            var y = evt.pageY - $(this).offset().top + +20;

            $('#glossary-viz2 .popup').css({
                top: y,
                left: x
            });
        })

    }, function () {
        $('#glossary-viz2 .popup').removeClass('is-visible');
    });







})




// GET MAX VALUE IN ARRAY
function getMax(arr, prop) {
    var max;
    for (var i = 0; i < arr.length; i++) {
        if (!max || parseInt(arr[i][prop]) > parseInt(max[prop]))
            max = arr[i];
    }
    console.log(max[prop]);
    return max[prop];
}

function map(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}
