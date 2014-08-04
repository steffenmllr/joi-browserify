/* jshint globalstrict:true, node:true */
'use strict';

// @see http://home.deds.nl/~aeron/regex/
module.exports.isIPv6 = function isIPv6(value) {
	return /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i.test(value);
};
