/**
 *
 * @param {integer} a
 * @param {integer} b
 * @param {integer} c
 * @returns {Boolean}
 * @desc  Returns true if the length of the sides allows to build a valid
 * triangle .
 * In order to do so the function finds the area of the rectangle built with
 * those segments using Heron's formula and checks wheter it's bigger than 0.
 * https://en.wikipedia.org/wiki/Heron%27s_formula#Formulation
 */
module.exports = {
  isTriangle:function(a,b,c)
  {
    area =  0.25 * Math.sqrt(( a + b + c ) * (-a + b + c ) * ( a - b + c ) * ( a + b - c ));
    return (!isNaN(area) && area != 0);
  }
}
