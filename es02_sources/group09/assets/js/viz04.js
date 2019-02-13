

$(document).ready((function(){
    $('.node').hover(function() {
      $(this).toggleClass('on');
    //   console.log("ciao");

    }, function() {
        $(this).toggleClass('on');
    })
  })
);


// -----------------
// ---- Tooltip ----
// -----------------

// Creo il tooltip
var tooltip = document.createElement('div');
tooltip.id = 'tooltip';
tooltip.innerHTML = '';
document.body.appendChild(tooltip);
toolTxt = document.createElement('p');
tooltip.appendChild(toolTxt);

document.addEventListener('mousemove', function (e) {
    updateTooltipPos(e, tooltip);
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
        el.style.top = y - (y + elHeight - clientHeight) + 'px';
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


// Custom Tooltip

var ball = document.querySelectorAll('.node');

for (var i = 0; i < ball.length; i++) {
    thisBall = ball[i];
    thisBall.addEventListener('mouseover', function (e) {
        var toIgnore = this.parentElement;
        for (t = 0; t < ball.length; t++) {
            if (ball[t] != toIgnore) {
                // ball[t].classList.add('fade');
                tooltip.classList.add('summon');

                // var websiteName = e.target.innerHTML;
                var websiteName = e.target.getAttribute('js-name');

                // Quello che scrive dentro il tooltip //Da customizzare 
                tooltip.innerHTML = 
                (websiteName == null ? toolTxt.innerHTML = '' : websiteName);
            }
        }
    }, false);

    thisBall.addEventListener('mouseout', function () {
        for (t = 0; t < ball.length; t++) {
            // ball[t].classList.remove('fade');
            tooltip.classList.remove('summon');
        }
    }, false);
}


// Genero dinamicamente il link di wikipedia dall'attributo js-name

$(document).ready((function(){
    $(".node").each(function(){
        var wikiLink = $(this).attr('js-name').split(' ').join('_');
        $(this).parent().attr('xlink:href', "https://en.wikipedia.org/wiki/" + wikiLink);
    });
  })
);
