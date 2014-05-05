var angular = require('angular');

angular.module('noudini', [
  'noudini.ledToggle'
]);

require('./common/services/socket');
require('./app/led-toggle');
