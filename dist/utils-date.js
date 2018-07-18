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
	    ff: this.getMilliseconds(),
	    w: ['日', '一', '二', '三', '四', '五', '六'][this.getDay()]
	  };
	  return fmt.replace(/([a-z]+)/ig, function ($1) {
	    return obj[$1] || $1;
	  });
	};

	/**
	 * 日期计算
	 * @param {*} num
	 * @param {*} type
	 */
	Date.prototype.calc = function (num, type) {};

	/**
	 * 日期年计算
	 * @param {*} num
	 */
	Date.prototype.addYear = function (num) {};

	/**
	 * 日期月计算
	 * @param {*} num
	 */
	Date.prototype.addMonth = function (num) {};

	/**
	 * 日期日计算
	 * @param {*} num
	 */
	Date.prototype.addDate = function (num) {};

	/**
	 * 日期小时计算
	 * @param {*} num
	 */
	Date.prototype.addHour = function (num) {};

	/**
	 * 日期分钟计算
	 * @param {*} num
	 */
	Date.prototype.addMinute = function (num) {};

	/**
	 * 日期秒计算
	 * @param {*} num
	 */
	Date.prototype.addSecond = function (num) {};

	/**
	 * 日期毫秒计算
	 * @param {*} num
	 */
	Date.prototype.addMilisecond = function (num) {};

	/**
	 * 时间日期转换
	 * @param {any} datetime
	 * @return {Date} Date
	 */
	function parse(datetime) {}

	var utilsDate = {
	  parse: parse
	};

	return utilsDate;

})));
