'use strict';

var Calculator = function() {

};

Calculator.prototype = function() {
  var add = function(x, y) {
    if (typeof x != 'number' || typeof y != 'number') {
      return undefined;
    }

    return x + y;
  };

  return {
    add: add
  };
}();

module.exports = Calculator;
