# Noudini

__Arduino__ and __node.js__ fun using __Express__, __Johnny-five__, __Socket.io__, and __Angular.js__.

This application demonstrates bidirectional communication between node.js and
Arduino using web-sockets.

* An Arduino board is configured with a simple button and led.
* The hardware button toggles the led on/off and notifies/updates all connected
clients.
* The web client displays the current state of the led and when clicked,
toggles it on/off and notifies/updates all connected clients.

## Arduino

* Recommended Starting Kit: [Sparkfun Inventor's Kit](https://www.sparkfun.com/products/12001)
* Download [Arduino IDE](http://arduino.cc/en/main/software)
* Plug in your Arduino or Arduino compatible microcontroller via USB
* Open the Arduino IDE, select: File > Examples > Firmata > StandardFirmata
* Click the "Upload" button.
* If the upload was successful, the board is now prepared and you can close the Arduino IDE.

Wire up your circuit as shown in the following images.

![photo](https://raw.githubusercontent.com/brentertz/noudini/angular/arduino/photo.jpg)
![breadboard](https://raw.githubusercontent.com/brentertz/noudini/angular/arduino/breadboard.png)

_Be sure to check out the included Fritzing project file too._

_Note: You may use other pins if you like.  Just be sure to update
`server/config/defaults.js` respectively._

## Server

#### Install
```
cd server
npm install
npm start
```

## Client

#### Install

```
cd client
npm install
grunt build
```

#### Development

The following command will start a task to watch for changes and subsequently rebuild and run tests.

```
grunt develop
```

#### Tests

```
grunt test
```

## That's all

Open the app in a browser, or preferably in multiple browsers on multiple devices.

[http://localhost:3000](http://localhost:3000)
