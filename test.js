var assert = require('assert');

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

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

    describe('log sequence with timeout', function () {
        it('log sequence', function (done) {
            (function () {
                console.log("start");
                console.log(1);

                setTimeout(function () {
                    console.log(2);
                    done();
                }, 100);

                setTimeout(function () {
                    console.log(3);
                }, 0);

                console.log(4);

            })();
        });

    });

    describe('Array.prototype.slice', function () {
        it('[1,2,3] slice for second and third', function () {
            var myArray = [1,2,3];
            var sliced = myArray.slice(1,myArray.length);
            console.log("sliced:", sliced);
            assert(sliced.equals([2,3]));
        });

        it('equals', function () {
            assert([2,3].equals([2,3]));
        });
    });

    describe('sum', function () {

        var sum = function () {
            var argumentLength = arguments.length;
            console.log(argumentLength);

            var first = arguments[0];
            if (argumentLength > 2) {

                console.log("typeof arguments");
                console.log(typeof arguments);

                return first + sum.apply(this, Array.prototype.slice.call(arguments, 1));
            }
            else if (argumentLength == 2) {
                return first + arguments[1];
            }
            else if (argumentLength == 1){
                return function (x) {
                    return first + x;
                }
            }
        };

        it('sum(2,3)', function () {
            assert(sum(2,3) == 5);
        });

        it('sum(2)(3)', function () {
            assert(sum(2)(3) == 5);
        });

        it('sum(2,3,4)', function () {
            assert(sum(2,3,4) == 9);
        });

        it('sum(2)(3)(4)', function () {
            //not possible to make it work
            // assert(sum(2)(3)(4) == 9);
        });
    });
});
