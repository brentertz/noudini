var angular = require('angular');

angular.module('noudini.ledToggle').directive('ledToggle', function(socket) {
  return {
    restrict: 'E',
    replace: true,
    template: require('./led-toggle-template.html'),
    link: function(scope, element, attrs) {
      socket.forward('led:status', scope);

      scope.status = null;

      scope.toggle = function() {
        socket.emit('led:toggle');
      };

      scope.$on('socket:led:status', function(e, data) {
        scope.status = data;
      });
    }
  };
});
