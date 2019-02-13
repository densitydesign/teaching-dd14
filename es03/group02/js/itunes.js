var mySong;
var myImage;
let autoplay = false;

function preload() {
  mySong = loadSound('./assets/music/ap.wav');
  myImage = loadImage('./assets/ap.png');
}

function setup() {
  createCanvas(10, 10);

  analyser = new p5.Amplitude();
  analyser.setInput(mySong);
  // mySong.play();

  frameRate(25);
  let button2 = createButton('Close');
  let button1 = createButton('Sound');

  button1.mousePressed(function() {
    mySong.play();
  });
  button2.mousePressed(function() {
    mySong.pause();
  });
}

function draw() {
  // var volume = analyser.getLevel();
  // volume = map(volume, 0, 1, 0, 360);

  var myRate = map(mouseY, 0, height, 0, 2);
  mySong.amp(myRate);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
