$(document).ready(function () {

    if ($('#research').length) {

        $.get("./assets/images/roadmap.svg", function (data) {
            var svg = new XMLSerializer().serializeToString(data.documentElement);
            $('#research').append(svg);



            $('#research #links > g').click(function () {
                var url = $(this).attr("id");
                url = url.replace('_2_', '');

                window.open('./' + url);

            })


        });



    }

});
