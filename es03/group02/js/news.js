let snow = [];
let gravity;

let zOff = 0;

let spritesheet;
let textures = [];

function preload() {
  spritesheet = loadImage('/assets/news/flakes35.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.32);

  for (let x = 0; x < spritesheet.width; x += 333) {
    for (let y = 0; y < spritesheet.height; y += 333) {
      let img = spritesheet.get(x, y, 333, 333);
      image(img, x, y);
      textures.push(img);
    }
  }

  for (let i = 0; i < 400; i++) {
    let x = random(width);
    let y = random(height);
    let design = random(textures);
    snow.push(new Snowflake(x, y, design));
  }
}

function draw() {
  background(122, 152, 153);
  zOff += 0.11;

  for (flake of snow) {
    let xOff = flake.pos.x / width;
    let yOff = flake.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle);
    wind.mult(0.1);

    flake.applyForce(gravity);
    flake.applyForce(wind);
    flake.update();
    flake.render();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
