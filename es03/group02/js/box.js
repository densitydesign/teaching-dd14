var anglea = 0;
var cnv;

function centerCanvas() {
  var x = 0;
  var y = windowHeight - height;
  cnv.position(x, y);
  cnv.mouseClicked(jumpToNew);
}

function setup() {
  cnv = createCanvas(125, 125, WEBGL);
  centerCanvas();
  // colorMode(HSB);
}

function draw() {
  // put drawing code here

  background(120, 0);

  //ambientLight(255);
  let a = map(mouseX, 0, width, 0, 0.1);
  rotateY(anglea);
  rotateX(anglea * a);
  //rotateZ(anglea*1.2);

  // stroke(55, 65, 90);
  fill(247, 230, 233);
  noStroke();
  // fill(255, 90);
  box(45);

  anglea += 0.01;
}

function windowResized() {
  centerCanvas();
}

function jumpToNew() {
  window.location = 'datacenterbox.html';
}
