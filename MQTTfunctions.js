// --------- MQTT FUNKTIONER -------moja2024/2026 ------



//-- Generate a Unique User ID for connecting-----------
function generateUserID() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = 'ITU';
  for (let i = 0; i < 9; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}  
const options = {
  clientId: generateUserID()
};

//-- Set the broker address---------------------------
const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt", options);

//-- Do connect---------------------------------------
client.on('connect', function() {
   client.subscribe(topic);
   console.log("MQTT OK");
});
