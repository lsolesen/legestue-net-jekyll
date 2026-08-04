/*!
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */(function(e,t){"$:nomunge";var s,n=e.jQuery||e.Cowboy||(e.Cowboy={});n.throttle=s=function(e,s,o,i){var a,r=0;typeof s!="boolean"&&(i=o,o=s,s=t);function c(){var l=this,c=+new Date-r,d=arguments;function n(){r=+new Date,o.apply(l,d)}function u(){a=t}i&&!a&&n(),a&&clearTimeout(a),i===t&&c>e?n():s!==!0&&(a=setTimeout(i?u:n,i===t?e-c:e))}return n.guid&&(c.guid=o.guid=o.guid||n.guid++),c},n.debounce=function(e,n,o){return o===t?s(e,n,!1):s(e,o,n!==!1)}})(this)