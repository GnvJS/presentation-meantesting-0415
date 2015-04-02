'use strict';

var expect = require('chai').expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      var array = [1, 2, 3];

      expect(array.indexOf(5)).to.equal(-1);
      expect(array.indexOf(0)).to.equal(-1);
    });
  });
});
