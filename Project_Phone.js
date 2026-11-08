function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(80,120,60);
  
  if (orientationSensor.hasNewValue){
  
  let orientation = orientationSensor.get();
  
  let tiltX = constrain(map(orientation.gamma, -45, 45, -1, 1), -1, 1);
  let tiltY = constrain(map(orientation.beta, -45, 45, -1, 1), -1, 1);
  
  if (client.connected) {
    sender(tiltX, tiltY);
  }
    
  fill(100, 200, 255);
    noStroke();
    circle(width / 2 + tiltX * 100, height / 2 + tiltY * 100, 30);
  } 
    
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text("Friend Controller", width / 2, 60);

  textSize(16);
  text("Tilt your phone to move the buttons", width / 2, 100);
}
