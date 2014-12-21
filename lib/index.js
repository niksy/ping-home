var qs = require('querystring-es3/encode');

/**
 * @param  {Object} data
 * @param  {Boolean} useQs
 *
 * @return {String|FormData}
 */
function prepare ( data, useQs ) {
	var ret;
	if ( !('FormData' in global) || useQs ) {
		ret = qs(data);
	} else {
		ret = new FormData();
		for ( var prop in data ) {
			if ( data.hasOwnProperty(prop) ) {
				ret.append(prop, data[prop]);
			}
		}
	}
	return ret;
}

/**
 * @param  {String} url
 * @param  {Object} data
 * @param  {Boolean} useSync
 */
module.exports = function ( url, data, useSync ) {
	if ( navigator.sendBeacon ) {
		navigator.sendBeacon(url, prepare(data));
	} else {
		var xhr = ('XMLHttpRequest' in global) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		xhr.open('POST', url, (useSync ? false : true));
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		xhr.send(prepare(data, true));
	}
};
