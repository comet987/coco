function setup() {
  createCanvas(720,720);
}

function draw() {
  rectMode(CENTER);
  if (mousePressed) {
    fill(0);
  } else {
    fill(random(255),100,100);
  }
  rect(touchX, touchY, 100, 100);
}
