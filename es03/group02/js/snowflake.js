function getRandomSize() {
  let r = pow(random(3, 8), 10);
  return constrain(r * 4, 20, 90);
}

class Snowflake {
  constructor(sx, sy, img) {
    let x = sx || random(width);
    let y = sy || random(-100, -10);
    this.img = img;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 10);
    this.acc = createVector();
    this.angle = random(TWO_PI);
    this.dir = random(1) > 0.5 ? 1 : -1;

    this.r = getRandomSize();
  }

  applyForce(force) {
    let f = force.copy();
    f.mult(this.r);
    this.acc.add(force);
  }

  randomize() {
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 5);
    this.acc = createVector();
    this.xOff = 0;
    this.r = getRandomSize();
  }

  update() {
    this.xOff = sin(this.angle * 2) * this.r * 2;

    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.01);

    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }

    this.pos.add(this.vel);
    this.acc.mult(0);

    if (this.pos.y > height + this.r) {
      this.randomize();
    }
    //Wrapping Left and Right
    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }
    // if(this.offScreen()){
    //   this.randomize();
    // }

    this.angle += (this.dir * this.vel.mag()) / 100;
  }

  render() {
    // stroke(255);
    // strokeWeight(this.r);
    // point(this.pos.x,this.pos.y);
    push();
    translate(this.pos.x + this.xOff, this.pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.r, this.r);
    pop();
  }

  offScreen() {
    // return (this.pos.y>height+this.r ||
    //         this.pos.x<-this.r||
    //         this.pos.x>width+this.r);
    return this.pos.y > height + this.r;
  }
}
