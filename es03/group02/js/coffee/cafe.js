var pMinMass = 2;
var pMaxMass = 8;
var cMinMass = 30;
var cMaxMass = 100;
let textures = [];
var machine1;
var machine2;
var coffee;
var city;

var waveNum = 7;
var yoff = [];
var offset = [];
var offsetDist = 20;

var waterfallMin;
var waterfallMax;

var particles = [];
var collisions = [];

var fps;

function preload() {
  machine1 = loadImage('./assets/coffee/machine1.png');
  machine2 = loadImage('./assets/coffee/machine2.png');
  coffee = loadImage('./assets/coffee/coffee.png');
  city = loadImage('./assets/coffee/city.png');
}

function do_aabb_collision(ax, ay, Ax, Ay, bx, by, Bx, By) {
  return !(Ax < bx || Bx < ax || Ay < by || By < ay);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  waterfallMin = width / 2.4;
  waterfallMax = width - width / 2.4;
  collisions[collisions.length] = new Collision(
    width / 2,
    machine1.width / 5 / 2 + 170,
    80
  );
  collisions[collisions.length] = new Collision(
    width / 2 - 100,
    height - 50,
    50
  );
  collisions[collisions.length] = new Collision(
    width / 2 + 100,
    height - 50,
    50
  );

  colorMode(RGB);
  noStroke();
  smooth();

  for (var i = 0; i < waveNum; i++) {
    offset[i] = i * offsetDist;
    yoff[i] = random(30);
  }

  // cWaves = color (random (72,248), random (186,43), random (117,21), (20,50));
  cWaves = color((20, 248), (20, 186), (20, 117), (20, 80));
  randomSeed(20);
}

function draw() {
  background(255, 235, 235);
  image(
    machine2,
    windowWidth / 2 - machine2.width / 5 / 2 - 30,
    0,
    machine2.width / 5,
    machine2.height / 5
  );
  image(
    city,
    width / 2 - mouseX * 0.01 - city.width / 8 / 2,
    height - city.height / 8,
    city.width / 8,
    city.height / 8
  );

  var spawnCount = 4;

  // Spawn new particles.
  for (var num = 0; num < spawnCount; num++) {
    var x = random(width / 2 - 30, width / 2 + 30);
    var mass = random(pMinMass, pMaxMass);

    if (particles.length % 5 == 0) {
      var displayColor = color(255);
    } else {
      var displayColor = color(random(72, 80), 43, 21);
    }

    var newParticle = new Particle(x, 0, mass, displayColor);
    particles[particles.length] = newParticle;
  }

  colorMode(RGB, 255);

  for (var i = particles.length - 1; i > -1; i--) {
    particles[i].move();
    var has_collision = particles[i].resolveCollisions();

    particles[i].display();

    if (particles[i].pos.y > height) {
      // Delete if it's out of bounds.
      particles.splice(i, 1);
    } else if (has_collision && particles[i].vel.mag() < 0.1) {
      // Delete if it's stuck on top of a collision object.
      particles.splice(i, 1);
    }
  }

  for (var i = 0; i < collisions.length; i++) {
    collisions[i].move();
    collisions[i].display();
  }

  // Avoid updating frame rate every frame (not as readable).
  if (frameCount % 10 == 0) {
    fps = frameRate().toFixed(2);
  }
  fill(255, 235, 200);
  var m = windowWidth / 2 - coffee.width / 5 / 2 - 10 - mouseX * 0.01;
  rect(width / 2 - 50 - mouseX * 0.005, 0, 100, 10);
  image(
    machine1,
    windowWidth / 2 - machine1.width / 5 / 2 - 30 - mouseX * 0.005,
    0,
    machine1.width / 5,
    machine1.height / 5
  );
  image(
    coffee,
    random(m - 2, m + 2),
    machine1.width / 5 / 2 + 130 - mouseX * 0.01,
    coffee.width / 3,
    coffee.height / 3
  );

  if (mouseIsPressed) {
    fill(cWaves);
    for (var i = 0; i < 7; i++) {
      noiseWave(yoff[i], offset[i]);
      yoff[i] += 0.002;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
