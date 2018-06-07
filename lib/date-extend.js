'use strict';
// var dateCalculation = require('./lib/date-calculation');


/**
 * Extended Date format method
 * @param {String} fmt
 * @return {String}
 */
Date.prototype.formate = function (fmt) {
  // Define format time parameters
  var o = {
    'Q+': Math.floor((this.getMonth() + 3) / 3), // Quarterly
    'w+': this.getDay(), // Week
    'M+': this.getMonth() + 1, // Month
    'd+': this.getDate(), // Date
    'h+': this.getHours() >= 12 ? this.getHours() - 12 : this.getHours(), // Hours 12-hour clock
    'H+': this.getHours(), // Hour 24-hour clock
    'm+': this.getMinutes(), // Minutes
    's+': this.getSeconds(), // Seconds
    'f+': this.getMilliseconds() // Milliseconds
  };
  // Determine if "y" exists in fmt
  if (/(y+)/i.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (k == 'f+') {
      if (new RegExp('(' + k + ')').test(fmt)) {
        var regExp0 = '000000000' + o[k]
        fmt = fmt.replace(RegExp.$1, regExp0.substr(regExp0.length - RegExp.$1.length))
      }
    } else {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
  }
  return fmt;
};

/**
 * Extended Date calculation method
 * @param {Number} num
 * @param {String} 
 * @return {Date}
 */
// Date.prototype.calculationDate = function (num, type) {
//   // return dateCalculation.calculationDate(this, num, type);
// };

/**
 * Extended Date Get the last day of the month
 */
Date.prototype.getLastDateByMonth = function () {

};
