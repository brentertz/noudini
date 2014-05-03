(function() {
  var socket = io.connect('/');
  var $body = $('body');
  var $status = $('.status');

  $body.on('click touchstart', function() {
    socket.emit('led:toggle');
  });

  socket.on('led:status', function(status) {
    $status.text(status);
    $body.removeClass('on off').addClass(status);
  });
}());
