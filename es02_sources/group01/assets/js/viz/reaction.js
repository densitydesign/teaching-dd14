$(document).ready(function () {

    $.get("./assets/images/protocols/howto-06.1.svg", function (data) {
        var svg = new XMLSerializer().serializeToString(data.documentElement);
        $('#howto').append(svg);
    });



    // IN UN MONDO FANTASTICO DI ANIMAZIONI
    var t = d3.transition()
        .duration(500)
        .ease(d3.easeLinear);

    let margin = 50
    let width = $(window).width() - margin * 3
    let height = 600

    let force = 1

    let dimMin = 3
    let dimMax = 50

    let svg = d3.select("#reaction-viz")
        .append("svg")
        .attr("width", width + margin)
        .attr("height", height + margin / 2)
        .style("background", "#1A2029")


    let x = d3.scaleLinear()
        .domain([0, 150000])
        .range([0 + margin, width])

    let y = d3.scaleLinear()
        .domain([0, 700000])
        .range([height, margin])

    let size = d3.scaleSqrt()
        .range([dimMin, dimMax])

    let xScale = d3.fisheye.scale(d3.scaleLog)
        .domain([0, 150000])
        .range([0 + margin, width])

    let yScale = d3.fisheye.scale(d3.scaleLinear)
        .domain([0, 700000])
        .range([height, margin])

    let xAxis = d3.axisBottom(x)
        .tickFormat(d3.format(".2s"))
        .ticks(10)
        .tickSize(-height + margin)

    let yAxis = d3.axisLeft(y)
        .ticks(7)
        .tickFormat(d3.format(".2s"))
        .tickSize(-width + margin)
        .ticks(10)

    let colors = d3.scaleOrdinal()
        .domain(["feminist", "antifeminist", "neutral"])
        .range(["#FF3502", "#4A74FF", "#F2D51C"])


    d3.csv("./assets/js/viz/data/reactions.csv", function (error, data) {
        if (error) throw error

        xScale.domain(d3.extent(data, d => +d.Comments))

        size.domain(d3.extent(data, d => +d.Views))

        svg.append("rect")
            .attr("class", "background")
            .attr("width", width)
            .attr("height", height)

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + (height) + ")")
            .call(xAxis)

        svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + margin + ",0)")
            .call(yAxis)


        let circles = svg.append("g")
            .selectAll(".circle")
            .data(data)
            .enter()
            .append("circle")
            .style("fill", d => colors(d.Orientamento))
            .attr("r", d => size(d.Views))
            .attr("cx", d => x(d.Comments))
            .attr("cy", d => y(d.Reactions))
            .attr("data-url", d => d.URL)
            .attr("data-views", d => d.Views)
            .attr("data-title", d => d.Title)
            .attr("data-orientation", d => d.Orientamento)
            .attr("data-like", d => d.Like)
            .attr("data-comments", d => d.Comments)
            .attr("data-reaction", d => d.Reactions)

            .style("opacity", "0.6")
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut)

        let point = svg.append("g")
            .selectAll(".circle")
            .data(data)
            .enter()
            .append("circle")
            .style("fill", '#FFFFFF')
            .attr("r", 1)
            .attr("cx", d => x(d.Comments))
            .attr("cy", d => y(d.Reactions))
            .attr("class", "point");

        svg.append("text")
            .attr("class", "x axis-label")
            .attr("text-anchor", "end")
            .attr("x", width - 6)
            .attr("y", height - 6)
            .text("COMMENTS");

        svg.append("text")
            .attr("class", "y axis-label")
            .attr("text-anchor", "end")
            .attr("x", -margin - 6)
            .attr("y", margin + 6)
            .attr("dy", ".75em")
            .attr("transform", "rotate(-90)")
            .text("REACTIONS");


        function handleMouseOver(d, i) {
            d3.select(this).style("opacity", 1);
        }

        function handleMouseOut(d, i) {
            d3.select(this).style("opacity", 0.6);
        }

        svg.on("mousemove", function () {

            let mouse = d3.mouse(this)

            xScale.distortion(force).focus(mouse[0])
            yScale.distortion(force).focus(mouse[1])


            circles
                .attr("cx", d => xScale(d.Comments))
                .attr("cy", d => yScale(d.Reactions))

            point
                .attr("cx", d => xScale(d.Comments))
                .attr("cy", d => yScale(d.Reactions))


            xAxis = d3.axisBottom(xScale)
                .ticks(10)
                .tickFormat(d3.format(".2s"))
                .tickSize(-height + margin)

            yAxis = d3.axisLeft(yScale)
                .tickFormat(d3.format(".2s"))
                .tickSize(-width + margin)

            svg.select(".x.axis").call(xAxis)
            svg.select(".y.axis").call(yAxis)
        })


        $('#reaction-viz').on("mouseleave", function () {
            reset()
        })


        $('#reaction-viz circle').on("click", function () {

            var id = $(this).data('url');
            var title = $(this).data('title');
            var views = $(this).data('views');
            var comments = $(this).data('comments');
            var orientation = $(this).data('orientation');
            var reaction = $(this).data('reaction');
            var like = $(this).data('like');

            $('#sidebar, #overlay').addClass('is-visible');
            var videoId = getId(id);

            var iframeMarkup = '<iframe height="315" src="//www.youtube.com/embed/' +
                videoId + '" frameborder="0" allowfullscreen></iframe>';

            $('#sidebar').find(".video_iframe").html(iframeMarkup);
            $('#sidebar').find(".video_orientation").html(orientation).addClass(orientation);
            $('#sidebar').find(".video_title").html(title);
            $('#sidebar').find(".video_views").html(numberWithCommas(views) + " VIEWS / " + numberWithCommas(comments) + " COMMENTS");

            console.log("REACTION", reaction);
            console.log("LIKE", like);

            var percentageLike = Math.round(like * 100 / reaction);
            var percentageDislike = Math.round(100 - percentageLike);


            $('#sidebar').find(".video_reaction .like").css({
                width: percentageLike + "%"
            })

            $('#sidebar').find(".video_reaction .dislike").css({
                width: percentageDislike + "%"
            })
            $('#sidebar').find(".video_percentage .like").html(percentageLike + "%");
            $('#sidebar').find(".video_percentage .dislike").html(percentageDislike + "%");



        })


        $('#overlay').click(function () {
            $('#overlay, #sidebar').removeClass('is-visible');
            $('#sidebar').find(".video_orientation").removeClass("feminist antifeminist neutral");
            $('#sidebar').find(".video_iframe").html('');

        });


        function reset() {

            circles.transition(t)
                .attr("cx", d => x(d.Comments))
                .attr("cy", d => y(d.Reactions))

            point.transition(t)
                .attr("cx", d => x(d.Comments))
                .attr("cy", d => y(d.Reactions))

            xAxis = d3.axisBottom(x)
                .tickFormat(d3.format(".2s"))
                .tickSize(-height + margin)

            yAxis = d3.axisLeft(y)
                .tickFormat(d3.format(".2s"))
                .tickSize(-width + margin)
                .ticks(10)



            svg.select(".x.axis").call(xAxis)
            svg.select(".y.axis").call(yAxis)
        }

    })

});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}
