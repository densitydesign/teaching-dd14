if (window.scrollY !== 0) {
    window.scrollTo(0, 0);
}

window.addEventListener("load", function (event) {
    // instantiate the scrollama
    const scroller = scrollama();

    // setup the instance, pass callback functions
    scroller
        .setup({
            step: ".question__content h3",
            offset: 0.5
        })
        .onStepEnter(handleStepEnter)
        .onStepExit(handleStepExit);

    $(window).on("resize", function (event) {
        scroller.resize();
    });

    // Add smooth scrolling on all links inside the sidelist
    $(".question__link").on("click", function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            let target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html,body").animate({
                    scrollTop: target.offset().top - 200
                }, 1000);
                return false;
            }
        }
    });
}, false);

function handleStepEnter(intersection) {
    let $active = $(".question__link:nth-child(" + (intersection.index + 1) + ")");
    $(".question__link").removeClass("link--active");
    $active.addClass("link--active");
}

function handleStepExit(intersection) {
    if (intersection.direction == "up") {
        let $active = $(".question__link:nth-child(" + (intersection.index) + ")");
        $(".question__link").removeClass("link--active");
        $active.addClass("link--active");
    }
}
function hnShowNewsPic(num){
	for(i=1;i<7;i++){
		document.getElementById("hn_news_pic"+i).src = "assets/images/movie/Homepage.png";
	}
	document.getElementById("hn_news_pic"+num).src = "assets/images/movie/1.png";
}


