$(document).ready(function () {


    $.get("./assets/js/viz/data/reddit.svg", function (data) {
        var svg = new XMLSerializer().serializeToString(data.documentElement);
        $('#reddit-viz').append(svg);
        callback();
    });


    function callback() {

        $('#reddit-viz #subreddit > g').hoverIntent(function () {

            $this = $(this);

            $('#reddit-viz #subreddit > g').not($this).toggleClass('is-hidden');

        })

    }








})
