var angle = 0;
let graphics;
let love;

function setup() {
  createCanvas(400, 300, WEBGL);

  graphics = createGraphics(200, 200);
  graphics.background(255);

  love = createGraphics(200, 200);
  love.background(255, 50);
  love.fill(0);
  love.textAlign(CENTER);
  love.textSize(64);
  // love.text('010101', 100, 50);
}

function draw() {
  background(180, 182, 247);
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 0.7);
  ambientMaterial(255);
  texture(love);
  box(100);
  angle += 0.03;
}
