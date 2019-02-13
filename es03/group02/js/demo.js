let nav = document.querySelector(".nav");
let navCtrl = document.querySelector(".nav__button");
let tocItems = Array.from(nav.querySelectorAll(".toc > .toc__item"));

let isTocOpen = false;

let list_len = tocItems.length;
for (let i = 0; i < list_len; i++) {
  if (tocItems[i].href == window.location.href || (tocItems[i].href == (window.location.href + "index.html"))) {
    
    tocItems[i].classList.add("toc__item--current");
  }
}
navCtrl.addEventListener("click", function() {
  console.log(1);
  if (isTocOpen) {
    nav.classList.remove("nav--open");
    TweenMax.set(tocItems, { opacity: 0 });
  } else {
    nav.classList.add("nav--open");
    TweenMax.staggerTo(
      tocItems,
      1,
      {
        ease: Expo.easeOut,
        startAt: { opacity: 0, y: 10 },
        opacity: 1,
        y: 0
      },
      0.02
    );
  }
  isTocOpen = !isTocOpen;
});
