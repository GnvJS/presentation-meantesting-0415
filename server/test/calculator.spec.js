'use strict';

var expect = require('chai').expect;
var Calculator = require('../lib/calculator')

describe('Calculator', function() {
  describe('add', function() {
    it('should return 4 when adding 2 and 2', function() {
      var calc = new Calculator();

      expect(calc.add(2,2)).to.equal(4);
    });

    it('should return undefined if input is not a number', function() {
      var calc = new Calculator();

      expect(calc.add('aaron', 3)).to.equal(undefined);
    });
  });
});
