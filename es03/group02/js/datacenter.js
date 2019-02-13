var sizeCarattere = 11;
var y;
var list;
var b;
var a;
var img;
var imgF;

function preload() {
  img = loadImage('assets/datacenter/04.png');
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();

  frameRate(30);
}

function draw() {
  background(125, 152, 236, 10);
  // image(img, 0, 0, windowWidth, (img.height / img.width) * windowWidth);
  if (y >= windowHeight) {
    frameCount = 0;
    y = 0;
  }
  for (p = 0; p < windowWidth; p += 20) {
    appear();
  }
}

function appear() {
  var size = mouseY / 20 - 10;
  var c = random(-100, -0);
  var m = random(100, 255);
  var n = random(90, 150);
  // var m=map(mouseX,0,width,0,255);
  y = round(frameCount * 20 + c);
  fill(m, 0, n);
  list = [0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
  b = round(random(0, 2));
  a = list[b];
  textSize(10);
  text(a, p, y);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
