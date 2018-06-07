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