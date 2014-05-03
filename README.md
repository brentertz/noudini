# Noudini

__Arduino__ and __node.js__ fun using __Express__, __Johnny-five__, and __Socket.io__.

This application demonstrates bidirectional communication between node.js and
Arduino using web-sockets.

* An Arduino board is configured with a simple button and led.
* The hardware button toggles the led on/off and notifies/updates all connected
clients.
* The web client displays the current state of the led and when clicked,
toggles it on/off and notifies/updates all connected clients.

## Demo Video

[![Noudini Project Demo](http://img.youtube.com/vi/-ClD1SPW2uQ/0.jpg)](http://youtu.be/-ClD1SPW2uQ)

## Arduino

Wire up your circuit as shown in the following images.

![photo](https://raw.githubusercontent.com/brentertz/noudini/master/photo.jpg)
![breadboard](https://raw.githubusercontent.com/brentertz/noudini/master/breadboard.png)

_Be sure to check out the included Fritzing project file too._

_Note: You may use other pins if you like.  Just be sure to update
`server/config/defaults.js` respectively._

Upload the _Standard Firmata_ to your Arduino. This can be found in the
Arduino app under: `File -> Examples -> Firmata -> Standard Firmata`

## Server

Install dependencies.

```
npm install
```

Adjust the `server/config/defaults.js` as desired.

Then, start the server.

```
npm start
```

## Client

Adjust the server url in `client/js/app.js` if needed.  The default server url
is [http://localhost:3000](http://localhost:3000) and is fine for local
testing, but you will need to change it if you are connecting from other
computers, mobile devices, etc.

Open the app in a browser, or preferably in multiple browsers on multiple
devices.
