/*!
 * utils-date v1.2.0
 * (c) 2018-2018 Slience HVK
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.utilsDate = factory());
}(this, (function () { 'use strict';

	Date.prototype.format = function () {};

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
