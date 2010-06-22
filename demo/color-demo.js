jQuery(function($) {

    var cssProps = [
        'color',
        'background-color',
        'border-top-color',
        'border-right-color',
        'border-bottom-color',
        'border-left-color'
    ];

    // Apply the given function to each of the CSS properties above
    // for every element in the document body
    function applyCSSFunction( callback ) {

        // For every element in the page
        $('body *').each(function() {
            var elem = this;
        
            // For all the CSS properties listed in cssProps
            $.each(cssProps, function(i, prop) {
            
                // Get current value of the CSS property
                var value = $.curCSS(elem, prop);
                
                if ( value ) {
                    // Pass the value to the callback function
                    // and set the CSS property with the result
                    $(elem).css( prop, callback(value) );
                }
            });
        });
    }


    $('#color-demo-complementary').bind('click', function() {
        applyCSSFunction(function( colour ) {
        
            // Parse the colour value, generate it's complementary colour, and return it's CSS form
            return $.Color(colour).complementary().toCSS();

        });    
    });


    $('#color-demo-analogous-30').bind('click', function() {
        applyCSSFunction(function( colour ) {
        
            // Generate the analogous colour (30 deg added to the hue)
            return $.Color(colour).analogous(30/360).toCSS();
        
        });
    });


    $('#color-demo-desaturate').bind('click', function() {
        applyCSSFunction(function( colour ) {

            // Convert the colour to the HSV colour model, and modify only it Saturation (set to zero)
            return $.Color(colour).toHSV().modify( [ null, 0, null ] ).toCSS();

        });
    });

});

