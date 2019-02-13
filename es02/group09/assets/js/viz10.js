var toggles = document.getElementsByClassName('toggle');
var nodes = document.getElementsByClassName('nodes');
var noneActive = true;
var unFaded;

for (i = 0; i < toggles.length; i++) {
    var thisToggle = toggles[i];
    var initialFaded;

    thisToggle.addEventListener('click', function () {

        if (noneActive == true) {
            if (this.classList.contains('active')) {
                this.classList.remove('active');

                noneActive = true;

                unFaded = 1;
                // console.log('unFaded: ' + unFaded);

                switch (this.id) {
                    case 'facebook-toggle':
                        // console.log('turning OFF ' + this.id);
                        var toIgnore = document.getElementById('Facebook');
                        unFadeOthers(toIgnore);
                        break;

                    case 'google-toggle':
                        // console.log('turning OFF ' + this.id);
                        var toIgnore = document.getElementById('Google');
                        unFadeOthers(toIgnore);
                        break;

                    case 'twitter-toggle':
                        // console.log('turning OFF ' + this.id);
                        var toIgnore = document.getElementById('Twitter');
                        unFadeOthers(toIgnore);
                        break;

                    case 'germany-toggle':
                        // console.log('turning OFF ' + this.id);
                        var toIgnore = document.getElementById('Germany');
                        unFadeOthers(toIgnore);
                        break;

                    case 'us-toggle':
                        // console.log('turning OFF ' + this.id);
                        var toIgnore = document.getElementById('U.S.');
                        unFadeOthers(toIgnore);
                        break;

                    case 'nadine-strossen-toggle':
                        // console.log('turning OFF ' + this.id);
                        var toIgnore = document.getElementById('Nadine_strossen');
                        unFadeOthers(toIgnore);
                        break;
                }
                return;

            } else {
                this.classList.add('active');
                noneActive = false;

                unFaded = 1;
                // console.log('unFaded: ' + unFaded);

                initialFaded = this.id;
                switch (this.id) {
                    case 'facebook-toggle':
                        var toIgnore = document.getElementById('Facebook');
                        fadeOthers(toIgnore);
                        break;

                    case 'google-toggle':
                        var toIgnore = document.getElementById('Google');
                        fadeOthers(toIgnore);
                        break;

                    case 'twitter-toggle':
                        var toIgnore = document.getElementById('Twitter');
                        fadeOthers(toIgnore);
                        break;

                    case 'germany-toggle':
                        var toIgnore = document.getElementById('Germany');
                        fadeOthers(toIgnore);
                        break;

                    case 'us-toggle':
                        var toIgnore = document.getElementById('U.S.');
                        fadeOthers(toIgnore);
                        break;

                    case 'nadine-strossen-toggle':
                        var toIgnore = document.getElementById('Nadine_strossen');
                        fadeOthers(toIgnore);
                        break;
                }
                return;
            };
            // ora noneActive è falso
        } else if (noneActive == false) {
            if (unFaded != 0 && !this.classList.contains('active')) {
                this.classList.add('active');
                unFadeThis(this);

                noneActive = false;

                unFaded += 1;
                // console.log('adding unFaded2: ' + unFaded);

            } else if (unFaded != 0 && this.classList.contains('active')) {
                this.classList.remove('active');
                fadeThis(this);

                noneActive = false;

                unFaded -= 1;
                
                if (unFaded == 0) {
                    this.classList.remove('active');
                    unFadeAll(nodes, 'fade');
    
                    noneActive = true;
    
                    unFaded = 0;
                    // console.log('unfading all unFaded: ' + unFaded);
                    
                } else /* console.log('removing unFaded: ' + unFaded) */;
            }
        }
    }, false);
}

// SE NON FUNZIONA IL FADE DELLE ROBE
// DE-COMMENTA ID="MAPPA_COMPLETA" NELL'HTML

var ids = ['Mappa_completa', 'U.S.', 'Germany', 'Twitter', 'Nadine_strossen', 'Google', 'Facebook'];

function fadeOthers(toIgnore) {
    for (i = 0; i < ids.length; i++) {
        if (toIgnore.id == ids[i]) {
            continue;
        } else {
            nodes[i].classList.add('fade');
        };
    }
}

function unFadeOthers(toIgnore) {
    for (i = 0; i < ids.length; i++) {
        if (toIgnore.id == ids[i]) {
            continue;
        } else {
            nodes[i].classList.remove('fade');
        };
    }
}

function unFadeAll(els, className) {
    for (i = 0; i < els.length; i++) {
        els[i].classList.remove(className);
    }
}


function unFadeThis(el) {
    switch (el.id) {
        case 'facebook-toggle':
            document.getElementById('Facebook').classList.remove('fade');
            break;

        case 'google-toggle':
            document.getElementById('Google').classList.remove('fade');
            break;

        case 'twitter-toggle':
            document.getElementById('Twitter').classList.remove('fade');
            break;

        case 'germany-toggle':
            document.getElementById('Germany').classList.remove('fade');
            break;

        case 'us-toggle':
            document.getElementById('U.S.').classList.remove('fade');
            break;

        case 'nadine-strossen-toggle':
            document.getElementById('Nadine_strossen').classList.remove('fade');
            break;
    }
}

function fadeThis(el) {
    switch (el.id) {
        case 'facebook-toggle':
            document.getElementById('Facebook').classList.add('fade');
            break;

        case 'google-toggle':
            document.getElementById('Google').classList.add('fade');
            break;

        case 'twitter-toggle':
            document.getElementById('Twitter').classList.add('fade');
            break;

        case 'germany-toggle':
            document.getElementById('Germany').classList.add('fade');
            break;

        case 'us-toggle':
            document.getElementById('U.S.').classList.add('fade');
            break;

        case 'nadine-strossen-toggle':
            document.getElementById('Nadine_strossen').classList.add('fade');
            break;
    }
}