$(document).ready(function() {
	$("#moonTag").on("click", function() {
		window.location.href = "index2.html";
	})
	
	/*open-close COMPANIES slideshows*/
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
		
		$("#companies_section").fadeIn();
		$("#question").fadeIn();
		$("#companies").fadeIn();
		$("#numero_2").fadeIn();
		$("#plus_numero1").fadeIn();
		$("#1sez3-1").fadeIn();
		$("#1sez3-2").fadeIn();
		$("#1sez3-3").fadeIn();
		$("#habitats_section").fadeOut();
		$("#question_1").fadeOut();
		$("#habitats").fadeOut();
		$("#numero_3").fadeOut();
		$("#plus_numero2").fadeOut();
		$("#2sez3-1").fadeOut();
		$("#2sez3-2").fadeOut();
		$("#2sez3-3").fadeOut();
		$("#dTag").fadeOut();
		$("#mTag").fadeOut();
		$("#marTag").fadeOut();
		$("#khaTag").fadeOut();
		
		$("#TeC_section").fadeOut();
		$("#question_2").fadeOut();
		$("#TeC").fadeOut();
		$("#pt-esc").fadeOut();
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
		
		$("#companies_section").fadeIn();
		$("#question").fadeIn();
		$("#companies").fadeIn();
		$("#numero_2").fadeIn();
		$("#plus_numero1").fadeIn();
		$("#1sez3-1").fadeIn();
		$("#1sez3-2").fadeIn();
		$("#1sez3-3").fadeIn();
		$("#habitats_section").fadeOut();
		$("#question_1").fadeOut();
		$("#habitats").fadeOut();
		$("#numero_3").fadeOut();
		$("#plus_numero2").fadeOut();
		$("#2sez3-1").fadeOut();
		$("#2sez3-2").fadeOut();
		$("#2sez3-3").fadeOut();
		$("#dTag").fadeOut();
		$("#mTag").fadeOut();
		$("#marTag").fadeOut();
		$("#khaTag").fadeOut();
		
		$("#TeC_section").fadeOut();
		$("#question_2").fadeOut();
		$("#TeC").fadeOut();
		$("#pt-esc").fadeOut();
	});
	$("#escO").on("click", function() {
		$("#spaceX").fadeIn();
		$("#blueOrigin").fadeIn();
		$("#sX_cap").fadeIn();
		$("#video_2").fadeOut();
		$("#oTag").fadeOut();
		$("#confirm").fadeOut();
	});
	
	/*open-close MOON HABITATS slideshows*/
	$("#D_button").on("click", function() {
		$("#dyob").fadeOut();
		$("#multidome").fadeOut();
		$("#multi_cap").fadeOut();
		$("#video_3").fadeIn();
		$("#dTag").fadeIn();
		$("#confirm2").fadeIn();
	});
	$("#dTag").on("click", function() {
		$("#dyob").fadeIn();
		$("#multidome").fadeIn();
		$("#multi_cap").fadeIn();
		$("#video_3").fadeOut();
		$("#dTag").fadeOut();
		$("#confirm2").fadeOut();
		
		$("#habitats_section").fadeIn();
		$("#question_1").fadeIn();
		$("#habitats").fadeIn();
		$("#numero_3").fadeIn();
		$("#plus_numero2").fadeIn();
		$("#2sez3-1").fadeIn();
		$("#2sez3-2").fadeIn();
		$("#2sez3-3").fadeIn();
		
		$("#TeC_section").fadeOut();
		$("#question_2").fadeOut();
		$("#TeC").fadeOut();
		$("#pt-esc").fadeOut();
	});
	$("#escD").on("click", function() {
		$("#dyob").fadeIn();
		$("#multidome").fadeIn();
		$("#multi_cap").fadeIn();
		$("#video_3").fadeOut();
		$("#dTag").fadeOut();
		$("#confirm2").fadeOut();
	});
	
	$("#M_button").on("click", function() {
		$("#dyob").fadeOut();
		$("#multidome").fadeOut();
		$("#dyob_cap").fadeOut();
		$("#video_4").fadeIn();
		$("#mTag").fadeIn();
		$("#confirm2").fadeIn();
	});
	$("#mTag").on("click", function() {
		$("#dyob").fadeIn();
		$("#multidome").fadeIn();
		$("#dyob_cap").fadeIn();
		$("#video_4").fadeOut();
		$("#mTag").fadeOut();
		$("#confirm2").fadeOut();
		
		$("#habitats_section").fadeIn();
		$("#question_1").fadeIn();
		$("#habitats").fadeIn();
		$("#numero_3").fadeIn();
		$("#plus_numero2").fadeIn();
		$("#2sez3-1").fadeIn();
		$("#2sez3-2").fadeIn();
		$("#2sez3-3").fadeIn();
		
		$("#TeC_section").fadeOut();
		$("#question_2").fadeOut();
		$("#TeC").fadeOut();
		$("#pt-esc").fadeOut();
		
	});
	$("#escM").on("click", function() {
		$("#dyob").fadeIn();
		$("#multidome").fadeIn();
		$("#dyob_cap").fadeIn();
		$("#video_4").fadeOut();
		$("#mTag").fadeOut();
		$("#confirm2").fadeOut();
	});
	
	/*open-close MARS HABITATS slideshows*/
	$("#mar_button").on("click", function() {
		$("#marsha").fadeOut();
		$("#khanyates").fadeOut();
		$("#kha_cap").fadeOut();
		$("#video_5").fadeIn();
		$("#marTag").fadeIn();
		$("#confirm2").fadeIn();
	});
	$("#marTag").on("click", function() {
		$("#marsha").fadeIn();
		$("#khanyates").fadeIn();
		$("#kha_cap").fadeIn();
		$("#video_5").fadeOut();
		$("#marTag").fadeOut();
		$("#confirm2").fadeOut();
		
		$("#habitats_section").fadeIn();
		$("#question_1").fadeIn();
		$("#habitats").fadeIn();
		$("#numero_3").fadeIn();
		$("#plus_numero2").fadeIn();
		$("#2sez3-1").fadeIn();
		$("#2sez3-2").fadeIn();
		$("#2sez3-3").fadeIn();
		
		$("#TeC_section").fadeOut();
		$("#question_2").fadeOut();
		$("#TeC").fadeOut();
		$("#pt-esc").fadeOut();
	});
	$("#escmar").on("click", function() {
		$("#marsha").fadeIn();
		$("#khanyates").fadeIn();
		$("#kha_cap").fadeIn();
		$("#video_5").fadeOut();
		$("#marTag").fadeOut();
		$("#confirm2").fadeOut();
	});
	
	$("#kha_button").on("click", function() {
		$("#marsha").fadeOut();
		$("#khanyates").fadeOut();
		$("#mar_cap").fadeOut();
		$("#video_6").fadeIn();
		$("#khaTag").fadeIn();
		$("#confirm2").fadeIn();
	});
	$("#khaTag").on("click", function() {
		$("#marsha").fadeIn();
		$("#khanyates").fadeIn();
		$("#mar_cap").fadeIn();
		$("#video_6").fadeOut();
		$("#khaTag").fadeOut();
		$("#confirm2").fadeOut();
		
		$("#habitats_section").fadeIn();
		$("#question_1").fadeIn();
		$("#habitats").fadeIn();
		$("#numero_3").fadeIn();
		$("#plus_numero2").fadeIn();
		$("#2sez3-1").fadeIn();
		$("#2sez3-2").fadeIn();
		$("#2sez3-3").fadeIn();
		
		$("#TeC_section").fadeOut();
		$("#question_2").fadeOut();
		$("#TeC").fadeOut();
		$("#pt-esc").fadeOut();
		
	});
	$("#esckha").on("click", function() {
		$("#marsha").fadeIn();
		$("#khanyates").fadeIn();
		$("#mar_cap").fadeIn();
		$("#video_6").fadeOut();
		$("#khaTag").fadeOut();
		$("#confirm2").fadeOut();
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
	
	/*DYOB slideshow arrows*/
	$("#d1-r").on("click", function() {
		$("#Dslide1").animate({left: "-=960px"});
		$("#d2").animate({left: "-=960px"});
		$("#d2-r").animate({right: "0%"});
	});
	$("#d2-l").on("click", function() {
		$("#d2").animate({left: "+=960px"});
		$("#Dslide1").animate({left: "+=960px"});
		$("#d1-r").animate({right: "0%"});
	});
	$("#d2-r").on("click", function() {
		$("#d2").animate({left: "-=960px"});
		$("#d3").animate({left: "-=960px"});
		$("#d3-r").animate({right: "0%"});
	});
	$("#d3-l").on("click", function() {
		$("#d3").animate({left: "+=960px"});
		$("#d2").animate({left: "+=960px"});
		$("#d2-r").animate({right: "0%"});
	});
	
	/*MULTIDOME slideshow arrows*/
	$("#m1-r").on("click", function() {
		$("#Mslide1").animate({left: "-=960px"});
		$("#m2").animate({left: "-=960px"});
		$("#m2-r").animate({right: "0%"});
	});
	$("#m2-l").on("click", function() {
		$("#m2").animate({left: "+=960px"});
		$("#Mslide1").animate({left: "+=960px"});
		$("#m1-r").animate({right: "0%"});
	});
	$("#m2-r").on("click", function() {
		$("#m2").animate({left: "-=960px"});
		$("#m3").animate({left: "-=960px"});
		$("#m3-r").animate({right: "0%"});
	});
	$("#m3-l").on("click", function() {
		$("#m3").animate({left: "+=960px"});
		$("#m2").animate({left: "+=960px"});
		$("#m2-r").animate({right: "0%"});
	});
	
	/*MARSHA slideshow arrows*/
	$("#mar1-r").on("click", function() {
		$("#marslide1").animate({left: "-=960px"});
		$("#mar2").animate({left: "-=960px"});
		$("#mar2-r").animate({right: "0%"});
	});
	$("#mar2-l").on("click", function() {
		$("#mar2").animate({left: "+=960px"});
		$("#marslide1").animate({left: "+=960px"});
		$("#mar1-r").animate({right: "0%"});
	});
	$("#mar2-r").on("click", function() {
		$("#mar2").animate({left: "-=960px"});
		$("#mar3").animate({left: "-=960px"});
		$("#mar3-r").animate({right: "0%"});
	});
	$("#mar3-l").on("click", function() {
		$("#mar3").animate({left: "+=960px"});
		$("#mar2").animate({left: "+=960px"});
		$("#mar2-r").animate({right: "0%"});
	});
	
	/*KHANYATES slideshow arrows*/
	$("#kha1-r").on("click", function() {
		$("#khaslide1").animate({left: "-=960px"});
		$("#kha2").animate({left: "-=960px"});
		$("#kha2-r").animate({right: "0%"});
	});
	$("#kha2-l").on("click", function() {
		$("#kha2").animate({left: "+=960px"});
		$("#khaslide1").animate({left: "+=960px"});
		$("#kha1-r").animate({right: "0%"});
	});
	$("#kha2-r").on("click", function() {
		$("#kha2").animate({left: "-=960px"});
		$("#kha3").animate({left: "-=960px"});
		$("#kha3-r").animate({right: "0%"});
	});
	$("#kha3-l").on("click", function() {
		$("#kha3").animate({left: "+=960px"});
		$("#kha2").animate({left: "+=960px"});
		$("#kha2-r").animate({right: "0%"});
	});
	
	/*plus button 1*/
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
			$("#companies_section").fadeOut();
			$("#svg-r").animate({left: "-=100vw"});
			i=1;
		}
		else if (i==1) {
			$("#companies_section").fadeIn();
			$("#svg-r").animate({left: "+=100vw"});
			i=0;
		}
			
	});
	
	/*plus button 2*/
	var t = 0;
	
	$('#plus2').click(function() {
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
  		$("#plusr2").toggleAttrVal('transform',"","matrix(0.7071 0.7071 -0.7071 0.7071 331.3407 -575.1772)");
		
		if (t==0) {
			$("#habitats_section").fadeOut();
			$("#3dprint").animate({left: "-=100vw"});
			t=1;
		}
		else if (t==1) {
			$("#habitats_section").fadeIn();
			$("#3dprint").animate({left: "+=100vw"});
			t=0;
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
	
	/*svg approfondimento TeC*/
$(document).ready(function() {
    
    $("g.gr").on("click", function(event){
        
        var buttn = $(this).attr("buttn")
        
        $("#button-gr-" + buttn).children("path").removeClass().addClass("sto24");
        
        $("g#testo-gr-" + buttn).removeClass().addClass("sto23")
        
        $("path#check-gr-" + buttn).removeClass().addClass("sto25");
        
        $("g#tec-gr-" + buttn).removeClass("hidden-fx");
        $("g.tec").not("g#tec-gr-" + buttn).addClass("hidden-fx");
        
        $("g#tec-gr-main").removeClass("hidden-fx");
        $(".tec-main").not("g#tec-gr-main").addClass("hidden-fx")
        
        $("#n01").removeClass("hidden-fx");
        $(".textn").not("#n01").addClass("hidden-fx");
        
        $("g#gr-fx-" + buttn).removeClass("hidden-fx");
        $("g.fx").not("g#gr-fx-" + buttn).addClass("hidden-fx");
        
        $("g#light-gr").removeClass("hidden-fx")
        $(".light").not("#light-gr").addClass("hidden-fx");
        
    });
    
    $("g.ra").on("click", function(event){
        
        var buttn = $(this).attr("buttn")
        
        $("#button-ra-" + buttn).children("path").removeClass().addClass("sto24");
        
        $("g#testo-ra-" + buttn).removeClass().addClass("sto23")
        
        $("path#check-ra-" + buttn).removeClass().addClass("sto25");
        
        $("g#tec-ra-" + buttn).removeClass("hidden-fx");
        $("g.tec").not("g#tec-ra-" + buttn).addClass("hidden-fx");
        
        $("g#tec-ra-main").removeClass("hidden-fx");
        $(".tec-main").not("g#tec-ra-main").addClass("hidden-fx")
        
        $("#n02").removeClass("hidden-fx");
        $(".textn").not("#n02").addClass("hidden-fx");
        
        $("g#ra-fx-" + buttn).removeClass("hidden-fx");
        $("g.fx").not("g#ra-fx-" + buttn).addClass("hidden-fx");
        
        $("g#light-ra").removeClass("hidden-fx")
        $(".light").not("#light-ra").addClass("hidden-fx");
        
    });
    
    $("g.en").on("click", function(event){
        
        var buttn = $(this).attr("buttn")
        
        $("#button-en-" + buttn).children("path").removeClass().addClass("sto24");
        
        $("g#testo-en-" + buttn).removeClass().addClass("sto23")
        
        $("path#check-en-" + buttn).removeClass().addClass("sto25");
        
        $("g#tec-en-" + buttn).removeClass("hidden-fx");
        $("g.tec").not("g#tec-en-" + buttn).addClass("hidden-fx");
        
        $("g#tec-en-main").removeClass("hidden-fx");
        $(".tec-main").not("g#tec-en-main").addClass("hidden-fx")
        
        $("#n03").removeClass("hidden-fx");
        $(".textn").not("#n03").addClass("hidden-fx");
        
        $("g#en-fx-" + buttn).removeClass("hidden-fx");
        $("g.fx").not("g#en-fx-" + buttn).addClass("hidden-fx");
        
        $("g#light-en").removeClass("hidden-fx")
        $(".light").not("#light-en").addClass("hidden-fx");
        
    });
    
    $("g.is").on("click", function(event){
        
        var buttn = $(this).attr("buttn")
        
        $("#button-is-" + buttn).children("path").removeClass().addClass("sto24");
        
        $("g#testo-is-" + buttn).removeClass().addClass("sto23")
        
        $("path#check-is-" + buttn).removeClass().addClass("sto25");
        
        $("g#tec-is-" + buttn).removeClass("hidden-fx");
        $("g.tec").not("g#tec-is-" + buttn).addClass("hidden-fx");
        
        $("g#tec-is-main").removeClass("hidden-fx");
        $(".tec-main").not("g#tec-is-main").addClass("hidden-fx")
        
        $("#n04").removeClass("hidden-fx");
        $(".textn").not("#n04").addClass("hidden-fx");
        
        $("g#is-fx-" + buttn).removeClass("hidden-fx");
        $("g.fx").not("g#is-fx-" + buttn).addClass("hidden-fx");
        
        $("g#light-is").removeClass("hidden-fx")
        $(".light").not("#light-is").addClass("hidden-fx");
        
    });
    
})
	/*fine svg approfondimento TeC*/

	
	/*conferma compagnia*/
	$("#confirm").on("click", function() {
		
		$("#companies_section").fadeOut();
		$("#question").fadeOut();
		$("#companies").fadeOut();
		$("#numero_2").fadeOut();
		$("#plus_numero1").fadeOut();
		$("#1sez3-1").fadeOut();
		$("#1sez3-2").fadeOut();
		$("#1sez3-3").fadeOut();
		
		$("#habitats_section").fadeIn();
		$("#question_1").fadeIn();
		$("#habitats").fadeIn();
		$("#numero_3").fadeIn();
		$("#plus_numero2").fadeIn();
		$("#2sez3-1").fadeIn();
		$("#2sez3-2").fadeIn();
		$("#2sez3-3").fadeIn();
	});
	/*conferma habitat*/
	$("#confirm2").on("click", function() {
		$("#habitats_section").fadeOut();
		$("#question_1").fadeOut();
		$("#habitats").fadeOut();
		$("#numero_3").fadeOut();
		$("#plus_numero2").fadeOut();
		
		$("#TeC_section").fadeIn();
		$("#question_2").fadeIn();
		$("#TeC").fadeIn();
		$("#pt-esc").fadeIn();
	});
	
});
