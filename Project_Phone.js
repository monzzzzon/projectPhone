function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(80, 120, 60);

  fill(100, 200, 255);
  noStroke();
  circle(width / 2, height / 2, 30);

  fill(255);
  textAlign(CENTER);
  textSize(22);
  text("Friend Controller", width / 2, 60);

  textSize(16);
  text("Tilt your phone to move the buttons", width / 2, 100);
}
