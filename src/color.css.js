/*
 * jQuery CSS Colour Manipulation @VERSION
 *
 * Copyright (c) 2010 Mark Gibson
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Depends:
 *  color.core.js
 *  color.object.js
 */
(function($) {

	// Extract a CSS colour property as a Color object from the selection
	$.fn.cssColor = function(prop) {
		return $.Color(this.css(prop));
	};

	// Apply the colour to a CSS property on the selection
	$.Color.fn.applyCSS = function(selector, prop) {
		$(selector).css(prop, this.toCSS());
		return this;
	};

})(jQuery);

