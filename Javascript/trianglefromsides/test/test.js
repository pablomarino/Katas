var assert = require('assert');
var app = require('../js/app.js');

describe("IsTriangle", function() {
  describe('#isTriangle()', function() {
    it('should return false when one or more segments are equal to 0', function() {
      assert.equal(false, app.isTriangle(0,0,0));
      assert.equal(false, app.isTriangle(0,0,1));
      assert.equal(false, app.isTriangle(0,1,1));
    });
    it('should return false for invalid values', function() {
      assert.equal(false, app.isTriangle(7,2,2));
      assert.equal(false, app.isTriangle(1,2,3));
      assert.equal(false, app.isTriangle(3,1,2));
      assert.equal(false, app.isTriangle(2,3,1));
    });

    it('should return false with negative values segments', function() {
      assert.equal(false, app.isTriangle(-1,2,3));
      assert.equal(false, app.isTriangle(1,-2,3));
      assert.equal(false, app.isTriangle(1,2,-3));
      assert.equal(false, app.isTriangle(-5,1,3));
    });
    
    it('should return true given for valid values', function() {
      assert.equal(true, app.isTriangle(1,2,2));
      assert.equal(true, app.isTriangle(4,2,3));
      assert.equal(true, app.isTriangle(5,1,5));
      assert.equal(true, app.isTriangle(2,2,2));
    });
  });
});
