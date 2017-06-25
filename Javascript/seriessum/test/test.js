var assert = require('assert');
var app = require('../js/app.js');

describe("SeriesSum", function() {
  describe('#seriesSum()', function() {
    it('should return expected values', function() {
      assert.equal("0.00", app.seriesSum(-1));
      assert.equal("0.00", app.seriesSum(0));
      assert.equal("0.00", app.seriesSum(0.0));
      assert.equal("1.00", app.seriesSum(1));
      assert.equal("1.94", app.seriesSum(15));
      assert.equal("2.40", app.seriesSum(58));
    });
  });
});
