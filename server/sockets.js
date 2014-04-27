'use strict';

var SerialPort = require('serialport').SerialPort;
var socketIo = require('socket.io');

module.exports = function(server, config) {
  var io = socketIo.listen(server);
  var serialPort = new SerialPort(config.serialPort.path, config.serialPort.options);
  var message = '';

  io.sockets.on('connection', function(socket) {
    // Listen for messages from arduino and send to client
    serialPort.on('data', function(data) {
      message += data.toString();
      if (message.indexOf('\r') !== -1) { // Detect end of message
        socket.volatile.emit('message', message);
        message = '';
      }
    });

    // Listen for messages from client and send to arduino
    socket.on('ledToggle', function(status) {
      serialPort.write('ledToggle:' + status + '\r');
    });

    socket.on('ledStatus', function() {
      serialPort.write('ledStatus' + '\r');
    });
  });
};
