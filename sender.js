// -- HANDLE WHEN YOU SEND A MESSAGE----------------

// Puts the sender ID and tilt values into one message
function sender(x, y) {
  let message = {
    from:afsenderID, 
    val:x, //horizontal tilt (left and right)
    val2: y, // vertical tilt (forward and backward)
    shake: shake
  };
   client.publish(topic, JSON.stringify(message));
}
