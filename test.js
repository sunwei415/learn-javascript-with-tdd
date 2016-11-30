var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });

    it('log test', function () {
        console.log("logging from node via mocha");
    });

    it("0.1 + 0.2", function () {
        console.log(0.1 + 0.2);
    });

      it('0.1+0.2 == 0.3', function () {
          console.log(0.1+0.2 == 0.3);
      });





  });

    describe('isInteger', function () {
        var isInteger = function (x) {
            console.log(typeof x);
            if (typeof x != 'number') {
                return false;
            }

            return x % 1 == 0;
        };

        it('a is not an integer', function () {
            assert(!isInteger('a'));
        });

        it('1 is not an integer', function () {
            assert(isInteger(1));
        });

        it('1.1 is not an integer', function () {
            assert(!isInteger(1.1));
        });

        it('type of type of 1', function () {
            console.log('typeof typeof 1 is: ');
            console.log(typeof (typeof 1));
        });
    });
});
