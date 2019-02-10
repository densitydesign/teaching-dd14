function noiseWave(yoff, offset) {


  beginShape();


  this.xoff = 0;
  for (var x = 0; x <= width; x += 10) {
    this.y = map(noise(this.xoff, yoff), 0, 1, height-100+offset, height/2+100+offset-frameCount+600);
    vertex(x, this.y);
    xoff += 0.01;
    if (frameCount==2400) {
      frameCount=0;
    }
  }
  vertex(width*2, height);
  vertex(-width*2, height);
  endShape(CLOSE);
}
