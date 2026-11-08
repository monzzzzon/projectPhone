function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(80, 120, 60);

  fill(255);
  textAlign(CENTER);
  textSize(22);
  text("Friend Controller", width / 2, 60);

  if (orientationSensor.hasNewValue) {
    fill(100, 200, 255);
    noStroke();
    circle(width / 2, height / 2, 30);
    text("SENSOR DATA RECEIVED!", width / 2, 120);
  } else {
    fill(255);
    text("Waiting for sensor data...", width / 2, 120);
  }
}
