var TL = document.getElementById("content-grid");
var SLKTR = document.getElementById("content-selector");
var AVG = [];
var METADATA;

window.onload = () => {
    document.title = setSessionid();
    getAverages(AVG);
    getLastEntries(30, false);

    playback.current = 0;
    SLKTR.children[playback.current].classList.add("playing");
    playback.setSrc();

    hightlightTimelineMarker(playback.current);

    getMetaData(playback.category);
};

window.onresize = () => {
//     playback.playPause();
//     playback.playPause();
//     // e fammi resizare sta benedetta finestra, Per Diana || che bello edo quando trovo ste cose nel codice <3
//     console.clear();
    resized();
}

SLKTR.onclick = (e) => {
    // really not elegant way of getting content index
    var ci = parseInt(e.target.innerHTML) - 1;
    setResultPageSrc(e, ci);
    setMetaData(ci);
}

TL.onclick = (e) => {
    // content index
    var ci = Math.floor(getChildIndex(e) / 2);
    setResultPageSrc(e, ci);
    setMetaData(ci);
}



/* ----------- PLAYBACK RUNTIME ------------ */

playback.playbackElement.addEventListener('ended', () => {
    // playing element
    var pe = document.querySelector(".selector.playing");
    pe.classList.remove("playing");
    pe.classList.add("paused");
},false)

/* ----------- TIMELINE FUNCTIONS ---------- */

function hightlightTimelineMarker(which) {
    var els = document.getElementById("content-grid");
    var pla = document.querySelectorAll(".content-grid-bar.playing");

    for (var i = 0; i < pla.length; i++) {
        pla[i].classList.remove("playing");
    }

    els.children[which * 2].classList.add("playing");
    els.children[which * 2 + 1].classList.add("playing");

    return which;
}






// ---------------------------------------------------------
// ------------------------ FUNCTIONS
// ---------------------------------------------------------

function setSessionid() {
    let url = new URLSearchParams(window.location.search);
    let param = parseInt(url.get('category'));
    var pageStr = 'Results for category ';
    playback.category = param;

    switch (param) {
        case 1:
            return pageStr + 'Race';
        case 2:
            return pageStr + 'Gender';
        case 3:
            return pageStr + 'Disability';
        case 4:
            return pageStr + 'Religion';
        default:
            return pageStr + 'Race';
    }
}

function setColor() {
    var url = new URLSearchParams(window.location.search);
    var param = parseInt(url.get('category'));

    var color = (function(param) {
        switch (param) {
            case 1:
                return '#003aff';
            case 2:
                return '#f3c605';
            case 3:
                return '#56efb6';
            case 4:
                return '#fa8b2e';
            default:
                return '#003aff';
        }
    })(param);

    // setto all'elemento :root per maniglie
    document.documentElement.style.setProperty('--strc', color);

    // ritorno valore per assegnare colore a linea tramite d3
    return color;
}

function setResultPageSrc(e, ci) {
    playback.current = ci;

    // content element
    var ce = SLKTR.children[ci];
    
    // if click on selector that's playing
    if (e.target.classList.contains("playing") && !playback.playbackElement.paused) {
        ce.classList.remove("playing");

        ce.classList.add("paused");
        playback.playbackElement.pause();

    } else if (e.target.classList.contains("paused") && playback.playbackElement.paused) {
        ce.classList.remove("paused");

        ce.classList.add("playing");
        playback.playbackElement.play();

    // if click on selector that's NOT playing
    } else {
        for (var i = 0; i < SLKTR.children.length; i++) {
            SLKTR.children[i].classList.remove("playing");
            SLKTR.children[i].classList.remove("paused");
        }
        playback.setSrc();
        SLKTR.children[ci].classList.add("playing");
    }

    hightlightTimelineMarker(ci);
    computeAvg(ci);
}

function getChildIndex(e) {
    var p = e.target.parentElement;
    var c = p.children;
    
    for (var i = 0; i < c.length; i++) {
        if (c[i] == e.target) {
            return i;
        }
    }
}

function computeAvg(i) {
    var cavg = Math.round(getContentAverage(AVG, i+1) * 100);
    isNaN(cavg) ? cavg = 'n.a.' : cavg;
    document.getElementById("content-info").children[2].innerHTML = `${cavg}%`;
}

function getMetaData(i) {
    var url = 'static/assets/' + i + '/' + i + '-meta.json';
    tinyxhr(url, (u, data) => {
        // returned data
        METADATA = JSON.parse(data);
        // console.log(METADATA);
        setMetaData(playback.current);
    })
}

function setMetaData(i) {
    // current data
    cd = METADATA[i];
    document.getElementById("content-desc").children[1].innerHTML = cd.desc;
    document.getElementById("content-source").children[0].href = cd.source;
}

function tinyxhr(url,cb,method,post,contenttype)
{
 var requestTimeout,xhr;
 try{ xhr = new XMLHttpRequest(); }catch(e){
 try{ xhr = new ActiveXObject("Msxml2.XMLHTTP"); }catch (e){
  if(console)console.log("tinyxhr: XMLHttpRequest not supported");
  return null;
 }
 }
 requestTimeout = setTimeout(function() {xhr.abort(); cb(new Error("tinyxhr: aborted by a timeout"), "",xhr); }
                             , 10000);
 xhr.onreadystatechange = function()
 {
  if (xhr.readyState != 4) return;
  clearTimeout(requestTimeout);
  cb(xhr.status != 200?new Error("tinyxhr: server respnse status is "+xhr.status):false, xhr.responseText,xhr);
 }
 xhr.open(method?method.toUpperCase():"GET", url, true);
 
 //xhr.withCredentials = true;
  
 if(!post)
  xhr.send();
 else
 {
  xhr.setRequestHeader('Content-type', contenttype?contenttype:'application/x-www-form-urlencoded');
  xhr.send(post)
 }
}