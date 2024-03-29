let canvas;
let stars = [];

function windowResized() {
  console.log("yes");
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("position", "fixed");
  canvas.style("z-index", "-1");
  noStroke();
  for (let i = 0; i < 1000; i++) {
    stars.push(new Star());
  }
}

function draw() {
  // background(0);
  clear();
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
