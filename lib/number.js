'use strict';

// FUNCTIONS //

var tan = Math.tan;


// VARIABLES //

var PI = Math.PI;


// QUANTILE //

/**
* FUNCTION: quantile( p, x0, gamma )
*	Evaluates the quantile function for a Cauchy distribution with location parameter `x0` and scale parameter `gamma` at a probability `p`.
*
* @param {Number} p - input value
* @param {Number} x0 - location parameter
* @param {Number} gamma - scale parameter
* @returns {Number} evaluated quantile function
*/
function quantile( p, x0, gamma ) {
	if ( p !== p || p < 0 || p > 1 ) {
			return NaN;
		}
	return x0 + gamma * tan( PI * ( p - 0.5 ) );
} // end FUNCTION quantile()


// EXPORTS //

module.exports = quantile;
