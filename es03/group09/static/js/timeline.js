// ------------ ------------- ------------
// ------------ ANIMATE LINES ------------
// ------------ ------------- ------------

// svg.selectAll("g.users-layer").remove();

// Crea il gruppo all'interno della maschera, qui dentro verranno inserite le curve degli altri utenti
var usersLayer = d3.select("#mask-line").append('g').attr('class', 'users-layer');

function endSession() {

    DONE_BTN.removeEventListener("click", () => {
        // limit user interaction
        DONE_BTN.style.pointerEvents = 'none';
        document.body.onkeyup = '';
    
        dataConsent.saveSessionData(function () {
            // What do we do after saving data?
            // animate end of session
            endSession();
        });
    });

    var p = curva_arrivo;

    const ease = 'easeInOutQuad';
    const duration = 1500;

    // Dichiarazioni d'amore per la timeline di Edo
    const target = document.getElementById("playback");
    var timing = 1.2;
    var bezier = 'cubic-bezier(0.77, 0, 0.175, 1)';
    var msgEl = document.createElement("DIV");
    msgEl.style.padding = 'var(--sp)';
    msgEl.style.margin = '0px';

    // -----
    // ----- TIMELINE DECLARATION
    // -----

    var interferenceTl = anime.timeline({
        easing: ease,
        duration: duration
    })

    var raiseVol, lowerVol;

    interferenceTl.add({
        duration: duration,
        begin: function () {
            interference.vol = 0;
            interference.play();

            raiseVol = setInterval(() => {
                interference.vol = interference.vol + 0.015;
                interference.vol = clamp(interference.vol, 0, 1);
                interference.el.volume = (interference.vol).toFixed(2);
            }, 10);
        },
        complete: function () {
            clearInterval(raiseVol);
        }
    }, 1000)
    .add({
        duration: duration,
        begin: function() {
            lowerVol = setInterval(() => {
                interference.vol = interference.vol - 0.015;
                interference.vol = clamp(interference.vol, 0, 1);
                interference.el.volume = (interference.vol).toFixed(2);
            }, 10);
        },
        complete: function () {
            interference.el.volume = 0;
            clearInterval(lowerVol);
        }
    }, 17500)

    var tl = anime.timeline({
        easing: ease,
        duration: duration
    });

    // Anima la curva della sessione fino alla curva d'arrivo
    tl
    // -----
    // ----- ANIMAZIONE EDO
    // -----
    // Mette in pausa la riproduzione, nasconde il cursore, prepara il bottone per l'animazione
    .add({
        begin: function () {
            playback.playbackElement.pause();
            cursor.style.visibility = 'hidden';
            var els = document.getElementsByClassName('timeline-line-section');
            Array.prototype.forEach.call(els, (el) => {
                el.style.backgroundColor = 'transparent';
            });
            DONE_BTN.style.maxHeight = `${DONE_BTN.clientHeight}px`;
        }
    }, 0)

    // Nasconde gli elementi sopra il tasto DAN
    .add({
        begin: function () {
            for (var i = 0; i < 2; i++) {
                target.children[i].classList.add("hidden");
            }
        },
    }, 0)

    // Rimuove dal DOM gli elementi sopra il tasto DAAAAAN
    .add({
        begin: function () {
            for (var i = 0; i < 2; i++) {
                target.removeChild(target.children[0]);
            }
            target.style.gridTemplateRows = '1fr';
            DONE_BTN.style.transform = `translateY(${target.clientHeight - (DONE_BTN.clientHeight)}px)`;
        }
    }, 500)

    // Resiza il bottone secondo l'altezza del contenitore permaflex
    .add({
        begin: function () {
            DONE_BTN.style.transition = `max-height ${timing}s ${bezier}, transform ${timing}s ${bezier}`;
            DONE_BTN.style.transform = `translateY(0px)`;
            DONE_BTN.style.maxHeight = '100%';
            DONE_BTN.style.width = '100%';

            DONE_BTN.children[0].style.opacity = '0';

        },
    }, 1000)
    .add({
        duration: 1500,
        targets: '.curves',
        d: ca,
    }, 1000)

    // Le maniglie diventano rosse
    .add({
        duration: 1500,
        targets: '.handle-behind',
        cy: maxYOffset - jumpOffset,
        complete: function () {
            var b = d3.select("body").selectAll(".handle-behind");

            b[0].forEach((pt) => {
                pt.style.pointerEvents = "none";
                pt.getAttribute("cy") > maxYOffset - jumpOffset - 100 ? pt.classList.add("redHandleBehind") : pt.classList.remove("redHandleBehind");
            })
        }
    }, 1000)
    .add({
        duration: 1500,
        targets: '.handle',
        cy: maxYOffset - jumpOffset,
        complete: function () {
            var a = d3.select("body").selectAll(".handle");

            a[0].forEach((pt) => {
                pt.style.pointerEvents = "none";
                pt.getAttribute("cy") > maxYOffset - jumpOffset - 100 ? pt.classList.add("redHandle") : pt.classList.remove("redHandle")
            })
        }
    }, 1000)

    // Nasconde la scritta DAN
    .add({
        begin: function () {
            DONE_BTN.removeChild(DONE_BTN.children[0]);
            msgEl.style.opacity = '0';
            msgEl.style.transition = `opacity ${timing / 3}s linear`;
            DONE_BTN.appendChild(msgEl);
        }
    }, 1500)

    // Fa comparire il primo messaggio nella barra a destra
    .add({
        begin: function () {
            msgEl.style.opacity = '1';
            msgEl.innerHTML = `
            <p>This is how an IT company that uses traditional filtering methods would moderate the same&nbsp;contents.</p>
            <p>No shades, no debates, just one point of view and it does not depend on&nbsp;you.</p>
            <p>Do you like the noise of&nbsp;silence?</p>`;
        }
    }, 3000)

    // Fa Scomparire il primo messaggio
    .add({
        begin: function () {
            msgEl.style.opacity = '0';
        }
    }, 10500)

    // Fa comparire il secondo messaggio
    .add({
        begin: function () {
            msgEl.innerHTML = `
            <p>Let us introduce you to our alternative contents regulation&nbsp;method.</p>
            <p>With this approach nothing will be censored. The&nbsp;community will decide how much visibility to give to each&nbsp;content, helping to create a civic&nbsp;moderation.</p>
            <p>Don’t&nbsp;mute! Down-Vote!</p><br>`;
            msgEl.style.opacity = '1';

            var resultsLink = document.createElement("A");
            resultsLink.href = 'result.html?category=' + playback.category;
            resultsLink.innerHTML = 'See the results';
            resultsLink.style.pointerEvents = 'all';
            resultsLink.style.textDecoration = 'underline';
            msgEl.append(resultsLink);
        },
    }, 11500)

    // Rende visibili le curve delle altre sessioni e le anima
    .add({
        targets: '.users-curve',
        d: function (el, i) {
            return curves_data[i].d
        },
        begin: function () {
            var a = usersLayer.selectAll('path.users-curve');
            a[0].forEach((pt) => {
                pt.classList.add("user-curve-anim")
            })
        },
        delay: anime.stagger(200)
    }, '+=' + 100)
    .add({
        duration: 2000,
        targets: '.curves',
        d: d3.select('.curves').attr('d')
    }, '+=' + duration / 2.5)
    .add({
        targets: '.handle',
        opacity: 0,
        duration: 500,
        easing: 'linear'
    }, '-=' + (duration + 2000))
    .add({
        targets: '.handle-behind',
        opacity: 0,
        duration: 500,
        easing: 'linear'
    }, '-=' + (duration + 2000))
    .add({
        targets: '.users-curve',
        opacity: .4,
        duration: 1000,
        easing: 'linear'
    }, '+=' + 500);
}