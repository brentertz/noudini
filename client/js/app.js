(function() {
  var socket = io.connect('/'); // NOTE: Use real server hostname:port if using devices not directly connected to server
  var $body = $('body');
  var $status = $('.status');
  var status = '';

  $body.on('click touchstart', function() {
    status = status === 'on' ? 'off' : 'on';
    socket.emit('ledToggle', status);
  });

  socket.on('message', function(data) {
    $status.text(data);
    $body.removeClass('on off').addClass(data);
  });

  socket.emit('ledStatus');
}());
