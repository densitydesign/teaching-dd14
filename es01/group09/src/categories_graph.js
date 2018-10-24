// window.onload = offsetOff();

var socialNetworks = document.querySelectorAll('.social');
var categories = document.querySelectorAll('.category-words');

//------listeners
for (i = 0; i < socialNetworks.length; i++) {
    socialNetworks[i].addEventListener('mouseover', highlightSociaOn, false);
    socialNetworks[i].addEventListener('mouseout', highlightSociaOff, false);
}

for (i = 0; i < categories.length; i++) {
    categories[i].addEventListener('mouseover', highlightSociaOn, false);
    categories[i].addEventListener('mouseout', highlightSociaOff, false);
}

function highlightSociaOn() {

    //------var, quelle dei social prima erano dentro i .matches(class)
    var social = document.querySelectorAll('.social');
    var twitterLines = document.querySelectorAll('.tw-paths');
    var youtubeLines = document.querySelectorAll('.yt-paths');
    var facebookLines = document.querySelectorAll('.fb-paths');
    var categoryWords = document.querySelectorAll('.category-words');
    var allPaths = document.querySelectorAll('.all-paths');

    //------controlla se il SOCIAL su cui sono hover ha categorie in comune
    for (i = 0; i < social.length; i++) {
        //------controlla su quale social network è hover

        if (social[i].matches('.facebook:hover')) {
            // console.log("Facebook");

            for (l = 0; l < twitterLines.length; l++) {
                twitterLines[l].classList.add("social-disappear");
            };

            for (m = 0; m < youtubeLines.length; m++) {
                youtubeLines[m].classList.add("social-disappear");
            }

            for (n = 0; n < categoryWords.length; n++) {
                if (categoryWords[n].classList.contains('facebook') == false) {
                    categoryWords[n].classList.add("social-disappear");
                }
            }
        } else if (social[i].matches('.twitter:hover')) {
            // console.log("Twitter");

            for (l = 0; l < facebookLines.length; l++) {
                facebookLines[l].classList.add("social-disappear");
            };

            for (m = 0; m < youtubeLines.length; m++) {
                youtubeLines[m].classList.add("social-disappear");
            }

            for (n = 0; n < categoryWords.length; n++) {
                if (categoryWords[n].classList.contains('twitter') == false) {
                    categoryWords[n].classList.add("social-disappear");
                }
            }
        } else if (social[i].matches('.youtube:hover')) {
            // // console.log("Youtube");

            for (l = 0; l < facebookLines.length; l++) {
                facebookLines[l].classList.add("social-disappear");
            };

            for (m = 0; m < twitterLines.length; m++) {
                twitterLines[m].classList.add("social-disappear");
            }

            for (n = 0; n < categoryWords.length; n++) {
                if (categoryWords[n].classList.contains('youtube') == false) {
                    categoryWords[n].classList.add("social-disappear");
                }
            }
        }
    }

    //------controlla se la PAROLA su cui sono hover ha categorie in comune
    for (i = 0; i < categoryWords.length; i++) {
        // console.log('ciao');
        if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('age')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('age') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('age') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('casta')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('casta') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('casta') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('disability')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('disability') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('disability') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('ethnicity')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('ethnicity') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('ethnicity') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('gender')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('gender') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('gender') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('gender-id')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('gender-id') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('gender-id') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('nation-or')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('nation-or') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('nation-or') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('race')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('race') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('race') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('religion')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('religion') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('religion') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('serious-dis')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('serious-dis') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('serious-dis') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('sexual')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('sexual') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('sexual') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('sex')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('sex') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('sex') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        } else if (categoryWords[i].matches('.category-words:hover') && categoryWords[i].classList.contains('veteran')) {
            for (l = 0; l < categoryWords.length; l++) {
                if (categoryWords[l].classList.contains('veteran') == false) {
                    categoryWords[l].classList.add("social-disappear");
                }
            }
            for (m = 0; m < allPaths.length; m++) {
                if (allPaths[m].classList.contains('veteran') == false) {
                    allPaths[m].classList.add("social-disappear");
                }
            }
        }
        
    }
}

function highlightSociaOff() {
    var socialAll = document.querySelectorAll('.social-all');
    
    for (i = 0; i < socialAll.length; i++) {
        socialAll[i].classList.remove('social-disappear');
    }
}