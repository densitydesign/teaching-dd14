var w = $("#treemap").width(),
    h = 500,
    color = d3.scale.category20c();

var treemap = d3.layout.treemap()
    .size([w, h])
    .sticky(true)
    .value(function (d) {
        return d.size;
    });

var div = d3.select("#treemap").append("div")
    .style("position", "relative")
    .style("width", w + "px")
    .style("height", h + "px");

d3.json("data/treemap.json", function (json) {
    div.data([json]).selectAll("div")
        .data(treemap.nodes)
        .enter().append("div")
        .attr("class", "cell")
        .call(cell)
        .append("div")
        .style("background", function (d) {
            if (d.parent) {
                return d.parent['color'];
            }
        })
        .attr("data-href", function (d) {

            return d.link;
        })
        .call(cell)
        .text(function (d) {

            if (d.parent) {

                var name = d.name,
                    parent = d.parent['name'];


                return d.children ? null : name;

            }


            //            return d.parent ? null : text;
        }).append("div").attr("class", "source").text(function (d) {

            if (d.parent) {

                var name = d.name,
                    parent = d.parent['name'];


                return d.children ? null : parent;

            }


            //            return d.parent ? null : text;
        }).append("div").attr("class", "number").text(function (d) {




            return d.children ? null : d.size;




            //            return d.parent ? null : text;
        })


    $('#treemap .cell > div').click(function () {
        var href = $(this).data('href');
        console.log(href);
        window.open(href, '_blank');
    })

});

function cell() {
    this
        .style("left", function (d) {
            return d.x + "px";
        })
        .style("top", function (d) {
            return d.y + "px";
        })
        .style("width", function (d) {
            return d.dx + "px";
        })
        .style("height", function (d) {
            return d.dy + "px";
        });
}
