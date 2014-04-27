(function() {
  var socket = io.connect('http://localhost:3000'); // NOTE: Use real server IP if using mobile devices
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
