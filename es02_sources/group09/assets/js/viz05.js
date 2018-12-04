//        (\ /)
//       ( . .) ♥ ~ Il coniglio mangia tacos! 
//       c(")(")


// ---------------------------------------------------------------- //
// ---- Toggle a destra che hanno richiesto troppi tacosecondi ---- //
// ---------------------------------------------------------------- //


$(document).ready((function(){
    $('.politic-toggle').hover(function() {
      $('.cat-dx:not(.politic)').toggleClass('off');
      $('#rect-politic').toggleClass('grey-rect-on');
      $('#politic-toggle').toggleClass('white-text');
    }, function() {
      $('.cat-dx:not(.politic)').toggleClass('off');
      $('#rect-politic').toggleClass('grey-rect-on');
      $('#politic-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.race-toggle').hover(function() {
      $('.cat-dx:not(.race)').toggleClass('off');
      $('#rect-race').toggleClass('grey-rect-on');
      $('#race-toggle').toggleClass('white-text');
    }, function() {
      $('.cat-dx:not(.race)').toggleClass('off');
      $('#rect-race').toggleClass('grey-rect-on');
      $('#race-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.religion-toggle').hover(function() {
      $('.cat-dx:not(.religion)').toggleClass('off');
      $('#rect-religion').toggleClass('grey-rect-on');
      $('#religion-toggle').toggleClass('white-text');
    }, function() {
      $('.cat-dx:not(.religion)').toggleClass('off');
      $('#rect-religion').toggleClass('grey-rect-on');
      $('#religion-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.knowledge-toggle').hover(function() {
      $('.cat-dx:not(.knowledge)').toggleClass('off');
      $('#rect-knowledge').toggleClass('grey-rect-on');
      $('#knowledge-toggle').toggleClass('white-text');
    }, function() {
      $('.cat-dx:not(.knowledge)').toggleClass('off');
      $('#rect-knowledge').toggleClass('grey-rect-on');
      $('#knowledge-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.gender-toggle').hover(function() {
      $('.cat-dx:not(.gender)').toggleClass('off');
      $('#rect-gender').toggleClass('grey-rect-on');
      $('#gender-toggle').toggleClass('white-text');
    }, function() {
      $('.cat-dx:not(.gender)').toggleClass('off');
      $('#rect-gender').toggleClass('grey-rect-on');
      $('#gender-toggle').toggleClass('white-text');
    })
  })
);


// -------------------------------- //
// ---- Toggle categorie sopra ---- //
// -------------------------------- //


$(document).ready((function(){
    $('.organization-toggle').hover(function() {
      $('.cat-up:not(.organization)').toggleClass('off');
      $('.giallo-rect').toggleClass('giallo-rect-on');
      $('#organization-toggle').toggleClass('white-text');
    }, function() {
        $('.cat-up:not(.organization)').toggleClass('off');
        $('.giallo-rect').toggleClass('giallo-rect-on');
        $('#organization-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.qa-toggle').hover(function() {
      $('.cat-up:not(.qa)').toggleClass('off');
      $('.arancio-rect').toggleClass('arancio-rect-on');
      $('#qa-toggle').toggleClass('white-text');
    }, function() {
        $('.cat-up:not(.qa)').toggleClass('off');
        $('.arancio-rect').toggleClass('arancio-rect-on');
        $('#qa-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.sn-toggle').hover(function() {
      $('.cat-up:not(.sn)').toggleClass('off');
      $('.rosso-rect').toggleClass('rosso-rect-on');
      $('#sn-toggle').toggleClass('white-text');
    }, function() {
        $('.cat-up:not(.sn)').toggleClass('off');
        $('.rosso-rect').toggleClass('rosso-rect-on');
        $('#sn-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.blog-toggle').hover(function() {
      $('.cat-up:not(.blog)').toggleClass('off');
      $('.viola-rect').toggleClass('viola-rect-on');
      $('#blog-toggle').toggleClass('white-text');
    }, function() {
        $('.cat-up:not(.blog)').toggleClass('off');
        $('.viola-rect').toggleClass('viola-rect-on');
        $('#blog-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.forum-toggle').hover(function() {
      $('.cat-up:not(.forum)').toggleClass('off');
      $('.rosa-rect').toggleClass('rosa-rect-on');
      $('#forum-toggle').toggleClass('white-text');
    }, function() {
        $('.cat-up:not(.forum)').toggleClass('off');
        $('.rosa-rect').toggleClass('rosa-rect-on');
        $('#forum-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.wiki-toggle').hover(function() {
      $('.cat-up:not(.wiki)').toggleClass('off');
      $('.azzurro-rect').toggleClass('azzurro-rect-on');
      $('#wiki-toggle').toggleClass('white-text');
    }, function() {
        $('.cat-up:not(.wiki)').toggleClass('off');
        $('.azzurro-rect').toggleClass('azzurro-rect-on');
        $('#wiki-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.news-aggregator-toggle').hover(function() {
      $('.cat-up:not(.news-aggregator)').toggleClass('off');
      $('.d-blu-rect').toggleClass('d-blu-rect-on');
      $('#news-aggregator-toggle').toggleClass('white-text');
    }, function() {
        $('.cat-up:not(.news-aggregator)').toggleClass('off');
        $('.d-blu-rect').toggleClass('d-blu-rect-on');
        $('#news-aggregator-toggle').toggleClass('white-text');
    })
  })
);

$(document).ready((function(){
    $('.news-toggle').hover(function() {
      $('.cat-up:not(.news)').toggleClass('off');
      $('.blu-rect').toggleClass('blu-rect-on');
      $('#news-toggle').toggleClass('white-text');
    }, function() {
        $('.cat-up:not(.news)').toggleClass('off');
        $('.blu-rect').toggleClass('blu-rect-on');
        $('#news-toggle').toggleClass('white-text');
    })
  })
);


// ----------------------------------- //
// ---- Toggle categorie sinistra ---- //
// ----------------------------------- //

siteList = document.querySelectorAll(".site-name");

$(document).ready((function(){
  var dataArray = [];
  var dataArrayInt = [];

    $('.cat-sx').hover(function() {
      $('.cat-sx').not($(this)).toggleClass('off');
      var getDataStr = $(this).attr('js-data').split(',');
      dataArray.push(getDataStr);

      // prendo array e lo converto in numeri
      for(i=0; i<getDataStr.length; i++){
        dataArrayInt.push(parseInt(getDataStr[i]));
        // console.log(dataArrayInt[i]);
      }  

      // cerco il match
      $(".site-name").each(function(){
        if (dataArrayInt.includes($(this).data('sitenumber')) == false) {
          $(this).toggleClass('off');
        }
      });

      $(".circles-up").each(function(){
        if (dataArrayInt.includes($(this).data('circlenumber')) == false) {
          $(this).toggleClass('off');
        }
      });

      // if dataArray.includes(i) 
      // lista di pallini queryselectorall (.site-circle)
      // lista di nomi da abbinare al pallino query selector all (.site-name)
      // se nell'array dei data non è presente il numero del pallino/nome, allora assegna classe off

    }, function() {
      for(i=0; i<siteList.length; i++){
        dataArrayInt.pop();
        // console.log("removed");
      }
      $(".circles-up").removeClass('off');
      $(".site-name").removeClass('off');
      $('.cat-sx').removeClass('off');
    })
  })
);


// -------------------------------- //
// ---- Toggle categorie sopra ---- //
// -------------------------------- //

$(document).ready((function(){

    $('.site-name, .circles-up').hover(function() {
      if (this.classList.contains('site-name')){
        var n = $(this).data('sitenumber');
        // console.log(n);
      } else {
        var n = $(this).data('circlenumber');
        // console.log(n);
      }

      $(".site-name").each(function(){
        if ($(this).data('sitenumber') != n) {
          $(this).toggleClass('off');
        }
      });

      $(".circles-up").each(function(){
        if ($(this).data('circlenumber') != n) {
          $(this).toggleClass('off');
        }
      });

      $(".circleid").each(function(){
        if ($(this).data('circleid') != n) {
          $(this).toggleClass('off');
        }
      });


      //prendo tutti gli elementi della categoria cat-list
      //di ciascuno guardo nell'array catlist-data
      //se array.includes() n --> numero che ho preso dal pallino/scritta in alto

      $(".cat-list").each(function(){
        var dataArray = [];
        var dataArrayInt = [];
        var getDataStr = $(this).attr('catlist-data').split(',');
        dataArray.push(getDataStr);

        // prendo array e lo converto in numeri
        for(i=0; i<getDataStr.length; i++){
          dataArrayInt.push(parseInt(getDataStr[i]));
        }

        if (dataArrayInt.includes(n) == false) {
          $(this).toggleClass('off');
        } 

      });
      // // lavoro qui
      // catlist-data
      // .cat-list

      // var getDataStr = $(this).attr('js-data').split(',');
      // dataArray.push(getDataStr);

    }, function() {
      $('.site-name, .circles-up').removeClass('off');
      $(".circleid").removeClass('off');
      $(".cat-list").removeClass('off');

    })
  })
);

