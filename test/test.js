'use strict';

const datetimeUtils = require('../index');

console.log('=========> Conversion date');
console.log(datetimeUtils.convertDate(1528278558218));
console.log(datetimeUtils.convertDate('2018-06-06T09:49:18.218Z'));
console.log(datetimeUtils.convertDate('Wed Jun 06 2018 17:55:31 GMT+0800'))

console.log('=========> Date format');
console.log(datetimeUtils.formate(1528278558218, 'yyyy-MM-dd HH:mm:ss'));
console.log(datetimeUtils.formate('Wed Jun 06 2018 17:55:31 GMT+0800', 'yyyy-MM-dd hh:mm:ss'));
console.log(datetimeUtils.formate(new Date(), 'yyyy-MM-dd hh:mm:ss:ff'));
console.log(`This is the ${ new Date().formate('w') } week`);
console.log(`This is the ${ new Date().formate('Q') } Quarterly`);