"use strict";
require('./lib/date-extend');
var dateCalculation = require('./lib/date-calculation');

/**
 * Conversion date
 * @param { String || Number } datetime
 * @return {Date}
 */
function convertDate(datetime) {
  try {
    if (typeof datetime !== "number") {
      // Clear the space before and after the string
      datetime = datetime.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
      // Format the date format
      datetime = datetime.replace("/Date(", "")
        .replace(")/", "")
        .split("+")[0];
    }
    return new Date(datetime);
  } catch (e) {
    throw e;
  }
};

/**
 * Date format method
 * @param {String || Number} datetime
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


/**
 * Date calculation method
 * @param {Date} datetime 
 * @param {Number} num 
 * @param {String || calcType} type 
 */
function calculation(datetime, num, type) {
  // Determine if it is a Date type
  if (!(datetime instanceof Date)) {
    datetime = convertDate(datetime);
  }
  return dateCalculation.calculationDate(datetime, num, type);
};

/**
 * Exports method
 */
exports = module.exports = {
  convertDate,
  formate,
  YEAR: dateCalculation.calcType.YEAR,
  MONTH: dateCalculation.calcType.MONTH,
  DATE: dateCalculation.calcType.DATE,
  HOUR: dateCalculation.calcType.HOUR,
  MINUTE: dateCalculation.calcType.MINUTE,
  SECOND: dateCalculation.calcType.SECOND,
  MILISECOND: dateCalculation.calcType.MILISECOND,
  calculation: calculation,
};