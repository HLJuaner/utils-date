'use strict';

var utilsDate = require("../index")

console.log('=========> Conversion date');
console.log(utilsDate.convertDate(1528278558218));
console.log(utilsDate.convertDate('2018-06-06T09:49:18.218Z'));
console.log(utilsDate.convertDate('Wed Jun 06 2018 17:55:31 GMT+0800'))

console.log('=========> Date format');
console.log(utilsDate.formate(1528278558218, 'yyyy-MM-dd HH:mm:ss'));
console.log(utilsDate.formate('Wed Jun 06 2018 17:55:31 GMT+0800', 'yyyy-MM-dd hh:mm:ss'));
console.log(utilsDate.formate(new Date(), 'yyyy-MM-dd hh:mm:ss:ff'));
console.log(`This is the ${new Date().formate('w')} week`);
console.log(`This is the ${new Date().formate('Q')} Quarterly`);
console.log('=========> Date calculation');
console.log(utilsDate.calculation(new Date(), utilsDate.YEAR, 1).formate('yyyy-MM-dd HH:mm:ss'));
console.log(utilsDate.calculation(new Date(), utilsDate.MONTH, 2).formate('yyyy-MM-dd HH:mm:ss'));
console.log(utilsDate.calculation(new Date(), 'DATE', 2).formate('yyyy-MM-dd HH:mm:ss'));
console.log(utilsDate.calculation(new Date(), utilsDate.HOUR, -1).formate('yyyy-MM-dd HH:mm:ss'));
console.log(utilsDate.calculation('2018-06-06T09:49:18.218Z', utilsDate.MINUTE, 2).formate('yyyy-MM-dd HH:mm:ss'));
console.log(utilsDate.calculation('Wed Jun 06 2018 17:55:31 GMT+0800', utilsDate.SECOND, 2).formate('yyyy-MM-dd HH:mm:ss'));
console.log(utilsDate.calculation(1528278558218, utilsDate.MILISECOND, 10).formate('yyyy-MM-dd HH:mm:ss:ff'));
// console.log(utilsDate.calculation(new Date(), utilsDate.MILISECOND, 10).formate('yyyy-MM-dd HH:mm:ss:ff'));