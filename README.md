## Utils-date

Utils-date is a js toolkit for manipulating Date objects.



## Install

```bash
  $ npm install utils-date --save
```

## Features

- [x] Conversion date
- [x] Date format
- [x] Date calculation
- [x] Get last date by month

## Usage

1. Conversion date

```javascript
  var utilsDate = require("utils-date");

  console.log(utilsDate.convertDate(1528278558218)); //=> 2018-06-06T09:49:18.218Z (Typeof Date)
  console.log(utilsDate.convertDate('2018-06-06T09:49:18.218Z')); //=> 2018-06-06T09:49:18.218Z (Typeof Date)
  console.log(utilsDate.convertDate('Wed Jun 06 2018 17:55:31 GMT+0800')); //=> 2018-06-06T17:55:31.000Z (Typeof Date)
```

2. Date format

```javascript
  var utilsDate = require("utils-date");

  console.log(utilsDate.formate(1528278558218, 'yyyy-MM-dd HH:mm:ss')); //=> 2018-06-06 17:49:18
  console.log(utilsDate.formate('Wed Jun 06 2018 17:55:31 GMT+0800', 'yyyy-MM-dd hh:mm:ss')); //=> 2018-06-07 01:55:31
  console.log(utilsDate.formate(new Date(), 'yyyy-MM-dd hh:mm:ss:ff')); //=> 2018-06-06 06:20:56:26
  console.log(`This is the ${ new Date().formate('w') } week`); //=> This is the 3 week
  console.log(`This is the ${ new Date().formate('Q') } Quarterly`); //=> This is the 2 Quarterly
```

3. Date calculation

```javascript
  var utilsDate = require("utils-date");

  console.log(utilsDate.calculation(new Date(), 1, utilsDate.YEAR).formate('yyyy-MM-dd HH:mm:ss')); //=> 2019-06-07 14:20:10
  console.log(utilsDate.calculation(new Date(), 2, utilsDate.MONTH).formate('yyyy-MM-dd HH:mm:ss')); //=> 2018-08-07 14:20:10
  console.log(utilsDate.calculation(new Date(), 2, 'DATE').formate('yyyy-MM-dd HH:mm:ss')); //=> 2018-06-09 14:20:10
  console.log(utilsDate.calculation(new Date(), -1, utilsDate.HOUR).formate('yyyy-MM-dd HH:mm:ss')); //=> 2018-06-07 13:20:10
  console.log(utilsDate.calculation('2018-06-06T09:49:18.218Z', 2, utilsDate.MINUTE).formate('yyyy-MM-dd HH:mm:ss')); //=> 2018-06-06 17:51:18
  console.log(utilsDate.calculation('Wed Jun 06 2018 17:55:31 GMT+0800', 2, utilsDate.SECOND).formate('yyyy-MM-dd HH:mm:ss')); //=> 2018-06-07 01:55:33
  console.log(utilsDate.calculation(1528278558218, 10, utilsDate.MILISECOND).formate('yyyy-MM-dd HH:mm:ss:ff')); //=> 2018-06-06 17:59:18:18
  console.log(new Date().calculation(10, utilsDate.MILISECOND).formate('yyyy-MM-dd HH:mm:ss:ff')); //=> 2018-06-07 14:30:10:12
  console.log(new Date().addYear(10).formate('yyyy-MM-dd')); //=> 2028-06-07
  console.log(new Date().addMonth(2).formate('yyyy-MM-dd')); //=> 2018-08-07
  console.log(new Date().addDate(2).formate('yyyy-MM-dd')); //=> 2018-06-09
  console.log(new Date().addHour(1).formate('yyyy-MM-dd HH')); //=> 2018-06-07 15
  console.log(new Date().addMinute(1).formate('yyyy-MM-dd HH:mm')); //=> 2018-06-07 14:21
  console.log(new Date().addSecond(1).formate('yyyy-MM-dd HH:mm:ss')); //=> 2018-06-07 14:20:11
  console.log(new Date().addMilisecond(1).formate('yyyy-MM-dd HH:mm:ss:ff')); //=> 2018-06-07 14:21:10:13
```

4. Get last date by month

```javascript
  var utilsDate = require("utils-date");

  console.log(utilsDate.getLastDateByMonth(1528278558218)); //=> 30
  console.log(utilsDate.getLastDateByMonth('Wed Jun 05 2018 17:55:31 GMT+0800')); //=> 30
  console.log(utilsDate.getLastDateByMonth('2018-02-06T09:49:18.218Z')); //=> 28
  console.log(utilsDate.getLastDateByMonth(new Date())); //=> 30
  console.log(new Date().getLastDateByMonth()); //=> 30
```