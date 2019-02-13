
var avocados = Cookies.getJSON("avocado");
var x=0;
//console.log(avocados);
for(var i = 0, len = avocados.length; i < len; ++i){
  // i的值为0 1 2， id 为no1 no2 no3
  var id = "#no" + (i + 1);
  var idadd = "#se" + (i + 1);
  switch(avocados[i]){
    case "mexico":
      $(id).text("AVOCADO FROM MEXICO");
      $(id).click(function(event){
      window.location.href="part2.html#5thPage";
      })
      $(idadd).text('Mafia');
      var str = "Deforestation,Water scarcity";
      var strs = str.split(",") ;
      d3.select(idadd)
        .selectAll("tspan")
        .data(strs)
        .enter()
        .append("tspan")
        .attr("x","0")
				.attr("dy","1.1em")
        .attr('class', 'atext')
        .text(function (d) {
    return d;
  });

      //$(idadd).text(Water scarcity,Deforestation,Mafia,+424g CO2 emissions);
      //Water scarcity,Deforestation,Mafia,+424g CO2 emissions
      x+=1.06;
      break;
    case "chile":
      $(id).text("AVOCADO FROM CHILE");
      $(id).click(function(event){
      window.location.href="part2.html#3rdPage";
      })
      $(idadd).text("Water Scarcity");
      var str = "Deforestation";
      var strs = str.split(",") ;
      d3.select(idadd)
        .selectAll("tspan")
        .data(strs)
        .enter()
        .append("tspan")
        .attr("x","0")
				.attr("dy","1.1em")
        .attr('class', 'atext')
        .text(function (d) {
    return d;
  });
      x+=1.30;
      break;
    case "israel":
      $(id).text("AVOCADO FROM ISRAEL");
      $(id).click(function(event){
      window.location.href="part2.html#3rdPage";
      })
      $(idadd).text("Water Scarcity");
      x+=1.40;
      break;
    case "Columbia":
      $(id).text("AVOCADO FROM COLOMBIA");
      $(id).click(function(event){
      window.location.href="part2.html#4thPage";
      })
      $(idadd).text("Deforestation");
      var str = "Thefts";
      var strs = str.split(",") ;
      d3.select(idadd)
        .selectAll("tspan")
        .data(strs)
        .enter()
        .append("tspan")
        .attr("x","0")
				.attr("dy","1.1em")
        .attr('class', 'atext')
        .text(function (d) {
        return d;
        });
      x+=1.10;
      break;
    case "NewZealand":
      $(id).text("AVOCADO FROM NEW ZEALAND");
      $(id).click(function(event){
      window.location.href="part2.html#6thPage";
      })
      $(idadd).text("Thefts");
      x+=1.50;
      break;
    case "fairtrade":
      $(id).text("AVOCADO FROM  FAIRTRADE");
      $(id).click(function(event){
      window.location.href="part2.html";
      })
      $(idadd).text("Helping small-scale farmers");
      var str = "Promoting labor rights,Environmental sustainability,Increasing awareness";
      var strs = str.split(",") ;
      d3.select(idadd)
        .selectAll("tspan")
        .data(strs)
        .enter()
        .append("tspan")
        .attr("x","0")
				.attr("dy","1.1em")
        .attr('class', 'atext')
        .text(function (d) {
        return d;
        });
      x+=7;
      break;
    default:
      break;
  }
}

//两位小数
x = x.toFixed(2);
$("#total").text(x);
