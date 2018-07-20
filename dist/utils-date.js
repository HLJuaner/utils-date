/*!
 * utils-date v1.2.0
 * (c) 2018-2018 Slience HVK
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.utilsDate = factory());
}(this, (function () { 'use strict';

	/**
	 * Define date type
	 */

	var DateType = {
		Year: 'year',
		Month: 'month',
		Date: 'date',
		Hour: 'hour',
		Minute: 'minute',
		Second: 'second',
		Milisecond: 'milisecond'
	};

	/**
	 * Date calculation
	 * @param {Date} datetime
	 * @param {Number} num
	 * @param {String} type
	 */
	function calculationDate(datetime, num, type) {
		type = type || DateType.Hour;
		num = num || 1;
		var timestamp = 0;
		try {
			if (isNaN(num)) {
				throw new Error('the num must be of type Number');
			}
			switch (type.toLowerCase()) {
				case DateType.Year:
					timestamp = datetime.setFullYear(datetime.getFullYear() + num);
					break;
				case DateType.Month:
					timestamp = datetime.setMonth(datetime.getMonth() + num);
					break;
				case DateType.Date:
					timestamp = datetime.setDate(datetime.getDate() + num);
					break;
				case DateType.Hour:
					timestamp = datetime.setHours(datetime.getHours() + num);
					break;
				case DateType.Minute:
					timestamp = datetime.setMinutes(datetime.getMinutes() + num);
					break;
				case DateType.Second:
					timestamp = datetime.setSeconds(datetime.getSeconds() + num);
					break;
				case DateType.Milisecond:
					timestamp = datetime.setMilliseconds(datetime.getMilliseconds() + num);
					break;
				default:
					timestamp = new Date().getTime();
					break;
			}
		} catch (error) {
			throw new Error(error);
		}
		return new Date(timestamp);
	}
	/**
	 * Extended Date format method
	 * @param {String} fmt
	 * @return String
	 */
	Date.prototype.format = function (fmt) {
		// Define format time parameters
		var obj = {
			yyyy: this.getFullYear(),
			yy: ('' + this.getFullYear()).slice(-2),
			M: this.getMonth() + 1,
			MM: ('0' + (this.getMonth() + 1)).slice(-2),
			d: this.getDate(),
			dd: ('0' + this.getDate()).slice(-2),
			H: this.getHours(),
			HH: ('0' + this.getHours()).slice(-2),
			h: this.getHours() % 12,
			hh: ('0' + this.getHours() % 12).slice(-2),
			m: this.getMinutes(),
			mm: ('0' + this.getMinutes()).slice(-2),
			s: this.getSeconds(),
			ss: ('0' + this.getSeconds()).slice(-2),
			w: ['日', '一', '二', '三', '四', '五', '六'][this.getDay()]
		};
		return fmt.replace(/([a-z]+)/ig, function ($1) {
			return obj[$1] || $1;
		});
	};

	/**
	 * Extended Date calculation
	 * @param {Number} num
	 * @param {String} type
	 * @return Date
	 */
	Date.prototype.calc = function (num, type) {
		return calculationDate(this, num, type);
	};

	/**
	 * Date year calculation
	 * @param {Number} num
	 * @return Date
	 */
	Date.prototype.addYear = function (num) {
		return calculationDate(this, num, DateType.Year);
	};

	/**
	 *  Date month calculation
	 * @param {Number} num
	 * @return Date
	 */
	Date.prototype.addMonth = function (num) {
		return calculationDate(this, num, DateType.Month);
	};

	/**
	 * Date date calculation
	 * @param {Number} num
	 */
	Date.prototype.addDate = function (num) {
		return calculationDate(this, num, DateType.Date);
	};

	/**
	 * Date hour calculation
	 * @param {Number} num
	 */
	Date.prototype.addHour = function (num) {
		return calculationDate(this, num, DateType.Hour);
	};

	/**
	 * Date minute calculation
	 * @param {Number} num
	 */
	Date.prototype.addMinute = function (num) {
		return calculationDate(this, num, DateType.Minute);
	};

	/**
	 * Date second calculation
	 * @param {Number} num
	 */
	Date.prototype.addSecond = function (num) {
		return calculationDate(this, num, DateType.Second);
	};

	/**
	 * Date milisecond calculation
	 * @param {Number} num
	 */
	Date.prototype.addMilisecond = function (num) {
		return calculationDate(this, num, DateType.Milisecond);
	};

	var dateExtend = {
		Date: Date,
		DateType: DateType,
		calculationDate: calculationDate
	};
	var dateExtend_1 = dateExtend.DateType;
	var dateExtend_2 = dateExtend.calculationDate;

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
	}
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
	}
	/**
	 *
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
		return dateExtend_2(datetime, num, type);
	}
	var utilsDate = {
		parse: parse,
		format: format,
		calc: calc,
		YEAR: dateExtend_1.Year,
		MONTH: dateExtend_1.Month,
		DATE: dateExtend_1.Date,
		HOUR: dateExtend_1.Hour,
		MINUTE: dateExtend_1.Minute,
		SECOND: dateExtend_1.Second,
		MILISECOND: dateExtend_1.Milisecond
	};

	return utilsDate;

})));
