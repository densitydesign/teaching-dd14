//Google trends - protocol 2

$(document).ready(function() {
    
    //col-events
    
    $("#dot-col-event-1").on("mouseenter", function(){
        $("#dot-col-event-1").attr("r", "10.9");
        $("g#col-event-1").removeClass("hidden-element");
        $("#tip").removeClass("st2, st9, st10").addClass("hidden-element");
    });
    $("#dot-col-event-1").on("mouseleave", function(){
        $("#dot-col-event-1").attr("r", "7.5");
        $("g#col-event-1").addClass("hidden-element");
    });
    
    $("#dot-col-event-2").on("mouseenter", function(){
        $("#dot-col-event-1").attr("r", "7.5");
        $("g#col-event-1").addClass("hidden-element");
        $("#tip").removeClass("st2, st9, st10").addClass("hidden-element");
        $("#dot-col-event-2").attr("r", "10.9");
        $("g#col-event-2").removeClass("hidden-element");
    });
    $("#dot-col-event-2").on("mouseleave", function(){
        $("#dot-col-event-2").attr("r", "7.5");
        $("g#col-event-2").addClass("hidden-element");
    });
    
    $("#dot-col-event-3").on("mouseenter", function(){
        $("#dot-col-event-1").attr("r", "7.5");
        $("g#col-event-1").addClass("hidden-element");
        $("#tip").removeClass("st2, st9, st10").addClass("hidden-element");
        $("#dot-col-event-3").attr("r", "10.9");
        $("g#col-event-3").removeClass("hidden-element");
    });
    $("#dot-col-event-3").on("mouseleave", function(){
        $("#dot-col-event-3").attr("r", "7.5");
        $("g#col-event-3").addClass("hidden-element");
    });
    
    //exp-events
    
    $("#dot-exp-event-1").on("mouseenter", function(){
        $("#dot-col-event-1").attr("r", "7.5");
        $("g#col-event-1").addClass("hidden-element");
        $("#tip").removeClass("st2, st9, st10").addClass("hidden-element");
        $("#dot-exp-event-1").attr("r", "10.9");
        $("g#exp-event-1").removeClass("hidden-element");
    });
    $("#dot-exp-event-1").on("mouseleave", function(){
        $("#dot-exp-event-1").attr("r", "7.5");
        $("g#exp-event-1").addClass("hidden-element");
    });
    
    $("#dot-exp-event-2").on("mouseenter", function(){
        $("#dot-col-event-1").attr("r", "7.5");
        $("g#col-event-1").addClass("hidden-element");
        $("#tip").removeClass("st2, st9, st10").addClass("hidden-element");
        $("#dot-exp-event-2").attr("r", "10.9");
        $("g#exp-event-2").removeClass("hidden-element");
    });
    $("#dot-exp-event-2").on("mouseleave", function(){
        $("#dot-exp-event-2").attr("r", "7.5");
        $("g#exp-event-2").addClass("hidden-element");
    });
    
    $("#dot-exp-event-3").on("mouseenter", function(){
        $("#dot-col-event-1").attr("r", "7.5");
        $("g#col-event-1").addClass("hidden-element");
        $("#tip").removeClass("st2, st9, st10").addClass("hidden-element");
        $("#dot-exp-event-3").attr("r", "10.9");
        $("g#exp-event-3").removeClass("hidden-element");
    });
    $("#dot-exp-event-3").on("mouseleave", function(){
        $("#dot-exp-event-3").attr("r", "7.5");
        $("g#exp-event-3").addClass("hidden-element");
    });
});


//Alluvial - protocol 3

$(document).ready(function() {
    
    //queries
    
    $(".p3-button").on("mouseenter", function(e) {
        
        let flown = $(this).attr("flow");
        
        $("path#flow" + flown).not(".colonization, .exploration").removeClass("st1").addClass("alluvial-selected");
        $("path#flow" + flown + ".colonization").removeClass("st3").addClass("col-sel");
        $("path#flow" + flown + ".exploration").removeClass("st2").addClass("exp-sel");
        
    });
    
    $(".p3-button").on("mouseleave", function(e) {
        
        let flown = $(this).attr("flow");
        
        $("path#flow" + flown).not(".colonization, .exploration").removeClass("alluvial-selected").addClass("st1");
        $("path#flow" + flown + ".colonization").removeClass("col-sel").addClass("st3");
        $("path#flow" + flown + ".exploration").removeClass("exp-sel").addClass("st2");
        
        
    });
    
});
    
    
    
//    $("#query-col, #link-col").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-col path").removeClass("st1");
//        $("#link-col path").addClass("alluvial-selected");
//        $("#query-col rect, #query-col text tspan").removeClass("st2");
//        $("#query-col rect, #query-col text tspan").addClass("alluvial-label-selected");
//    });
//    $("#query-col, #link-col").on("mouseleave", function(){
//        $("#link-col path").addClass("st1");
//        $("#link-col path").removeClass("alluvial-selected");
//        $("#query-col rect, #query-col text tspan").addClass("st2");
//        $("#query-col rect, #query-col text tspan").removeClass("alluvial-label-selected");
//    });
//    
//    $("#query-exp, #link-exp").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-exp path").removeClass("st1");
//        $("#link-exp path").addClass("alluvial-selected");
//        $("#query-exp rect, #query-exp text tspan").removeClass("st2");
//        $("#query-exp rect, #query-exp text tspan").addClass("alluvial-label-selected");
//    });
//    $("#query-exp, #link-exp").on("mouseleave", function(){
//        $("#link-exp path").addClass("st1");
//        $("#link-exp path").removeClass("alluvial-selected");
//        $("#query-exp rect, #query-exp text tspan").addClass("st2");
//        $("#query-exp rect, #query-exp text tspan").removeClass("alluvial-label-selected");
//    });
//    
//    //topics
//    
//    $("#topic-1, #link-1").on("mouseenter", function(){
//        $("#link-1 path").removeClass("st1");
//        $("#link-1 path").addClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").removeClass("st2");
//        $("#topic-1 rect, #topic-1 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-1, #link-1").on("mouseleave", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//    });    
//    
//    $("#topic-2, #link-2").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-2 path").removeClass("st1");
//        $("#link-2 path").addClass("alluvial-selected");
//        $("#topic-2 rect, #topic-2 text").removeClass("st2");
//        $("#topic-2 rect, #topic-2 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-2, #link-2").on("mouseleave", function(){
//        $("#link-2 path").addClass("st1");
//        $("#link-2 path").removeClass("alluvial-selected");
//        $("#topic-2 rect, #topic-2 text").addClass("st2");
//        $("#topic-2 rect, #topic-2 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-3, #link-3").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-3 path").removeClass("st1");
//        $("#link-3 path").addClass("alluvial-selected");
//        $("#topic-3 rect, #topic-3 text").removeClass("st2");
//        $("#topic-3 rect, #topic-3 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-3, #link-3").on("mouseleave", function(){
//        $("#link-3 path").addClass("st1");
//        $("#link-3 path").removeClass("alluvial-selected");
//        $("#topic-3 rect, #topic-3 text").addClass("st2");
//        $("#topic-3 rect, #topic-3 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-4, #link-4").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-4 path").removeClass("st1");
//        $("#link-4 path").addClass("alluvial-selected");
//        $("#topic-4 rect, #topic-4 text").removeClass("st2");
//        $("#topic-4 rect, #topic-4 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-4, #link-4").on("mouseleave", function(){
//        $("#link-4 path").addClass("st1");
//        $("#link-4 path").removeClass("alluvial-selected");
//        $("#topic-4 rect, #topic-4 text").addClass("st2");
//        $("#topic-4 rect, #topic-4 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-5, #link-5").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-5 path").removeClass("st1");
//        $("#link-5 path").addClass("alluvial-selected");
//        $("#topic-5 rect, #topic-5 text").removeClass("st2");
//        $("#topic-5 rect, #topic-5 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-5, #link-5").on("mouseleave", function(){
//        $("#link-5 path").addClass("st1");
//        $("#link-5 path").removeClass("alluvial-selected");
//        $("#topic-5 rect, #topic-5 text").addClass("st2");
//        $("#topic-5 rect, #topic-5 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-6, #link-6").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-6 path").removeClass("st1");
//        $("#link-6 path").addClass("alluvial-selected");
//        $("#topic-6 rect, #topic-6 text").removeClass("st2");
//        $("#topic-6 rect, #topic-6 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-6, #link-6").on("mouseleave", function(){
//        $("#link-6 path").addClass("st1");
//        $("#link-6 path").removeClass("alluvial-selected");
//        $("#topic-6 rect, #topic-6 text").addClass("st2");
//        $("#topic-6 rect, #topic-6 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-7, #link-7").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-7 path").removeClass("st1");
//        $("#link-7 path").addClass("alluvial-selected");
//        $("#topic-7 rect, #topic-7 text").removeClass("st2");
//        $("#topic-7 rect, #topic-7 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-7, #link-7").on("mouseleave", function(){
//        $("#link-7 path").addClass("st1");
//        $("#link-7 path").removeClass("alluvial-selected");
//        $("#topic-7 rect, #topic-7 text").addClass("st2");
//        $("#topic-7 rect, #topic-7 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-8, #link-8").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-8 path").removeClass("st1");
//        $("#link-8 path").addClass("alluvial-selected");
//        $("#topic-8 rect, #topic-8 text").removeClass("st2");
//        $("#topic-8 rect, #topic-8 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-8, #link-8").on("mouseleave", function(){
//        $("#link-8 path").addClass("st1");
//        $("#link-8 path").removeClass("alluvial-selected");
//        $("#topic-8 rect, #topic-8 text").addClass("st2");
//        $("#topic-8 rect, #topic-8 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-9, #link-9").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-9 path").removeClass("st1");
//        $("#link-9 path").addClass("alluvial-selected");
//        $("#topic-9 rect, #topic-9 text").removeClass("st2");
//        $("#topic-9 rect, #topic-9 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-9, #link-9").on("mouseleave", function(){
//        $("#link-9 path").addClass("st1");
//        $("#link-9 path").removeClass("alluvial-selected");
//        $("#topic-9 rect, #topic-9 text").addClass("st2");
//        $("#topic-9 rect, #topic-9 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-10, #link-10").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-10 path").removeClass("st1");
//        $("#link-10 path").addClass("alluvial-selected");
//        $("#topic-10 rect, #topic-10 text").removeClass("st2");
//        $("#topic-10 rect, #topic-10 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-10, #link-10").on("mouseleave", function(){
//        $("#link-10 path").addClass("st1");
//        $("#link-10 path").removeClass("alluvial-selected");
//        $("#topic-10 rect, #topic-10 text").addClass("st2");
//        $("#topic-10 rect, #topic-10 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-11, #link-11").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-11 path").removeClass("st1");
//        $("#link-11 path").addClass("alluvial-selected");
//        $("#topic-11 rect, #topic-11 text").removeClass("st2");
//        $("#topic-11 rect, #topic-11 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-11, #link-11").on("mouseleave", function(){
//        $("#link-11 path").addClass("st1");
//        $("#link-11 path").removeClass("alluvial-selected");
//        $("#topic-11 rect, #topic-11 text").addClass("st2");
//        $("#topic-11 rect, #topic-11 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-12, #link-12").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-12 path").removeClass("st1");
//        $("#link-12 path").addClass("alluvial-selected");
//        $("#topic-12 rect, #topic-12 text").removeClass("st2");
//        $("#topic-12 rect, #topic-12 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-12, #link-12").on("mouseleave", function(){
//        $("#link-12 path").addClass("st1");
//        $("#link-12 path").removeClass("alluvial-selected");
//        $("#topic-12 rect, #topic-12 text").addClass("st2");
//        $("#topic-12 rect, #topic-12 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-13, #link-13").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-13 path").removeClass("st1");
//        $("#link-13 path").addClass("alluvial-selected");
//        $("#topic-13 rect, #topic-13 text").removeClass("st2");
//        $("#topic-13 rect, #topic-13 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-13, #link-13").on("mouseleave", function(){
//        $("#link-13 path").addClass("st1");
//        $("#link-13 path").removeClass("alluvial-selected");
//        $("#topic-13 rect, #topic-13 text").addClass("st2");
//        $("#topic-13 rect, #topic-13 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-14, #link-14").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-14 path").removeClass("st1");
//        $("#link-14 path").addClass("alluvial-selected");
//        $("#topic-14 rect, #topic-14 text").removeClass("st2");
//        $("#topic-14 rect, #topic-14 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-14, #link-14").on("mouseleave", function(){
//        $("#link-14 path").addClass("st1");
//        $("#link-14 path").removeClass("alluvial-selected");
//        $("#topic-14 rect, #topic-14 text").addClass("st2");
//        $("#topic-14 rect, #topic-14 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-15, #link-15").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-15 path").removeClass("st1");
//        $("#link-15 path").addClass("alluvial-selected");
//        $("#topic-15 rect, #topic-15 text").removeClass("st2");
//        $("#topic-15 rect, #topic-15 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-15, #link-15").on("mouseleave", function(){
//        $("#link-15 path").addClass("st1");
//        $("#link-15 path").removeClass("alluvial-selected");
//        $("#topic-15 rect, #topic-15 text").addClass("st2");
//        $("#topic-15 rect, #topic-15 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-16, #link-16").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-16 path").removeClass("st1");
//        $("#link-16 path").addClass("alluvial-selected");
//        $("#topic-16 rect, #topic-16 text").removeClass("st2");
//        $("#topic-16 rect, #topic-16 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-16, #link-16").on("mouseleave", function(){
//        $("#link-16 path").addClass("st1");
//        $("#link-16 path").removeClass("alluvial-selected");
//        $("#topic-16 rect, #topic-16 text").addClass("st2");
//        $("#topic-16 rect, #topic-16 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-17, #link-17").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-17 path").removeClass("st1");
//        $("#link-17 path").addClass("alluvial-selected");
//        $("#topic-17 rect, #topic-17 text").removeClass("st2");
//        $("#topic-17 rect, #topic-17 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-17, #link-17").on("mouseleave", function(){
//        $("#link-17 path").addClass("st1");
//        $("#link-17 path").removeClass("alluvial-selected");
//        $("#topic-17 rect, #topic-17 text").addClass("st2");
//        $("#topic-17 rect, #topic-17 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-18, #link-18").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-18 path").removeClass("st1");
//        $("#link-18 path").addClass("alluvial-selected");
//        $("#topic-18 rect, #topic-18 text").removeClass("st2");
//        $("#topic-18 rect, #topic-18 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-18, #link-18").on("mouseleave", function(){
//        $("#link-18 path").addClass("st1");
//        $("#link-18 path").removeClass("alluvial-selected");
//        $("#topic-18 rect, #topic-18 text").addClass("st2");
//        $("#topic-18 rect, #topic-18 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-19, #link-19").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-19 path").removeClass("st1");
//        $("#link-19 path").addClass("alluvial-selected");
//        $("#topic-19 rect, #topic-19 text").removeClass("st2");
//        $("#topic-19 rect, #topic-19 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-19, #link-19").on("mouseleave", function(){
//        $("#link-19 path").addClass("st1");
//        $("#link-19 path").removeClass("alluvial-selected");
//        $("#topic-19 rect, #topic-19 text").addClass("st2");
//        $("#topic-19 rect, #topic-19 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-20, #link-20").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-20 path").removeClass("st1");
//        $("#link-20 path").addClass("alluvial-selected");
//        $("#topic-20 rect, #topic-20 text").removeClass("st2");
//        $("#topic-20 rect, #topic-20 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-20, #link-20").on("mouseleave", function(){
//        $("#link-20 path").addClass("st1");
//        $("#link-20 path").removeClass("alluvial-selected");
//        $("#topic-20 rect, #topic-20 text").addClass("st2");
//        $("#topic-20 rect, #topic-20 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-21, #link-21").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-21 path").removeClass("st1");
//        $("#link-21 path").addClass("alluvial-selected");
//        $("#topic-21 rect, #topic-21 text").removeClass("st2");
//        $("#topic-21 rect, #topic-21 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-21, #link-21").on("mouseleave", function(){
//        $("#link-21 path").addClass("st1");
//        $("#link-21 path").removeClass("alluvial-selected");
//        $("#topic-21 rect, #topic-21 text").addClass("st2");
//        $("#topic-21 rect, #topic-21 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-22, #link-22").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-22 path").removeClass("st1");
//        $("#link-22 path").addClass("alluvial-selected");
//        $("#topic-22 rect, #topic-22 text").removeClass("st2");
//        $("#topic-22 rect, #topic-22 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-22, #link-22").on("mouseleave", function(){
//        $("#link-22 path").addClass("st1");
//        $("#link-22 path").removeClass("alluvial-selected");
//        $("#topic-22 rect, #topic-22 text").addClass("st2");
//        $("#topic-22 rect, #topic-22 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-23, #link-23").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-23 path").removeClass("st1");
//        $("#link-23 path").addClass("alluvial-selected");
//        $("#topic-23 rect, #topic-23 text").removeClass("st2");
//        $("#topic-23 rect, #topic-23 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-23, #link-23").on("mouseleave", function(){
//        $("#link-23 path").addClass("st1");
//        $("#link-23 path").removeClass("alluvial-selected");
//        $("#topic-23 rect, #topic-23 text").addClass("st2");
//        $("#topic-23 rect, #topic-23 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-24, #link-24").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-24 path").removeClass("st1");
//        $("#link-24 path").addClass("alluvial-selected");
//        $("#topic-24 rect, #topic-24 text").removeClass("st2");
//        $("#topic-24 rect, #topic-24 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-24, #link-24").on("mouseleave", function(){
//        $("#link-24 path").addClass("st1");
//        $("#link-24 path").removeClass("alluvial-selected");
//        $("#topic-24 rect, #topic-24 text").addClass("st2");
//        $("#topic-24 rect, #topic-24 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-25, #link-25").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-25 path").removeClass("st1");
//        $("#link-25 path").addClass("alluvial-selected");
//        $("#topic-25 rect, #topic-25 text").removeClass("st2");
//        $("#topic-25 rect, #topic-25 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-25, #link-25").on("mouseleave", function(){
//        $("#link-25 path").addClass("st1");
//        $("#link-25 path").removeClass("alluvial-selected");
//        $("#topic-25 rect, #topic-25 text").addClass("st2");
//        $("#topic-25 rect, #topic-25 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-26, #link-26").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-26 path").removeClass("st1");
//        $("#link-26 path").addClass("alluvial-selected");
//        $("#topic-26 rect, #topic-26 text").removeClass("st2");
//        $("#topic-26 rect, #topic-26 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-26, #link-26").on("mouseleave", function(){
//        $("#link-26 path").addClass("st1");
//        $("#link-26 path").removeClass("alluvial-selected");
//        $("#topic-26 rect, #topic-26 text").addClass("st2");
//        $("#topic-26 rect, #topic-26 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-27, #link-27").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-27 path").removeClass("st1");
//        $("#link-27 path").addClass("alluvial-selected");
//        $("#topic-27 rect, #topic-27 text").removeClass("st2");
//        $("#topic-27 rect, #topic-27 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-27, #link-27").on("mouseleave", function(){
//        $("#link-27 path").addClass("st1");
//        $("#link-27 path").removeClass("alluvial-selected");
//        $("#topic-27 rect, #topic-27 text").addClass("st2");
//        $("#topic-27 rect, #topic-27 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-28, #link-28").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-28 path").removeClass("st1");
//        $("#link-28 path").addClass("alluvial-selected");
//        $("#topic-28 rect, #topic-28 text").removeClass("st2");
//        $("#topic-28 rect, #topic-28 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-28, #link-28").on("mouseleave", function(){
//        $("#link-28 path").addClass("st1");
//        $("#link-28 path").removeClass("alluvial-selected");
//        $("#topic-28 rect, #topic-28 text").addClass("st2");
//        $("#topic-28 rect, #topic-28 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-29, #link-29").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-29 path").removeClass("st1");
//        $("#link-29 path").addClass("alluvial-selected");
//        $("#topic-29 rect, #topic-29 text").removeClass("st2");
//        $("#topic-29 rect, #topic-29 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-29, #link-29").on("mouseleave", function(){
//        $("#link-29 path").addClass("st1");
//        $("#link-29 path").removeClass("alluvial-selected");
//        $("#topic-29 rect, #topic-29 text").addClass("st2");
//        $("#topic-29 rect, #topic-29 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-30, #link-30").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-30 path").removeClass("st1");
//        $("#link-30 path").addClass("alluvial-selected");
//        $("#topic-30 rect, #topic-30 text").removeClass("st2");
//        $("#topic-30 rect, #topic-30 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-30, #link-30").on("mouseleave", function(){
//        $("#link-30 path").addClass("st1");
//        $("#link-30 path").removeClass("alluvial-selected");
//        $("#topic-30 rect, #topic-30 text").addClass("st2");
//        $("#topic-30 rect, #topic-30 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-31, #link-31").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-31 path").removeClass("st1");
//        $("#link-31 path").addClass("alluvial-selected");
//        $("#topic-31 rect, #topic-31 text").removeClass("st2");
//        $("#topic-31 rect, #topic-31 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-31, #link-31").on("mouseleave", function(){
//        $("#link-31 path").addClass("st1");
//        $("#link-31 path").removeClass("alluvial-selected");
//        $("#topic-31 rect, #topic-31 text").addClass("st2");
//        $("#topic-31 rect, #topic-31 text").removeClass("alluvial-label-selected");
//    });
//    
//    $("#topic-32, #link-32").on("mouseenter", function(){
//        $("#link-1 path").addClass("st1");
//        $("#link-1 path").removeClass("alluvial-selected");
//        $("#topic-1 rect, #topic-1 text").addClass("st2");
//        $("#topic-1 rect, #topic-1 text").removeClass("alluvial-label-selected");
//        $("#link-32 path").removeClass("st1");
//        $("#link-32 path").addClass("alluvial-selected");
//        $("#topic-32 rect, #topic-32 text").removeClass("st2");
//        $("#topic-32 rect, #topic-32 text").addClass("alluvial-label-selected");
//    });
//    $("#topic-32, #link-32").on("mouseleave", function(){
//        $("#link-32 path").addClass("st1");
//        $("#link-32 path").removeClass("alluvial-selected");
//        $("#topic-32 rect, #topic-32 text").addClass("st2");
//        $("#topic-32 rect, #topic-32 text").removeClass("alluvial-label-selected");
//    });
//})


// News - protocol 4 legenda

$(document).ready(function(){
    $(".alluvial-button").on("click", function(event) {
        let vizn = $(this).attr("vizn");
        
        if ($("#p4-" + vizn).hasClass("unselected-element")) {
            
            $("#p4-1, #p4-2, #p4-1-b, #p4-2-b").toggleClass("unselected-element");
            $("#sel1, #sel2").toggleClass("unselected-element");
            
        };
    })
});
                  

// News - protocol 4 viz 1


$(document).ready(function(){
    $(".month").on("mouseenter", function(event) {
        let expMonth = $(this).attr("id");
        let colMonth = $(this).attr("month")
        
        $("#" + expMonth + " path").removeClass("st1");
        $("#" + expMonth + " path").addClass("exp-sel");
        
        $("#col-" + colMonth + " path").removeClass("st-1");
        $("#col-" + colMonth + " path").addClass("col-sel");
        
    });
    
    $(".month").on("mouseleave", function(event) {
        let expMonth = $(this).attr("id");
        let colMonth = $(this).attr("month")
        
        $("#" + expMonth + " path").removeClass("exp-sel");
        $("#" + expMonth + " path").addClass("st1");
        
        $("#col-" + colMonth + " path").removeClass("col-sel");
        $("#col-" + colMonth + " path").addClass("st-1");
    
    });
})

// News - protocol 4 viz 2


$(document).ready(function(){
    $(".bumper").on("mouseenter", function(event) {
        let bump = $(this).attr("bump");
        
        $("g#bump" + bump).children("path").removeClass("sti7");
        $("g#bump" + bump).children("path").addClass("col-sel");
        $("g#bump" + bump).children("text").removeClass("sti2");
        $("g#bump" + bump).children("text").addClass("col-sel");
    
    });
    
    $(".bumper").on("mouseleave", function(event) {
        let bump = $(this).attr("bump");
        
        $("g#bump" + bump).children("path").removeClass("col-sel");
        $("g#bump" + bump).children("path").addClass("sti7");
        $("g#bump" + bump).children("text").removeClass("col-sel");
        $("g#bump" + bump).children("text").addClass("sti2");
    
    });
})

$(document).ready(function(){
    $(".bumper").on("mouseenter", function(event) {
        let bumpo = $(this).attr("bumpo");
        
        $("g#bumpo" + bumpo).children("path").removeClass("sto8");
        $("g#bumpo" + bumpo).children("path").removeClass("sto7");
        $("g#bumpo" + bumpo).children("path").addClass("exp-sel");
        $("g#bumpo" + bumpo).children("text").removeClass("sto2");
        $("g#bumpo" + bumpo).children("text").addClass("exp-sel");
    
    });
    
    $(".bumper").on("mouseleave", function(event) {
        let bumpo = $(this).attr("bumpo");
        
        $("g#bumpo" + bumpo).children("path").removeClass("exp-sel");
        $("g#bumpo" + bumpo).children("path").addClass("sto8");
        $("g#bumpo" + bumpo).children("path").addClass("sto7");
        $("g#bumpo" + bumpo).children("text").removeClass("exp-sel");
        $("g#bumpo" + bumpo).children("text").addClass("sto2");
    
    });
})


// protocol 5 

$(document).ready(function(){
    $(".swarmo-button").on("click", function(event) {
        let swarmon = $(this).attr("swarmon");
        
        if ($("#p5-" + swarmon).hasClass("unselected-element")) {
            
            $("#p5-1, #p5-2").toggleClass("unselected-element");
            $("#selo1, #selo2").toggleClass("unselected-element");
            
        };
    })
});


$(document).ready(function(){
    
    $(".swarm").on("mouseenter", function(event) {
        let swarm = $(this).attr("swarm");
        
        $("g#swarm" + swarm).removeClass("unselected-swarm");
        
    })
    
    $(".swarm").on("mouseleave", function(event) {
        let swarm = $(this).attr("swarm");
        
        $("g#swarm" + swarm).addClass("unselected-swarm");
        
    })
    
    
    $(".swarm").on("mouseenter", function(event) {
        let swarmb = $(this).attr("swarmb");
        
        $("g#swarmb" + swarmb).removeClass("unselected-swarm");
        
    })
    
    $(".swarm").on("mouseleave", function(event) {
        let swarmb = $(this).attr("swarmb");
        
        $("g#swarmb" + swarmb).addClass("unselected-swarm");
        
    })
    
})

// Web of Science - protocol 6

$(document).ready(function() {
    $(".p6-nodes").on("click", function(event) {
        let index = $(event.currentTarget).index() + 1;
        $(".label-p6").removeClass("label-shown");
        $(".label-p6:nth-child(" + index + ")").addClass("label-shown");
    });
});


// Twitter - protocol 7

//        $("#esa-path, #nasa-path, #boeing-path, #sierra-path, #ula-path, #rosco-path, #blue-path, #sx-path, #orbital-path, #virgin-path, #strato-path, #lock-path, #jan-path, #jim-path, #muilenburg-path, #faith-path, #bruno-path, #drogozin-path, #jeff-path, #elon-path, #western-path, #branson-path, #allen-path, #hewson-path")

$(document).ready(function(){
    
    $("#esa-agency, #esa-agency text").on("click", function(){
        
        if($("#nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").addClass("hidden-path");
            $("#nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#esa-path path").removeClass("hidden-path");
            $("#esa-tweet, #esa-tweet path").removeClass("hidden-element")
            
        } else {
            
            $("#esa-path path").addClass("hidden-path");
            $("#esa-tweet, #esa-tweet path").addClass("hidden-element");

        }
        
    });
    
    $("#nasa-agency, #nasa-agency text").on("click", function(){
        
        if($("#esa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").addClass("hidden-path");
            $("#esa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#nasa-path path").removeClass("hidden-path");
            $("#nasa-tweet, #nasa-tweet path").removeClass("hidden-element")
            
        } else {
            
            $("#nasa-path path").addClass("hidden-path");
            $("#nasa-tweet, #nasa-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#boeing-agency, #boeing-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#boeing-path path").removeClass("hidden-path");
            $("#boeing-tweet, #boeing-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#boeing-path path").addClass("hidden-path");
            $("#boeing-tweet, #boeing-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#sierra-agency, #sierra-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#sierra-path path").removeClass("hidden-path");
            $("#sierra-tweet, #sierra-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#sierra-path path").addClass("hidden-path");
            $("#sierra-tweet, #sierra-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#ula-agency, #ula-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#ula-path path").removeClass("hidden-path");
            $("#ula-tweet, #ula-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#ula-path path").addClass("hidden-path");
            $("#ula-tweet, #ula-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#rosco-agency, #rosco-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#rosco-path path").removeClass("hidden-path");
            $("#rosco-tweet, #rosco-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#rosco-path path").addClass("hidden-path");
            $("#rosco-tweet, #rosco-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#rosco-agency, #rosco-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#rosco-path path").removeClass("hidden-path");
            $("#rosco-tweet, #rosco-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#rosco-path path").addClass("hidden-path");
            $("#rosco-tweet, #rosco-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#blue-agency, #blue-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#blue-path path").removeClass("hidden-path");
            $("#blue-tweet, #blue-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#blue-path path").addClass("hidden-path");
            $("#blue-tweet, #blue-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#sx-agency, #sx-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #orbital-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #orbital-tweet, #virgin-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#sx-path path").removeClass("hidden-path");
            $("#sx-tweet, #sx-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#sx-path path").addClass("hidden-path");
            $("#sx-tweet, #sx-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#orbital-agency, #orbital-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #virgin-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #virgin-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#orbital-path path").removeClass("hidden-path");
            $("#orbital-tweet, #orbital-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#orbital-path path").addClass("hidden-path");
            $("#orbital-tweet, #orbital-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#virgin-agency, #virgin-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #strato-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #strato-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#virgin-path path").removeClass("hidden-path");
            $("#virgin-tweet, #virgin-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#virgin-path path").addClass("hidden-path");
            $("#virgin-tweet, #virgin-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#strato-agency, #strato-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#strato-path path").removeClass("hidden-path");
            $("#strato-tweet, #strato-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#strato-path path").addClass("hidden-path");
            $("#strato-tweet, #strato-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#lock-agency, #lock-agency text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#lock-path path").removeClass("hidden-path");
            $("#lock-tweet, #lock-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#lock-path path").addClass("hidden-path");
            $("#lock-tweet, #lock-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#jan-ceo, #jan-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#jan-path path").removeClass("hidden-path");
            $("#jan-tweet, #jan-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#jan-path path").addClass("hidden-path");
            $("#jan-tweet, #jan-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#jim-ceo, #jim-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#jim-path path").removeClass("hidden-path");
            $("#jim-tweet, #jim-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#jim-path path").addClass("hidden-path");
            $("#jim-tweet, #jim-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#muilenburg-ceo, #muilenburg-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#muilenburg-path path").removeClass("hidden-path");
            $("#muilenburg-tweet, #muilenburg-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#muilenburg-path path").addClass("hidden-path");
            $("#muilenburg-tweet, #muilenburg-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#faith-ceo, #faith-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#faith-path path").removeClass("hidden-path");
            $("#faith-tweet, #faith-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#faith-path path").addClass("hidden-path");
            $("#faith-tweet, #faith-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#bruno-ceo, #bruno-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#bruno-path path").removeClass("hidden-path");
            $("#bruno-tweet, #bruno-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#bruno-path path").addClass("hidden-path");
            $("#bruno-tweet, #bruno-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#drogozin-ceo, #drogozin-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#drogozin-path path").removeClass("hidden-path");
            $("#drogozin-tweet, #drogozin-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#drogozin-path path").addClass("hidden-path");
            $("#drogozin-tweet, #drogozin-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#jeff-ceo, #jeff-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#jeff-path path").removeClass("hidden-path");
            $("#jeff-tweet, #jeff-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#jeff-path path").addClass("hidden-path");
            $("#jeff-tweet, #jeff-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#elon-ceo, #elon-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #western-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #western-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#elon-path path").removeClass("hidden-path");
            $("#elon-tweet, #elon-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#elon-path path").addClass("hidden-path");
            $("#elon-tweet, #elon-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#western-ceo, #western-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #branson-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #branson-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #branson-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#western-path path").removeClass("hidden-path");
            $("#western-tweet, #western-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#western-path path").addClass("hidden-path");
            $("#western-tweet, #western-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#branson-ceo, #branson-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #allen-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #allen-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #allen-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#branson-path path").removeClass("hidden-path");
            $("#branson-tweet, #branson-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#branson-path path").addClass("hidden-path");
            $("#branson-tweet, #branson-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#allen-ceo, #allen-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #hewson-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #hewson-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #hewson-tweet").addClass("hidden-element");
            
            $("#allen-path path").removeClass("hidden-path");
            $("#allen-tweet, #allen-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#allen-path path").addClass("hidden-path");
            $("#allen-tweet, #allen-tweet path").addClass("hidden-element");
            
        }
        
    });
    
    $("#hewson-ceo, #hewson-ceo text").on("click", function(){
        
        if($("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path").hasClass("hidden-path")){
            
            $("#esa-path path, #nasa-path path, #boeing-path path, #sierra-path path, #ula-path path, #rosco-path path, #blue-path path, #sx-path path, #orbital-path path, #virgin-path path, #lock-path path, #strato-path path, #jan-path path, #jim-path path, #muilenburg-path path, #faith-path path, #bruno-path path, #drogozin-path path, #jeff-path path, #elon-path path, #western-path path, #branson-path path, #allen-path path").addClass("hidden-path");
            $("#esa-tweet, #nasa-tweet, #boeing-tweet, #sierra-tweet, #ula-tweet, #rosco-tweet, #blue-tweet, #sx-tweet, #orbital-tweet, #virgin-tweet, #lock-tweet, #strato-tweet, #jan-tweet, #jim-tweet, #muilenburg-tweet, #faith-tweet, #bruno-tweet, #drogozin-tweet, #jeff-tweet, #elon-tweet, #western-tweet, #branson-tweet, #allen-tweet").addClass("hidden-element");
            
            $("#hewson-path path").removeClass("hidden-path");
            $("#hewson-tweet, #hewson-tweet path").removeClass("hidden-element");
            
        } else {
            
            $("#hewson-path path").addClass("hidden-path");
            $("#hewson-tweet, #hewson-tweet path").addClass("hidden-element");
            
        }
        
    });
    
});


//$(document).ready(function(){
//    
//    $("#esa-agency, #esa-agency text").on("mouseenter", function(){
//        $("#esa-path").removeClass("hidden-path");
//        $("#esa-tweet, #esa-tweet image, #esa-tweet path").removeClass("hidden-element");
//    });
//    $("#esa-agency, #esa-agency text").on("mouseleave", function(){
//        $("#esa-path").addClass("hidden-path");
//        $("#esa-tweet, #esa-tweet image, #esa-tweet path").addClass("hidden-element");
//    });
//    
//    $("#jan-ceo, #jan-ceo text").on("mouseenter", function(){
//        $("#jan-path").removeClass("hidden-path");
//        $("#jan-tweet, #jan-tweet image, #jan-tweet path").removeClass("hidden-element");
//    });
//    $("#jan-ceo, #jan-ceo text").on("mouseleave", function(){
//        $("#jan-path").addClass("hidden-path");
//        $("#jan-tweet, #jan-tweet image, #jan-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#nasa-agency, #nasa-agency text").on("mouseenter", function(){
//        $("#nasa-path").removeClass("hidden-path");
//        $("#nasa-tweet, #nasa-tweet image, #nasa-tweet path").removeClass("hidden-element");
//    });
//    $("#nasa-agency, #nasa-agency text").on("mouseleave", function(){
//        $("#nasa-path").addClass("hidden-path");
//        $("#nasa-tweet, #nasa-tweet image, #nasa-tweet path").addClass("hidden-element");
//    });
//    
//    $("#jim-ceo, #jim-ceo text").on("mouseenter", function(){
//        $("#jim-path").removeClass("hidden-path");
//        $("#jim-tweet, #jim-tweet image, #jim-tweet path").removeClass("hidden-element");
//    });
//    $("#jim-ceo, #jim-ceo text").on("mouseleave", function(){
//        $("#jim-path").addClass("hidden-path");
//        $("#jim-tweet, #jim-tweet image, #jim-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#boeing-agency, #boeing-agency text").on("mouseenter", function(){
//        $("#boeing-path").removeClass("hidden-path");
//        $("#boeing-tweet, #boeing-tweet image, #boeing-tweet path").removeClass("hidden-element");
//    });
//    $("#boeing-agency, #boeing-agency text").on("mouseleave", function(){
//        $("#boeing-path").addClass("hidden-path");
//        $("#boeing-tweet, #boeing-tweet image, #boeing-tweet path").addClass("hidden-element");
//    });
//    
//    $("#muilenburg-ceo, #muilenburg-ceo text").on("mouseenter", function(){
//        $("#muilenburg-path").removeClass("hidden-path");
//        $("#muilenburg-tweet, #muilenburg-tweet image, #muilenburg-tweet path").removeClass("hidden-element");
//    });
//    $("#muilenburg-ceo, #muilenburg-ceo text").on("mouseleave", function(){
//        $("#muilenburg-path").addClass("hidden-path");
//        $("#muilenburg-tweet, #muilenburg-tweet image, #muilenburg-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#sierra-agency, #sierra-agency text").on("mouseenter", function(){
//        $("#sierra-path").removeClass("hidden-path");
//        $("#sierra-tweet, #sierra-tweet image, #sierra-tweet path").removeClass("hidden-element");
//    });
//    $("#sierra-agency, #sierra-agency text").on("mouseleave", function(){
//        $("#sierra-path").addClass("hidden-path");
//        $("#sierra-tweet, #sierra-tweet image, #sierra-tweet path").addClass("hidden-element");
//    });
//    
//    $("#faith-ceo, #faith-ceo text").on("mouseenter", function(){
//        $("#faith-path").removeClass("hidden-path");
//        $("#faith-tweet, #faith-tweet image, #faith-tweet path").removeClass("hidden-element");
//    });
//    $("#faith-ceo, #faith-ceo text").on("mouseleave", function(){
//        $("#faith-path").addClass("hidden-path");
//        $("#faith-tweet, #faith-tweet image, #faith-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#ula-agency, #ula-agency text").on("mouseenter", function(){
//        $("#ula-path").removeClass("hidden-path");
//        $("#ula-tweet, #ula-tweet image, #ula-tweet path").removeClass("hidden-element");
//    });
//    $("#ula-agency, #ula-agency text").on("mouseleave", function(){
//        $("#ula-path").addClass("hidden-path");
//        $("#ula-tweet, #ula-tweet image, #ula-tweet path").addClass("hidden-element");
//    });
//    
//    $("#bruno-ceo, #bruno-ceo text").on("mouseenter", function(){
//        $("#bruno-path").removeClass("hidden-path");
//        $("#bruno-tweet, #bruno-tweet image, #bruno-tweet path").removeClass("hidden-element");
//    });
//    $("#bruno-ceo, #bruno-ceo text").on("mouseleave", function(){
//        $("#bruno-path").addClass("hidden-path");
//        $("#bruno-tweet, #bruno-tweet image, #bruno-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#rosco-agency, #rosco-agency text").on("mouseenter", function(){
//        $("#rosco-path").removeClass("hidden-path");
//        $("#rosco-tweet, #rosco-tweet image, #rosco-tweet path").removeClass("hidden-element");
//    });
//    $("#rosco-agency, #rosco-agency text").on("mouseleave", function(){
//        $("#rosco-path").addClass("hidden-path");
//        $("#rosco-tweet, #rosco-tweet image, #rosco-tweet path").addClass("hidden-element");
//    });
//    
//    $("#drogozin-ceo, #drogozin-ceo text").on("mouseenter", function(){
//        $("#drogozin-path").removeClass("hidden-path");
//        $("#drogozin-tweet, #drogozin-tweet image, #drogozin-tweet path").removeClass("hidden-element");
//    });
//    $("#drogozin-ceo, #drogozin-ceo text").on("mouseleave", function(){
//        $("#drogozin-path").addClass("hidden-path");
//        $("#drogozin-tweet, #drogozin-tweet image, #drogozin-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#blue-agency, #blue-agency text").on("mouseenter", function(){
//        $("#blue-path").removeClass("hidden-path");
//        $("#blue-tweet, #blue-tweet image, #blue-tweet path").removeClass("hidden-element");
//    });
//    $("#blue-agency, #blue-agency text").on("mouseleave", function(){
//        $("#blue-path").addClass("hidden-path");
//        $("#blue-tweet, #blue-tweet image, #blue-tweet path").addClass("hidden-element");
//    });
//    
//    $("#jeff-ceo, #jeff-ceo text").on("mouseenter", function(){
//        $("#jeff-path").removeClass("hidden-path");
//        $("#jeff-tweet, #jeff-tweet image, #jeff-tweet path").removeClass("hidden-element");
//    });
//    $("#jeff-ceo, #jeff-ceo text").on("mouseleave", function(){
//        $("#jeff-path").addClass("hidden-path");
//        $("#jeff-tweet, #jeff-tweet image, #jeff-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#sx-agency, #sx-agency text").on("mouseenter", function(){
//        $("#sx-path").removeClass("hidden-path");
//        $("#sx-tweet, #sx-tweet image, #sx-tweet path").removeClass("hidden-element");
//    });
//    $("#sx-agency, #sx-agency text").on("mouseleave", function(){
//        $("#sx-path").addClass("hidden-path");
//        $("#sx-tweet, #sx-tweet image, #sx-tweet path").addClass("hidden-element");
//    });
//    
//    $("#elon-ceo, #elon-ceo text").on("mouseenter", function(){
//        $("#elon-path").removeClass("hidden-path");
//        $("#elon-tweet, #elon-tweet image, #elon-tweet path").removeClass("hidden-element");
//    });
//    $("#elon-ceo, #elon-ceo text").on("mouseleave", function(){
//        $("#elon-path").addClass("hidden-path");
//        $("#elon-tweet, #elon-tweet image, #elon-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#orbital-agency, #orbital-agency text").on("mouseenter", function(){
//        $("#orbital-path").removeClass("hidden-path");
//        $("#orbital-tweet, #orbital-tweet image, #orbital-tweet path").removeClass("hidden-element");
//    });
//    $("#orbital-agency, #orbital-agency text").on("mouseleave", function(){
//        $("#orbital-path").addClass("hidden-path");
//        $("#orbital-tweet, #orbital-tweet image, #orbital-tweet path").addClass("hidden-element");
//    });
//    
//    $("#western-ceo, #western-ceo text").on("mouseenter", function(){
//        $("#western-path").removeClass("hidden-path");
//        $("#western-tweet, #western-tweet image, #western-tweet path").removeClass("hidden-element");
//    });
//    $("#western-ceo, #western-ceo text").on("mouseleave", function(){
//        $("#western-path").addClass("hidden-path");
//        $("#western-tweet, #western-tweet image, #western-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#virgin-agency, #virgin-agency text").on("mouseenter", function(){
//        $("#virgin-path").removeClass("hidden-path");
//        $("#virgin-tweet, #virgin-tweet image, #virgin-tweet path").removeClass("hidden-element");
//    });
//    $("#virgin-agency, #virgin-agency text").on("mouseleave", function(){
//        $("#virgin-path").addClass("hidden-path");
//        $("#virgin-tweet, #virgin-tweet image, #virgin-tweet path").addClass("hidden-element");
//    });
//    
//    $("#branson-ceo, #branson-ceo text").on("mouseenter", function(){
//        $("#branson-path").removeClass("hidden-path");
//        $("#branson-tweet, #branson-tweet image, #branson-tweet path").removeClass("hidden-element");
//    });
//    $("#branson-ceo, #branson-ceo text").on("mouseleave", function(){
//        $("#branson-path").addClass("hidden-path");
//        $("#branson-tweet, #branson-tweet image, #branson-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#strato-agency, #strato-agency text").on("mouseenter", function(){
//        $("#strato-path").removeClass("hidden-path");
//        $("#strato-tweet, #strato-tweet image, #strato-tweet path").removeClass("hidden-element");
//    });
//    $("#strato-agency, #strato-agency text").on("mouseleave", function(){
//        $("#strato-path").addClass("hidden-path");
//        $("#strato-tweet, #strato-tweet image, #strato-tweet path").addClass("hidden-element");
//    });
//    
//    $("#allen-ceo, #allen-ceo text").on("mouseenter", function(){
//        $("#allen-path").removeClass("hidden-path");
//        $("#allen-tweet, #allen-tweet image, #allen-tweet path").removeClass("hidden-element");
//    });
//    $("#allen-ceo, #allen-ceo text").on("mouseleave", function(){
//        $("#allen-path").addClass("hidden-path");
//        $("#allen-tweet, #allen-tweet image, #allen-tweet path").addClass("hidden-element");
//    });
//    
//    
//    $("#lock-agency, #lock-agency text").on("mouseenter", function(){
//        $("#lock-path").removeClass("hidden-path");
//        $("#lock-tweet, #lock-tweet image, #lock-tweet path").removeClass("hidden-element");
//    });
//    $("#lock-agency, #lock-agency text").on("mouseleave", function(){
//        $("#lock-path").addClass("hidden-path");
//        $("#lock-tweet, #lock-tweet image, #lock-tweet path").addClass("hidden-element");
//    });
//    
//    $("#hewson-ceo, #hewson-ceo text").on("mouseenter", function(){
//        $("#hewson-path").removeClass("hidden-path");
//        $("#hewson-tweet, #hewson-tweet image, #hewson-tweet path").removeClass("hidden-element");
//    });
//    $("#hewson-ceo, #hewson-ceo text").on("mouseleave", function(){
//        $("#hewson-path").addClass("hidden-path");
//        $("#hewson-tweet, #hewson-tweet image, #hewson-tweet path").addClass("hidden-element");
//    });
//    
//})


// Sitemap - protocol 8 viz-1

$(document).ready(function(){
    
//    $("#2008, #2008-sel").on("click", function(){
//        
//        if($("#2009-sel, #2010-sel, #2011-sel, #2012-sel, #2013-sel, #2014-sel, #2015-sel, #2016-sel, #2017-sel, #2018-sel").hasClass("hidden-element")){
//            
//            $("#2009-sel, #2010-sel, #2011-sel, #2012-sel, #2013-sel, #2014-sel, #2015-sel, #2016-sel, #2017-sel, #2018-sel").removeClass("st7").addClass("hidden-element");
//            $("#spx09-1, #spx09-2, #spx09-3, #spx09-4, #spx09-5, #spx09-6, #blo09-1, #blo09-2, #blo09-3, #blo09-4, #blo09-5, #blo09-6").addClass("unselected-element");
//        
//            $("#2008-sel").toggleClass("hidden-element").toggleClass("st7");
//            $("#spx08-1, #spx08-2, #spx08-3, #spx08-4, #spx08-5, #spx08-6, #blo08-1, #blo08-2, #blo08-3, #blo08-4, #blo08-5, #blo08-6").toggleClass("unselected-element");
//            
//        } else {
//            
//            $("#2008-sel").toggleClass("hidden-element").toggleClass("st7");
//            $("#spx08-1, #spx08-2, #spx08-3, #spx08-4, #spx08-5, #spx08-6, #blo08-1, #blo08-2, #blo08-3, #blo08-4, #blo08-5, #blo08-6").toggleClass("unselected-element");
//            
//        }
//    })
    
    $(".timeline-button").on("click", function(event){
        $(".timeline-button .button-path").addClass("hidden-element");
        $(".timeline-button .button-path").removeClass("st7");
        $(this).children(".button-path").removeClass("hidden-element");
        $(this).children(".button-path").addClass("st7");
        $("#spx-motto, #bo-motto").toggleClass("hidden-element");
        
        
        $(".image-box").children('image').addClass("unselected-element");
        let currentYear = $(this).attr('data-year');
        $("#blo" + currentYear).children('image').not(".big-images").removeClass("unselected-element");
        $("#spx" + currentYear).children('image').not(".big-images").removeClass("unselected-element");
    })
    
    
    $("#spx08-1").on("mouseenter", function(){
        $("#spx08-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx08-1").on("mouseleave", function(){
        $("#spx08-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx08-2").on("mouseenter", function(){
        $("#spx08-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx08-2").on("mouseleave", function(){
        $("#spx08-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx08-3").on("mouseenter", function(){
        $("#spx08-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx08-3").on("mouseleave", function(){
        $("#spx08-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx08-4").on("mouseenter", function(){
        $("#spx08-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx08-4").on("mouseleave", function(){
        $("#spx08-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx08-5").on("mouseenter", function(){
        $("#spx08-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx08-5").on("mouseleave", function(){
        $("#spx08-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx08-6").on("mouseenter", function(){
        $("#spx08-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx08-6").on("mouseleave", function(){
        $("#spx08-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    $("#blo08-1, #blo08-2, #blo08-3, #blo08-4, #blo08-5, #blo08-6").on("mouseenter", function(){
        $("#data-na").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo08-1, #blo08-2, #blo08-3, #blo08-4, #blo08-5, #blo08-6").on("mouseleave", function(){
        $("#data-na").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    
    $("#spx09-1").on("mouseenter", function(){
        $("#spx09-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx09-1").on("mouseleave", function(){
        $("#spx09-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx09-2").on("mouseenter", function(){
        $("#spx09-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx09-2").on("mouseleave", function(){
        $("#spx09-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx09-3").on("mouseenter", function(){
        $("#spx09-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx09-3").on("mouseleave", function(){
        $("#spx09-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx09-4").on("mouseenter", function(){
        $("#spx09-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx09-4").on("mouseleave", function(){
        $("#spx09-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx09-5").on("mouseenter", function(){
        $("#spx09-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx09-5").on("mouseleave", function(){
        $("#spx09-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx09-6").on("mouseenter", function(){
        $("#spx09-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx09-6").on("mouseleave", function(){
        $("#spx09-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    $("#blo09-1, #blo09-2, #blo09-3, #blo09-4, #blo09-5, #blo09-6").on("mouseenter", function(){
        $("#data-na").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo09-1, #blo09-2, #blo09-3, #blo09-4, #blo09-5, #blo09-6").on("mouseleave", function(){
        $("#data-na").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    
    $("#spx10-1").on("mouseenter", function(){
        $("#spx10-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx10-1").on("mouseleave", function(){
        $("#spx10-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx10-2").on("mouseenter", function(){
        $("#spx10-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx10-2").on("mouseleave", function(){
        $("#spx10-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx10-3").on("mouseenter", function(){
        $("#spx10-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx10-3").on("mouseleave", function(){
        $("#spx10-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx10-4").on("mouseenter", function(){
        $("#spx10-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx10-4").on("mouseleave", function(){
        $("#spx10-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx10-5").on("mouseenter", function(){
        $("#spx10-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx10-5").on("mouseleave", function(){
        $("#spx10-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx10-6").on("mouseenter", function(){
        $("#spx10-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx10-6").on("mouseleave", function(){
        $("#spx10-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    $("#blo10-1, #blo10-2, #blo10-3, #blo10-4, #blo10-5, #blo10-6").on("mouseenter", function(){
        $("#data-na").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo10-1, #blo10-2, #blo10-3, #blo10-4, #blo10-5, #blo10-6").on("mouseleave", function(){
        $("#data-na").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    
    $("#spx11-1").on("mouseenter", function(){
        $("#spx11-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx11-1").on("mouseleave", function(){
        $("#spx11-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx11-2").on("mouseenter", function(){
        $("#spx11-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx11-2").on("mouseleave", function(){
        $("#spx11-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx11-3").on("mouseenter", function(){
        $("#spx11-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx11-3").on("mouseleave", function(){
        $("#spx11-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx11-4").on("mouseenter", function(){
        $("#spx11-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx11-4").on("mouseleave", function(){
        $("#spx11-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx11-5").on("mouseenter", function(){
        $("#spx11-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx11-5").on("mouseleave", function(){
        $("#spx11-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx11-6").on("mouseenter", function(){
        $("#spx11-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx11-6").on("mouseleave", function(){
        $("#spx11-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    $("#blo11-1, #blo11-2, #blo11-3, #blo11-4, #blo11-5, #blo11-6").on("mouseenter", function(){
        $("#data-na").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo11-1, #blo11-2, #blo11-3, #blo11-4, #blo11-5, #blo11-6").on("mouseleave", function(){
        $("#data-na").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    
    $("#spx12-1").on("mouseenter", function(){
        $("#spx12-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx12-1").on("mouseleave", function(){
        $("#spx12-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx12-2").on("mouseenter", function(){
        $("#spx12-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx12-2").on("mouseleave", function(){
        $("#spx12-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx12-3").on("mouseenter", function(){
        $("#spx12-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx12-3").on("mouseleave", function(){
        $("#spx12-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx12-4").on("mouseenter", function(){
        $("#spx12-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx12-4").on("mouseleave", function(){
        $("#spx12-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx12-5").on("mouseenter", function(){
        $("#spx12-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx12-5").on("mouseleave", function(){
        $("#spx12-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx12-6").on("mouseenter", function(){
        $("#spx12-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx12-6").on("mouseleave", function(){
        $("#spx12-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    $("#blo12-1, #blo12-2, #blo12-3, #blo12-4, #blo12-5, #blo12-6").on("mouseenter", function(){
        $("#data-na").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo12-1, #blo12-2, #blo12-3, #blo12-4, #blo12-5, #blo12-6").on("mouseleave", function(){
        $("#data-na").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    
    $("#spx13-1").on("mouseenter", function(){
        $("#spx13-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx13-1").on("mouseleave", function(){
        $("#spx13-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx13-2").on("mouseenter", function(){
        $("#spx13-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx13-2").on("mouseleave", function(){
        $("#spx13-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx13-3").on("mouseenter", function(){
        $("#spx13-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx13-3").on("mouseleave", function(){
        $("#spx13-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx13-4").on("mouseenter", function(){
        $("#spx13-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx13-4").on("mouseleave", function(){
        $("#spx13-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx13-5").on("mouseenter", function(){
        $("#spx13-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx13-5").on("mouseleave", function(){
        $("#spx13-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx13-6").on("mouseenter", function(){
        $("#spx13-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx13-6").on("mouseleave", function(){
        $("#spx13-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    $("#blo13-1, #blo13-2, #blo13-3, #blo13-4, #blo13-5, #blo13-6").on("mouseenter", function(){
        $("#data-na").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo13-1, #blo13-2, #blo13-3, #blo13-4, #blo13-5, #blo13-6").on("mouseleave", function(){
        $("#data-na").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    
    $("#spx14-1").on("mouseenter", function(){
        $("#spx14-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx14-1").on("mouseleave", function(){
        $("#spx14-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx14-2").on("mouseenter", function(){
        $("#spx14-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx14-2").on("mouseleave", function(){
        $("#spx14-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx14-3").on("mouseenter", function(){
        $("#spx14-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx14-3").on("mouseleave", function(){
        $("#spx14-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx14-4").on("mouseenter", function(){
        $("#spx14-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx14-4").on("mouseleave", function(){
        $("#spx14-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx14-5").on("mouseenter", function(){
        $("#spx14-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx14-5").on("mouseleave", function(){
        $("#spx14-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx14-6").on("mouseenter", function(){
        $("#spx14-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx14-6").on("mouseleave", function(){
        $("#spx14-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    $("#blo14-1").on("mouseenter", function(){
        $("#blo14-1-big").removeClass("unselected-element");
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo14-1").on("mouseleave", function(){
        $("#blo14-1-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo14-2").on("mouseenter", function(){
        $("#blo14-1-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo14-2").on("mouseleave", function(){
        $("#blo14-1-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo14-3").on("mouseenter", function(){
        $("#blo14-1-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo14-3").on("mouseleave", function(){
        $("#blo14-1-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo14-4").on("mouseenter", function(){
        $("#blo14-1-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo14-4").on("mouseleave", function(){
        $("#blo14-1-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo14-5").on("mouseenter", function(){
        $("#blo14-1-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo14-5").on("mouseleave", function(){
        $("#blo14-1-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo14-6").on("mouseenter", function(){
        $("#blo14-1-big").removeClass("unselected-element");
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo14-6").on("mouseleave", function(){
        $("#blo14-1-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    
    
    $("#spx15-1").on("mouseenter", function(){
        $("#spx15-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx15-1").on("mouseleave", function(){
        $("#spx15-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx15-2").on("mouseenter", function(){
        $("#spx15-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx15-2").on("mouseleave", function(){
        $("#spx15-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx15-3").on("mouseenter", function(){
        $("#spx15-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx15-3").on("mouseleave", function(){
        $("#spx15-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx15-4").on("mouseenter", function(){
        $("#spx15-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx15-4").on("mouseleave", function(){
        $("#spx15-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx15-5").on("mouseenter", function(){
        $("#spx15-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx15-5").on("mouseleave", function(){
        $("#spx15-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx15-6").on("mouseenter", function(){
        $("#spx15-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx15-6").on("mouseleave", function(){
        $("#spx15-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    $("#blo15-1").on("mouseenter", function(){
        $("#blo15-1-big").removeClass("unselected-element");
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo15-1").on("mouseleave", function(){
        $("#blo15-1-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo15-2").on("mouseenter", function(){
        $("#blo15-2-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo15-2").on("mouseleave", function(){
        $("#blo15-2-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo15-3").on("mouseenter", function(){
        $("#blo15-3-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo15-3").on("mouseleave", function(){
        $("#blo15-3-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo15-4").on("mouseenter", function(){
        $("#blo15-4-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo15-4").on("mouseleave", function(){
        $("#blo15-4-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo15-5").on("mouseenter", function(){
        $("#blo15-5-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo15-5").on("mouseleave", function(){
        $("#blo15-5-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo15-6").on("mouseenter", function(){
        $("#blo15-6-big").removeClass("unselected-element");
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo15-6").on("mouseleave", function(){
        $("#blo15-6-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    
    
    $("#spx16-1").on("mouseenter", function(){
        $("#spx16-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx16-1").on("mouseleave", function(){
        $("#spx16-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx16-2").on("mouseenter", function(){
        $("#spx16-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx16-2").on("mouseleave", function(){
        $("#spx16-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx16-3").on("mouseenter", function(){
        $("#spx16-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx16-3").on("mouseleave", function(){
        $("#spx16-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx16-4").on("mouseenter", function(){
        $("#spx16-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx16-4").on("mouseleave", function(){
        $("#spx16-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx16-5").on("mouseenter", function(){
        $("#spx16-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx16-5").on("mouseleave", function(){
        $("#spx16-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx16-6").on("mouseenter", function(){
        $("#spx16-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx16-6").on("mouseleave", function(){
        $("#spx16-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    $("#blo16-1").on("mouseenter", function(){
        $("#blo16-1-big").removeClass("unselected-element");
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo16-1").on("mouseleave", function(){
        $("#blo16-1-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo16-2").on("mouseenter", function(){
        $("#blo16-2-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo16-2").on("mouseleave", function(){
        $("#blo16-2-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo16-3").on("mouseenter", function(){
        $("#blo16-3-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo16-3").on("mouseleave", function(){
        $("#blo16-3-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo16-4").on("mouseenter", function(){
        $("#blo16-4-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo16-4").on("mouseleave", function(){
        $("#blo16-4-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo16-5").on("mouseenter", function(){
        $("#blo16-5-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo16-5").on("mouseleave", function(){
        $("#blo16-5-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo16-6").on("mouseenter", function(){
        $("#blo16-6-big").removeClass("unselected-element");
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo16-6").on("mouseleave", function(){
        $("#blo16-6-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    
    
    $("#spx17-1").on("mouseenter", function(){
        $("#spx17-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx17-1").on("mouseleave", function(){
        $("#spx17-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx17-2").on("mouseenter", function(){
        $("#spx17-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx17-2").on("mouseleave", function(){
        $("#spx17-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx17-3").on("mouseenter", function(){
        $("#spx17-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx17-3").on("mouseleave", function(){
        $("#spx17-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx17-4").on("mouseenter", function(){
        $("#spx17-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx17-4").on("mouseleave", function(){
        $("#spx17-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx17-5").on("mouseenter", function(){
        $("#spx17-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx17-5").on("mouseleave", function(){
        $("#spx17-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx17-6").on("mouseenter", function(){
        $("#spx17-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx17-6").on("mouseleave", function(){
        $("#spx17-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    
    $("#blo17-1").on("mouseenter", function(){
        $("#blo17-1-big").removeClass("unselected-element");
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo17-1").on("mouseleave", function(){
        $("#blo17-1-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo17-2").on("mouseenter", function(){
        $("#blo17-2-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo17-2").on("mouseleave", function(){
        $("#blo17-2-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo17-3").on("mouseenter", function(){
        $("#blo17-3-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo17-3").on("mouseleave", function(){
        $("#blo17-3-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo17-4").on("mouseenter", function(){
        $("#blo17-4-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo17-4").on("mouseleave", function(){
        $("#blo17-4-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo17-5").on("mouseenter", function(){
        $("#blo17-5-big").removeClass("unselected-element"); 
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo17-5").on("mouseleave", function(){
        $("#blo17-5-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo17-6").on("mouseenter", function(){
        $("#blo17-6-big").removeClass("unselected-element");
        $("#blo-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo17-6").on("mouseleave", function(){
        $("#blo17-6-big").addClass("unselected-element"); 
        $("#blo-motto, #bo-motto").removeClass("hidden-element");
    });
    
    
    $("#spx18-1").on("mouseenter", function(){
        $("#spx18-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx18-1").on("mouseleave", function(){
        $("#spx18-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx18-2").on("mouseenter", function(){
        $("#spx18-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx18-2").on("mouseleave", function(){
        $("#spx18-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx18-3").on("mouseenter", function(){
        $("#spx18-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx18-3").on("mouseleave", function(){
        $("#spx18-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx18-4").on("mouseenter", function(){
        $("#spx18-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx18-4").on("mouseleave", function(){
        $("#spx18-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx18-5").on("mouseenter", function(){
        $("#spx18-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#spx18-5").on("mouseleave", function(){
        $("#spx18-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#spx18-6").on("mouseenter", function(){
        $("#spx18-6-big").removeClass("unselected-element");
        $("#spx-motto").addClass("hidden-element");
    });
    $("#spx18-6").on("mouseleave", function(){
        $("#spx18-6-big").addClass("unselected-element"); 
        $("#spx-motto").removeClass("hidden-element");
    });
    
    $("#blo18-1").on("mouseenter", function(){
        $("#blo18-1-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo18-1").on("mouseleave", function(){
        $("#blo18-1-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo18-2").on("mouseenter", function(){
        $("#blo18-2-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo18-2").on("mouseleave", function(){
        $("#blo18-2-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo18-3").on("mouseenter", function(){
        $("#blo18-3-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo18-3").on("mouseleave", function(){
        $("#blo18-3-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo18-4").on("mouseenter", function(){
        $("#blo18-4-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo18-4").on("mouseleave", function(){
        $("#blo18-4-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo18-5").on("mouseenter", function(){
        $("#blo18-5-big").removeClass("unselected-element"); 
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo18-5").on("mouseleave", function(){
        $("#blo18-5-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    $("#blo18-6").on("mouseenter", function(){
        $("#blo18-6-big").removeClass("unselected-element");
        $("#spx-motto, #bo-motto").addClass("hidden-element");
    });
    $("#blo18-6").on("mouseleave", function(){
        $("#blo18-6-big").addClass("unselected-element"); 
        $("#spx-motto, #bo-motto").removeClass("hidden-element");
    });
    

    
    
})



// Treemap - protocol 8 viz-2


// $("#leg-foto, #leg-render, #leg-technical-drawing, #leg-footage, #leg-concept, #foto, #render, #technical-drawing, #footage, #concept")

$(document).ready(function(){
    
    $(".tooltip-treemap").hover(function(){
        let tooltip = $(this).attr("tooltip")
        
        $("#tooltip-" + tooltip).toggleClass("hidden-element");
        
    })
    
    $("#leg-foto, #leg-foto-sel, #foto").on("mouseenter", function(){
        $("#leg-render, #leg-technical-drawing, #leg-footage, #leg-concept, #render, #technical-drawing, #footage, #concept").toggleClass("hidden-category");
        $("#leg-foto-sel").toggleClass("hidden-element");
    });
    
    $("#leg-foto, #leg-foto-sel, #foto").on("mouseleave", function(){
        $("#leg-render, #leg-technical-drawing, #leg-footage, #leg-concept, #render, #technical-drawing, #footage, #concept").toggleClass("hidden-category");
        $("#leg-foto-sel").toggleClass("hidden-element");
    });
    
    
    $("#leg-render, #leg-render-sel, #render").on("mouseenter", function(){
        $("#leg-foto, #leg-technical-drawing, #leg-footage, #leg-concept, #foto, #technical-drawing, #footage, #concept").toggleClass("hidden-category");
        $("#leg-render-sel").toggleClass("hidden-element");
    });
    
    $("#leg-render, #leg-render-sel, #render").on("mouseleave", function(){
        $("#leg-foto, #leg-technical-drawing, #leg-footage, #leg-concept, #foto, #technical-drawing, #footage, #concept").toggleClass("hidden-category");
        $("#leg-render-sel").toggleClass("hidden-element");
    });
    
    
    $("#leg-technical-drawing, #leg-technical-drawing-sel, #technical-drawing").on("mouseenter", function(){
        $("#leg-foto, #leg-render, #leg-footage, #leg-concept, #foto, #render, #footage, #concept").toggleClass("hidden-category");
        $("#leg-technical-drawing-sel").toggleClass("hidden-element");
    });
    
    $("#leg-technical-drawing, #leg-technical-drawing-sel, #technical-drawing").on("mouseleave", function(){
        $("#leg-foto, #leg-render, #leg-footage, #leg-concept, #foto, #render, #footage, #concept").toggleClass("hidden-category");
        $("#leg-technical-drawing-sel").toggleClass("hidden-element");
    });
    
    
    $("#leg-footage, #leg-footage-sel, #footage").on("mouseenter", function(){
        $("#leg-foto, #leg-render, #leg-technical-drawing, #leg-concept, #foto, #render, #technical-drawing, #concept").toggleClass("hidden-category");
        $("#leg-footage-sel").toggleClass("hidden-element");
    });
    
    $("#leg-footage, #leg-footage-sel, #footage").on("mouseleave", function(){
        $("#leg-foto, #leg-render, #leg-technical-drawing, #leg-concept, #foto, #render, #technical-drawing, #concept").toggleClass("hidden-category");
        $("#leg-footage-sel").toggleClass("hidden-element");
    });
    
    
    $("#leg-concept, #leg-concept-sel, #concept").on("mouseenter", function(){
        $("#leg-foto, #leg-render, #leg-technical-drawing, #leg-footage, #foto, #render, #technical-drawing, #footage").toggleClass("hidden-category");
        $("#leg-concept-sel").toggleClass("hidden-element");
    });
    
    $("#leg-concept, #leg-concept-sel, #concept").on("mouseleave", function(){
        $("#leg-foto, #leg-render, #leg-technical-drawing, #leg-footage, #foto, #render, #technical-drawing, #footage").toggleClass("hidden-category");
        $("#leg-concept-sel").toggleClass("hidden-element");
    });
    
    //
    
    $("#leg-desc, #leg-desc text, #leg-desc-sel, #desc").on("mouseenter", function(){
        $("#leg-cta, #leg-tech-data, #cta, #tech-data").toggleClass("hidden-category");
        $("#leg-desc-sel").toggleClass("hidden-element");
    });
    
    $("#leg-desc, #leg-desc text, #leg-desc-sel, #desc").on("mouseleave", function(){
        $("#leg-cta, #leg-tech-data, #cta, #tech-data").toggleClass("hidden-category");
        $("#leg-desc-sel").toggleClass("hidden-element");
    });
    
    
    $("#leg-cta, #leg-cta text, #leg-cta-sel, #cta").on("mouseenter", function(){
        $("#leg-desc, #leg-tech-data, #desc, #tech-data").toggleClass("hidden-category");
        $("#leg-cta-sel").toggleClass("hidden-element");
    });
    
    $("#leg-cta, #leg-cta text, #leg-cta-sel, #cta").on("mouseleave", function(){
        $("#leg-desc, #leg-tech-data, #desc, #tech-data").toggleClass("hidden-category");
        $("#leg-cta-sel").toggleClass("hidden-element");
    });
    
    
    $("#leg-tech-data, #leg-tech-data text, #leg-tech-data-sel, #tech-data").on("mouseenter", function(){
        $("#leg-desc, #leg-cta, #desc, #cta").toggleClass("hidden-category");
        $("#leg-tech-data-sel").toggleClass("hidden-element");
    });
    
    $("#leg-tech-data, #leg-tech-data text, #leg-tech-data-sel, #tech-data").on("mouseleave", function(){
        $("#leg-desc, #leg-cta, #desc, #cta").toggleClass("hidden-category");
        $("#leg-tech-data-sel").toggleClass("hidden-element");
    });
    
    
//    $("#leg-foto, #foto").on("mouseenter", function(){
//        $("#leg-render, #leg-technical-drawing, #leg-footage, #leg-concept, #render, #technical-drawing, #footage, #concept").addClass("hidden-category");
//    });
//    $("#leg-foto, #foto").on("mouseleave", function(){
//        $("#leg-render, #leg-technical-drawing, #leg-footage, #leg-concept, #render, #technical-drawing, #footage, #concept").removeClass("hidden-category");
//    });
//    
//    $("#leg-render, #render").on("mouseenter", function(){
//        $("#leg-foto, #leg-technical-drawing, #leg-footage, #leg-concept, #foto, #technical-drawing, #footage, #concept").addClass("hidden-category");
//    });
//    $("#leg-render, #render").on("mouseleave", function(){
//        $("#leg-foto, #leg-technical-drawing, #leg-footage, #leg-concept, #foto, #technical-drawing, #footage, #concept").removeClass("hidden-category");
//    });
//   
//    $("#leg-technical-drawing, #technical-drawing").on("mouseenter", function(){
//        $("#leg-foto, #leg-render, #leg-footage, #leg-concept, #foto, #render, #footage, #concept").addClass("hidden-category");
//    });
//    $("#leg-technical-drawing, #technical-drawing").on("mouseleave", function(){
//        $("#leg-foto, #leg-render, #leg-footage, #leg-concept, #foto, #render, #footage, #concept").removeClass("hidden-category");
//    });
//    
//    $("#leg-footage, #footage").on("mouseenter", function(){
//        $("#leg-foto, #leg-render, #leg-technical-drawing, #leg-concept, #foto, #render, #technical-drawing, #concept").addClass("hidden-category");
//    });
//    $("#leg-footage, #footage").on("mouseleave", function(){
//        $("#leg-foto, #leg-render, #leg-technical-drawing, #leg-concept, #foto, #render, #technical-drawing, #concept").removeClass("hidden-category");
//    });
//    
//    $("#leg-concept, #concept").on("mouseenter", function(){
//        $("#leg-foto, #leg-render, #leg-technical-drawing, #leg-footage, #foto, #render, #technical-drawing, #footage").addClass("hidden-category");
//    });
//    $("#leg-concept, #concept").on("mouseleave", function(){
//        $("#leg-foto, #leg-render, #leg-technical-drawing, #leg-footage, #foto, #render, #technical-drawing, #footage").removeClass("hidden-category");
//    });
//    
//    
//    //("#leg-desc, #leg-cta, #leg-tech-data, #desc, #cta, #tech-data")
//    
//    
//    $("#leg-desc, #desc").on("mouseenter", function(){
//        $("#leg-cta, #leg-tech-data, #cta, #tech-data").addClass("hidden-category");
//    });
//    $("#leg-desc, #desc").on("mouseleave", function(){
//        $("#leg-cta, #leg-tech-data, #cta, #tech-data").removeClass("hidden-category");
//    });
//
//    $("#leg-cta, #cta").on("mouseenter", function(){
//        $("#leg-desc, #leg-tech-data, #desc, #tech-data").addClass("hidden-category");
//    });
//    $("#leg-cta, #cta").on("mouseleave", function(){
//        $("#leg-desc, #leg-tech-data, #desc, #tech-data").removeClass("hidden-category");
//    });
//    
//    $("#leg-tech-data, #tech-data").on("mouseenter", function(){
//        $("#leg-cta, #leg-desc, #cta, #desc").addClass("hidden-category");
//    });
//    $("#leg-tech-data, #tech-data").on("mouseleave", function(){
//        $("#leg-cta, #leg-desc, #cta, #desc").removeClass("hidden-category");
//    });
    
});
				

// Reddit Scrape - protocol 9

// #space-main, #spaceporn-main, #nasa-main, #spacex-main, #elon-main, #spaceflight-main, #spacexlounge-main, #mars-main, #spaceexploration-main, #blueorigin-main, #ula-main, #esa-main, #iss-main 

$(document).ready(function(){
    
    $("text#space-main-leg").hover(function(){
        
        if($("#spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#space-main circle").toggleClass("st11 selected");
            $("g#space-main-words").toggleClass("hidden-element");
            $("text#space-main-leg").toggleClass("st4 st8");
            $("g#space-main-threads").toggleClass("hidden-element");
            $("#space-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#space-main circle").toggleClass("st11 selected");
            $("g#space-main-words").toggleClass("hidden-element");
            $("text#space-main-leg").toggleClass("st4 st8");
            $("g#space-main-threads").toggleClass("hidden-element");
            $("#space-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#spaceporn-main-leg").hover(function(){
        
        if($("#space-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#spaceporn-main circle").toggleClass("st11 selected");
            $("g#spaceporn-main-words").toggleClass("hidden-element");
            $("text#spaceporn-main-leg").toggleClass("st4 st8");
            $("g#spaceporn-main-threads").toggleClass("hidden-element");
            $("#spaceporn-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#spaceporn-main circle").toggleClass("st11 selected");
            $("g#spaceporn-main-words").toggleClass("hidden-element");
            $("text#spaceporn-main-leg").toggleClass("st4 st8");
            $("g#spaceporn-main-threads").toggleClass("hidden-element");
            $("#spaceporn-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#nasa-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#nasa-main circle").toggleClass("st11 selected");
            $("g#nasa-main-words").toggleClass("hidden-element");
            $("text#nasa-main-leg").toggleClass("st4 st8");
            $("g#nasa-main-threads").toggleClass("hidden-element");
            $("#nasa-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#nasa-main circle").toggleClass("st11 selected");
            $("g#nasa-main-words").toggleClass("hidden-element");
            $("text#nasa-main-leg").toggleClass("st4 st8");
            $("g#nasa-main-threads").toggleClass("hidden-element");
            $("#nasa-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#spacex-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #nasa-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #nasa-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#spacex-main circle").toggleClass("st11 selected");
            $("g#spacex-main-words").toggleClass("hidden-element");
            $("text#spacex-main-leg").toggleClass("st4 st8");
            $("g#spacex-main-threads").toggleClass("hidden-element");
            $("#spacex-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#spacex-main circle").toggleClass("st11 selected");
            $("g#spacex-main-words").toggleClass("hidden-element");
            $("text#spacex-main-leg").toggleClass("st4 st8");
            $("g#spacex-main-threads").toggleClass("hidden-element");
            $("#spacex-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#elon-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#elon-main circle").toggleClass("st11 selected");
            $("g#elon-main-words").toggleClass("hidden-element");
            $("text#elon-main-leg").toggleClass("st4 st8");
            $("g#elon-main-threads").toggleClass("hidden-element");
            $("#elon-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#elon-main circle").toggleClass("st11 selected");
            $("g#elon-main-words").toggleClass("hidden-element");
            $("text#elon-main-leg").toggleClass("st4 st8");
            $("g#elon-main-threads").toggleClass("hidden-element");
            $("#elon-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#spaceflight-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#spaceflight-main circle").toggleClass("st11 selected");
            $("g#spaceflight-main-words").toggleClass("hidden-element");
            $("text#spaceflight-main-leg").toggleClass("st4 st8");
            $("g#spaceflight-main-threads").toggleClass("hidden-element");
            $("#spaceflight-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#spaceflight-main circle").toggleClass("st11 selected");
            $("g#spaceflight-main-words").toggleClass("hidden-element");
            $("text#spaceflight-main-leg").toggleClass("st4 st8");
            $("g#spaceflight-main-threads").toggleClass("hidden-element");
            $("#spaceflight-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#spacexlounge-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#spacexlounge-main circle").toggleClass("st11 selected");
            $("g#spacexlounge-main-words").toggleClass("hidden-element");
            $("text#spacexlounge-main-leg").toggleClass("st4 st8");
            $("g#spacexlounge-main-threads").toggleClass("hidden-element");
            $("#spacexlounge-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#spacexlounge-main circle").toggleClass("st11 selected");
            $("g#spacexlounge-main-words").toggleClass("hidden-element");
            $("text#spacexlounge-main-leg").toggleClass("st4 st8");
            $("g#spacexlounge-main-threads").toggleClass("hidden-element");
            $("#spacexlounge-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#mars-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#mars-main circle").toggleClass("st11 selected");
            $("g#mars-main-words").toggleClass("hidden-element");
            $("text#mars-main-leg").toggleClass("st4 st8");
            $("g#mars-main-threads").toggleClass("hidden-element");
            $("#mars-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#mars-main circle").toggleClass("st11 selected");
            $("g#mars-main-words").toggleClass("hidden-element");
            $("text#mars-main-leg").toggleClass("st4 st8");
            $("g#mars-main-threads").toggleClass("hidden-element");
            $("#mars-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#spaceexploration-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#spaceexploration-main circle").toggleClass("st11 selected");
            $("g#spaceexploration-main-words").toggleClass("hidden-element");
            $("text#spaceexploration-main-leg").toggleClass("st4 st8");
            $("g#spaceexploration-main-threads").toggleClass("hidden-element");
            $("#spaceexploration-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#spaceexploration-main circle").toggleClass("st11 selected");
            $("g#spaceexploration-main-words").toggleClass("hidden-element");
            $("text#spaceexploration-main-leg").toggleClass("st4 st8");
            $("g#spaceexploration-main-threads").toggleClass("hidden-element");
            $("#spaceexploration-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#blueorigin-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #ula-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #ula-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#blueorigin-main circle").toggleClass("st11 selected");
            $("g#blueorigin-main-words").toggleClass("hidden-element");
            $("text#blueorigin-main-leg").toggleClass("st4 st8");
            $("g#blueorigin-main-threads").toggleClass("hidden-element");
            $("#blueorigin-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#blueorigin-main circle").toggleClass("st11 selected");
            $("g#blueorigin-main-words").toggleClass("hidden-element");
            $("text#blueorigin-main-leg").toggleClass("st4 st8");
            $("g#blueorigin-main-threads").toggleClass("hidden-element");
            $("#blueorigin-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#ula-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #esa-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #esa-main circle, #iss-main circle").toggleClass("selected")
            
            $("#ula-main circle").toggleClass("st11 selected");
            $("g#ula-main-words").toggleClass("hidden-element");
            $("text#ula-main-leg").toggleClass("st4 st8");
            $("g#ula-main-threads").toggleClass("hidden-element");
            $("#ula-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#ula-main circle").toggleClass("st11 selected");
            $("g#ula-main-words").toggleClass("hidden-element");
            $("text#ula-main-leg").toggleClass("st4 st8");
            $("g#ula-main-threads").toggleClass("hidden-element");
            $("#ula-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#esa-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #iss-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #iss-main circle").toggleClass("selected")
            
            $("#esa-main circle").toggleClass("st11 selected");
            $("g#esa-main-words").toggleClass("hidden-element");
            $("text#esa-main-leg").toggleClass("st4 st8");
            $("g#esa-main-threads").toggleClass("hidden-element");
            $("#esa-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#esa-main circle").toggleClass("st11 selected");
            $("g#esa-main-words").toggleClass("hidden-element");
            $("text#esa-main-leg").toggleClass("st4 st8");
            $("g#esa-main-threads").toggleClass("hidden-element");
            $("#esa-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
    $("text#iss-main-leg").hover(function(){
        
        if($("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle").hasClass("selected")){
        
            $("#space-main circle, #spaceporn-main circle, #nasa-main circle, #spacex-main circle, #elon-main circle, #spaceflight-main circle, #spacexlounge-main circle, #mars-main circle, #spaceexploration-main circle, #blueorigin-main circle, #ula-main circle, #esa-main circle").toggleClass("selected")
            
            $("#iss-main circle").toggleClass("st11 selected");
            $("g#iss-main-words").toggleClass("hidden-element");
            $("text#iss-main-leg").toggleClass("st4 st8");
            $("g#iss-main-threads").toggleClass("hidden-element");
            $("#iss-main-subs text").toggleClass("st4 hidden-element");
            
            
        } else {
            
            $("#iss-main circle").toggleClass("st11 selected");
            $("g#iss-main-words").toggleClass("hidden-element");
            $("text#iss-main-leg").toggleClass("st4 st8");
            $("g#iss-main-threads").toggleClass("hidden-element");
            $("#iss-main-subs text").toggleClass("st4 hidden-element");
            
        }
    });
    
    
});
