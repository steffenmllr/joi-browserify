/* jshint globalstrict:true, node:true */
'use strict';

var net = require('./net.js');


module.exports = function isEmail(email, options, callback) {
	var matches = email.match(/^([a-zA-Z0-9.!#$%&"’*+\/=?^_`{|}~-]+)@(?:[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+|\[IPv6:([a-f0-9:]+)\])$/);
	var result = matches;

	// Check length of parts, see http://tools.ietf.org/html/rfc5321#section-4.5.3.1
	result = result && matches[1] && matches[1].length <= 64 && email.length < 255;

	// Check for valid IPv6 addresses
	if (matches && matches[2]) { result = result && net.isIPv6(matches[2]); }

	return callback ? callback(result) : result;
};
