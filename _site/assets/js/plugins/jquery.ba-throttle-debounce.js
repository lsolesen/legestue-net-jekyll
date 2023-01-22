/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */(function(c,a){'$:nomunge';var b=c.jQuery||c.Cowboy||(c.Cowboy={}),d;b.throttle=d=function(g,f,c,d){var e,h=0;typeof f!='boolean'&&(d=c,c=f,f=a);function i(){var j=this,i=+new Date-h,k=arguments;function b(){h=+new Date,c.apply(j,k)}function l(){e=a}d&&!e&&b(),e&&clearTimeout(e),d===a&&i>g?b():f!==!0&&(e=setTimeout(d?l:b,d===a?g-i:g))}return b.guid&&(i.guid=c.guid=c.guid||b.guid++),i},b.debounce=function(b,c,e){return e===a?d(b,c,!1):d(b,e,c!==!1)}})(this)