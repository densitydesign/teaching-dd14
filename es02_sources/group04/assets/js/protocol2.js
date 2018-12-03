//start
$(document).ready(function(){
        $(".percorsi").hide();
    });
$(document).ready(function(){
        $(".scs").show();
$(".testo5").toggleClass("cliccatoscs");
    });


//buttons working
function testo1() {
    var element = document.getElementById("testo1");
    element.classList.toggle("cliccatoshufa");
}

function testo2() {
    var element = document.getElementById("testo2");
    element.classList.toggle("cliccatofico");
}

function testo3() {
    var element = document.getElementById("testo3");
    element.classList.toggle("cliccatovantage");
}


function testo4() {
    var element = document.getElementById("testo4");
    element.classList.toggle("cliccatosesame");
}

function testo5() {
    var element = document.getElementById("testo5");
    element.classList.toggle("cliccatoscs");
}

//links with "percorsi" class
$(document).ready(function(){
        $(".testo1").click(function(){
    $(".shufa").toggle("fast");
    });    
});
  
$(document).ready(function(){
        $(".testo2").click(function(){
    $(".fico").toggle("fast");
    });    

        $(".testo3").click(function(){
    $(".vantage").toggle("fast");
    });    


        $(".testo4").click(function(){
    $(".sesame").toggle("fast");
    });    


        $(".testo5").click(function(){
    $(".scs").toggle("fast");
    });    
    
 $(".background").click(function(){
    $(".percorsi").hide("fast");
$(".testo1").removeClass("cliccatoshufa");
$(".testo2").removeClass("cliccatofico");
$(".testo3").removeClass("cliccatovantage");
$(".testo4").removeClass("cliccatosesame");
$(".testo5").removeClass("cliccatoscs");     
     
 
 });   
    
});

   