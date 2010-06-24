// Provide backwards compatibility with 0.6
// This will be included in 0.7 but removed in 0.8
(function($) {
	// fix was renamed clamp in all places
	
	$.color.fix = $.color.clamp;
	
	$.each($.color, function() {
		if ( typeof this === 'object' && this.clamp ) {
			this.fix = this.clamp;
		}
	});

	if ($.Color) { $.Color.fn.fix = $.Color.fn.clamp; }

})(jQuery);

