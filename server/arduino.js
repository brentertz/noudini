'use strict';

var j5 = require('johnny-five');

module.exports = function(sio, config) {
  var board = new j5.Board(config.arduino.board);
  var led, button;

  board.on('ready', function() {
    led = new j5.Led(config.arduino.led);
    button = new j5.Button(config.arduino.button);

    button.on('press', function() {
      led.toggle();
    });

    this.ready = true;
  });

  sio.sockets.on('connection', function(socket) {
    if (board.ready) {
      socket.emit('led:status', led.isOn ? 'on' : 'off');

      button.on('press', function() {
        socket.emit('led:status', led.isOn ? 'on' : 'off');
      });

      socket.on('led:toggle', function() {
        led.toggle();
        sio.sockets.emit('led:status', led.isOn ? 'on' : 'off');
      });
    }
  });
};
