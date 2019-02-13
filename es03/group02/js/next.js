let xoff = 0;
let color = 0;
let i = 0.1;
let j;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1600, 800, WEBGL);
  centerCanvas();
  ortho();
}

function draw() {
  background(180, 183, 245);

  ambientLight(255, 130, 53);
  pointLight(255, 255, 255, 0, -200, 200);

  ambientMaterial(255);

  rotateX(PI / 1.2);

  noStroke();
  ambientMaterial(255);

  for (let qh = -100; qh <= 370; qh += 35) {
    push();
    translate(0, qh, 0);
    rotateY(PI * i);
    box(30 * j);
    pop();
  }

  for (let qe = -100; qe <= 370; qe += 35) {
    push();
    translate(60, qe, 0);
    rotateY(PI * i);
    box(30 * j);
    pop();
  }

  for (let qg = -100; qg <= 150; qg += 35) {
    push();
    translate(120, qg, 0);
    rotateY(PI * i);
    box(30 * j);
    pop();
  }

  for (let qf = -100; qf <= 50; qf += 35) {
    push();
    translate(180, qf, 0);
    rotateY(PI * i);
    box(30 * j);
    pop();
  }

  for (let qe = -100; qe <= 30; qe += 35) {
    push();
    translate(240, qe, 0);
    rotateY(PI * i);
    box(30 * j);
    pop();
  }

  for (let qd = -100; qd <= -60; qd += 35) {
    push();
    translate(300, qd, 0);
    rotateY(PI * i);
    box(30 * j);
    pop();
  }

  for (let qc = -100; qc <= -80; qc += 35) {
    push();
    translate(360, qc, 0);
    rotateY(PI * i);
    box(30 * j);
    pop();
  }

  for (let qa = -100; qa <= -80; qa += 35) {
    push();
    translate(420, qa, 0);
    rotateY(PI * i);
    box(30 * j);
    pop();
  }

  for (let qb = -100; qb <= -80; qb += 35) {
    push();
    translate(480, qb, 0);
    rotateY(PI * i);
    box(30 * j);
    pop();
  }

  if (mouseIsPressed) {
    i += 0.01;
    j = 1.1;
  } else {
    j = 1;
  }

  // if (mouseIsPressed) {
  //   i += 0.01;
  //   j = 1.1;
  //   color += 0.5;
  // } else {
  //   j = 1;
  //   color = 0;
  // }
}
