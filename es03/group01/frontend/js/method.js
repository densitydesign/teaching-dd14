var gameScreen = $('body')
var newWidth = 500;
var newHeight = 0;

function spawnShip(game) {
    var windowWidth = $(window).width()
    var windowHeight = $(window).height()
    var randWidth = Math.floor(Math.random() * windowWidth - 100)
    var randHeight = Math.floor(Math.random() * windowHeight)
    var angle2 = Math.floor(Math.random() * windowHeight);

    var ship = $(document.createElement('div'))
    ship.addClass('circle')
    ship.css({
        top: randHeight,
        transform: 'rotate(' + angle2 + 'deg)',
        left: randWidth,
        position: 'fixed',
        height: newHeight,
        width: newWidth,
    })
    ship.animate({
        'background-position-x': '-100%',
        'background-position-y': '0%',
    }, 500)

    game.append(ship)
}

//setInterval(function () {
//    spawnShip(gameScreen)
//}, 100)


// Replace with your view ID.
var VIEW_ID = '188808903';

// Query the API and print the results to the page.
function queryReports() {
    gapi.client.request({
        path: '/v4/reports:batchGet',
        root: 'https://analyticsreporting.googleapis.com/',
        method: 'POST',
        body: {
            reportRequests: [{
                viewId: VIEW_ID,
                dateRanges: [{
                    startDate: '7daysAgo',
                    endDate: 'today'
                        }],
                dimensions: [{
                    name: "ga:source"
                        }],
                metrics: [{
                    alias: "Users",
                    expression: "ga:users"
                        }, {
                    alias: "Session",
                    expression: "ga:sessionDuration"
                        }]

                    }]
        }
    }).then(displayResults, console.error.bind(console));
}

function displayResults(response) {
    $('.authorization').addClass("is-hidden");

    var formattedJson = response.result.reports;
    var data = formattedJson[0]["data"];


    console.log(data);

    var shareUser = 0,
        totalUser = 0,
        directUser = 0;


    for (var k in data["rows"]) {

        console.log(data["rows"][k]["dimensions"]);


        if (data["rows"][k]["dimensions"][0] === "share") {
            console.log(parseInt(data["rows"][k]["metrics"][0]["values"]));
            shareUser += parseInt(data["rows"][k]["metrics"][0]["values"]);
        } else if (data["rows"][k]["dimensions"][0] === "(direct)") {

            directUser += parseInt(data["rows"][k]["metrics"][0]["values"]);

        }
    }

    totalUser = parseInt(data["totals"][0]["values"]);

    $("#pre-user span.total-users").html(totalUser);
    //    $(".since").html(since);
    totalUser = totalUser - shareUser - directUser;

    data["rows"]

    console.log(directUser, shareUser, totalUser);

    makeUserViz(directUser, shareUser, totalUser);


}

//
//
//
////$.getJSON("https://www.googleapis.com/analytics/v3/data/ga?ids=ga%3A188808903&start-date=30daysAgo&end-date=today&metrics=ga%3Ausers%2Cga%3AsessionDuration&dimensions=ga%3Asource%2Cga%3Amedium&access_token=ya29.GlyhBvxcg-yZ9cZUnStxaepnpvoG_Sxg8_E6WyW3AL2FkIhUobI34IxxFUOWE8Kg_5akJxjWhJXynzVe_sYGR2RZq85yJJeczRmh8Olse0oeI1cYtp8AYXsE7J6Gkw")
////    .then(function (data) {
////
////
////     
////        var since = data["query"]["start-date"];
////
////
//for (var k in data["rows"]) {
//    if (data["rows"][k][0] === "share") {
//
//        shareUser += parseInt(data["rows"][k][2]);
//    } else if (data["rows"][k][0] === "(direct)") {
//
//        directUser += parseInt(data["rows"][k][2])
//
//    }
//}
//
//totalUser = parseInt(data["totalsForAllResults"]["ga:users"]);
//
//$("#pre-user span.total-users").html(totalUser);
//$(".since").html(since);
//
//totalUser = totalUser - shareUser - directUser;
//
//data["rows"]
//
//console.log(directUser, shareUser, totalUser);
//
//makeUserViz(directUser, shareUser, totalUser);
////
////    });


function makeUserViz(directUser, shareUser, totalUser) {


    var margin = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    var width = $('#users').width() - margin.right,
        height = 100 - margin.top - margin.bottom;

    var svg = d3.select("#users")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    /* Data in strings like it would be if imported from a csv */

    var data = [
        {
            name: "Users",
            year: "2006",
            redDelicious: shareUser,
            mcintosh: totalUser,
            oranges: directUser
    }
];


    var parse = d3.time.format("%Y").parse;

    // Transpose the data into layers
    var dataset = d3.layout.stack()(["redDelicious", "mcintosh", "oranges"].map(function (fruit) {
        return data.map(function (d) {
            return {
                x: parse(d.year),
                y: +d[fruit],
                name: d.name
            };
        });
    }));


    // Set x, y and colors
    var x = d3.scale.ordinal()
        .domain(dataset[0].map(function (d) {
            console.log(d.name);
            return d.name;
        }))
        .rangeRoundBands([10, height - 10], 0.02);

    var y = d3.scale.linear()
        .domain([0, d3.max(dataset, function (d) {
            return d3.max(d, function (d) {
                return d.y0 + d.y;
            });
        })])
        .range([width, 0]);




    var colors = ["#FF6D4A", "#5276F7", "#44B582"];


    // Define and draw axes
    var yAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");


    var xAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(5)
        .tickSize(-width, 0, 0)
        .tickFormat(function (d) {
            return d
        });




    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(0," + width + ")")
        .call(xAxis);


    // Create groups for each series, rects for each segment 
    var groups = svg.selectAll("g.cost")
        .data(dataset)
        .enter().append("g")
        .attr("class", "cost")
        .style("fill", function (d, i) {
            return colors[i];
        });


    var iterator = 0;
    var iterator2 = 0;

    var text = groups.selectAll("rect")
        .data(function (d) {
            return d;
        }).enter()
        .append("text").attr("y", function (d) {
            iterator2++;
            //            switch (iterator2) {
            //                case 1:
            //                    return height + 25;
            //                case 2:
            //                    return height + 10;
            //                case 3:
            //                    return height - 5;
            //            }

            return height;

        }).attr("x", function (d) {
            return y(d.y0 + d.y);
        }).text(function (d) {
            iterator++;

            switch (iterator) {
                case 1:
                    return "Shared Link — " + d.y;
                case 2:
                    return "Poster Link — " + d.y;
                case 3:
                    return "Direct* Link — " + d.y;
            }
        })
        .attr("font-size", "12px");

    var rect = groups.selectAll("rect")
        .data(function (d) {
            return d;
        })
        .enter()
        .append("rect")
        .attr("y", function (d) {
            return x(d.x);
        })
        .attr("x", function (d) {
            return y(d.y0 + d.y);
        })
        .attr("width", function (d) {
            return y(d.y0) - y(d.y0 + d.y);
        })
        .attr("height", x.rangeBand())


    $('#pre-user, #user').addClass("is-visible");

}
