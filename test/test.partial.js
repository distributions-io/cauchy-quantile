/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Check whether an element is a finite number
	isFiniteNumber = require( 'validate.io-finite' ),

	// Check whether an element is `NaN`
	isnan = require( 'validate.io-nan' ),

	// Module to be tested:
	partial = require( './../lib/partial.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'partial quantile', function tests() {

	var	validationData = require( './fixtures/partial.json' ),
		data = validationData.data,
		expected = validationData.expected.map( function( d ) {
			if (d === 'Inf' ) {
				return Number.POSITIVE_INFINITY;
			}
			if ( d === '-Inf' ) {
				return Number.NEGATIVE_INFINITY;
			}
			return d;
		}),
		x0 = validationData.x0,
		gamma = validationData.gamma;

	it( 'should export a function', function test() {
		expect( partial ).to.be.a( 'function' );
	});

	it( 'should partially apply the quantile function of the Cauchy distribution for given parameter values', function test() {
		var quantile;
		quantile = partial( x0, gamma );
		expect( quantile ).to.be.a( 'function' );
	});

	it( 'should return a function which evaluates the quantile function', function test() {
		var quantile, actual;
		quantile = partial(  x0, gamma );
		for ( var i = 0; i < data.length; i++ ) {
			actual = quantile( data[ i ] );
			if ( isFiniteNumber( actual ) && isFiniteNumber( expected[ i ] ) ) {
				assert.closeTo( actual, expected[ i ] , 1e-12 );
			}
		}
	});

	it( 'should return `NaN` if provided `NaN` as input', function test() {
		var quantile = partial(  x0, gamma );
		assert.isTrue( isnan( quantile( NaN, x0, gamma ) ) );
	});

	it( 'should return `NaN` if provided a number outside [0,1]', function test() {
		var quantile = partial(  x0, gamma );
		assert.isTrue( isnan( quantile( 1.1, x0, gamma ) ) );
		assert.isTrue( isnan( quantile( -0.1, x0, gamma ) ) );
	});

});
