var angular = require('angular');

module.exports = angular.module('noudini.ledToggle', ['services.socket']);

require('./led-toggle-directive');
