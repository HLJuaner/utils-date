'use strict';

import DateExtend from './lib/date-extend';

/**
 * Conversion date
 * @param {String|Numer} datetime
 * @return {Date} Date
 */
function parse(datetime) {
	try {
		if (typeof datetime !== "number") {
			// Clear the space before and after the string
			datetime = datetime.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
			// Format the date format
			datetime = datetime.replace("/Date(", "").replace(")/", "").split("+")[0];
		}
		return new Date(datetime);
	} catch (err) {
		throw new Error('the date entered is in the wrong format');
	}
};

/**
 * Date format method
 * @param {String|Number} datetime
 * @param {String} fmt
 * @return {String}
 */
function formate(datetime, fmt) {
	// Determine if it is a Date type
	if (datetime instanceof Date) {
		return datetime.formate(fmt);
	}
	return convertDate(datetime).formate(fmt);
};

export default {
	parse,
	formate
}