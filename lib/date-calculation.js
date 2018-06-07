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
 * @param {String || calcType} type 
 * @param {Number} num
 * @return {Date}
 */
function calculationDate(datetime, type, num) {
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

exports = module.exports = {
  calcType,
  calculationDate
};