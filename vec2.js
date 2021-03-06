/*
 * 2D vector
 */
lib3dmath.Vec2 = function( x, y ) {
	if( this instanceof lib3dmath.Vec2 ) {
		this.x = x || 0;
		this.y = y || 0;
	}
	else {
		return new lib3dmath.Vec2( x, y );
	}
};

lib3dmath.Vec2.prototype = {
	add: function( v ) {
		return new lib3dmath.Vec2( this.x + v.x, this.y + v.y );
	},

	subtract: function( v ) {
		return new lib3dmath.Vec2( this.x - v.x, this.y - v.y );
	},

	multiply: function( s ) {
		return new lib3dmath.Vec2( this.x * s, this.y * s );
	},

	scale: function( s ) {
		return this.multiply( s );
	},

	dotProduct: function( v ) {
		return this.x * v.x + this.y * v.y;
	},

	crossProduct: function( v ) {
		return new lib3dmath.Vec2( this.y, -this.x );
	},

	determinant: function( v ) {
		return this.x * v.y - v.x * this.y;
	},

	magnitude: function( ) {
		return Math.sqrt( this.x * this.x + this.y * this.y );
	},

	distance: function( v ) {
		return Math.sqrt(
			(this.x - v.x) * (this.x - v.x) +
			(this.y - v.y) * (this.y - v.y)
		);
	},

	angle: function( v ) {
		var dot_product = this.dot_product( v );
		var a_length    = this.magnitude( );
		var b_length    = v.magnitude( );
		return Math.acos( dot_product / ( a_length * b_length ) );
	},

	normalize: function( ) {
		var length = this.magnitude();
		if( length > 0.0 ) {
			this.x /= length;
			this.y /= length;
		}
		return this;
	},

	isNormalized: function( ) {
		return Math.abs(length - 1.0) < Number.EPSILON;
	},

	negate: function( ) {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	},

	zero: function( ) {
		this.x = 0.0;
		this.y = 0.0;
		return this;
	},

	lerp: function( a, b, s ) {
		return new lib3dmath.Vec2(
			lib3dmath.lerp( s, a.x, b.x ),
			lib3dmath.lerp( s, a.y, b.y )
		);
	},

	maxComponent: function( v ) {
		return Math.max( v.x, v.y );
	},

	minComponent: function( v ) {
		return Math.min( v.x, v.y );
	},

	toString: function( ) {
		return "(" + lib3dmath.format(this.x) + ", " + lib3dmath.format(this.y) + ")";
	},
};

lib3dmath.Vec2.ZERO = (function() {
	var z = new lib3dmath.Vec2( 0, 0 );
	Object.freeze( z );
	return z;
}());

lib3dmath.Vec2.ONE = (function() {
	var z = new lib3dmath.Vec2( 1, 1 );
	Object.freeze( z );
	return z;
}());

lib3dmath.Vec2.XUNIT = (function() {
	var x = new lib3dmath.Vec2( 1, 0 );
	Object.freeze( x );
	return x;
}());

lib3dmath.Vec2.YUNIT = (function() {
	var y = new lib3dmath.Vec2( 0, 1 );
	Object.freeze( y );
	return y;
}());
