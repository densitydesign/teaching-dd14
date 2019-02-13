$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        anchors: ['firstPage','secondPage','thirdPage','4thPage','5thPage','6thPage','7thPage','8thPage','9thPage','10thPage',
        '11thPage','12thPage','13thPage','14thPage'],
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 700,
        css3: true,
        autoScrolling: true,
        scrollOverflow: false,
        sectionsColor : ['#d1d191','#d1d191','#d0d38b','#d0d38b','#d0d38b','#a6bf6c','#a6bf6c','#a6bf6c','#a4be6b','#a4be6b','#04151F','#04151F','#04151F','#04151F'],
        navigationTooltips : ['Homepage','Introduction','Trade overview','Consumption growth','Superbowl','Growing production','American harvests',
        'Made in Mexico','New market','Trade flow','Resource usage','Losing','Chile water scarcity','Water footprint'],
    });

    //methods

});
