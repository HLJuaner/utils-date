'use strict';

/**
 * Date calculation type
 */
var calcType = {
  YEAR: 'year',
  MONTH: 'month',
  DATE: 'date',
  HOUR: 'hour',
  MINUTE: 'minute',
  SECOND: 'second',
  MILISECOND: 'millisecond'
};

/**
 * Date calculation method
 * @param {Date} datetime 
 * @param {Number} num
 * @param {String || calcType} type 
 * @return {Date}
 */
function calculationDate(datetime, num, type) {
  try {
    var timestamp = 0;
    switch (type.toLowerCase()) {
      case calcType.YEAR:
        timestamp = datetime.setFullYear(datetime.getFullYear() + num);
        break;
      case calcType.MONTH:
        timestamp = datetime.setMonth(datetime.getMonth() + num);
        break;
      case calcType.DATE:
        timestamp = datetime.setDate(datetime.getDate() + num);
        break;
      case calcType.HOUR:
        timestamp = datetime.setHours(datetime.getHours() + num);
        break;
      case calcType.MINUTE:
        timestamp = datetime.setMinutes(datetime.getMinutes() + num);
        break;
      case calcType.SECOND:
        timestamp = datetime.setSeconds(datetime.getSeconds() + num);
        break;
      case calcType.MILISECOND:
        timestamp = datetime.setMinutes(datetime.getMinutes() + num);
        break;
      default:
        timestamp = new Date().getTime();
        break;
    }
    return new Date(timestamp);
  } catch (e) {
    throw e;
  }
};

/**
 * Date Get the last day of the month
 * @param {Date} datetime 
 * @return {Number}
 */
function getLastDateByMonth(datetime) {
  try {
    return new Date(calculationDate(new Date(datetime.getFullYear(), datetime.getMonth()), 1, calcType.MONTH) - 1000).getDate();
  } catch (e) {
    throw e;
  }
};

exports = module.exports = {
  calcType,
  calculationDate,
  getLastDateByMonth
};