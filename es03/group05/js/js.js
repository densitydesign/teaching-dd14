
		var userSearch ="";
		
		
		function count() {
			
			var k = userSearch;
			
			var r = 0;
			
				
			setInterval(function() {
        
        
        if (r < k) {
            r += 1;
			document.getElementById("result").innerHTML = r;
        }
				
    }, 150);	
			
			
			setTimeout(function() {
				if(k<30) {
					document.getElementById("result").innerHTML = r+1;
				}
			}, k*150+1000);
			setTimeout(function() {
				
					document.getElementById("result").innerHTML = r;
					document.getElementById("result").style.color = "#f0582a";
				
			}, (k)*150+2000);
			setTimeout(function() {
				$.scrollify.move("#6");
				}, (k)*150+5500);
		}
		
		$("#butlast").click(function(e) {
 	var myArray = ["0", "1", "2","3", "4", "5","6", "7", "8", "9", "10","11", "12","13", "14", "15","16", "17", "18", "19", "20","21", "22","23", "24", "25","26", "27", "28", "29", "30"];

			 userSearch ="";
			
    userSearch = document.getElementById("inpt_search").value;
			document.getElementById("inpt_search").value = "";
				document.getElementById("inpt_search").focus();
			document.getElementById("inpt_search").blur();
    	if (myArray.includes(userSearch)) {
			$(window).scrollTop($(window).height()*5);
			document.getElementById('myvideo2').style.display = "inline-block";
			
			
			document.getElementById('myvideo2').play();
		} else {
		alert('Please use the suggested format: Put in your grade average(XX/30)!');
			location.reload();
		}
		});
		$(".search,#inpt_search").mouseenter(function () { 
			
			$("#inpt_search").attr("value","Put your grade average here (XX/30)");
			$('.ikona').css('display','none');
		});
		$(".search,#inpt_search").mouseout(function () { 
			$("#inpt_search").attr("value","");
			if ($("#inpt_search").hasClass('fokus')) {} else {
			$('.ikona').css('display','block');}
		});
	$("#inpt_search").on('focus', function () {
		$(this).addClass('fokus');
		$(this).attr("value","");
		  $(document).on('keyup', function(e){
			   $('.search input').css('color','black');
      $('#butlast').css('color','white');
		$('#butlast').addClass('active2');
		  if (e.keyCode == 13)  {
			 $( "#butlast" ).trigger( "click" );
			}
		  });
		
		$('.ikona').css('display','none');
	$(this).parent('label').addClass('active');
		
});

$("#inpt_search").on('blur', function () {
		$('.ikona').css('display','block');
	
	$("#inpt_search").removeClass('fokus');
	if($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});
		
		$(".intro2").mousemove(function(e){
                var mouseX = e.pageX - $('.intro2').offset().left;
                var mouseY = e.pageY - $('.intro2').offset().top;
                var totalX = $('.intro2').width();
                var totalY = $('.intro2').height();
                var centerX = totalX / 2;
                var centerY = totalY / 2;
                var shiftX = centerX - mouseX;
                var shiftY = centerY - mouseY;

                var startX = ($('.intro2').width() / 2) - ($('.pic2').width() / 2);
                var startY = ($('.intro2').height() / 2) - ($('.pic2').height() / 2);

                $('.pic2').css('z-index') ;
                $('.pic2').css({ 'left': startX + (shiftX/10) + 'px'});
                $('.pic3').css({ 'left': startX + 120 + (shiftX/8) + 'px'});
              
         
            });
	
		document.getElementById('myvideo2').addEventListener('ended',myHandler2,false);
    function myHandler2(e) {
		if ($(window).scrollTop() < ($(window).height() * 5) || $(window).scrollTop() > ($(window).height() * 6)) {
	
         $(window).scrollTop($(window).height() * 5);
				document.getElementById('myvideo2').style.display = "none";
			count();
		} else {
		
			document.getElementById('myvideo2').style.display = "none";
			count();
		}
    }
		
		
		  document.getElementById('myvideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
		if ($(window).scrollTop() < ($(window).height())) {
			
         $(window).scrollTop($(window).height());	
		}
    }
		function slidee() {
				
			  var i =0.2;
				var ii=5;
				 setInterval(function() {
					if( ii<.35) {
						 document.getElementById('right_panel').style.width = '99.8%';	
						i=5;
						ii=5;
						return;
					 }
					else if (i<5) {
						  i+=.1;
						 document.getElementById('right_panel').style.width = 100-i + '%';
					 } else if (i>5) {
						 ii-=.1;
						
					 document.getElementById('right_panel').style.width = 100-ii + '%';
						 			 }
					  

 }, 25);
		
			  }
		
		
		function fading() {
			$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
			$('.bug').removeClass('Show');
			 $('.bug2').removeClass('Show');
			 $('.bug3').removeClass('Show');
			document.getElementById('right_panel').style.width = '99.8%';		
	document.getElementById("but1").style.backgroundImage = "";
			document.getElementById("but1").style.background = "";
	document.getElementById("but1").style.color = "";
	document.getElementById("but1").style.border= ""; 
			document.getElementById("but2").style.backgroundImage = "";
			document.getElementById("but2").style.background = "";
	document.getElementById("but2").style.color = "";
	document.getElementById("but2").style.border= ""; 
	
				document.getElementById("but3").style.backgroundImage = "";
			document.getElementById("but3").style.background = "";
	document.getElementById("but3").style.color = "";
	document.getElementById("but3").style.border= ""; 

			
			
			 $('.position12').removeClass('Show');
		 $('.position1').removeClass('Hide');
			$('.position22').removeClass('Show');
		 $('.position2').removeClass('Hide');
			$('.position32').removeClass('Show');
		 $('.position3').removeClass('Hide');
			$('.click12,.click1,.hover1,.hover12,.click22,.click2,.hover2,.hover22,.click32,.click3,.hover3,.hover32').removeClass('Show');
		}
		
		
		function change() { 
		
    document.
        getElementById("back").
        style.backgroundImage = "url(assets/Asset6.png)";
			
} 	
		function change1() {
	
    document.
        getElementById("right_panel").
        style.backgroundImage = "url(assets/Asset5.png)";

} 
		function change2() { 
				
    document.
        getElementById("back").
        style.backgroundImage = "url(assets/Asset8b.png)";
			
}
		function change22() {

    document.
        getElementById("right_panel").
        style.backgroundImage = "url(assets/Asset7.png)";
	
} 
		function change3() { 
				
    document.
        getElementById("back").
        style.backgroundImage = "url(assets/Asset10.png)";
			
} 
		function change32() { 

    document.
        getElementById("right_panel").
        style.backgroundImage = "url(assets/Asset9.png)";

} 
		
        var m_pos;
function resize(e){
	$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
    var parent = resize_el.parentNode;
    var dx = m_pos - e.x;
    m_pos = e.x;
    parent.style.width = (parseInt(getComputedStyle(parent, '').width) + dx) + "px";
var panel = parseInt(document.getElementById("right_panel").style.width,10);
				var panel2 = parseInt(document.getElementsByTagName("BODY")[0].clientWidth,10);
	
	if(panel < panel2 * 0.04){ 
		 $('.position22').addClass('Show');
		 $('.position2').addClass('Hide');
		
	} else {
		 $('.position22').removeClass('Show');
		 $('.position2').removeClass('Hide');

	}
	if(panel < panel2 * 0.82){ 
		if (document.getElementById("but1").classList.contains('active1')) {
	 $('.bug').addClass('Show');
		document.getElementById("back").style.backgroundImage = "url(assets/Asset3.png)";
		}
	
	} else {
		if (document.getElementById("but1").classList.contains('active1')) {
		 $('.bug').removeClass('Show');
		$('.bug').removeClass('Show');
		document.getElementById("back").style.backgroundImage = "url(assets/Asset6.png)";
		}
	}
		if(panel < panel2 * 0.06){ 
		if (document.getElementById("but2").classList.contains('active1')) {
	 $('.bug2').addClass('Show');
		document.getElementById("back").style.backgroundImage = "url(assets/Asset32.png)";
		}
	
	} else {
		if (document.getElementById("but2").classList.contains('active1')) {
		 $('.bug2').removeClass('Show');
		$('.bug2').removeClass('Show');
		document.getElementById("back").style.backgroundImage = "url(assets/Asset8b.png)";
		}
	}
	
	if(panel < panel2 * 0.74){ 
	if (document.getElementById("but3").classList.contains('active1')) {
	 $('.bug3').addClass('Show');
		document.getElementById("back").style.backgroundImage = "url(assets/Asset33.png)";
		}
	}
		else {
			if (document.getElementById("but3").classList.contains('active1')) {
		 $('.bug3').removeClass('Show');
		$('.bug3').removeClass('Show');
		document.getElementById("back").style.backgroundImage = "url(assets/Asset10.png)";
		}
		}
	
	if(panel < panel2 * 0.94){ 
		 $('.position12').addClass('Show');
		 $('.position1').addClass('Hide');
		 $('.position32').addClass('Show');
		 $('.position3').addClass('Hide');
		
		
	} else {
		 $('.position12').removeClass('Show');
		 $('.position1').removeClass('Hide');
		
				 $('.position32').removeClass('Show');
		 $('.position3').removeClass('Hide');
	}
if(panel < panel2 * 0.6){
$('.als-0,.als-1, .als-2, .als-3').css( "stroke", "white" );
	
	if (document.getElementById("but1").classList.contains('active1')) {
		document.getElementById("but1").style.backgroundImage= "linear-gradient(to right, #000 50%,  #3d3da6 50%)";
		document.getElementById("but1").style.border= "1px solid white";
	} else {
		
	document.getElementById("but1").style.backgroundImage = "";
		document.getElementById("but1").style.background = "black";
		document.getElementById("but1").style.color = "white";
		document.getElementById("but1").style.border= "1px solid white";
		
	}
} else {
	$('.als-0,.als-1, .als-2, .als-3').css( "stroke", "black" );
document.getElementById("but1").style.backgroundImage = "";
	document.getElementById("but1").style.background = "";
	document.getElementById("but1").style.color = "";
	document.getElementById("but1").style.border= ""; 
	
	if (document.getElementById("but1").classList.contains('active1')) {
		document.getElementById("but1").style.backgroundImage = "";
		$('.als-0,.als-1, .als-2, .als-3').css( "stroke", "white" );
	} else {
	document.getElementById("but1").style.backgroundImage = "";
	}
}

	if(panel < panel2 * 0.4){
		
	$('.uls-0,.uls-1, .uls-2, .uls-3').css( "stroke", "white" );
	if (document.getElementById("but2").classList.contains('active1')) {
		document.getElementById("but2").style.backgroundImage= "linear-gradient(to right, #000 50%,  #3d3da6 50%)";
		document.getElementById("but2").style.border= "1px solid white";
	} else {
	document.getElementById("but2").style.backgroundImage = "";
		document.getElementById("but2").style.background = "black";
		document.getElementById("but2").style.color = "white";
		document.getElementById("but2").style.border= "1px solid white";
	}
	} else {
		$('.uls-0,.uls-1, .uls-2, .uls-3').css( "stroke", "black" );
	document.getElementById("but2").style.backgroundImage = "";
			document.getElementById("but2").style.background = "";
	document.getElementById("but2").style.color = "";
	document.getElementById("but2").style.border= ""; 
	if (document.getElementById("but2").classList.contains('active1')) {
		document.getElementById("but2").style.backgroundImage = "";
		$('.uls-0,.uls-1, .uls-2, .uls-3').css( "stroke", "white" );
	} else {
	document.getElementById("but2").style.backgroundImage = "";
	}
}
		if(panel < panel2 * 0.2){
			$('.nls-0,.nls-1, .nls-2, .nls-3').css( "stroke", "white" );
	if (document.getElementById("but3").classList.contains('active1')) {
		document.getElementById("but3").style.backgroundImage= "linear-gradient(to right, #000 50%,  #3d3da6 50%)";
		document.getElementById("but3").style.border= "1px solid white";
	} else {
	document.getElementById("but3").style.backgroundImage = "";
		document.getElementById("but3").style.background = "black";
		document.getElementById("but3").style.color = "white";
		document.getElementById("but3").style.border= "1px solid white";
	}
		}else {
			$('.nls-0,.nls-1, .nls-2, .nls-3').css( "stroke", "black" );
	document.getElementById("but3").style.backgroundImage = "";
			document.getElementById("but3").style.background = "";
	document.getElementById("but3").style.color = "";
	document.getElementById("but3").style.border= ""; 
	if (document.getElementById("but3").classList.contains('active1')) {
		document.getElementById("but3").style.backgroundImage = "";
		$('.nls-0,.nls-1, .nls-2, .nls-3').css( "stroke", "white" );
	} else {
	document.getElementById("but3").style.backgroundImage = "";
	}
}
	
}
	
var resize_el = document.getElementById("resize");
resize_el.addEventListener("mousedown", function(e){
    m_pos = e.x;
	
    document.addEventListener("mousemove", resize, false);
}, false);
document.addEventListener("mouseup", function(){
				
    document.removeEventListener("mousemove", resize, false);
}, false);
	
var btnContainer = document.getElementById("myDIV");
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
	  $('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
  });
}

	function whichAnimationEvent(){
  var t,
      el = document.createElement("fakeelement");

  var animations = {
    "animation"      : "animationend",
    "OAnimation"     : "oAnimationEnd",
    "MozAnimation"   : "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  }

  for (t in animations){
    if (el.style[t] !== undefined){
      return animations[t];
    }
  }
	
}

var animationEvent = whichAnimationEvent();
$('.extrasadv').removeClass('Hide');
		 $('.extrasuni').addClass('Hide');
		 $('.extrasnew').addClass('Hide');
$('.btn').click(function () { 
	let index =$(event.currentTarget).index()+1;
	var wh = $(window).height();
	if (index===1) {
		 $('.extrasadv').removeClass('Hide');
		 $('.extrasuni').addClass('Hide');
		 $('.extrasnew').addClass('Hide');
		

		
		$('.als-0,.als-1, .als-2, .als-3').css( "stroke", "white" );
		$('.uls-0,.uls-1, .uls-2, .uls-3, .nls-0,.nls-1, .nls-2, .nls-3').css( "stroke", "black" );
				$(window).scrollTop(wh*2);
		
	} else if (index===2) {
		
		 $('.extrasadv').addClass('Hide');
		 $('.extrasuni').removeClass('Hide');
		 $('.extrasnew').addClass('Hide');
		
		$('.uls-0,.uls-1, .uls-2, .uls-3').css( "stroke", "white" );
		$('.als-0,.als-1, .als-2, .als-3, .nls-0,.nls-1, .nls-2, .nls-3').css( "stroke", "black" );
		$(window).scrollTop(wh*2.33);
	} else if (index===3) {
	
		$('.extrasadv').addClass('Hide');
		 $('.extrasuni').addClass('Hide');
		 $('.extrasnew').removeClass('Hide');
		
		$('.nls-0,.nls-1, .nls-2, .nls-3').css( "stroke", "white" );
		$('.als-0,.als-1, .als-2, .als-3, .uls-0,.uls-1, .uls-2, .uls-3').css( "stroke", "black" );
			$(window).scrollTop(wh*2.66);
	}  
	
	
	
	
	
	
	
  $('#back').addClass('fadeInLeft');
  $('#back').one(animationEvent, function(event) {
    $('#back').removeClass('fadeInLeft')
  });
	 $('#right_panel').addClass('fadeInLeft');
  $('#right_panel').one(animationEvent, function(event) {
    $('#right_panel').removeClass('fadeInLeft')
  });
}); 
		
		$('.speclast').click(function () {
			$.scrollify.instantMove("#1");
			
			location.reload();
		});
		$('.links').click(function () {
			let index =$(event.currentTarget).index();
			var arraylinks = ["https://www.reddit.com/r/adderall/comments/9cyzra/people_with_anxiety_and_adhd_who_are_prescribed/", "https://www.reddit.com/r/adderall/comments/52r385/adderall_has_changed_my_life/","https://www.reddit.com/r/adderall/comments/5w7vt6/trying_to_figure_out_what_the_hell_happened_last/", "https://www.reddit.com/r/college/comments/67z7p9/low_gpa_may_lose_scholarship/","https://www.reddit.com/r/EngineeringStudents/comments/7j84zc/study_drugs/", "https://www.reddit.com/r/college/comments/68npnv/struggling_academically_and_mentally/","https://www.reddit.com/r/adderall/comments/75flp9/adderall_social_anxiety_side_effect/", "https://www.reddit.com/r/adderall/comments/9vfv3t/i_cannot_eat_on_adderall/","https://www.reddit.com/r/Drugs/comments/9fa6oz/amphetamine/", "https://www.reddit.com/r/Drugs/comments/9fa6oz/amphetamine/","https://www.reddit.com/r/adderall/comments/52r385/adderall_has_changed_my_life/", "https://www.reddit.com/r/EngineeringStudents/comments/8ch6e9/how_do_you_guys_deal_with_extreme_stress/"];
			var win = window.open(arraylinks[index], '_blank');
if (win) {
    //Browser has allowed it to be opened
    win.focus();
} else {
    //Browser has blocked it
    alert('Please allow popups for this website');
}
			
			});
			var clicked1,clicked12,clicked2,clicked22,clicked3,clicked32  = false;
		$('.toggle1').click(function () {
		if (clicked1) {
			
				$('.click1').removeClass('Show');
				
				$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
				clicked1 = false;
		} else {
			
			 $('.click1').addClass('Show');
			 $('.hover1').removeClass('Show');
			$('.home').css('opacity',0.7);
			$('#rightpanel').css('opacity',0.7);
			clicked1 = true;
		}
		});
		$('.close1').click(function () {
			 $('.click1').removeClass('Show');
			 $('.hover1').removeClass('Show');
				$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
		});
		$('.toggle1').mouseenter(function () {
			$('rect.toggle1 ').addClass('scaleup');
			$('text.toggle1 ').addClass('scaleuptxt');
			 $('.hover1').addClass('Show');
		});
		$('.toggle1').mouseout(function () {
			$('rect.toggle1').removeClass('scaleup');
			$('text.toggle1 ').removeClass('scaleuptxt');
			 $('.hover1').removeClass('Show');
		
		});
		$('.toggle12').click(function () {
			if (clicked12) {
				 $('.click12').removeClass('Show');
				$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
				clicked12 = false;
			} else {
				
				
			 $('.click12').addClass('Show');
			 $('.hover12').removeClass('Show');
				clicked12 = true;
				$('.home').css('opacity',0.7);
			$('#rightpanel').css('opacity',0.7);
			}
			
		
		});
		$('.close12').click(function () {
			 $('.click12').removeClass('Show');
			 $('.hover12').removeClass('Show');
			$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
		
		});
		$('.toggle12').mouseenter(function () {
			$('rect.toggle12 ').addClass('scaleup');
			$('text.toggle12 ').addClass('scaleuptxt');
			 $('.hover12').addClass('Show');
		
		});
		$('.toggle12').mouseout(function () {
			$('rect.toggle12').removeClass('scaleup');
			$('text.toggle12 ').removeClass('scaleuptxt');
			 $('.hover12').removeClass('Show');
		
		});
			$('.toggle2').click(function () {
						if (clicked2) {
				 $('.click2').removeClass('Show');
				$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
				clicked2 = false;
			} else {
				
				
			 $('.click2').addClass('Show');
			 $('.hover2').removeClass('Show');
				clicked2 = true;
				$('.home').css('opacity',0.7);
			$('#rightpanel').css('opacity',0.7);
			}
			
		
		});
		$('.close2').click(function () {
			 $('.click2').removeClass('Show');
			 $('.hover2').removeClass('Show');
			$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
		
		});
		$('.toggle2').mouseenter(function () {
			$('rect.toggle2').addClass('scaleup2');
			$('text.toggle2 ').addClass('scaleuptxt2');
			 $('.hover2').addClass('Show');
		
		});
		$('.toggle2').mouseout(function () {
			$('rect.toggle2').removeClass('scaleup2');
			$('text.toggle2 ').removeClass('scaleuptxt2');
			 $('.hover2').removeClass('Show');
		
		});
			$('.toggle22').click(function () {
								if (clicked22) {
				 $('.click22').removeClass('Show');
				$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
				clicked22 = false;
			} else {
				
				
			 $('.click22').addClass('Show');
			 $('.hover22').removeClass('Show');
				clicked22 = true;
				$('.home').css('opacity',0.7);
			$('#rightpanel').css('opacity',0.7);
			}
			
		
		});
		$('.close22').click(function () {
			 $('.click22').removeClass('Show');
			 $('.hover22').removeClass('Show');
			$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
		
		});
		$('.toggle22').mouseenter(function () {
				$('rect.toggle22').addClass('scaleup2');
			$('text.toggle22 ').addClass('scaleuptxt2');
			 $('.hover22').addClass('Show');
		
		});
		$('.toggle22').mouseout(function () {
				$('rect.toggle22').removeClass('scaleup2');
			$('text.toggle22 ').removeClass('scaleuptxt2');
			 $('.hover22').removeClass('Show');
		
		});
					$('.toggle3').click(function () {
								if (clicked3) {
				 $('.click3').removeClass('Show');
				$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
				clicked3 = false;
			} else {
				
				
			 $('.click3').addClass('Show');
			 $('.hover3').removeClass('Show');
				clicked3 = true;
				$('.home').css('opacity',0.7);
			$('#rightpanel').css('opacity',0.7);
			}
			
		
		});
		$('.close3').click(function () {
			 $('.click3').removeClass('Show');
			 $('.hover3').removeClass('Show');
			$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
		
		});
		$('.toggle3').mouseenter(function () {
			$('rect.toggle3').addClass('scaleup');
			$('text.toggle3 ').addClass('scaleuptxt');
			 $('.hover3').addClass('Show');
		
		});
		$('.toggle3').mouseout(function () {
			$('rect.toggle3').removeClass('scaleup');
			$('text.toggle3 ').removeClass('scaleuptxt');
			 $('.hover3').removeClass('Show');
		
		});
			$('.toggle32').click(function () {
									if (clicked32) {
				 $('.click32').removeClass('Show');
				$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
				clicked32 = false;
			} else {
				
				
			 $('.click32').addClass('Show');
			 $('.hover32').removeClass('Show');
				clicked32 = true;
				$('.home').css('opacity',0.7);
			$('#rightpanel').css('opacity',0.7);
			}
			
		
		});
		$('.close32').click(function () {
			 $('.click32').removeClass('Show');
			 $('.hover32').removeClass('Show');
			$('.home').css('opacity',1);
			$('#rightpanel').css('opacity',1);
		
		});
		$('.toggle32').mouseenter(function () {
			$('rect.toggle32').addClass('scaleup');
			$('text.toggle32 ').addClass('scaleuptxt');
			 $('.hover32').addClass('Show');
		
		});
		$('.toggle32').mouseout(function () {
			$('rect.toggle32').removeClass('scaleup');
			$('text.toggle32 ').removeClass('scaleuptxt');
			 $('.hover32').removeClass('Show');
		
		});
		
		jQuery(function($) {
	var triggered1 = false;
    var triggered2 = false;
	var triggered3 = false;
    var $win = $(window);
    var winH = $win.height();   // Get the window height.

    $win.on("scroll", function () {
		 $(".btnscroll").mouseover(function () { 
		 	
		  $.scrollify.disable();
		 });
		 $(".btnscroll").mouseout(function () { 
			 	
		 	 $.scrollify.enable();
		 
		 });
		
		
		 if ($(this).scrollTop() > winH *4 ) {
			 $('.btnscroll').removeClass('btnscroll-fixed');
			
			 } 
		
	 
		else if ($(this).scrollTop() > winH *2.45 ) {
			if (triggered3) {
				
			} else {
            $( "#but3" ).trigger( "click" );
				
			$("#but3 a").trigger('focus');
				triggered2 = false;
				triggered1 = false;
				triggered3 = true;
				
				$('.extrasadv').addClass('Hide');
		 $('.extrasuni').addClass('Hide');
		 $('.extrasnew').removeClass('Hide');
		
		$('.nls-0,.nls-1, .nls-2, .nls-3').css( "stroke", "white" );
		$('.als-0,.als-1, .als-2, .als-3, .uls-0,.uls-1, .uls-2, .uls-3').css( "stroke", "black" );
				
			}
				if($('.btnscroll').hasClass('btnscroll-fixed')) {
			} else {
				 $('.btnscroll').addClass('btnscroll-fixed');
			}
        } else if ($(this).scrollTop() > winH *2.15  ) {
			if (triggered2) {
				
			} else {
               $( "#but2" ).trigger( "click" );
			$("#but2 a").trigger('focus');
				
				triggered2 = true;
				triggered1 = false;
				triggered3 = false;
				
				 $('.extrasadv').addClass('Hide');
		 $('.extrasuni').removeClass('Hide');
		 $('.extrasnew').addClass('Hide');
		
		$('.uls-0,.uls-1, .uls-2, .uls-3').css( "stroke", "white" );
		$('.als-0,.als-1, .als-2, .als-3, .nls-0,.nls-1, .nls-2, .nls-3').css( "stroke", "black" );
			}
				if($('.btnscroll').hasClass('btnscroll-fixed')) {
			} else {
				 $('.btnscroll').addClass('btnscroll-fixed');
			}
        }else if ($(this).scrollTop() > winH *2 -20 ) {
			if (triggered1) {
				
			} else {
               $( "#but1" ).trigger( "click" );
			$("#but1 a").trigger('focus');
				triggered2 = false;
				triggered1 = true;
				triggered3 = false;
				
				 $('.extrasadv').removeClass('Hide');
		 $('.extrasuni').addClass('Hide');
		 $('.extrasnew').addClass('Hide');
		
		
		
		$('.als-0,.als-1, .als-2, .als-3').css( "stroke", "white" );
		$('.uls-0,.uls-1, .uls-2, .uls-3, .nls-0,.nls-1, .nls-2, .nls-3').css( "stroke", "black" );
			}
			if($('.btnscroll').hasClass('btnscroll-fixed')) {
			} else {
				 $('.btnscroll').addClass('btnscroll-fixed');
			}
			
        } else if ($(this).scrollTop() < winH *2  ) { 
			if ($(this).scrollTop() < 50  )  {
				var video = document.getElementById('myvideo');
				// or video = $('.video-selector')[0];
				video.currentTime = 0;
				video.play();
			}
			if ($(this).scrollTop() > winH - 10 )  { 
				
				setTimeout(function(){ 
					$('.gif1').attr("src","assets/start1.gif"); 
				 $('.gif1').css("opacity", "0");
					$('.gif2').css("opacity", "1");
				}, 2000);
				
			}  else if ($(this).scrollTop() < winH *2 - 30 ) {
				if ($.scrollify.isDisabled()) {
			}
	} 
		$('.btnscroll').removeClass('btnscroll-fixed');
		
		
		}
    }).on("resize", function(){ // If the user resizes the window
       winH = $(this).height(); // you'll need the new height value
    });

});
  
