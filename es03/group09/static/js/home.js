var CONTINUE_BTN = document.getElementById("continue");


window.onresize = () => {
    resized();
}



CONTINUE_BTN.onclick = () => {
    document.getElementById("continue").classList.remove("show");
    document.getElementById("continue").parentElement.style.pointerEvents = 'none';

    document.getElementById("hero-text").classList.remove("show");
    document.getElementById("hero-categories").classList.add("show");
    document.getElementsByTagName("ul")[1].classList.add("show");
}



var s1 = 'Regulating online Hate&nbsp;Speech has proven to be a hard challenge for IT&nbsp;Companies.';
var s2 = '<br><br>What would you do if you had the power to regulate a&nbsp;choir of controversial contents?'
var s3 = '<br><br>Select a&nbsp;topic among the following categories.';

let sentences = new TypeIt('#hero-text', {
        speed: 50,
        deleteSpeed: 15,
        startDelay: 1000,
        lifeLike: true,
        afterComplete: () => {
            setTimeout(() => {
                document.getElementById("continue").innerHTML = 'Continue';
                // document.getElementsByClassName("ti-cursor")[0].style.visibility = 'hidden';
            }, 800);
        }
    })
    .type(s1)
    .pause(1000)
    .type(s2)
    .pause(1000)
    .type(s3)
    .go();