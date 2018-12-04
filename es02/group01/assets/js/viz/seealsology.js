$(document).ready(function () {

    if ($('#seealsology').length) {

        console.log("init seealsology");

        let seealsology = document.getElementById("seealsology-viz");

        let width = d3.selectAll("#seealsology-viz").node().getBoundingClientRect().width,
            height = 850,
            padding = window.innerWidth * 0.1;

        var t = d3.transition()
            .duration(750)
            .ease(d3.easeLinear);


        let svg = d3.select('#seealsology-viz').append('svg')
            .attr('width', width)
            .attr('height', height)

        let colors = d3.scaleOrdinal()
            .range(["#f2d51e", "#30d840", "#9d77fc", "#4a74ff", "#ff7900", "#999"]);
        //        .domain(["Feminism", "Gender Studies", "Discrimination", "Women's History", "LGBT Studies"])


        let x = d3.scaleLinear()
            .range([0 + padding + 100, width - padding - 100]);

        let y1 = d3.scalePoint()
            .range([0 + padding, height - padding]);

        let y2 = d3.scaleLinear()
            .domain(["Feminism", "Gender Studies", "Discrimination", "Women's History", "LGBT Studies", "Not Relevant"])
            .range([0 + 150, height - 50]);

        let size = d3.scaleSqrt()
            .range([1, 10]);


        d3.csv("assets/js/viz/data/seealsology.csv", function (error, data) {

            data = data.filter(function (d) {
                return d.ID > 0;
            })



            if (error) throw error;

            x.domain(d3.extent(data, function (d) {
                d.value = +d.radius;
                return d.value;
            }));

            y1.domain(d3.extent(data, function (d) {
                d.distance = +d.radius;
                return d.distance;
            }));

            y2.domain(d3.extent(data, function (d) {
                return d.ID;

            }));

            size.domain(d3.extent(data, function (d) {
                return d.radius;
            }));





            // AXIS 
            // Y AXIS
            let categoryAxis = d3.axisLeft(y2).ticks(5).tickSize(width - window.innerWidth * 0.2).tickPadding(10);

            // X AXIS
            let distanceAxis = d3.axisTop(x).ticks(3)
                .tickFormat(d3.format("d"))
                .tickSize(height - 30);

            function tick() {
                d3.selectAll('.circ')
                    .attr('cx', function (d) {
                        return d.x
                    })
                    .attr('cy', function (d) {
                        return d.y
                    })
            };

            // Draw axes

            svg.append("g")
                .call(distanceAxis)
                .attr("transform", "translate(0, " + (height + 20) + ")")
                .classed("xAxis", true);
            //                .style("opacity", 0);

            var domainWidth = $('.xAxis path.domain')[0].getBoundingClientRect().width;

            console.log();

            svg
                .append("circle")
                .classed("radius", true)
                .attr("r", domainWidth / 3 * 1)
                .attr('cx', x(0))
                .attr('cy', height / 2)
                .attr('fill', 'rgba(255, 255, 255, 0)');


            svg
                .append("circle")
                .classed("radius", true)
                .attr("r", domainWidth / 3 * 2)
                .attr('cx', x(0))
                .attr('cy', height / 2)
                .attr('fill', 'rgba(255, 255, 255, 0)');

            svg
                .append("circle")
                .classed("radius", true)
                .attr("r", domainWidth / 3 * 3)
                .attr('cx', x(0))
                .attr('cy', height / 2)
                .attr('fill', 'rgba(255, 255, 255, 0)');



            svg.append("g")
                .call(categoryAxis)
                .attr("transform", "translate(" + (width - padding) + ",0)")
                .classed("yAxis", true)
                .style("opacity", 0);


            var axis2Selection = d3.select(".xAxis").classed("xAxis", true);


            axis2Selection
                .selectAll('.tick')
                .attr('class', function (d, i) {
                    if (d == 0) {
                        return "seed"
                    } else {
                        return "tick"
                    }
                })

            axis2Selection
                .selectAll('.tick text')
                .text(function (d) {
                    console.log(d);
                    switch (d) {
                        case 0:
                            return "Seed";
                            break;
                        case 1:
                            return "Distance 1";
                            break;
                        case 2:
                            return "Distance 2";
                            break;
                        case 3:
                            return "Distance 3";
                            break;
                    }
                });

            // Draw circles

            svg.selectAll('.circ')
                .data(data)
                .enter()
                .append('circle').classed('circ', true)
                .attr('data-name', function (d) {
                    return d.name
                })
                .attr('r', function (d) {
                    if (d.seed) {
                        return size(5)
                    } else {
                        return size(0.2)
                    }
                })
                .attr('cx', function (d) {
                    return width / 2;
                })
                .attr('cy', function (d) {
                    return height / 2;
                })
                .attr("fill", function (d) {
                    if (d.seed) {
                        return "#FF3502";
                    } else {
                        return "#ffffff";
                    }

                })
                .attr('class', function (d) {

                    if (d.name == "Sexism") {
                        return "circ seedCirc"
                    } else {
                        return "circ"
                    }

                });

            //            .on("mouseout", handleMouseOut);        // .attr("stroke", "rgba(0,0,0,.2)")
            // .attr("stroke-width", 1)

            // Start force layout

            let simulation = d3.forceSimulation(data)
                .force('x', d3.forceX(function (d) {
                    return x(d.distance)
                }).strength(0.1))
                .force('y', d3.forceY(height / 2).strength(0.1))
                .force('collision', d3.forceCollide(function (d) {
                    return size(0.5) + 2;
                }).iterations(20))
                .alphaTarget(1)
                .alpha(1)
                .on('tick', tick)
                .restart()

            let init_decay;
            init_decay = setTimeout(function () {
                console.log('init alpha decay')
                $('.circ').each(function (i) {
                    var row = $(this);
                    setTimeout(function () {
                        row.addClass('is-visible', !row.hasClass('is-visible'));
                    }, 1 * i);
                });
            }, 1500);


            // CLICK "CATEGORY" BUTTON

            $('#category').click(function () {
                $('#seealsology').addClass('category');
                $('#seealsology button').toggleClass('active');
                $('.xAxis').addClass('is-visible');
                $('.radius').addClass('is-hidden');

                console.log("CARICA CATEGORIE");

                svg
                    .attr('height', height)
                    .selectAll('.circ').attr("fill", function (d) {

                        if (d.name == "Sexism") {
                            return '#FF3502'
                        } else {

                            return colors(d.ID - 1);
                        }
                    });

                var axisSelection = d3.select(".yAxis").classed("yAxis", true);

                d3.select(".yAxis").transition(t).style("opacity", 1);

                axisSelection.selectAll('.tick text')
                    .text(function (d) {
                        console.log(d);
                        switch (d) {
                            case 1:
                                return "Feminism";
                                break;
                            case 2:
                                return "Gender Studies";
                                break;
                            case 3:
                                return "Discrimination";
                                break;
                            case 4:
                                return "Women's History";
                                break;
                            case 5:
                                return "LGBT Studies";
                                break;
                        }
                    })

                simulation.force('y', d3.forceY(function (d) {
                        if (d.name == "Sexism") {
                            return height / 2
                        } else {
                            return y2(d.ID);
                        }

                    }).strength(0.05))
                    .force('x', d3.forceX(function (d) {
                        return x(d.distance)
                    }).strength(0.05));


                simulation
                    .alpha(1)
                    .restart()
            })

            // CLICK "RESET" BUTTON

            $('#reset').click(function () {
                console.log("RESETTA");
                $('#seealsology').removeClass('category');
                $('.xAxis').removeClass('is-visible');
                $('.radius').removeClass('is-hidden');
                $('#seealsology button').toggleClass('active');

                d3.select(".yAxis").transition(t).style("opacity", 0);

                simulation
                    .force('y', d3.forceY(height / 2).strength(0.1))
                    .force('x', d3.forceX(function (d) {
                        return x(d.distance)
                    }).strength(0.1)).restart()

                svg.selectAll('.circ').attr("fill", function (d) {

                    if (d.name == "Sexism") {
                        return '#FF3502'
                    } else {

                        return '#FFFFFF'
                    }
                });

            })




        })




        $('#seealsology').on('mousemove', function (evt) {
            var x = evt.pageX - $(this).offset().left + 10;
            var y = evt.pageY - $(this).offset().top + -20;


            var parent = $(this).parent();

            parent.find('circle').hover(function () {

                    $('#seealsology .popup').css({
                        top: y,
                        left: x
                    });

                    var $this = $(this);
                    var pageName = $this.data('name');
                    parent.find('#seealsology .popup').addClass('is-visible').html(pageName);
                    parent.find('circle').not($this).addClass('hide');
                },
                function () {
                    $('#seealsology .popup').removeClass('is-visible')
                    $('circle').removeClass('hide');
                });

            $('circle').click(function () {
                var pageName = $(this).data('name');
                pageName = pageName.replace(/ /g, '_');
                window.open('https://en.wikipedia.org/wiki/' + pageName);

            })
        });


    }



});
