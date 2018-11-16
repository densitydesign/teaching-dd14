$(document).ready(function(){
	
	var sections = $('tot')
  , nav = $('navigation')
  , nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
	
	
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("navigation-fixed")
  } else {
    navbar.classList.remove("navigation-fixed");
  }
}
  	

	
	$(".drugs:nth-child(10)").addClass("drugs--Shown");
	$(".labels:nth-child(10)").addClass("labels--Shown");
	$(".stu").addClass("movetop");
	$(".button1").addClass("btns-active");
	$(".buttonall").addClass("btns-active");
  $(".drugs").on("click", function(event){
    let index =$(event.currentTarget).index()+1;
     $(".drugs").removeClass("drugs--Shown");
      $(".drugs:nth-child(" + index + ")").addClass("drugs--Shown");
      $(".labels").removeClass("labels--Shown");
      $(".labels:nth-child(" + index + ")").addClass("labels--Shown");
      
      
})
		$(".drugs").hover(function(event){
    let index =$(event.currentTarget).index()+1;
     $(".drugs").removeClass("drugs--Shown");
      $(".drugs:nth-child(" + index + ")").addClass("drugs--Shown");
      $(".labels").removeClass("labels--Shown");
      $(".labels:nth-child(" + index + ")").addClass("labels--Shown");
      
      
})
		$(".prikazi1:nth-child(10)").addClass("prikazi1--Shown");
	$(".nalepi1:nth-child(10)").addClass("nalepi1--Shown");
	  $(".prikazi1").on("click", function(event){
    let index =$(event.currentTarget).index()+1;
     $(".prikazi1").removeClass("prikazi1--Shown");
      $(".prikazi1:nth-child(" + index + ")").addClass("prikazi1--Shown");
      $(".nalepi1").removeClass("nalepi1--Shown");
      $(".nalepi1:nth-child(" + index + ")").addClass("nalepi1--Shown");
      
      
})
		$(".prikazi1").hover(function(event){
    let index =$(event.currentTarget).index()+1;
     $(".prikazi1").removeClass("prikazi1--Shown");
      $(".prikazi1:nth-child(" + index + ")").addClass("prikazi1--Shown");
      $(".nalepi1").removeClass("nalepi1--Shown");
      $(".nalepi1:nth-child(" + index + ")").addClass("nalepi1--Shown");
      
      
})


	
	
	

	 $(".button1").on("click", function(event){
		  $(".button1").addClass("btns-active");
		 $(".button2").removeClass("btns-active");
		$(".nonstu").removeClass("movetop");
		$(".stu").addClass("movetop");
		 $("#sourcess").removeClass("ptops");
	 })
		 $(".button2").on("click", function(event){
			   $(".button2").addClass("btns-active");
		 $(".button1").removeClass("btns-active");
		$(".stu").removeClass("movetop");
		$(".nonstu").addClass("movetop");
		$("#sourcess").addClass("ptops");
	 })
	
		$(".m2ls-1").addClass("m2ls-1--Shown");
	$(".m2ls-2").addClass("m2ls-2--Shown");
	$(".m2ls-3").addClass("m2ls-3--Shown");
	$(".grid").addClass("grid--Shown");
	 $(".buttonall").on("click", function(event){
		 	$(".buttonall").addClass("btns-active");
		 	$(".buttonnon").removeClass("btns-active");
		 	$(".buttonstu").removeClass("btns-active");
		 	$(".buttonave").removeClass("btns-active");
			$(".pernon").removeClass("pernon--Shown");
			$(".m2ls-2").addClass("m2ls-2--Shown");
		 	$(".perstu").removeClass("perstu--Shown");
			$(".m2ls-1").addClass("m2ls-1--Shown");
			$(".grid").addClass("grid--Shown");
			$(".perave").removeClass("perave--Shown");
			$(".m2ls-3").addClass("m2ls-3--Shown");
	 })
		 $(".buttonave").on("click", function(event){
			 $(".buttonave").addClass("btns-active");
		 	$(".buttonnon").removeClass("btns-active");
		 	$(".buttonstu").removeClass("btns-active");
		 	$(".buttonall").removeClass("btns-active");
			$(".grid").removeClass("grid--Shown");
			$(".perstu").removeClass("perstu--Shown");
			$(".m2ls-1").removeClass("m2ls-1--Shown");
			$(".pernon").removeClass("pernon--Shown");
			$(".m2ls-2").removeClass("m2ls-2--Shown");
			$(".perave").addClass("perave--Shown");
			$(".m2ls-3").addClass("m2ls-3--Shown");
	 })
		 $(".buttonnon").on("click", function(event){
			  $(".buttonnon").addClass("btns-active");
		 	$(".buttonave").removeClass("btns-active");
		 	$(".buttonstu").removeClass("btns-active");
		 	$(".buttonall").removeClass("btns-active");
			$(".grid").removeClass("grid--Shown");
			$(".perave").removeClass("perave--Shown");
			$(".m2ls-3").removeClass("m2ls-3--Shown");
			$(".perstu").removeClass("perstu--Shown");
			$(".m2ls-1").removeClass("m2ls-1--Shown");
			$(".pernon").addClass("pernon--Shown");
			$(".m2ls-2").addClass("m2ls-2--Shown");
	 })
		 $(".buttonstu").on("click", function(event){
			  $(".buttonstu").addClass("btns-active");
		 	$(".buttonave").removeClass("btns-active");
		 	$(".buttonnon").removeClass("btns-active");
		 	$(".buttonall").removeClass("btns-active");
			$(".grid").removeClass("grid--Shown");
			$(".perave").removeClass("perave--Shown");
			$(".m2ls-3").removeClass("m2ls-3--Shown");
			$(".pernon").removeClass("pernon--Shown");
			$(".m2ls-2").removeClass("m2ls-2--Shown");
			$(".perstu").addClass("perstu--Shown");
			$(".m2ls-1").addClass("m2ls-1--Shown");
	 })
	
  $(".mapz").mouseenter( function(event){
	  
    let index =$(event.currentTarget).index()+1;
	  $(".mapz").removeClass("mapz--Hide");
     $(".mapz").addClass("mapz--Hide");
	  $(".mapz:nth-child(" + index + ")").removeClass("mapz--Hide");
      $(".states").removeClass("states--Shown");
      $(".states:nth-child(" + index + ")").addClass("states--Shown");

      
})
	 $(".mapz").mouseleave( function(event){
	   $(".mapz").removeClass("mapz--Hide");
		 $(".states").removeClass("states--Shown"); 
})
	$(".mapz").mouseleave( function(event){
	  $(".mapz").removeClass("mapz--Hide");
    $(".states").removeClass("states--Shown");
      
})
	
	 $(".bdots:first-child").addClass("bdots--Shown");
      $(".wdots:first-child").addClass("wdots--Shown");
	$(".questions:first-child").addClass("questions--Shown");
	 $(".bdots").addClass("bdots--Hide");
	$(".wdots").addClass("wdots--Hide");
	$(".bdots:first-child").removeClass("bdots--Hide");
      $(".wdots:first-child").removeClass("wdots--Hide");
 $(".wdots").mouseenter( function(event){
    let index =$(event.currentTarget).index()+1;
	    $(".questions").removeClass("questions--Shown");
      $(".questions:nth-child(" + index + ")").addClass("questions--Shown");
	  $(".wdots").removeClass("wdots--Shown");
	   $(".bdots").removeClass("bdots--Shown");
       $(".bdots:nth-child(" + index + ")").addClass("bdots--Shown");
      $(".wdots:nth-child(" + index + ")").addClass("wdots--Shown");
	  	 $(".wdots").removeClass("wdots--Hide");
	  $(".wdots").addClass("wdots--Hide");
      $(".wdots:nth-child(" + index + ")").removeClass("wdots--Hide");
	  	 $(".bdots").removeClass("bdots--Hide");
	  $(".bdots").addClass("bdots--Hide");
      $(".bdots:nth-child(" + index + ")").removeClass("bdots--Hide");
      
	
	    
	  
   
})


	 $(".wdots").mouseleave( function(event){
    let index =$(event.currentTarget).index()+1;
	     $(".wdots").removeClass("wdots--Hide");
		 $(".bdots").removeClass("bdots--Hide");
	
})


 $(".bdots").mouseenter( function(event){
    let index =$(event.currentTarget).index()+1;
	    $(".questions").removeClass("questions--Shown");
      $(".questions:nth-child(" + index + ")").addClass("questions--Shown");
	  $(".wdots").removeClass("wdots--Shown");
	   $(".bdots").removeClass("bdots--Shown");
      $(".bdots:nth-child(" + index + ")").addClass("bdots--Shown");
      $(".wdots:nth-child(" + index + ")").addClass("wdots--Shown");
       $(".wdots").removeClass("wdots--Hide");
	  $(".wdots").addClass("wdots--Hide");
      $(".wdots:nth-child(" + index + ")").removeClass("wdots--Hide");
	  	 $(".bdots").removeClass("bdots--Hide");
	  $(".bdots").addClass("bdots--Hide");
      $(".bdots:nth-child(" + index + ")").removeClass("bdots--Hide");
	
	    
	  
   
})



	 $(".bdots").mouseleave( function(event){
    let index =$(event.currentTarget).index()+1;
	     $(".wdots").removeClass("wdots--Hide");
		 $(".bdots").removeClass("bdots--Hide");
	
})
	$(".u2ls-21:last-child").addClass("u2ls-21--Shown");
      $(".u2ls-22:last-child").addClass("u2ls-22--Shown");
		
	 $(".u2ls-21").mouseenter( function(event){
	  let index =$(event.currentTarget).index()+1;
		  $(".u2ls-21").removeClass("u2ls-21--Shown");
      $(".u2ls-21:nth-child(" + index + ")").addClass("u2ls-21--Shown");
		  $(".u2ls-22").removeClass("u2ls-22--Shown");
      $(".u2ls-22:nth-child(" + index + ")").addClass("u2ls-22--Shown");
		 $(".u2ls-21").addClass("u2ls-21--Hide");
	  $(".u2ls-22").addClass("u2ls-22--Hide");
		 $(".u2ls-21:nth-child(" + index + ")").removeClass("u2ls-21--Hide");
		$(".u2ls-22:nth-child(" + index + ")").removeClass("u2ls-22--Hide");
	})
	 $(".u2ls-21").mouseleave( function(event){
    let index =$(event.currentTarget).index()+1;
	     $(".u2ls-21").removeClass("u2ls-21--Hide");
		 $(".u2ls-22").removeClass("u2ls-22--Hide");
	
})
		 $(".u2ls-22").mouseenter( function(event){
	  let index =$(event.currentTarget).index()+1;
		  $(".u2ls-21").removeClass("u2ls-21--Shown");
      $(".u2ls-21:nth-child(" + index + ")").addClass("u2ls-21--Shown");
		  $(".u2ls-22").removeClass("u2ls-22--Shown");
      $(".u2ls-22:nth-child(" + index + ")").addClass("u2ls-22--Shown");
		 $(".u2ls-21").addClass("u2ls-21--Hide");
	  $(".u2ls-22").addClass("u2ls-22--Hide");
		 $(".u2ls-21:nth-child(" + index + ")").removeClass("u2ls-21--Hide");
		$(".u2ls-22:nth-child(" + index + ")").removeClass("u2ls-22--Hide");
	})
	 $(".u2ls-22").mouseleave( function(event){
    let index =$(event.currentTarget).index()+1;
	     $(".u2ls-21").removeClass("u2ls-21--Hide");
		 $(".u2ls-22").removeClass("u2ls-22--Hide");
	
})
	
	$(".headlines:first-child").addClass("headlines--Shown");
      $(".hldata:first-child").addClass("hldata--Shown");
	 $(".headlines").mouseenter( function(event){
	  
    let index =$(event.currentTarget).index()+1;
	
      $(".headlines").removeClass("headlines--Shown");
      $(".headlines:nth-child(" + index + ")").addClass("headlines--Shown");
		 $(".hldata").removeClass("hldata--Shown");
      $(".hldata:nth-child(" + index + ")").addClass("hldata--Shown");
})
		 $(".headlines").mouseleave( function(event){
    let index =$(event.currentTarget).index()+1;
	     $(".headlines").removeClass("headlines--Shown");
	 $(".hldata").removeClass("hldata--Shown");
})
		 $(".hldata").mouseenter( function(event){
	  
    let index =$(event.currentTarget).index()+1;
	
      $(".headlines").removeClass("headlines--Shown");
      $(".headlines:nth-child(" + index + ")").addClass("headlines--Shown");
		 $(".hldata").removeClass("hldata--Shown");
      $(".hldata:nth-child(" + index + ")").addClass("hldata--Shown");
})
		 $(".hldata").mouseleave( function(event){
    let index =$(event.currentTarget).index()+1;
	     $(".headlines").removeClass("headlines--Shown");
	 $(".hldata").removeClass("hldata--Shown");
})
	
	
			 $(".rombs").mouseenter( function(event){
	  
    let index =$(event.currentTarget).index()+1;
	
      $(".rombs").removeClass("rombs--Shown");
      $(".rombs:nth-child(" + index + ")").addClass("rombs--Shown");
		 $(".pers").removeClass("pers--Shown");
      $(".pers:nth-child(" + index + ")").addClass("pers--Shown");
})
		 $(".rombs").mouseleave( function(event){
    let index =$(event.currentTarget).index()+1;
	     $(".rombs").removeClass("rombs--Shown");
	 $(".pers").removeClass("pers--Shown");
})
	
	
	
	
		 


		 
	
	 $(".buttontot").addClass("btns-active");
	$(".totalni").addClass("totalni--Shown");
	
			 $(".buttontot").on("click", function(event){
			 $(".buttontot").addClass("btns-active");
		 	$(".buttonvm").removeClass("btns-active");
		 	$(".buttonnaj").removeClass("btns-active");
		 	
			
			$(".najbolji").removeClass("najbolji--Shown");
	
		$(".visemanje").removeClass("visemanje--Shown");
			
		$(".totalni").addClass("totalni--Shown");
	 })
		 $(".buttonvm").on("click", function(event){
			 
			 
			 
			  $(".buttonvm").addClass("btns-active");
		 	$(".buttonnaj").removeClass("btns-active");
		 	$(".buttontot").removeClass("btns-active");
		 	
		$(".totalni").removeClass("totalni--Shown");
			$(".visemanje").addClass("visemanje--Shown");
			

			$(".najbolji").removeClass("najbolji--Shown");
			
	 })
		 $(".buttonnaj").on("click", function(event){
			  $(".buttonnaj").addClass("btns-active");
		 	$(".buttonave").removeClass("btns-active");
		 	$(".buttonvm").removeClass("btns-active");
		
		
			$(".totalni").removeClass("totalni--Shown");
			$(".visemanje").removeClass("visemanje--Shown");
			

			$(".najbolji").addClass("najbolji--Shown");

	 })
	

	
			 $(".naj1").mouseenter( function(event){
	  
    let index =$(event.currentTarget).index()+1;
	
      $(".naj1").removeClass("naj1--Shown");
      $(".naj1:nth-child(" + index + ")").addClass("naj1--Shown");
				 $(".naj1").addClass("naj1--Hide");
      $(".vmnaj11:nth-child(" + index + ")").removeClass("naj1--Hide");	 
	 $(".najboljil").removeClass("najboljil--Shown");
      $(".najboljil:nth-child(" + index + ")").addClass("najboljil--Shown");
	
	
		})
		 $(".naj1").mouseleave( function(event){
    let index =$(event.currentTarget).index()+1;
	     $(".naj1").removeClass("naj1--Hide");
			  $(".naj1").removeClass("naj1--Shown");
	$(".najboljil").removeClass("najboljil--Shown");
})
	
	
	
		 $(".vm1").mouseenter( function(event){
	  
    let index =$(event.currentTarget).index()+1;$
	
      $(".vm1").removeClass("vm1--Shown");
      $(".vm1:nth-child(" + index + ")").addClass("vm1--Shown");
		 $(".vm1").addClass("vm1--Hide");
      $(".vm1:nth-child(" + index + ")").removeClass("vm1--Hide");	 
	 $(".visemanjel").removeClass("visemanjel--Shown");
      $(".visemanjel:nth-child(" + index + ")").addClass("visemanjel--Shown");
	
	
		})
		 $(".vm1").mouseleave( function(event){
    let index =$(event.currentTarget).index()+1;
	     $(".vm1").removeClass("vm1--Hide");
			  $(".vm1").removeClass("vm1--Shown");
	$(".visemanjel").removeClass("visemanjel--Shown");
})
	
	
	
	
	
	
	})
	