var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
tooltip.innerHTML = '';
document.body.appendChild(tooltip);
toolTxt = document.createElement('p');
tooltip.appendChild(toolTxt);

document.addEventListener('mousemove', function (event) {
    updateTooltipPos(event, tooltip);
}, false)

function updateTooltipPos(e, el) {
    var x = e.clientX;
    var y = e.clientY;

    elWidth = el.getBoundingClientRect().width + 20;
    elLeft = el.getBoundingClientRect().left;

    elHeight = el.getBoundingClientRect().height + 20;
    elBottom = el.getBoundingClientRect().bottom;

    clientHeight = document.documentElement.clientHeight;
    clientWidth = document.documentElement.clientWidth;

    // console.log(clientWidth - elWidth);
    // console.log(elLeft);

    if (clientWidth - x <= elWidth && clientHeight - y <= elHeight) {
        el.style.left = x - (x + elWidth - clientWidth) + 'px';
        el.style.top = y - elHeight - 20 + 'px';

    } else if (clientWidth - x >= elWidth && clientHeight - y <= elHeight) {
        el.style.left = x + 'px'
        el.style.top = y - (y + elHeight - clientHeight) + 'px';

    } else if (clientWidth - x <= elWidth && clientHeight - y >= elHeight) {
        el.style.left = x - (x + elWidth - clientWidth) + 'px';
        el.style.top = y + 'px';

    } else if (x < clientWidth - elWidth || y < clientWidth - elWidth) {
        el.style.left = x + 'px';
        el.style.top = y + 'px';
    }

    return {
        x: x,
        y: y
    }
}

var ball = document.querySelectorAll('.websites');

for (var i = 0; i < ball.length; i++) {
    thisBall = ball[i];
    thisBall.addEventListener('mouseover', function (thisBall) {
        var toIgnore = thisBall.srcElement.parentElement;
        for (t = 0; t < ball.length; t++) {
            if (ball[t] != toIgnore) {
                ball[t].classList.add('fade');
                tooltip.classList.add('summon');

                var percentage = event.target.getAttribute('js-perc');
                var websiteName = event.target.getAttribute('js-name');
                var text = event.target.getAttribute('js-text');
                tooltip.innerHTML =
                    (websiteName == null ? toolTxt.innerHTML = '' : websiteName + '<br>') +
                    (percentage == null ? toolTxt.innerHTML = 'No&nbsp;data' : 'Share:&nbsp;' + percentage + '%' + '<br><br>') +
                    '"' + text + '"';
            }
        }
    }, false);
    thisBall.addEventListener('mouseout', function () {
        for (t = 0; t < ball.length; t++) {
            ball[t].classList.remove('fade');
            tooltip.classList.remove('summon');
        }
    }, false);
}

var websites = document.getElementsByTagName('circle');

for (i = 0; i < websites.length; i++) {
    websites[i].addEventListener('click', function (event) {
        var url = event.target.getAttribute('js-link');
        if (url != 'http://en.wikipedia.org/wiki/Hate_speech') {
            window.open(url, '_blank');
        } else return;
    }, false);
}


var wiki = document.getElementById('wiki-ball_9_');

wiki.addEventListener('click', function (event) {
    updateTooltipPos(event, tooltip);

    var url = wiki.getAttribute('js-link');

    if (tooltip.classList.contains('summon') && wiki.style.cursor == 'pointer') {
        wiki.style.cursor = 'default';
        window.open(url, '_blank');
    } else {
        tooltip.innerHTML = 'en.wikipedia.org' + '<br>' + 'Share:&nbsp; 61.24%' + '<br><br>' + '"Hate speech is speech that attacks a person or group on the basis of attributes such as race, religion, ethnic origin, national origin, sex, disability, sexual orientation, or gender identity.<br>[...] A website that contains hate speech (online hate speech) may be called a hate site. Many of these sites contain Internet forums and news briefs that emphasize a particular viewpoint. There has been debate over freedom of speech, hate speech and hate speech legislation"'
        wiki.style.cursor = 'pointer';
        tooltip.classList.add('summon');
    }
}, false)
wiki.addEventListener('mouseout', function (event) {
    wiki.style.cursor = 'default';
    tooltip.classList.remove('summon');
}, false)