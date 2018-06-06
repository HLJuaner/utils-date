'use strict';

const datetimeUtils = require('../index');

console.log('=========> Conversion date');
console.log(datetimeUtils.convertDate(1528278558218));
console.log(datetimeUtils.convertDate('2018-06-06T09:49:18.218Z'));
console.log(datetimeUtils.convertDate('2018年6月6日9点30分'))
console.log(datetimeUtils.convertDate('Wed Jun 06 2018 17:55:31 GMT+0800'))
