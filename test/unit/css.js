module("css");

test("jQuery.fn.cssColor", 2, function() {

	ok( $.Color.isInstance($("#css-test-source").cssColor("background-color")), "cssColor returns instance of Color object" );
	same( $("#css-test-source").cssColor("background-color").toHEX(), "#ffeedd", "get background-color of #css-test-source as Color object" );

});

test("Color.fn.applyCSS", function() {

	var c = $.Color('#123456');

	strictEqual( c.applyCSS("#css-test-target", "background-color"), c, "applyCSS returns same instance of Color object" );

	same( $.color.parse($("#css-test-target").css("background-color")), [18, 52, 86, 1], "css property set on target" );

});

test("chaining", function() {

	$("#css-test-source").cssColor("background-color").toRGB().adjust([-1,0,16]).applyCSS("#css-test-chain", "border-top-color");
	
	same( $("#css-test-chain").cssColor("border-top-color").toHEX(), "#feeeed", "css colour copied, modified and applied" );

});

