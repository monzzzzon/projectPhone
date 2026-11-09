let shake = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupMotion(10);
}

function draw() {
  background(80,120,60);
  
  // Gets the latest orientation data from the phone
  let orientation = orientationSensor.get();
  
  // Checks if the phone has detected a new movement
  if (motionSensor.hasNewValue){
  
  let motion = motionSensor.get();
  shake = Math.sqrt(motion.x * motion.x + motion.y * motion.y + motion.z * motion.z);
  console.log("Shake detected:", shake);
  }
  
  // Left/right tilt into a value between -1 and 1
  let tiltX = constrain(map(orientation.gamma, -90, 90, -1, 1), -1, 1);
  // Forward/backward tilt into a value between -1 and 1
  let tiltY = constrain(map(orientation.beta, -180, 180, -1, 1), -1, 1);
  
  // Sends the tilt values to the computer if MQTT is connected
  if (client.connected) {
    sender(tiltX, tiltY);
  }
  
  // A blue circle that follows the phone's tilt
  fill(100, 200, 255);
    noStroke();
    circle(width / 2 + tiltX * 100, height / 2 + tiltY * 100, 30);

  
  fill(255);
  textAlign(CENTER);
  textSize(22);
  text("Friend Controller", width / 2, 60);

  textSize(16);
  text("Tilt your phone to move the buttons1", width / 2, 100);
  text("Shake value: " + Math.round(shake), width / 2, 130);
}
