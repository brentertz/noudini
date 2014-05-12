var angular = require('angular');
var expect = require('chai').expect;

describe('LedToggleDirective', function() {
  beforeEach(function() {
    var ctx = this;

    angular.mock.module('noudini');

    angular.mock.inject(function($rootScope, $compile) {
      ctx.scope = $rootScope.$new();
      ctx.element = $compile('<led-toggle>')(ctx.scope);
      ctx.scope.$digest();
    });
  });

  it('renders an led-toggle element', function() {
    var ctx = this;
    expect(ctx.element.hasClass('led-toggle')).to.be.true;
  });
});
