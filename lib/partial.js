'use strict';

// FUNCTIONS //

var TAN = Math.tan;


// VARIABLES //

var PI = Math.PI;


// PARTIAL //

/**
* FUNCTION: partial( x0, gamma )
*	Partially applies location parameter `x0` and scale parameter `gamma` and returns a function for evaluating the quantile function for a Cauchy distribution.
*
* @param {Number} x0 - location parameter
* @param {Number} gamma - scale parameter
* @returns {Function} quantile function
*/
function partial( x0, gamma ) {

	/**
	* FUNCTION: quantile( p )
	*	Evaluates the quantile function for a Cauchy distribution.
	*
	* @private
	* @param {Number} p - input value
	* @returns {Number} evaluated quantile function
	*/
	return function quantile( p ) {
		if ( p !== p || p < 0 || p > 1 ) {
				return NaN;
			}
		return x0 + gamma * TAN( PI * ( p - 0.5 ) );
	};
} // end FUNCTION partial()


// EXPORTS //

module.exports = partial;
