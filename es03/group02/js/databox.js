var $cube = $('.cube');
var $cubeSide = $('.cube div');

var $front = $('.cube .front');
var $back = $('.cube .back');
var $top = $('.cube .top');
var $bottom = $('.cube .bottom');
var $left = $('.cube .left');
var $right = $('.cube .right');

var tl = new TimelineMax({ repeat: -1, timeScale: 0.5 });

tl.from($front, 1, { z: 150 }, 'part-1')
  .from($back, 1, { z: -150 }, 'part-1')
  .from($top, 1, { y: -100 }, 'part-1')
  .from($bottom, 1, { y: 100 }, 'part-1')
  .from($left, 1, { x: -100 }, 'part-1')
  .from($right, 1, { x: 100 }, 'part-1')
  .to($cubeSide, 1, { opacity: 1 }, 'part-1')
  .to(
    $cube,
    2,
    { rotationY: '+=360', transformOrigin: '50px 50px', ease: Linear.easeNone },
    'part-1'
  )
  .to(
    $cube,
    2,
    { rotationX: '+=360', transformOrigin: '50px 50px', ease: Linear.easeNone },
    'part-1'
  )

  .to(
    $cube,
    2,
    { rotationY: '+=360', transformOrigin: '50px 50px', ease: Linear.easeNone },
    'part-2'
  )
  .to(
    $cube,
    2,
    { rotationX: '+=360', transformOrigin: '50px 50px', ease: Linear.easeNone },
    'part-2'
  )
  .to($cubeSide, 1, { opacity: 0.7 }, 'part-2')
  .to($front, 1, { z: 150 }, 'part-2')
  .to($back, 1, { z: -150 }, 'part-2')
  .to($top, 1, { y: -100 }, 'part-2')
  .to($bottom, 1, { y: 100 }, 'part-2')
  .to($left, 1, { x: -100 }, 'part-2')
  .to($right, 1, { x: 100 }, 'part-2');

$('.cube').on('mouseover', function() {
  tl.timeScale(0.2);
});
$('.cube').on('mouseleave', function() {
  tl.timeScale(1);
});

$('.cube div').click(function() {
  if ($(this).hasClass('active')) {
    hideSide();
  } else {
    tl.pause();
    var sideClass = $(this).attr('class');
    showSide(sideClass);
    $(this).addClass('active');
  }
});

function showSide(className) {
  TweenLite.to($('.' + className), 1, { scale: 3 });

  TweenLite.to($front, 1, { z: 50 });
  TweenLite.to($back, 1, { z: -50 });
  TweenLite.to($top, 1, { y: 0 });
  TweenLite.to($bottom, 1, { y: 0 });
  TweenLite.to($left, 1, { x: 0 });
  TweenLite.to($right, 1, { x: 0 });

  switch (className) {
    case 'front':
      TweenLite.to($cube, 1, { rotationX: 0, rotationY: 0 });
      TweenLite.to($front, 1, { z: 150 });
      break;
    case 'back':
      TweenLite.to($cube, 1, { rotationX: 0, rotationY: 180 });
      TweenLite.to($back, 1, { z: -150 });
      break;
    case 'top':
      TweenLite.to($cube, 1, { rotationX: -90, rotationY: 0 });
      TweenLite.to($top, 1, { y: -100, z: 150 });
      break;
    case 'bottom':
      TweenLite.to($cube, 1, { rotationX: 90, rotationY: 0 });
      TweenLite.to($bottom, 1, { y: 100, z: 150 });
      break;
    case 'left':
      TweenLite.to($cube, 1, { rotationX: 0, rotationY: 90 });
      TweenLite.to($left, 1, { x: -100, z: -150, y: 0 });
      break;
    case 'right':
      TweenLite.to($cube, 1, { rotationX: 0, rotationY: -90 });
      TweenLite.to($right, 1, { x: 100, z: -150, y: -100 });
      break;
  }
}

function hideSide() {
  $('.active').removeClass('active');
  TweenLite.to($cube, 1, {
    rotationY: 0,
    rotationX: 0,
    ease: Linear.easeNone,
    onComplete: function() {
      tl.restart();
    }
  });
  TweenLite.to($front, 1, { z: 150 });
  TweenLite.to($back, 1, { z: -150 });
  TweenLite.to($top, 1, { y: -100, z: 50 });
  TweenLite.to($bottom, 1, { y: 100, z: 50 });
  TweenLite.to($left, 1, { x: -100, z: -50, y: 0 });
  TweenLite.to($right, 1, { x: 100, z: -50, y: 0 });
  TweenLite.to($cubeSide, 1, { scale: 1 });
}
