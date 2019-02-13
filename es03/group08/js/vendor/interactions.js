$(document).ready(function() {
	/*open-close slideshows*/
    $("#X_button").on("click", function() {
		$("#spaceX").fadeOut();
		$("#blueOrigin").fadeOut();
		$("#bO_cap").fadeOut();
		$("#video_1").fadeIn();
		$("#xTag").fadeIn();
		$("#confirm").fadeIn();
	});
	$("#xTag").on("click", function() {
		$("#spaceX").fadeIn();
		$("#blueOrigin").fadeIn();
		$("#bO_cap").fadeIn();
		$("#video_1").fadeOut();
		$("#xTag").fadeOut();
		$("#confirm").fadeOut();
	});
	$("#escX").on("click", function() {
		$("#spaceX").fadeIn();
		$("#blueOrigin").fadeIn();
		$("#bO_cap").fadeIn();
		$("#video_1").fadeOut();
		$("#xTag").fadeOut();
		$("#confirm").fadeOut();
	});
	
	$("#O_button").on("click", function() {
		$("#spaceX").fadeOut();
		$("#blueOrigin").fadeOut();
		$("#sX_cap").fadeOut();
		$("#video_2").fadeIn();
		$("#oTag").fadeIn();
		$("#confirm").fadeIn();
	});
	$("#oTag").on("click", function() {
		$("#spaceX").fadeIn();
		$("#blueOrigin").fadeIn();
		$("#sX_cap").fadeIn();
		$("#video_2").fadeOut();
		$("#oTag").fadeOut();
		$("#confirm").fadeOut();
	});
	$("#escO").on("click", function() {
		$("#spaceX").fadeIn();
		$("#blueOrigin").fadeIn();
		$("#sX_cap").fadeIn();
		$("#video_2").fadeOut();
		$("#oTag").fadeOut();
		$("#confirm").fadeOut();
	});
	
	/*Space X slideshow arrows*/
	$("#x1-r").on("click", function() {
		$("#Xslide1").animate({left: "-=960px"});
		$("#x2").animate({left: "-=960px"});
		$("#x2-r").animate({right: "0%"});
	});
	$("#x2-l").on("click", function() {
		$("#x2").animate({left: "+=960px"});
		$("#Xslide1").animate({left: "+=960px"});
		$("#x1-r").animate({right: "0%"});
	});
	$("#x2-r").on("click", function() {
		$("#x2").animate({left: "-=960px"});
		$("#x3").animate({left: "-=960px"});
		$("#x3-r").animate({right: "0%"});
	});
	$("#x3-l").on("click", function() {
		$("#x3").animate({left: "+=960px"});
		$("#x2").animate({left: "+=960px"});
		$("#x2-r").animate({right: "0%"});
	});
	$("#x3-r").on("click", function() {
		$("#x3").animate({left: "-=960px"});
		$("#x4").animate({left: "-=960px"});
		$("#x4-r").animate({right: "0%"});
	});
	$("#x4-l").on("click", function() {
		$("#x4").animate({left: "+=960px"});
		$("#x3").animate({left: "+=960px"});
		$("#x3-r").animate({right: "0%"});
	});
	
	/*Blue Origin slideshow arrows*/
	$("#o1-r").on("click", function() {
		$("#Oslide1").animate({left: "-=960px"});
		$("#o2").animate({left: "-=960px"});
		$("#o2-r").animate({right: "0%"});
	});
	$("#o2-l").on("click", function() {
		$("#o2").animate({left: "+=960px"});
		$("#Oslide1").animate({left: "+=960px"});
		$("#o1-r").animate({right: "0%"});
	});
	$("#o2-r").on("click", function() {
		$("#o2").animate({left: "-=960px"});
		$("#o3").animate({left: "-=960px"});
		$("#o3-r").animate({right: "0%"});
	});
	$("#o3-l").on("click", function() {
		$("#o3").animate({left: "+=960px"});
		$("#o2").animate({left: "+=960px"});
		$("#o2-r").animate({right: "0%"});
	});
	$("#o3-r").on("click", function() {
		$("#o3").animate({left: "-=960px"});
		$("#o4").animate({left: "-=960px"});
		$("#o4-r").animate({right: "0%"});
	});
	$("#o4-l").on("click", function() {
		$("#o4").animate({left: "+=960px"});
		$("#o3").animate({left: "+=960px"});
		$("#o3-r").animate({right: "0%"});
	});
	
	/*plus button*/
	var i = 0;
	
	$('#plus').click(function() {
  		$.fn.toggleAttrVal = function(attr, val1, val2) {
    		var test = $(this).attr(attr);
    		if ( test === val1) {
				$(this).attr(attr, val2);
      			return this;
    		}	
    		if ( test === val2) {
      			$(this).attr(attr, val1);
      			return this;
    		}
    		// default to val1 if neither
    		$(this).attr(attr, val1);
    		return this;
  		};
  		$("#plusr").toggleAttrVal('transform',"","matrix(0.7071 0.7071 -0.7071 0.7071 331.3407 -575.1772)");
		
		if (i==0) {
			$("#jumbo").fadeOut();
			$("#svg-r").animate({left: "-=100vw"});
			i=1;
		}
		else if (i==1) {
			$("#jumbo").fadeIn();
			$("#svg-r").animate({left: "+=100vw"});
			i=0;
		}
			
	});
	
	
	/*svg approfondimento*/
	$.fn.toggleAttr = function(attr, val) {
    	var test = $(this).attr(attr);
    	if ( test ) { 
      		// if attrib exists with ANY value, still remove it
      		$(this).removeAttr(attr);
    	} else {
      		$(this).attr(attr, val);
    	}
    	return this;
  	};

	$.fn.toggleAttrVal = function(attr, val1, val2) {
    	var test = $(this).attr(attr);
    	if ( test === val1) {
      		$(this).attr(attr, val2);
      		return this;
    	}
    	if ( test === val2) {
      		$(this).attr(attr, val1);
      		return this;
    	}
    	// default to val1 if neither
    	$(this).attr(attr, val1);
    	return this;
  	};

	$(document).ready(function() {

    $("circle.sty5").on("click", function(event){
        
        let step = $(this).attr("step");
        
        if($(this).hasClass("unselected")){
            
            $(this).removeClass("unselected");
            
            $(this).toggleAttrVal("r", "10", "12.5");
            $("circle.sty5").not(this).attr("r", "10");
            
            $("circle.sty5").not(this).addClass("unselected");

            $(".rrdesc-" + step).removeClass("rr-hidden");
            $(".rr").not(".rrdesc-" + step).addClass("rr-hidden");

            $("#rect-" + step).removeClass("st36").addClass("st35");
            $("#barretta rect").not("#rect-" + step).removeClass("st35").addClass("st36");
            
        } else {
        
            $(this).toggleAttrVal("r", "12.5", "10");
            $("circle.sty5").not(this).attr("r", "10");

            $("circle.sty5").not(this).addClass("unselected");

            $(".rrdesc-" + step).removeClass("rr-hidden");
            $(".rr").not(".rrdesc-" + step).addClass("rr-hidden");

            $("#rect-" + step).removeClass("st36").addClass("st35");
            $("#barretta rect").not("#rect-" + step).removeClass("st35").addClass("st36");

        }
        
    });

	});
	/*fine svg approfondimento*/
	
	
});

	




