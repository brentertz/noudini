var angular = require('angular');
window.io = require('socket.io-client'); // FIXME
require('angular-socket-io');

angular.module('services.socket', ['btford.socket-io']);

angular.module('services.socket').factory('socket', function(socketFactory) {
  var socket = socketFactory();
  socket.forward('error');
  return socket;
});
