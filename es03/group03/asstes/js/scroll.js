$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thPage', '6thPage', '7thPage',
				'8thPage',],
        navigation: true,
        navigationPosition: 'right',
        scrollingSpeed: 700,
        css3: true,
        autoScrolling: true,
        scrollOverflow: false,
        sectionsColor : ['#e6e2b1', '#e6e2b1','#e6e2b1', '#e6e2b1','#e6e2b1', '#e6e2b1','#e6e2b1'],
        navigationColor : ['#b8c580','#b8c580','#b8c580','#b8c580','#b8c580','#b8c580','#b8c580','#b8c580'],
        navigationTooltips : ['"Green gold"','Avocado trade','Stolen water','Space to the plantation',
        'Blood avocados','Where is my avo','Know your avocado','Conclusion'],
    });

    //methods

});
