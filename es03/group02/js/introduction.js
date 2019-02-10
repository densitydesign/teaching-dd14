let j = 0;

let angleA = 0;
let angleB = 0;
let angleC = 0;
let angleD = 0;
let angleE = 0;
let angleF = 0;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1600, 400, WEBGL);
  centerCanvas();
  ortho();
}

function draw() {
  background(180, 183, 245);

  // let dx = mouseX - width /2;
  // let dy = mouseY - height/2;
  // let v = createVector(dx, dy, 0);
  // v.div(100);

  ambientLight(255, 130, 53);
  pointLight(255, 255, 255, 0, -200, 200);

  ambientMaterial(255);
  for (let qa = -300; qa < -200; qa += 50) {
    push();
    translate(qa, j - 160, 0);
    rotateX(angleA);
    rotateY(angleA * 0.03);
    rotateZ(angleA * 0.07);
    noStroke();
    ambientMaterial(255);
    box(30);
    pop();
  }
  if (mouseX >= 450 && mouseX <= 550) {
    if (mouseY >= 10 && mouseY <= 60) {
      angleA += 0.1;
    }
  } else {
    angleA = 0;
  }

  for (let qb = -300; qb < -150; qb += 50) {
    push();
    translate(qb, j - 100, 0);
    rotateX(angleB);
    rotateY(angleB * 0.03);
    rotateZ(angleB * 0.07);
    noStroke();
    ambientMaterial(255);
    box(30);
    pop();
  }

  if (mouseX >= 450 && mouseX <= 650) {
    if (mouseY >= 60 && mouseY <= 110) {
      angleB += 0.08;
    }
  } else {
    angleB = 0;
  }

  for (let qc = -300; qc < -50; qc += 50) {
    push();
    translate(qc, j - 40, 0);
    rotateX(angleC);
    rotateY(angleC * 0.03);
    rotateZ(angleC * 0.07);
    noStroke();
    ambientMaterial(255);
    box(30);
    pop();
  }

  if (mouseX >= 450 && mouseX <= 800) {
    if (mouseY >= 110 && mouseY <= 160) {
      angleC += 0.1;
    }
  } else {
    angleC = 0;
  }

  for (let qd = -300; qd < 100; qd += 50) {
    push();
    translate(qd, j + 20, 0);
    rotateX(angleD);
    rotateY(angleD * 0.03);
    rotateZ(angleD * 0.07);
    noStroke();
    ambientMaterial(255);
    box(30);
    pop();
  }
  if (mouseX >= 450 && mouseX <= 900) {
    if (mouseY >= 200 && mouseY <= 250) {
      angleD += 0.12;
    }
  } else {
    angleD = 0;
  }

  for (let qe = -300; qe < 300; qe += 50) {
    push();
    translate(qe, j + 80, 0);
    rotateX(angleE);
    rotateY(angleE * 0.03);
    rotateZ(angleE * 0.07);
    noStroke();
    ambientMaterial(255);
    box(30);
    pop();
  }
  if (mouseX >= 450 && mouseX <= 1050) {
    if (mouseY >= 250 && mouseY <= 300) {
      angleE += 0.14;
    }
  } else {
    angleE = 0;
  }

  for (let qf = -300; qf < 550; qf += 50) {
    push();
    translate(qf, j + 140, 0);
    rotateX(angleF);
    rotateY(angleF * 0.03);
    rotateZ(angleF * 0.07);
    noStroke();
    ambientMaterial(255);
    box(30);
    pop();
  }
  if (mouseX >= 450 && mouseX <= 1300) {
    if (mouseY >= 300 && mouseY <= 350) {
      angleF += 0.16;
    }
  } else {
    angleF = 0;
  }
}
