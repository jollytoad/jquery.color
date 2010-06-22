module("core");

test("module", function() {
	ok( $.color, "Check jQuery.color exists" );
});

test("isEqual", function() {
    ok( $.color.isEqual( [ 1,2,3,4 ], [ 1,2,3,4 ] ), "equal tuples" );
    ok( !$.color.isEqual( [ 1,2 ], [ 1,2,3,4 ] ), "different lengths" );
    ok( !$.color.isEqual( [ 1,2,3,4 ], [ 1,2 ] ), "different lengths" );
    ok( !$.color.isEqual( [ 1,2,3 ], [ 4,5,6 ] ), "different tuples" );
    ok( !$.color.isEqual( [], [ 4,5,6 ] ), "one empty tuple" );
    ok( !$.color.isEqual( [ 1,2,3 ], [] ), "one empty tuple" );
    ok( $.color.isEqual( [], [] ), "both empty tuples" );
});

