var menu = {
    button: document.getElementById("hamburger"),
    element: document.getElementById("menu"),
    isOpen: false,
    reveal: function () {
        if (this.isOpen === false) {
            this.element.classList.add("show");
            this.button.classList.add("show");
            this.isOpen = true;
        } else {
            this.element.classList.remove("show");
            this.button.classList.remove("show");
            this.isOpen = false;
        };
    }
}

/* --------------- ========= --------------- */
/* ---------------- EVENTS ----------------- */

menu.button.onclick = () => {
    menu.reveal();
}

// document.addEventListener('touchmove', preventBouncing, {
//     passive: false
// });

/* --------------- ========= --------------- */





/* --------------- ========= --------------- */
/* --------------- FUNCTIONS --------------- */

function preventBouncing(e) {
    //preventing the easing on iOS devices
    e.preventDefault();
}

/* --------------- ========= --------------- */