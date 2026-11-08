// -- HANDLE WHEN YOU SEND A MESSAGE----------------


function sender(x, y) {
  let message = {
    from:afsenderID, 
    val:x,
    val2: y
    
  };
   client.publish(topic, JSON.stringify(message));
}
