'use strict';

import { DateType, calculationDate } from './lib/date-extend';

/**
 * Conversion date
 * @param {String|Numer} datetime
 * @return {Date} Date
 */
function parse(datetime) {
	try {
		datetime = datetime.toString();
		// Clear the space before and after the string
		datetime = datetime.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
		// Format the date format
		datetime = datetime.replace("/Date(", "").replace(")/", "").split("+")[0];
		if (isNaN(parseInt(datetime))) {
			return new Date(datetime.replace(/-/g, "/"));
		}
		return new Date(parseInt(datetime));
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
function format(datetime, fmt) {
	// Determine if it is a Date type
	if (datetime instanceof Date) {
		return datetime.format(fmt);
	}
	return parse(datetime).format(fmt);
};

/**
 * Date calculation method
 * @param {String|Number} datetime
 * @param {Number} num
 * @param {DateType} type
 * @return {Date}
 */
function calc(datetime, num, type) {
	// Determine if it is a Date type
	if (!(datetime instanceof Date)) {
		datetime = parse(datetime);
	}
	return calculationDate(datetime, num, type);
};

export default {
	parse,
	format,
	calc,
	YEAR: DateType.Year,
	MONTH: DateType.Month,
	DATE: DateType.Date,
	HOUR: DateType.Hour,
	MINUTE: DateType.Minute,
	SECOND: DateType.Second,
	MILISECOND: DateType.Milisecond
}