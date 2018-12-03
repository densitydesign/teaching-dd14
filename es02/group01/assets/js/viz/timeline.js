$(document).ready(function () {
    if ($('#timeline').length) {

        $.get("./assets/js/viz/data/timeline.svg", function (data) {
            var svg = new XMLSerializer().serializeToString(data.documentElement);
            $('#timeline-viz').append(svg);
            callback();
        });


        function callback() {


            $('#timeline-viz svg #box > g').hover(function () {
                $this = $(this);
                if ($this.hasClass('is-disabled')) {
                    $this.removeClass('is-disabled').attr('data-disabled', 1);
                }

                $('#timeline-viz svg #box > g').not($this).addClass('is-hidden');
            }, function () {
                $('#timeline-viz svg #box > g').removeClass('is-hidden ');

                $disabled = $('#timeline-viz svg #box > g[data-disabled="1"]');
                $disabled.addClass('is-disabled').removeAttr('data-disabled');

            })


            $('#timeline-viz svg #box > g').click(function () {


                if ($(this).hasClass('is-active')) {

                    $('#timeline-viz svg #box > g').removeClass('is-hidden is-disabled is-active')
                    $('.events').slideUp();

                } else {



                    $this = $(this);
                    var ID = '#' + $this.attr('id') + '.events';
                    console.log(ID);

                    $('#timeline-viz svg #box > g').addClass('is-disabled').removeAttr('data-disabled');
                    $this.removeClass('is-hidden is-disabled is-active legend').addClass('is-active');

                    $('.events').slideUp();
                    $(ID).slideDown();

                }


                if ($(this).attr('id') == "activities") {

                    $('#timeline-viz svg').addClass('is-hidden');
                    $('#viz2').addClass('is-visible');

                }



            })



            $('.back h1').click(function () {

                $('#timeline-viz svg g').removeClass('is-hidden is-disabled is-active')
                $('#timeline-viz svg').removeClass('is-hidden');
                $('#viz2').removeClass('is-visible');

            });








        };



        // ————————————————————

        $.get("./assets/js/viz/data/timeline2-new.svg", function (data) {
            var svg = new XMLSerializer().serializeToString(data.documentElement);
            $('#timeline-viz2').append(svg);
            callback2();
        });


        function callback2() {

            $('#timeline-viz2 svg > g[data-id="campaign"]').hover(function () {
                $this = $(this);
                $('#timeline-viz2 svg g[data-id="campaign"], #header2').not($this).addClass('is-hidden');
            }, function () {
                $('#timeline-viz2 svg > g, #header2').removeClass('is-hidden');


            })


        }







    }
});
