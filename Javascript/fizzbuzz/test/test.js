var assert = require('assert');
var app = require('../js/app.js');

describe("FizzBuzz", function() {
  describe('#process()', function() {
    it('should return [] when receives a value lower than 1', function() {
      assert.deepEqual([], app.process(0));
      assert.deepEqual([], app.process(-1));
    });
    it('should return [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz", 16, 17, "fizz", 19, "buzz", "fizz", 22, 23] when receives 23', function() {
      assert.deepEqual([1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz", 16, 17, "fizz", 19, "buzz", "fizz", 22, 23], app.process(23));
    });
  });
});
