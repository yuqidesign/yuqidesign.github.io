class Star {
  constructor() {
    this.posx = random(-width, width);
    this.posy = random(-height, height);
    this.z = random(width);
    this.speed = 0;
    this.r = 0;
    this.pz = this.z;
  }

  update() {
    this.speed = map(mouseY, 0, height, 1, 28);
    this.z = this.z - this.speed;

    if (this.z < 1) {
      this.z = width;
      this.posx = random(-width, width);
      this.posy = random(-height, height);
      this.pz = this.z;
    }
  }

  show() {
    fill(255, random(255), random(255));
    noStroke();
    let possx = map(this.posx / this.z, 0, 1, 0, width);
    let possy = map(this.posy / this.z, 0, 1, 0, height);

    this.r = map(this.z, 0, width, 7, 0);
    ellipse(possx, possy, this.r, this.r);

    let pospx = map(this.posx / this.pz, 0, 1, 0, width);
    let pospy = map(this.posy / this.pz, 0, 1, 0, height);
    this.pz = this.z;

    stroke(255, random(255), random(255));
    strokeWeight(this.r);
    line(pospx, pospy, possx, possy);
  }
}
