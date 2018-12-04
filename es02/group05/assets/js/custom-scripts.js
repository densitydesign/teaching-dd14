// This is Javascript code to make the example in question02 work, fell free to remove this when you start working on your project

var lastScrollLeft = 0;
$(window).scroll(function() {
    var documentScrollLeft = $(document).scrollLeft();
    if (lastScrollLeft != documentScrollLeft) {

        lastScrollLeft = documentScrollLeft;
    }
});

var broj = 6;
$(document).ready(function() {

	$(".rmapq").on("click",function(event){
	let index =$(event.currentTarget).index()+1;
		if(index == 1) {

		} else if(index == 2) {

		} else if(index == 3) {

		} else if(index == 4) {

		} else if(index == 5) {

		} else if(index == 6) {

		} else if(index == 7) {

		} else if(index == 8) {

		} else if(index == 9) {

		}



	})




	$(".lhover").addClass("lhover--Shown");
	$(".all-sve rect").addClass("butallhover");
 $(".all-but").mouseenter( function(event){
    let index =$(event.currentTarget).index()+1;
	    $(".lhover").removeClass("lhover--Show");
	 $(".lhover").removeClass("lhover--Shown");

	  $(".all-but:nth-child(" + index + ") rect").addClass("buthover"+ index);


	  $(".all-sve rect").removeClass("butallhover");
   	if (broj === index) {

	} else {
		 $(".lhover:nth-child(" + index + ")").addClass("lhover--Show");
	}
 })


	 $(".all-but").mouseleave( function(event){
		  let index =$(event.currentTarget).index()+1;
 $(".lhover").removeClass("lhover--Show");
	       $(".all-but rect").removeClass("buthover"+ index);
		 if ($(".removee").hasClass("removee--Show")) {


       } else {
	$(".all-sve rect").addClass("butallhover");
	$(".lhover").addClass("lhover--Shown");
}
})

 $(".all-but").on("click",function(event){
	 $(".lhover").removeClass("lhover--Show");
	 $(".all-but rect").removeClass("fbuthover1");
	 $(".all-but rect").removeClass("fbuthover2");
	 $(".all-but rect").removeClass("fbuthover3");
	 $(".all-but rect").removeClass("fbuthover4");
	 $(".all-but rect").removeClass("fbuthover5");
$(".all-sve rect").removeClass("butallhover");
	 let index =$(event.currentTarget).index()+1;
	 broj =index;
	$(".all-but:nth-child(" + index + ") rect").addClass("fbuthover"+ index);
	    $(".laclick").removeClass("laclick--Show");
	 $(".lhover").removeClass("lhover--Shown");
      $(".laclick:nth-child(" + index + ")").addClass("laclick--Show");
	 	$(".appearr").addClass("appearr--Show");
	$(".removee").addClass("removee--Show");



	})
	$(".all-sve").on("click",function(event){
		broj = 6;
		$(".all-but rect").removeClass("fbuthover1");
	 $(".all-but rect").removeClass("fbuthover2");
	 $(".all-but rect").removeClass("fbuthover3");
	 $(".all-but rect").removeClass("fbuthover4");
	 $(".all-but rect").removeClass("fbuthover5");
 $(".lhover").removeClass("lhover--Show");
	 $(".lhover").addClass("lhover--Shown");
	  $(".laclick").removeClass("laclick--Show");
	 	$(".appearr").removeClass("appearr--Show");
	$(".removee").removeClass("removee--Show");
	$(".all-sve rect").addClass("butallhover");


	})

	$(".proto1but").on("click",function(event){
	  let index =$(event.currentTarget).index()+1;
	  $(".proto1smalllabel rect").addClass("proto1smalllabel--Hide");
	 $(".proto1smallwaves rect").addClass("cgrey");
	 $(".proto1subcube rect").addClass("cgrey");
		 $(".proto1smallwaves path").addClass("cgrey");


	 if($(".proto1but:nth-child(" + index + ") ").hasClass("click134")) {
		$(".proto1but rect").removeClass("proto1but--Hide");
	 $(".proto1biglabel rect").removeClass("proto1biglabel--Hide");
		  	$(".proto1bigwaves rect").removeClass("cgrey");
	 $(".proto1bigwaves path").removeClass("cgrey");
	$(".proto1cube rect").removeClass("cgrey");
		 $(".proto1biglabel:nth-child(" + index + ") rect").removeClass("proto1biglabel--Hide");
		 $(".proto1but:nth-child(" + index + ") ").removeClass("click134")
		} else {
	$(".proto1but").removeClass("proto1but--Hide");
	 $(".proto1biglabel rect").removeClass("proto1biglabel--Hide");
				$(".proto1but rect").removeClass("proto1but--Hide");
	$(".proto1but").removeClass("click134");
	$(".proto1but:nth-child(" + index + ") ").addClass("click134");
	$(".proto1but:nth-child(" + index + ") rect").addClass("proto1but--Hide");

	 $(".proto1biglabel:nth-child(" + index + ") rect").addClass("proto1biglabel--Hide");
	 $(".proto1bigwaves rect").addClass("cgrey");
	 $(".proto1cube rect").addClass("cgrey");
		 $(".proto1bigwaves path").addClass("cgrey");

	  	$(".proto1bigwaves:nth-child(" + index + ") rect").removeClass("cgrey");
	 $(".proto1bigwaves:nth-child(" + index + ") path").removeClass("cgrey");
	$(".proto1cube:nth-child(" + index + ") rect").removeClass("cgrey");

		}
	})

	$(".proto1smalllabel").mouseenter(function(event){
		 $(".proto1biglabel").addClass("proto1biglabel--Hide");
	 $(".proto1bigwaves rect").addClass("cgrey");
	 $(".proto1cube rect").addClass("cgrey");
		 $(".proto1bigwaves path").addClass("cgrey");

		$(".proto1smalllabel rect").removeClass("proto1smalllabel--Hide");
		$(".proto1smallwaves rect").addClass("cgrey");
	 $(".proto1subcube rect").addClass("cgrey");
		 $(".proto1smallwaves path").addClass("cgrey");
			$(".proto1but rect").removeClass("proto1but--Hide");
	 let index =$(event.currentTarget).index()+1;

		$(".proto1smalllabel:nth-child(" + index + ") rect").addClass("proto1smalllabel--Hide");
		 $(".proto1smallwaves:nth-child(" + index + ")  rect").removeClass("cgrey");
	 $(".proto1subcube:nth-child(" + index + ") rect").removeClass("cgrey");
		 $(".proto1smallwaves:nth-child(" + index + ") path").removeClass("cgrey");


})
	$(".proto1smalllabel").mouseleave(function(event){

		 $(".proto1biglabel").removeClass("proto1biglabel--Hide");
	 $(".proto1bigwaves rect").removeClass("cgrey");
	 $(".proto1cube rect").removeClass("cgrey");
		 $(".proto1bigwaves path").removeClass("cgrey");

		$(".proto1smalllabel rect").addClass("proto1smalllabel--Hide");
		$(".proto1smallwaves rect").removeClass("cgrey");
	 $(".proto1subcube rect").removeClass("cgrey");
		 $(".proto1smallwaves path").removeClass("cgrey");
		$(".proto1but").removeClass("click134")
		 $(".proto1biglabel rect").removeClass("proto1biglabel--Hide");

	})

	$(".tmaplab").mouseover(function(event){
		 let index =$(event.currentTarget).index()+1;
		$(".tmaplab rect").addClass("tmaplab--Hide")
		$(".tmaplab:nth-child(" + index + ") rect").removeClass("tmaplab--Hide");
		$(".tmapsq").addClass("tmapsq--Hide")
		$(".tmapsq:nth-child(" + index + ")").removeClass("tmapsq--Hide");
	})
		$(".tmapsq").mouseover(function(event){
		 let index =$(event.currentTarget).index()+1;
		$(".tmaplab rect").addClass("tmaplab--Hide")
		$(".tmaplab:nth-child(" + index + ") rect").removeClass("tmaplab--Hide");
		$(".tmapsq").addClass("tmapsq--Hide")
		$(".tmapsq:nth-child(" + index + ")").removeClass("tmapsq--Hide");
	})

	 $(".tmaplab").mouseleave( function(event){
		$(".tmaplab").removeClass("tmapsq--Hide")
	})
	$(".tmapsq").mouseleave( function(event){
		$(".tmapsq").removeClass("tmapsq--Hide")
	})

 $(".labuni").mouseenter( function(event){
	 let index =$(event.currentTarget).index()+1;

    $(".labuni rect").removeClass("labuni--Hide");
	$(".mrzimte").addClass("mrzimte--Hide");
      $(".labuni:nth-child(" + index + ") rect").addClass("labuni--Hide");
 		 $(".macro1").addClass("macro1--Hide");
		  $(".macro1:nth-child(" + index + ")").removeClass("macro1--Hide");



})
	 $(".labuni").mouseleave( function(event){

		  $(".labuni rect").removeClass("labuni--Hide");
		 $(".mrzimte").removeClass("mrzimte--Hide");
		  $(".macro1").removeClass("macro1--Hide");
		})





	  $(".news-bricks").mouseenter( function(event){

    let index =$(event.currentTarget).index()+1;

    $(".news-bricks").addClass("news-bricks--Hover")
	$(".news-bricks:nth-child(" + index + ")").removeClass("news-bricks--Hover")
      $(".news-bricks:nth-child(" + index + ")").addClass("news-bricks--Show");
 $(".news-label:nth-child(" + index + ")").addClass("news-label--Show");

})
	 $(".news-bricks").mouseleave( function(event){
		 let index =$(event.currentTarget).index()+1;

	  $(".news-bricks").removeClass("news-bricks--Hover")
		         $(".news-bricks:nth-child(" + index + ")").removeClass("news-bricks--Show");
		$(".news-label:nth-child(" + index + ")").removeClass("news-label--Show");
		})

	   $(".scroll-containn").scroll( function(event){
	   $('.legright').css({'left': ('calc(95.5% + '+ $('.scroll-containn').scrollLeft() + 'px')});
   $('.legleft').css({'left': ('calc(0% + '+ $('.scroll-containn').scrollLeft() + 'px')});
		    $('.legtop').css({'left': ('calc(25% + '+ $('.scroll-containn').scrollLeft() + 'px')});
		    $('.leglab').css({'left': ('calc(45% + '+ $('.scroll-containn').scrollLeft() + 'px')});

})




	  $(".krugovi").mouseenter( function(event){

    let index =$(event.currentTarget).index()+1;

     $(".minipop").addClass("minipop--Show");

      $(".krugovi:nth-child(" + index + ")").addClass("krugovi--Show");
 $(".datumi:nth-child(" + index + ")").addClass("datumi--Show");

})
	 $(".krugovi").mouseleave( function(event){
		 let index =$(event.currentTarget).index()+1;
	  $(".minipop").addClass("minipop--Show");
		   $(".krugovi:nth-child(" + index + ")").removeClass("krugovi--Show")
		$(".datumi:nth-child(" + index + ")").removeClass("datumi--Show");
		 $(".minipop").removeClass("minipop--Show");

})
	$(".redwave").mouseover(function(event){
		 let index =$(event.currentTarget).index()+1;
		$(".redwave path").removeClass("redwave--Show");
		$(".redwave:nth-child(" + index + ") path").addClass("redwave--Show");
		$(".redlab").removeClass("redlab--Show");
		$(".redlab:nth-child(" + index + ")").addClass("redlab--Show");
	})

	$(".lastnod").mouseenter(function(event){
		 let index =$(event.currentTarget).index()+1;
		$(".lastnod").addClass("lastnod--Show");
		$(".lastseed:nth-child(" + index + ")").addClass("lastseed--Show");

		$(".remo").addClass("remo--Show");
		$(".apea").addClass("apea--Show");
		$(".nodesc").addClass("nodesc--Show");
	})
	$(".lastnod").mouseout(function(event){


		$(".lastseed").removeClass("lastseed--Show");
		$(".lastnod").removeClass("lastnod--Show");
		$(".remo").removeClass("remo--Show");
		$(".apea").removeClass("apea--Show");
		$(".nodesc").removeClass("nodesc--Show");
	})





	$(".sveeee rect").addClass("sveeee--Hide");
			 $(".sveeee line").addClass("sveeee--Hide");


	$('.podeoci').on('click',function(){
		$(".sveeee rect").removeClass("sveeee--Hide");
			 $(".sveeee line").removeClass("sveeee--Hide");
let index =$(event.currentTarget).index()+1;

 	if($(".linkovi").hasClass("pokazane")) {
		$(".linkovi").removeClass("pokazane");
		 $(".linkovi").removeClass("linkovi--Show");

		$(".ukupnost").addClass("ukupnost--Hide");
	}
if($(".linkovi:nth-child(" + index + ")").hasClass("clickedlink")) {
 $(".linkovi:nth-child(" + index + ")").removeClass("linkovi--Show");
$(".podeoci:nth-child(" + index + ") rect").removeClass("podeoci--Hide");
	 $(".podeoci:nth-child(" + index + ") line").removeClass("podeoci--Hide");
	$(".linkovi:nth-child(" + index + ")").removeClass("clickedlink");

	if($(".linkovi").hasClass("clickedlink")) {
	} else
	{
			$(".sveeee rect").addClass("sveeee--Hide");
			 $(".sveeee line").addClass("sveeee--Hide");
		$(".linkovi").addClass("pokazane");

      $(".linkovi").removeClass("linkovi--Show");
  $(".podeoci rect").removeClass("podeoci--Hide");
			 $(".podeoci line").removeClass("podeoci--Hide");
			$(".ukupnost").removeClass("ukupnost--Hide");
	}



} else {
	$(".podeoci:nth-child(" + index + ") line").addClass("podeoci--Hide");
	$(".podeoci:nth-child(" + index + ") rect").addClass("podeoci--Hide");
      $(".linkovi:nth-child(" + index + ")").addClass("linkovi--Show");
		$(".linkovi:nth-child(" + index + ")").addClass("clickedlink");

			$(".ukupnost").addClass("ukupnost--Hide");
	}

})


		$('.sveeee').on('click',function(){
$(".linkovi").removeClass("clickedlink");
$(".sveeee rect").addClass("sveeee--Hide");
			 $(".sveeee line").addClass("sveeee--Hide");

		$(".linkovi").addClass("pokazane");

      $(".linkovi").removeClass("linkovi--Show");
  $(".podeoci rect").removeClass("podeoci--Hide");
			 $(".podeoci line").removeClass("podeoci--Hide");
			$(".ukupnost").removeClass("ukupnost--Hide");


})
	$('.molimte').mouseover(function(event){

		let index =$(event.currentTarget).index();

		if($(".ukupnost").hasClass("ukupnost--Hide")) {
		} else {
		$(".nistaaaa:nth(" + index + ")").addClass("a--Show");
		}

	})

	$('.molimte').mouseout(function(event){

		let index =$(event.currentTarget).index();


		$(".nistaaaa:nth(" + index + ")").removeClass("a--Show");


	})
});
