/**
 *
 * @param {integer} arg
 * @returns {*[]}
 * @desc  Write a program that prints the integers from   1   to   arg   (inclusive).
 *        for multiples of three,   print   Fizz     (instead of the number)
 *        for multiples of five,   print   Buzz     (instead of the number)
 *        for multiples of both three and five,   print   FizzBuzz     (instead of the number)
 */
module.exports = {
  process : function(arg) {
      tmp_result = [];
      for (i = 1; i < arg + 1; i++) {
          tmp_value = "";
          if (i % 3 == 0) tmp_value += "fizz";
          if (i % 5 == 0) tmp_value += "buzz";
          if (tmp_value == "") tmp_value = i;
          tmp_result.push(tmp_value);
      }
      return tmp_result;
  }
}
/*

console.log(process(0));
console.log(process(23))
console.log(process(100));
*/
