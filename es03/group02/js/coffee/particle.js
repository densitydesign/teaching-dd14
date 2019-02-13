function Particle(x, y, mass, displayColor) {

  this.pos = new p5.Vector(x, y);
  this.vel = new p5.Vector(0, 0);
  this.acc = new p5.Vector(0, 0);
  this.mass = mass;
  this.displayColor = displayColor;
  this.fallRate = map(this.mass, pMinMass, pMaxMass, 0.1, 0.05);

  this.getBoundingBox = function() {
    var radius = this.mass/2;
    var offset = 2; // Just to expand its bb a bit.

    var ax = this.pos.x-radius-offset;
    var ay = this.pos.y-radius-offset;
    var bx = this.pos.x+radius+offset;
    var by = this.pos.y+radius+offset;

    return [ax, ay, bx, by];
  }

  this.move = function() {
    var gravity = new p5.Vector(0, this.fallRate);
    this.acc.add(gravity);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.resolveCollisions = function() {
    var hit_object = false;

    var bb1 = this.getBoundingBox();

    for (var c = 0; c < collisions.length; c++) {
      var col = collisions[c];

      var bb2 = col.getBoundingBox();

      // First check bounding box to optimize checks.
      var is_close_enough = do_aabb_collision(bb1[0], bb1[1], bb1[2], bb1[3],
                                              bb2[0], bb2[1], bb2[2], bb2[3]);

      if (is_close_enough) {
        var distance = dist(this.pos.x, this.pos.y, col.pos.x, col.pos.y);

        if (distance < col.mass/2) {
          // Push out of collision object.
          var offset = this.pos.copy();
          offset.sub(col.pos);
          offset.normalize();
          offset.mult(col.mass/2-distance);
          this.pos.add(offset);

          var friction = 0.3;
          var dampening = map(this.mass, pMinMass, pMaxMass, 1, 0.8);
          var mag = this.vel.mag();

          // Get its new vector.
          var bounce = this.pos.copy();
          bounce.sub(col.pos);
          bounce.normalize();
          bounce.mult(mag*friction*dampening);
          this.vel = bounce;

          if (this.mass > 2) {
            this.mass = max(1, this.mass-2);

            var splitCount = 1;

            for (var s = 0; s < splitCount; s++) {
              var mass = max(1, this.mass-1);
              var displayColor = color(255);

              var splash = new Particle(this.pos.x, this.pos.y, mass, displayColor);

              splash.vel = this.vel.copy();
              splash.vel.rotate(radians(random(-45, 45)));
              splash.vel.mult(random(0.6, 0.9));

              particles[particles.length] = splash;
            }
          }

          hit_object = true;

          break;
        }
      }
    }

    return hit_object;
  }

  this.display = function() {
    stroke(this.displayColor);
    strokeWeight(this.mass);
    point(this.pos.x, this.pos.y);
  }
}
