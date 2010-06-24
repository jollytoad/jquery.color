module("core");

test("module", 1, function() {
	ok( $.color, "Check jQuery.color exists" );
});

test("isEqual", 7, function() {
    ok( $.color.isEqual( [ 1,2,3,4 ], [ 1,2,3,4 ] ), "equal tuples" );
    ok( !$.color.isEqual( [ 1,2 ], [ 1,2,3,4 ] ), "different lengths" );
    ok( !$.color.isEqual( [ 1,2,3,4 ], [ 1,2 ] ), "different lengths" );
    ok( !$.color.isEqual( [ 1,2,3 ], [ 4,5,6 ] ), "different tuples" );
    ok( !$.color.isEqual( [], [ 4,5,6 ] ), "one empty tuple" );
    ok( !$.color.isEqual( [ 1,2,3 ], [] ), "one empty tuple" );
    ok( $.color.isEqual( [], [] ), "both empty tuples" );
});

test("clamp", 13, function() {
	same( $.color.clamp( [ 1 ], 'i' ), [ 1 ], 'integer stays' );
	same( $.color.clamp( [ 1.4 ], 'i' ), [ 1 ], 'float rounds down' );
	same( $.color.clamp( [ 1.5 ], 'i' ), [ 2 ], 'float rounds up' );
	same( $.color.clamp( [ 0 ], 'o' ), [ 0 ], 'octet 0 stays' );
	same( $.color.clamp( [ 255 ], 'o' ), [ 255 ], 'octet 255 stays' );
	same( $.color.clamp( [ -1 ], 'o' ), [ 0 ], 'negative octet clamped' );
	same( $.color.clamp( [ 256 ], 'o' ), [ 255 ], 'overflowed octet clamped' );
	same( $.color.clamp( [ 0 ], '1' ), [ 0 ], 'float stays' );
	same( $.color.clamp( [ -0.1 ], '1' ), [ 0 ], 'negative floats clamped' );
	same( $.color.clamp( [ 1 ], '1' ), [ 1 ], 'one is one' );
	same( $.color.clamp( [ 1.01 ], '1' ), [ 1 ], 'clamped to one' );
	same( $.color.clamp( [ 10, 128, 0.5 ], 'io1' ), [ 10, 128, 0.5 ], 'tuple untouched' );
	same( $.color.clamp( [ 3.3, 300, 1.2 ], 'io1' ), [ 3, 255, 1 ], 'tuple clamped' );
});

test("self", 1, function() {
	var tuple = [ 4, 5, 6 ];
	strictEqual( tuple, tuple, "identity function" );
});

test("alpha", 3, function() {
	same( $.color.alpha(undefined), 1, "undefined as fully opaque" );
	same( $.color.alpha(0.5), 0.5, "number is same" );
	same( $.color.alpha(0), 0, "zero is completely transparent" );
});

test("properties", 2, function() {
	ok( is("Object", $.color.palette), "palette is an object" );
	ok( is("Array", $.color.fns), "fns is an array" );	
});

