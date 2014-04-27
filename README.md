# Arduinode

This application demonstrates bidirectional communication between __node.js__ and __Arduino__ using __serial port__ and __web-sockets__.

* An Arduino board is configured with a simple button and led.

* The hardware button toggles the led on/off and notifies/updates all connected clients.

* The web client displays the current state of the led and when clicked, toggles it on/off and notifies/updates all connected clients.

## Demo Video

[![Arduinode Project Demo](http://img.youtube.com/vi/-ClD1SPW2uQ/0.jpg)](http://youtu.be/-ClD1SPW2uQ)

## Arduino

Wire up your circuit as in the following photo.

![arduino setup](https://raw.githubusercontent.com/brentertz/arduinode/master/arduino.jpg)

Upload the `arduino/arduino.ino` script to your connected Arduino.

## Server

Install dependencies.

```
npm install
```

Adjust the `server/config/defaults.js` as needed. At a minimum, you'll need to adjust the __serialPort path__.

Then, start the server.

```
npm start
```

## Client

Adjust the server url in `client/js/app.js` if needed.  The default server url is [http://localhost:3000](http://localhost:3000) and is fine for local testing, but you will need to change it if you are connecting from other computers or mobile devices, etc.

Open the app in a browser, or preferably in multiple browsers on multiple devices.
