// Repulses particles from itself.
function Collision(x, y, mass) {

  this.pos = new p5.Vector(x, y);
  this.target = new p5.Vector(x, y);
  this.mass = mass;
  this.targetMass = mass;

  this.getBoundingBox = function() {
    var radius = this.mass/2;

    var ax = this.pos.x-radius;
    var ay = this.pos.y-radius;
    var bx = this.pos.x+radius;
    var by = this.pos.y+radius;

    return [ax, ay, bx, by];
  }

  this.move = function() {
    this.pos = p5.Vector.lerp(this.pos, this.target, 0.01);
    this.mass = lerp(this.mass, this.targetMass, 0.01);
  }

  // Avoids using stroke otherwise it overlaps the particles.
  this.display = function() {
    noStroke();

    noFill();
    ellipse(this.pos.x, this.pos.y, this.mass, this.mass);

  }

}
