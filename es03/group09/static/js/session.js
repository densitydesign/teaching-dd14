// object that controls session data recording consent
var dataConsent = {
    approvalBtn: document.getElementById("data-yes"),
    denialBtn: document.getElementById("data-no"),
    approval: true,

    setApproval: function(bool = true, callback = function() {}) {
        this.approval = bool;
        this.removeListeners();
        callback();
        console.log(`User chose ${bool}`);
    },

    init: function(callback = function(){}) {
        this.approvalBtn.addEventListener('click', () => {
            this.setApproval(true, callback());
        });
        this.denialBtn.addEventListener('click', () => {
            this.setApproval(false, callback());
        });
    },

    removeListeners: function() {
        this.approvalBtn.style.pointerEvents = 'none';
        this.denialBtn.style.pointerEvents = 'none';
    },

    saveSessionData: function(callback = function() {}) {
        if (this.approval == true) {
            // save the data
            var data = []
            playback.contents.forEach((content) => {
                data.push(content.volume.toFixed(2));
            })
            writeEntry(curve, data);

            callback();
        } else {
            // don't save the data
            callback();
        }
    }
};



var interference = {
    el: document.getElementById("playback-interference"),
    src: 'static/assets/interference.mp3',
    vol: 1,
    elSrc: function () {
        this.el.src = this.src;
        return this.el.src;
    },
    play: function() {
        if (this.el.paused) {
            this.el.play();
        } else return;
    },
    pause: function() {
        if (!this.el.paused) {
            this.el.pause();
        } else return;
    }
}









//initializing playback object
var cursor = playback.makeCursor("timeline-line-units");

var PREV_BTN = document.getElementById("previous");
var PLAY_BTN = document.getElementById("play");
var NEXT_BTN = document.getElementById("next");

var HELP_BTN = document.getElementById("help");
var tut = document.getElementById("tutorial");
var trn = parseFloat(getComputedStyle(tut).transitionDuration) * 1000;

var DONE_BTN = document.getElementById("playback-endbutton");



/* --------------- ======== ---------------- */
/* ---------------- EVENTS ----------------- */

// var curves_data = [];

window.onload = () => {
    setSessionid();

    // this function is called on page load, but executed
    // only after clicking on either one
    // of the buttons for data collection
    // (it listens to the click on the two buttons)
    dataConsent.init(() => {
        tut.classList.add("hidden");
        tut.classList.add("translated");
        HELP_BTN.classList.remove('disabled');

        // trick the browser into thinking that the user pressed play
        // then we start the playback after the tutorial closing transition
        playback.playPause();
        playback.playPause();
        
        setTimeout(() => {
            dataConsent.approvalBtn.parentElement.removeChild(dataConsent.approvalBtn);
            dataConsent.denialBtn.parentElement.removeChild(dataConsent.denialBtn);
            
            var cnstxt = document.getElementById("consent-text");
            cnstxt.parentElement.removeChild(cnstxt);
            tut.childNodes[1].style.gridTemplateRows = '1fr 1fr';
            
            // start the audio after the tutorial dialog closes
            playback.playPause();
        }, trn);
    });

    playback.src = 0;
    playback.setContentVolume();
    playButton.init();

    // get entries of last sessions
    getLastEntries(10, true);
    
    playback.captionsOn();
    playback.setCaptions();
}


window.onresize = () => {
    playback.playPause();
    playback.playPause();
    // e fammi resizare sta benedetta finestra || che bello edo quando trovo ste cose nel codice <3
    // console.clear();
    resized();
}


PREV_BTN.onclick = () => {
    playback.playPreviousContent();
    playback.setCaptions();
}


PLAY_BTN.onclick = () => {
    playback.playPause();
}


playback.playbackElement.onended = () => {
    playback.playNextContent();
    playback.setCaptions();
};


NEXT_BTN.onclick = () => {
    playback.playNextContent();
    playback.setCaptions();
}


HELP_BTN.onclick = () => {
    // console.log(HELP_BTN);
    if (tut.classList.contains("hidden")) {
        tut.classList.remove("hidden");
        tut.classList.remove("translated");
        setTimeout(() => {
            HELP_BTN.innerHTML = 'close';
        }, trn);
    } else {
        tut.classList.add("hidden");
        tut.classList.add("translated");
        HELP_BTN.classList.remove('disabled');
        setTimeout(() => {
            HELP_BTN.innerHTML = 'help';
        }, trn);
    }
};

DONE_BTN.addEventListener("click", () => {
    // limit user interaction
    DONE_BTN.style.pointerEvents = 'none';
    document.body.onkeyup = '';

    dataConsent.saveSessionData(function () {
        // What do we do after saving data?
        // animate end of session
        endSession();
    });
}, false)




/* ----------- PLAYBACK RUNTIME ------------ */

// entity used to update cursor position every 100 milliseconds
var stepper;

// stuff to do when playing
playback.playbackElement.addEventListener('play', () => {

    playback.setContentVolume();

    // save current track index
    var c = playback.current;

    // compute left coordinate for cursor position
    var start = getStartingPoint(c);
    
    // setTimeout interval constant
    const ms = 100;

    stepper = setInterval(() => {
        // update cursor position and increment it 
        stepOn(start);
    }, ms);

    // stop blinking (interrupt pause state)
    cursor.classList.remove("blink");

    setTimeout(() => {

        // highlight current track's area
        setTimeline(c);

        // if hidden, show playback cursor
        if (cursor.style.visibility != 'visible') {
            cursor.style.visibility = 'visible';
        } else return;

    }, ms);

    // animate play button to play state 
    playButton.setState('playing');

}, false);


// stuff to do when paused
playback.playbackElement.addEventListener('pause', () => {

    // pause interference sound (if it's playing)
    interference.pause();

    // clearing interval every event change (also next and previous content)
    // otherwise we fire multiple setInterval
    clearInterval(stepper);

    // start to blink
    cursor.classList.add("blink");

    // animate play button to pause state
    playButton.setState('paused');

}, false);

/* --------------- ========= --------------- */





/* ----------- KEYBOARD SUPPORT ------------ */

// TO-DO: Stop listening for keyboard events once DONE_BTN has been clicked
document.body.onkeyup = (e) => {
    switch (e.keyCode) {
        case 32:
            playback.playPause();
            playback.setCaptions();
            return;
        case 37:
            playback.playPreviousContent();
            playback.setCaptions();
            return;
        // case 38:
        //     playback.setContentVolume(true);
        //     return;
        case 39:
            playback.playNextContent();
            playback.setCaptions();
            return;
        // case 40:
        //     playback.setContentVolume(false);
        //     return;
        case 77:
            // current volume as a parameter
            playback.mutePlayback(playback.playbackElement.volume);
            return;
        default:
            // console.log(e.keyCode);
            return;
    }
}

/* --------------- ========= --------------- */



/* --------------- ========= --------------- */
/* --------------- FUNCTIONS --------------- */

function setSessionid() {
    let url = new URLSearchParams(window.location.search);
    let param = parseInt(url.get('category'));
    const prefix = 'RegulHate – '
    playback.category = param;

    var title = document.getElementById("session-title");
    switch (param) {
        case 1:
            document.title = 'RegulHate – Race'
            title.innerHTML = prefix + 'Race';
            return;
        case 2:
            document.title = 'RegulHate – Gender'
            title.innerHTML = prefix + 'Gender';
            return;
        case 3:
            document.title = 'RegulHate – Disability'
            title.innerHTML = prefix + 'Disability';
            return;
        case 4:
            document.title = 'RegulHate – Religion'
            title.innerHTML = prefix + 'Religion';
            return;
        default:
            playback.category = 1;
            document.title = 'RegulHate – Race'
            title.innerHTML = prefix + 'Race';
            return;
    }
}






/* ----------- TIMELINE FUNCTIONS ---------- */

function hightlightTimelineMarker(markerClassName) {
    var els = document.getElementsByClassName('timeline-line-section');

    Array.prototype.forEach.call(els, (el) => {
        var attribute = el.getAttribute("js-spacer");

        if (attribute == markerClassName) {
            el.style.backgroundColor = 'var(--c-bg-h)';

        } else el.style.backgroundColor = 'transparent';
    })
}

function setTimeline(which) {
    // updateCursorPosition(which);
    switch (which) {
        case 0:
            hightlightTimelineMarker('first');
            return;
        case 1:
            hightlightTimelineMarker('second');
            return;
        case 2:
            hightlightTimelineMarker('third');
            return;
        case 3:
            hightlightTimelineMarker('fourth');
            return;
        case 4:
            hightlightTimelineMarker('fifth');
            return;
        case 5:
            hightlightTimelineMarker('sixth');
            return;
        default:
            console.log('something\'s wrong!');
            return;
    }
}

// plug playback.current to get current timeline starting point 
// for incrementing cursor position
function getStartingPoint(index) {
    var els = document.getElementsByClassName("timeline-line-section");
    var result;

    Array.prototype.forEach.call(els, (el, i) => {
        if (i == (index * 2) + 1) {
            // getting coordinate of given section starting (leftmost) point
            result = el.offsetLeft;
        }
    })
    return result;
}

// increments cursor position, given a point to start from
function stepOn(startPoint) {
    var t = playback.currentTime;
    var d = playback.totalTime;
    var w = document.querySelectorAll(".timeline-line-section.bar")[0].clientWidth * 2;
    var r = (startPoint + mapper(t, 0, d, 0, w)).toFixed(2);
    cursor.style.left = `${r}px`;
}

function updatePercentage(i) {
    var vol = parseInt(playback.contents[i].volume * 100);
    var mrkr = document.getElementsByClassName("timeline-marker")[i+1];

    if (vol == 0) { mrkr.classList.add("blinking") } else { mrkr.classList.remove("blinking") };

    mrkr.innerHTML = vol + '%';
}


/* ----------- UTILITY FUNCTIONS ----------- */

const mapper = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val;
}

/* --------------- ========= --------------- */