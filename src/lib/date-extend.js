'use strict';

const DateType = {
	Year: 'Year',
	Month: 'Month',
	Date: 'Date',
	Hour: 'Hour',
	Minute: 'Minute',
	Second: 'Second',
	Milisecond: 'Milisecond'
};

/**
 * Extended Date format method
 * @param {String} fmt
 * @return String
 */
Date.prototype.format = function (fmt) {
	// Define format time parameters
	const obj = {
		yyyy: this.getFullYear(),
		yy: ('' + this.getFullYear()).slice(-2),
		M: this.getMonth() + 1,
		MM: ('0' + (this.getMonth() + 1)).slice(-2),
		d: this.getDate(),
		dd: ('0' + this.getDate()).slice(-2),
		H: this.getHours(),
		HH: ('0' + this.getHours()).slice(-2),
		h: this.getHours() % 12,
		hh: ('0' + (this.getHours() % 12)).slice(-2),
		m: this.getMinutes(),
		mm: ('0' + this.getMinutes()).slice(-2),
		s: this.getSeconds(),
		ss: ('0' + this.getSeconds()).slice(-2),
		w: ['日', '一', '二', '三', '四', '五', '六'][this.getDay()]
	}
	return fmt.replace(/([a-z]+)/ig, $1 => obj[$1] || $1);
};

/**
 * 日期计算
 * @param {String|Number} num
 * @param {String} type
 */
Date.prototype.calc = function (num, type) {
};

/**
 * 日期年计算
 * @param {*} num
 */
Date.prototype.addYear = function (num) {
};

/**
 * 日期月计算
 * @param {*} num
 */
Date.prototype.addMonth = function (num) {

};

/**
 * 日期日计算
 * @param {*} num
 */
Date.prototype.addDate = function (num) {

};

/**
 * 日期小时计算
 * @param {*} num
 */
Date.prototype.addHour = function (num) {
};

/**
 * 日期分钟计算
 * @param {*} num
 */
Date.prototype.addMinute = function (num) {
};

/**
 * 日期秒计算
 * @param {*} num
 */
Date.prototype.addSecond = function (num) {
};

/**
 * 日期毫秒计算
 * @param {*} num
 */
Date.prototype.addMilisecond = function (num) {
};

module.exports = {
	Date,
	DateType
};