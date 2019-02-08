var playback = {
    path: 'static/assets/',
    category: 1,
    playbackElement: document.getElementById("playback-content"),
    captionsElement: document.getElementById("captions-track"),
    contents: [
        { src: '1.mp4', subs: '1.vtt', volume: 1 },
        { src: '2.mp4', subs: '2.vtt', volume: 1 },
        { src: '3.mp4', subs: '3.vtt', volume: 1 },
        { src: '4.mp4', subs: '4.vtt', volume: 1 },
        { src: '5.mp4', subs: '5.vtt', volume: 1 },
        { src: '6.mp4', subs: '6.vtt', volume: 1 }
    ],
    current: 0,
    get contentsLength() {
        return this.contents.length;
    },
    get currentTime() {
        return this.playbackElement.currentTime;
    },
    get totalTime() {
        return this.playbackElement.duration;
    },
    // get src() {
    //     return this.path + this.category + '/' + this.contents[this.current].src;
    // },
    set src(i) {
        this.playbackElement.src = this.path + this.category + '/' + this.contents[i].src;
    },


    playPause: function () {
        if (this.playbackElement.paused) {
            this.playbackElement.play().catch((error) => {
                console.log("Error: " + error);
            });
        } else {
            this.playbackElement.pause();
        }
    },
    
    setSrc: function () {
        this.src = this.current;
        this.playPause();
        this.setContentVolume();
    },
    
    playPreviousContent: function () {
        clearInterval(stepper);

        const skipThreshold = 0.75;
        if (this.currentTime > skipThreshold) {
            this.setCurrentTime(0);

        } else if (this.currentTime <= skipThreshold) {

            if (this.current <= 0) {
                this.current = this.contents.length - 1;
            } else {
                this.current -= 1;
            };

        }
        this.setSrc();
    },

    playNextContent: function () {
        clearInterval(stepper);

        if (this.current >= this.contents.length - 1) {
            this.current = 0;

        } else this.current += 1;

        this.setSrc();
    },

    mutePlayback: function(currVol) {
        currVol == 0 ? this.playbackElement.volume = 1 : this.playbackElement.volume = 0;
    },

    setContentVolume: function() {
        const mapper = (num, in_min, in_max, out_min, out_max) => {
            return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }

        var a = [].slice.call(document.querySelectorAll(".handle"));
        
        Array.prototype.forEach.call(a, (pt, i) => {
            var attr = pt.getAttribute("cy");
            this.contents[i].volume = clamp(mapper(attr, 0, maxYOffset - jumpOffset, 1, 0), 0, 1);
        })

        this.playbackElement.volume = this.contents[this.current].volume;


        if (typeof interference !== 'undefined' && interference) {
            if (this.playbackElement.volume <= 0 && !this.playbackElement.paused) {
                interference.play();
                // console.log(this.playbackElement.volume);
            } else if (this.playbackElement.paused) {
                interference.pause();
            } else interference.pause();
        } else return;
    },
    
    makeCursor: function (DOMelement) {
        var el = document.createElement("DIV");
        el.id = "cursor";
        el.style.visibility = 'hidden';
        document.getElementById(DOMelement).appendChild(el);
        return el;
    },
    
    setCurrentTime: function(currentTime) {
        this.playbackElement.currentTime = currentTime;
    },
    
    captionsOn: function() {
        this.captionsElement.track.mode = 'hidden';
        this.captionsElement.track.addEventListener("cuechange", function() {
            if (this.activeCues.length > 0) {
                document.getElementById("captions-viewer").innerHTML = this.activeCues[0].text;
            }
        })        
    },
    
    setCaptions: function() {
        this.clearCaptions();
        this.captionsElement.src = this.path + this.category + '/' + this.contents[this.current].subs;
    },
    
    clearCaptions: function() {
        document.getElementById("captions-viewer").innerHTML = '';
    }
    
}



/* global d3, document */
var playButton = {
    el: document.getElementById("play"),

    states: {
        playing: {
            nextState: "paused",
            iconEl: document.querySelector("#pause-icon")
        },
        paused:  {
            nextState: "playing",
            iconEl: document.querySelector("#play-icon")
        }
    },

    animationDuration: 350,

    init: function () {
        this.setInitialState();
        this.replaceUseEl();
        this.el.addEventListener("click", this.goToNextState.bind(this));
    },

    setInitialState: function () {
      var initialIconRef = this.el.querySelector("use").getAttribute("xlink:href");
      var stateName = this.el.querySelector(initialIconRef).getAttribute("data-state");
      this.setState(stateName);
    },

    replaceUseEl: function () {
        d3.select(this.el.querySelector("use")).remove();
        d3.select(this.el.querySelector("svg")).append("path")
            .attr("class", "js-icon")
            .attr("d", this.stateIconPath());
    },

    goToNextState: function () {
        this.setState(this.state.nextState);
    },

    setState: function (stateName) {
        this.state = this.states[stateName];

        // moved transition from goToNextState to here
        // so that setState function can be used with animation
        // and not just cycling
        d3.select(this.el.querySelector(".js-icon")).transition()
            .duration(this.animationDuration)
            .attr("d", this.stateIconPath());
    },

    stateIconPath: function () {
        return this.state.iconEl.getAttribute("d");
    }
};
