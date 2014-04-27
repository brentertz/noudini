const int button = 7;
const int led = 13;

String ledStatus = "off";
String input = "";
boolean inputComplete = false;

void setup() {
  Serial.begin(115200);
  pinMode(button, INPUT);
  pinMode(led, OUTPUT);
}

void loop() {
  buttonListener();
  messageListener();
}

void buttonListener() {
  boolean buttonClicked = digitalRead(button);
  if (buttonClicked) {
    ledStatus = (ledStatus == "on") ? "off" : "on"; // toggle ledStatus
    Serial.println(ledStatus);  // Send ledStatus to node
    digitalWrite(led, (ledStatus == "on") ? HIGH : LOW); // Turn led on/off
    delay(1000);
  }
}

void messageListener() {
  if (inputComplete)  {
    if (input.startsWith("ledStatus")) {
      ledStatusHandler();
    } else if (input.startsWith("ledToggle")) {
      ledToggleHandler();
    } else {
      // Unknown message type
    }

    input = "";
    inputComplete = false;
  }
}

void ledToggleHandler() {
  ledStatus = (ledStatus == "on") ? "off" : "on"; // toggle ledStatus
  digitalWrite(led, (ledStatus == "on") ? HIGH : LOW); // Turn led on/off
  Serial.println(ledStatus); // Send ledStatus to node
}

void ledStatusHandler() {
  Serial.println(ledStatus);  // Send ledStatus to node
}

/*
 SerialEvent occurs whenever new data comes in the hardware serial RX.
 This routine is run between each time loop() runs, so using delay
 inside loop can delay response.  Multiple bytes of data may be available.
 */
 void serialEvent() {
   while (Serial.available()) {
     char c = (char)Serial.read();
     input += c;

     if (c == '\r') { // Detect end of message
       inputComplete = true;
     }
   }
}

