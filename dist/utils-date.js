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
	 * 日期转换
	 * @param {String} datetime
	 * @return Date
	 */

	Date.prototype.parse = function (datetime) {};

	/**
	 * Extended Date format method
	 * @param {String} fmt
	 * @return String
	 */
	Date.prototype.formate = function (fmt) {
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
	function convertDate(datetime) {}

	var utilsDate = {
	  convertDate: convertDate
	};

	return utilsDate;

})));
