$('.nav-link').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1500);
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 739);
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 739) {
        $('#ntext').attr('id', 'ntextwhite');
    }
});

$(window).scroll(function(){
    if ($(this).scrollTop() < 739) {
        $('#ntextwhite').attr('id', 'ntext');
    }
});

//TIMELINE

$(document).ready(function(){
    $(".milestone-dot-1").mouseenter(function(){
        $(".milestone-dot-1").addClass("selected");
        $(".m1").removeClass("text-hidden");
        $(".img-3, .img-4, .img-5").addClass("unselected");
    });
    $(".milestone-dot-1").mouseleave(function(){
        $(".milestone-dot-1").removeClass("selected");
        $(".m1").addClass("text-hidden");
        $(".img-3, .img-4, .img-5").removeClass("unselected");
    });
    $(".milestone-dot-2").mouseenter(function(){
        $(".milestone-dot-2").addClass("selected");
        $(".m2").removeClass("text-hidden");
        $(".img-1, .img-2, .img-5").addClass("unselected");
    });
    $(".milestone-dot-2").mouseleave(function(){
        $(".milestone-dot-2").removeClass("selected");
        $(".m2").addClass("text-hidden");
        $(".img-1, .img-2, .img-5").removeClass("unselected");
    });
    $(".milestone-dot-3").mouseenter(function(){
        $(".milestone-dot-3").addClass("selected");
        $(".m3").removeClass("text-hidden");
        $(".img-1, .img-2, .img-3, .img-4").addClass("unselected");
    });
    $(".milestone-dot-3").mouseleave(function(){
        $(".milestone-dot-3").removeClass("selected");
        $(".m3").addClass("text-hidden");
        $(".img-1, .img-2, .img-3, .img-4").removeClass("unselected");
    });
    $(".milestone-dot-4").mouseenter(function(){
        $(".milestone-dot-4").addClass("selected");
        $(".m4").removeClass("text-hidden");
        $(".img-9, .img-10, .img-11, .img-12").addClass("unselected");
    });
    $(".milestone-dot-4").mouseleave(function(){
        $(".milestone-dot-4").removeClass("selected");
        $(".m4").addClass("text-hidden");
        $(".img-9, .img-10, .img-11, .img-12").removeClass("unselected");
    });
    $(".milestone-dot-5").mouseenter(function(){
        $(".milestone-dot-5").addClass("selected");
        $(".m5").removeClass("text-hidden");
        $(".img-6, .img-7, .img-8, .img-11, .img-12").addClass("unselected");
    });
    $(".milestone-dot-5").mouseleave(function(){
        $(".milestone-dot-5").removeClass("selected");
        $(".m5").addClass("text-hidden");
        $(".img-6, .img-7, .img-8, .img-11, .img-12").removeClass("unselected");

    });
    $(".milestone-dot-6").mouseenter(function(){
        $(".milestone-dot-6").addClass("selected");
        $(".m6").removeClass("text-hidden");
        $(".img-6, .img-7, .img-8, .img-9, .img-10").addClass("unselected");
    });
    $(".milestone-dot-6").mouseleave(function(){
        $(".milestone-dot-6").removeClass("selected");
        $(".m6").addClass("text-hidden");
        $(".img-6, .img-7, .img-8, .img-9, .img-10").removeClass("unselected");
    });
    $(".milestone-dot-7").mouseenter(function(){
        $(".milestone-dot-7").addClass("selected");
        $(".m7").removeClass("text-hidden");
        $(".img-15, .img-16, .img-17").addClass("unselected");
    });
    $(".milestone-dot-7").mouseleave(function(){
        $(".milestone-dot-7").removeClass("selected");
        $(".m7").addClass("text-hidden");
        $(".img-15, .img-16, .img-17").removeClass("unselected");
    });
    $(".milestone-dot-8").mouseenter(function(){
        $(".milestone-dot-8").addClass("selected");
        $(".m8").removeClass("text-hidden");
        $(".img-13, .img-14, .img-17").addClass("unselected");
    });
    $(".milestone-dot-8").mouseleave(function(){
        $(".milestone-dot-8").removeClass("selected");
        $(".m8").addClass("text-hidden");
        $(".img-13, .img-14, .img-17").removeClass("unselected");
    });
    $(".milestone-dot-9").mouseenter(function(){
        $(".milestone-dot-9").addClass("selected");
        $(".m9").removeClass("text-hidden");
        $(".img-13, .img-14, .img-15, .img-16").addClass("unselected");
    });
    $(".milestone-dot-9").mouseleave(function(){
        $(".milestone-dot-9").removeClass("selected");
        $(".m9").addClass("text-hidden");
        $(".img-13, .img-14, .img-15, .img-16").removeClass("unselected");
    });
    $(".milestone-dot-10").mouseenter(function(){
        $(".milestone-dot-10").addClass("selected");
        $(".m10").removeClass("text-hidden");
        $(".img-20, .img-21, .img-22, .img-23").addClass("unselected");
    });
    $(".milestone-dot-10").mouseleave(function(){
        $(".milestone-dot-10").removeClass("selected");
        $(".m10").addClass("text-hidden");
        $(".img-20, .img-21, .img-22").removeClass("unselected");
    });
    $(".milestone-dot-11").mouseenter(function(){
        $(".milestone-dot-11").addClass("selected");
        $(".m11").removeClass("text-hidden");
        $(".img-18, .img-19, .img-22").addClass("unselected");
    });
    $(".milestone-dot-11").mouseleave(function(){
        $(".milestone-dot-11").removeClass("selected");
        $(".m11").addClass("text-hidden");
        $(".img-18, .img-19, .img-22").removeClass("unselected");
    });
    $(".milestone-dot-12").mouseenter(function(){
        $(".milestone-dot-12").addClass("selected");
        $(".m12").removeClass("text-hidden");
        $(".img-18, .img-19, .img-20, .img-21").addClass("unselected");
    });
    $(".milestone-dot-12").mouseleave(function(){
        $(".milestone-dot-12").removeClass("selected");
        $(".m12").addClass("text-hidden");
        $(".img-18, .img-19, .img-20, .img-21").removeClass("unselected");
    });
    $(".milestone-dot-13").mouseenter(function(){
        $(".milestone-dot-13").addClass("selected");
        $(".m13").removeClass("text-hidden");
        $(".img-25, .img-26").addClass("unselected");
    });
    $(".milestone-dot-13").mouseleave(function(){
        $(".milestone-dot-13").removeClass("selected");
        $(".m13").addClass("text-hidden");
        $(".img-25, .img-26").removeClass("unselected");
    });
    $(".milestone-dot-14").mouseenter(function(){
        $(".milestone-dot-14").addClass("selected");
        $(".m14").removeClass("text-hidden");
        $(".img-23, .img-24, .img-26").addClass("unselected");
    });
    $(".milestone-dot-14").mouseleave(function(){
        $(".milestone-dot-14").removeClass("selected");
        $(".m14").addClass("text-hidden");
        $(".img-23, .img-24, .img-26").removeClass("unselected");
    });
    $(".milestone-dot-15, .milestone-dot-16").mouseenter(function(){
        $(".milestone-dot-15, .milestone-dot-16").addClass("selected");
        $(".m15").removeClass("text-hidden");
        $(".img-23, .img-24, .img-25").addClass("unselected");
    });
    $(".milestone-dot-15, .milestone-dot-16").mouseleave(function(){
        $(".milestone-dot-15, .milestone-dot-16").removeClass("selected");
        $(".m15").addClass("text-hidden");
        $(".img-23, .img-24, .img-25").removeClass("unselected");
    });
    $(".milestone-dot-17").mouseenter(function(){
        $(".milestone-dot-17").addClass("selected");
        $(".m16").removeClass("text-hidden");
        $(".img-28, .img-29").addClass("unselected");
    });
    $(".milestone-dot-17").mouseleave(function(){
        $(".milestone-dot-17").removeClass("selected");
        $(".m16").addClass("text-hidden");
        $(".img-28, .img-29").removeClass("unselected");
    });
    $(".milestone-dot-19, .milestone-dot-20").mouseenter(function(){
        $(".milestone-dot-19, .milestone-dot-20").addClass("selected");
        $(".m17").removeClass("text-hidden");
        $(".img-27, .img-29").addClass("unselected");
    });
    $(".milestone-dot-19, .milestone-dot-20").mouseleave(function(){
        $(".milestone-dot-19, .milestone-dot-20").removeClass("selected");
        $(".m17").addClass("text-hidden");
        $(".img-27, .img-29").removeClass("unselected");
    });
    $(".milestone-dot-18").mouseenter(function(){
        $(".milestone-dot-18").addClass("selected");
        $(".m18").removeClass("text-hidden");
        $(".img-27, .img-29").addClass("unselected");
    });
    $(".milestone-dot-18").mouseleave(function(){
        $(".milestone-dot-18").removeClass("selected");
        $(".m18").addClass("text-hidden");
        $(".img-27, .img-29").removeClass("unselected");
    });
});

//DONUTS

$(document).ready(function() {
    $("#contracts").mouseenter(function() {
        $(".donut-1").addClass("text-hidden");
    });
    $("#contracts").mouseleave(function() {
        $(".donut-1").removeClass("text-hidden");
    });
    $("#money").mouseenter(function() {
        $(".donut-2").addClass("text-hidden");
    });
    $("#money").mouseleave(function() {
        $(".donut-2").removeClass("text-hidden");
    });
})

$(document).ready(function(){
    $("#privates_c").mouseenter(function() {
        $(".info-pie-1").removeClass("text-hidden");
    });
    $("#privates_c").mouseleave(function () {
        $(".info-pie-1").addClass("text-hidden");
    });
    $("#institutions_c").mouseenter(function() {
        $(".info-pie-2").removeClass("text-hidden");
    });
    $("#institutions_c").mouseleave(function () {
        $(".info-pie-2").addClass("text-hidden");
    });
    $("#privates_m").mouseenter(function() {
        $(".info-pie-3").removeClass("text-hidden");
    });
    $("#privates_m").mouseleave(function () {
        $(".info-pie-3").addClass("text-hidden");
    });
    $("#institutions_m").mouseenter(function() {
        $(".info-pie-4").removeClass("text-hidden");
    });
    $("#institutions_m").mouseleave(function () {
        $(".info-pie-4").addClass("text-hidden");
    });
});

//DONUTS-2

$(document).ready(function(){
    $("#p-minor").mouseenter(function(){
        $("#minor").removeClass("text-hidden");
        $("#label-1").addClass("text-hidden");
    });
    $("#p-minor").mouseleave(function(){
        $("#minor").addClass("text-hidden");
        $("#label-1").removeClass("text-hidden");
    });

    $("#p-major").mouseenter(function(){
        $("#major").removeClass("text-hidden");
        $("#label-1").addClass("text-hidden");
    });
    $("#p-major").mouseleave(function(){
        $("#major").addClass("text-hidden");
        $("#label-1").removeClass("text-hidden");
    });

    $("#i-uni").mouseenter(function(){
        $("#uni").removeClass("text-hidden");
        $("#label-2").addClass("text-hidden");
    });
    $("#i-uni").mouseleave(function(){
        $("#uni").addClass("text-hidden");
        $("#label-2").removeClass("text-hidden");
    });

    $("#i-gov").mouseenter(function(){
        $("#gov").removeClass("text-hidden");
        $("#label-2").addClass("text-hidden");
    });
    $("#i-gov").mouseleave(function(){
        $("#gov").addClass("text-hidden");
        $("#label-2").removeClass("text-hidden");
    });

    $("#i-sch").mouseenter(function(){
        $("#sch").removeClass("text-hidden");
        $("#label-2").addClass("text-hidden");
    });
    $("#i-sch").mouseleave(function(){
        $("#sch").addClass("text-hidden");
        $("#label-2").removeClass("text-hidden");
    });

    $("#i-ong").mouseenter(function(){
        $("#ong").removeClass("text-hidden");
        $("#label-2").addClass("text-hidden");
    });
    $("#i-ong").mouseleave(function(){
        $("#ong").addClass("text-hidden");
        $("#label-2").removeClass("text-hidden");
    });
});



//WAVECHART

$(document).ready(function(){
    $("#2002").mouseenter(function(){
        $("#2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2002").mouseleave(function(){
        $("#2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2003").mouseenter(function(){
        $("#2002, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2003").mouseleave(function(){
        $("#2002, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2004").mouseenter(function(){
        $("#2002, #2003, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2004").mouseleave(function(){
        $("#2002, #2003, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2005").mouseenter(function(){
        $("#2002, #2003, #2004, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2005").mouseleave(function(){
        $("#2002, #2003, #2004, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2006").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2006").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2007").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2007").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2008").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2008").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2009").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2009").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2010").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2010").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2011, #2012, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2011").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2012, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2011").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2012, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2012").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2013, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2012").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2013, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2013").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2014, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2013").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2014, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2014").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2015, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2014").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2015, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2015").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2016, #2017, #2018").addClass("opacityz");
    });
    $("#2015").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2016, #2017, #2018").removeClass("opacityz");
    });
    $("#2016").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2017, #2018").addClass("opacityz");
    });
    $("#2016").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2017, #2018").removeClass("opacityz");
    });
    $("#2017").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2018").addClass("opacityz");
    });
    $("#2017").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2018").removeClass("opacityz");
    });
    $("#2018").mouseenter(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017").addClass("opacityz");
    });
    $("#2018").mouseleave(function(){
        $("#2002, #2003, #2004, #2005, #2006, #2007, #2008, #2009, #2010, #2011, #2012, #2013, #2014, #2015, #2016, #2017").removeClass("opacityz");
    });
});

//BAR CHART

//toggle

$(document).ready(function(){
    $("#both").on("click", function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden", ".opacity")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden opacity");
            $("#objectives rect").addClass("text-hidden");
            $("#typeofagreement rect").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("opacity");
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $("#objectives rect").removeClass("text-hidden");
            $("#typeofagreement rect").addClass("text-hidden");
        }; 
    });
});

//mix

$(document).ready(function(){
    $("#both-2").on("click", function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").hasClass("text-hidden")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden");
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("opacity");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").toggleClass("opacity");
        };
    });
});



//hover deals-type

$(document).ready(function(){
    // reimbursable
    $("#R-6").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden", ".opacity")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden opacity");
            $("#no-r").removeClass("text-hidden");
        } else {
            $("#no-r").removeClass("text-hidden");
        }
    });
    $("#R-6").mouseleave(function(){
        $("#no-r").addClass("text-hidden");
    });

    // not reimbursable
    $("#NR-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden", ".opacity")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden opacity");
            $("#no-nr").removeClass("text-hidden");
        } else {
            $("#no-nr").removeClass("text-hidden");
        }
    });
    $("#NR-2").mouseleave(function(){
        $("#no-nr").addClass("text-hidden");
    });  

    // funded
    $("#F-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden", ".opacity")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden opacity");
            $("#no-f").removeClass("text-hidden");
        } else {
            $("#no-f").removeClass("text-hidden");
        }
    });
    $("#F-2").mouseleave(function(){
        $("#no-f").addClass("text-hidden");
    });
});


//hover money-type

$(document).ready(function(){
    // reimbursable
    $("#R-3").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden", ".opacity")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden opacity");
            $("#m-r").removeClass("text-hidden");
        } else {
            $("#m-r").removeClass("text-hidden");
        }
    });
    $("#R-3").mouseleave(function(){
        $("#m-r").addClass("text-hidden");
    });
    // not reimbursable
    $("#NR").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden", ".opacity")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden opacity");
            $("#m-nr").removeClass("text-hidden");
        } else {
            $("#m-nr").removeClass("text-hidden");
        }
    });
    $("#NR").mouseleave(function(){
        $("#m-nr").addClass("text-hidden");
    });  
    // funded
    $("#F").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden", ".opacity")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden opacity");
            $("#m-f").removeClass("text-hidden");
        } else {
            $("#m-f").removeClass("text-hidden");
        }
    });
    $("#F").mouseleave(function(){
        $("#m-f").addClass("text-hidden");
    });
});


//hover deals-obj

$(document).ready(function(){

    // reimbursable
    // reimbursable

    $("#td-4").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-r-td").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-r-td").removeClass("text-hidden");
        }
    });
    $("#td-4").mouseleave(function(){
        $(".n-deals-r-td").addClass("text-hidden");
    });

    $("#nt-4").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-r-nt").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-r-nt").removeClass("text-hidden");
        }
    });
    $("#nt-4").mouseleave(function(){
        $(".n-deals-r-nt").addClass("text-hidden");
    });

    $("#he-4").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-r-he").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-r-he").removeClass("text-hidden");
        }
    });
    $("#he-4").mouseleave(function(){
        $(".n-deals-r-he").addClass("text-hidden");
    });

    $("#r-5").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-r-r").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-r-r").removeClass("text-hidden");
        }
    });
    $("#r-5").mouseleave(function(){
        $(".n-deals-r-r").addClass("text-hidden");
    });

    $("#ot-4").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-r-ot").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-r-ot").removeClass("text-hidden");
        }
    });
    $("#ot-4").mouseleave(function(){
        $(".n-deals-r-ot").addClass("text-hidden");
    });

    $("#dt-4").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-r-dt").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-r-dt").removeClass("text-hidden");
        }
    });
    $("#dt-4").mouseleave(function(){
        $(".n-deals-r-dt").addClass("text-hidden");
    });

    $("#cst-6").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-r-cst").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-r-cst").removeClass("text-hidden");
        }
    });
    $("#cst-6").mouseleave(function(){
        $(".n-deals-r-cst").addClass("text-hidden");
    });

    $("#edu-4").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-r-edu").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-r-edu").removeClass("text-hidden");
        }
    });
    $("#edu-4").mouseleave(function(){
        $(".n-deals-r-edu").addClass("text-hidden");
    });

    $("#es").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-r-es").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-r-es").removeClass("text-hidden");
        }
    });
    $("#es").mouseleave(function(){
        $(".n-deals-r-es").addClass("text-hidden");
    });

    $("#ea-4").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-r-ea").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-r-ea").removeClass("text-hidden");
        }
    });
    $("#ea-4").mouseleave(function(){
        $(".n-deals-r-ea").addClass("text-hidden");
    });

    // not reimbursable
    // not reimbursable
    
    $("#td-3").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-nr-td").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-nr-td").removeClass("text-hidden");
        }
    });
    $("#td-3").mouseleave(function(){
        $(".n-deals-nr-td").addClass("text-hidden");
    });

    $("#nt-3").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-nr-nt").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-nr-nt").removeClass("text-hidden");
        }
    });
    $("#nt-3").mouseleave(function(){
        $(".n-deals-nr-nt").addClass("text-hidden");
    });

    $("#he-3").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-nr-he").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-nr-he").removeClass("text-hidden");
        }
    });
    $("#he-3").mouseleave(function(){
        $(".n-deals-nr-he").addClass("text-hidden");
    });

    $("#r-4").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-nr-r").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-nr-r").removeClass("text-hidden");
        }
    });
    $("#r-4").mouseleave(function(){
        $(".n-deals-nr-r").addClass("text-hidden");
    });

    $("#ot-3").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-nr-ot").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-nr-ot").removeClass("text-hidden");
        }
    });
    $("#ot-3").mouseleave(function(){
        $(".n-deals-nr-ot").addClass("text-hidden");
    });

    $("#dt-3").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-nr-dt").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-nr-dt").removeClass("text-hidden");
        }
    });
    $("#dt-3").mouseleave(function(){
        $(".n-deals-nr-dt").addClass("text-hidden");
    });

    $("#cst-5").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-nr-cst").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-nr-cst").removeClass("text-hidden");
        }
    });
    $("#cst-5").mouseleave(function(){
        $(".n-deals-nr-cst").addClass("text-hidden");
    });

    $("#edu-3").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-nr-edu").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-nr-edu").removeClass("text-hidden");
        }
    });
    $("#edu-3").mouseleave(function(){
        $(".n-deals-nr-edu").addClass("text-hidden");
    });

    $("#es-3").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-nr-es").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-nr-es").removeClass("text-hidden");
        }
    });
    $("#es-3").mouseleave(function(){
        $(".n-deals-nr-es").addClass("text-hidden");
    });

    $("#ea-3").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-nr-ea").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-nr-ea").removeClass("text-hidden");
        }
    });
    $("#ea-3").mouseleave(function(){
        $(".n-deals-nr-ea").addClass("text-hidden");
    });

    // funded
    // funded

    $("#cst-4").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".n-deals-f-cst").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".n-deals-f-cst").removeClass("text-hidden");
        }
    });
    $("#cst-4").mouseleave(function(){
        $(".n-deals-f-cst").addClass("text-hidden");
    });

});

// hover money-obj

$(document).ready(function(){

    //reimbursable
    $("#td-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-r-td").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-r-td").removeClass("text-hidden");
        }
    });
    $("#td-2").mouseleave(function(){
        $(".money-r-td").addClass("text-hidden");
    });

    $("#nt-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-r-nt").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-r-nt").removeClass("text-hidden");
        }
    });
    $("#nt-2").mouseleave(function(){
        $(".money-r-nt").addClass("text-hidden");
    });

    $("#he-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-r-he").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-r-he").removeClass("text-hidden");
        }
    });
    $("#he-2").mouseleave(function(){
        $(".money-r-he").addClass("text-hidden");
    });

    $("#r-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-r-r").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-r-r").removeClass("text-hidden");
        }
    });
    $("#r-2").mouseleave(function(){
        $(".money-r-r").addClass("text-hidden");
    });

    $("#ot-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-r-ot").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-r-ot").removeClass("text-hidden");
        }
    });
    $("#ot-2").mouseleave(function(){
        $(".money-r-ot").addClass("text-hidden");
    });

    $("#dt-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-r-dt").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-r-dt").removeClass("text-hidden");
        }
    });
    $("#dt-2").mouseleave(function(){
        $(".money-r-dt").addClass("text-hidden");
    });

    $("#edu-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-r-edu").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-r-edu").removeClass("text-hidden");
        }
    });
    $("#edu-2").mouseleave(function(){
        $(".money-r-edu").addClass("text-hidden");
    });

    $("#ea-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-r-ea").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-r-ea").removeClass("text-hidden");
        }
    });
    $("#ea-2").mouseleave(function(){
        $(".money-r-ea").addClass("text-hidden");
    });

    $("#cst-3").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-r-cst").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-r-cst").removeClass("text-hidden");
        }
    });
    $("#cst-3").mouseleave(function(){
        $(".money-r-cst").addClass("text-hidden");
    });

    // not reimbursable
    $("#td").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-nr-td").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-nr-td").removeClass("text-hidden");
        }
    });
    $("#td").mouseleave(function(){
        $(".money-nr-td").addClass("text-hidden");
    });

    $("#nt").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-nr-nt").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-nr-nt").removeClass("text-hidden");
        }
    });
    $("#nt").mouseleave(function(){
        $(".money-nr-nt").addClass("text-hidden");
    });

    $("#he").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-nr-he").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-nr-he").removeClass("text-hidden");
        }
    });
    $("#he").mouseleave(function(){
        $(".money-nr-he").addClass("text-hidden");
    });

    $("#r").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-nr-r").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-nr-r").removeClass("text-hidden");
        }
    });
    $("#r").mouseleave(function(){
        $(".money-nr-r").addClass("text-hidden");
    });

    $("#ot").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-nr-ot").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-nr-ot").removeClass("text-hidden");
        }
    });
    $("#ot").mouseleave(function(){
        $(".money-nr-ot").addClass("text-hidden");
    });

    $("#dt").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-nr-dt").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-nr-dt").removeClass("text-hidden");
        }
    });
    $("#dt").mouseleave(function(){
        $(".money-nr-dt").addClass("text-hidden");
    });

    $("#edu").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-nr-edu").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-nr-edu").removeClass("text-hidden");
        }
    });
    $("#edu").mouseleave(function(){
        $(".money-nr-edu").addClass("text-hidden");
    });

    $("#ea").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-nr-ea").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-nr-ea").removeClass("text-hidden");
        }
    });
    $("#ea").mouseleave(function(){
        $(".money-nr-ea").addClass("text-hidden");
    });

    $("#cst-2").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-nr-cst").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-nr-cst").removeClass("text-hidden");
        }
    });
    $("#cst-2").mouseleave(function(){
        $(".money-nr-cst").addClass("text-hidden");
    });

    $("#cst").mouseenter(function(){
        if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden")){
            $(".money-f-cst").removeClass("text-hidden");
        } else {
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").addClass("text-hidden");
            $(".money-f-cst").removeClass("text-hidden");
        }
    });
    $("#cst").mouseleave(function(){
        $(".money-f-cst").addClass("text-hidden");
    });

});


//INTERAZIONI LEGENDA


//Type of agreements

$(document).ready(function(){
    //reimbursable-button
    $("#R-8").mouseenter(function(){
       if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden", ".opacity")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden", "opacity");
            $("#no-r, #m-r").toggleClass("text-hidden");
            $("#help-r").toggleClass("text-hidden");
       } else {
            $("#no-r, #m-r").toggleClass("text-hidden");
            $("#help-r").toggleClass("text-hidden");
       };
    });
    $("#R-8").mouseleave(function(){
        $("#no-r, #m-r").toggleClass("text-hidden");
        $("#help-r").toggleClass("text-hidden");
    });
    //not reimbursable-button
    $("#NR-4").mouseenter(function(){
       if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden", ".opacity")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden", "opacity");
            $("#no-nr, #m-nr").toggleClass("text-hidden");
            $("#help-nr").toggleClass("text-hidden");
       } else {
            $("#no-nr, #m-nr").toggleClass("text-hidden");
            $("#help-nr").toggleClass("text-hidden");
       };
    });
    $("#NR-4").mouseleave(function(){
        $("#no-nr, #m-nr").toggleClass("text-hidden");
        $("#help-nr").toggleClass("text-hidden");
    });
    //funded-button
    $("#F-4").mouseenter(function(){
       if ( $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").is(".text-hidden", ".opacity")){
            $("#R-6, #R-3, #NR-2, #NR, #F-2, #F").removeClass("text-hidden", "opacity");
            $("#no-f, #m-f").toggleClass("text-hidden");
       } else {
            $("#no-f, #m-f").toggleClass("text-hidden");
            $("#help-f").toggleClass("text-hidden");
       };
    });
    $("#F-4").mouseleave(function(){
        $("#no-f, #m-f").toggleClass("text-hidden");
        $("#help-f").toggleClass("text-hidden");
    });
});



// TREEMAP
// TREEMAP

$(document).ready(function(){
    $("#bottone").on("click", function(){
        if($("#actors").is(".text-hidden")){
            $("#actors").removeClass("text-hidden");
        } else {
            $("#actors").addClass("text-hidden");
        }
    });
});

$(document).ready(function(){
    $("rect#ea-6").on("click", function(){
        $("#aerojet rect").toggleClass("opacity");
        $("rect#ea-6").toggleClass("opacity");
    });
    $("rect#ea-33").on("click", function(){
        $("#bahep rect").toggleClass("opacity");
        $("rect#ea-33").toggleClass("opacity");
    });
    $("rect#ea-30").on("click", function(){
        $("#blueorigin rect").toggleClass("opacity");
        $("rect#ea-30").toggleClass("opacity");
    });
    $("rect#ea-27").on("click", function(){
        $("#boeing rect").toggleClass("opacity");
        $("rect#ea-27").toggleClass("opacity");
    });
    $("rect#ea-24").on("click", function(){
        $("#general rect").toggleClass("opacity");
        $("rect#ea-24").toggleClass("opacity");
    });
    $("rect#ea-21").on("click", function(){
        $("#imss rect").toggleClass("opacity");
        $("rect#ea-21").toggleClass("opacity");
    });
    $("rect#ea-18").on("click", function(){
        $("#jacobs rect").toggleClass("opacity");
        $("rect#ea-18").toggleClass("opacity");
    });
    $("rect#ea-15").on("click", function(){
        $("#lockheedmartin rect").toggleClass("opacity");
        $("rect#ea-15").toggleClass("opacity");
    });
    $("rect#ea-12").on("click", function(){
        $("#northrop rect").toggleClass("opacity");
        $("rect#ea-12").toggleClass("opacity");
    });
    $("rect#ea-9").on("click", function(){
        $("#orbital rect").toggleClass("opacity");
        $("rect#ea-9").toggleClass("opacity");
    });
    $("rect#ea-36").on("click", function(){
        $("#raytheon rect").toggleClass("opacity");
        $("rect#ea-36").toggleClass("opacity");
    });
    $("rect#ea-63").on("click", function(){
        $("#sierranevada rect").toggleClass("opacity");
        $("rect#ea-63").toggleClass("opacity");
    });
    $("rect#ea-60").on("click", function(){
        $("#spaceflorida rect").toggleClass("opacity");
        $("rect#ea-60").toggleClass("opacity");
    });
    $("rect#ea-57").on("click", function(){
        $("#spacex rect").toggleClass("opacity");
        $("rect#ea-57").toggleClass("opacity");
    });
    $("rect#ea-54").on("click", function(){
        $("#ssl rect").toggleClass("opacity");
        $("rect#ea-54").toggleClass("opacity");
    });
    $("rect#ea-51").on("click", function(){
        $("#stratolaunch rect").toggleClass("opacity");
        $("rect#ea-51").toggleClass("opacity");
    });
    $("rect#ea-48").on("click", function(){
        $("#ula rect").toggleClass("opacity");
        $("rect#ea-48").toggleClass("opacity");
    });
    $("rect#ea-42").on("click", function(){
        $("#urs rect").toggleClass("opacity");
        $("rect#ea-42").toggleClass("opacity");
    });
    $("rect#ea-45").on("click", function(){
        $("#utc rect").toggleClass("opacity");
        $("rect#ea-45").toggleClass("opacity");
    });
    $("rect#ea-39").on("click", function(){
        $("#virgin rect").toggleClass("opacity");
        $("rect#ea-39").toggleClass("opacity");
    });
});




