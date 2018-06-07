## Datetime Utils

Datetime-utils is a js toolkit for manipulating Date objects.

## Install

```bash
  $ npm install datetime-utils
```

## Features

- [x] Conversion date
- [x] Date format
- [ ] Date calculation
- [ ] Get last date by month
- [ ] Get the number of days in the year 

## Usage

1. Conversion date

```javascript
  var utilsDate = require("utils-date")

  console.log(utilsDate.convertDate(1528278558218)); //=> 2018-06-06T09:49:18.218Z (Typeof Date)
  console.log(utilsDate.convertDate('2018-06-06T09:49:18.218Z')); //=> 2018-06-06T09:49:18.218Z (Typeof Date)
  console.log(utilsDate.convertDate('Wed Jun 06 2018 17:55:31 GMT+0800')); //=> 2018-06-06T17:55:31.000Z (Typeof Date)
```

2. Date format

```javascript
  var utilsDate = require("utils-date")

  console.log(utilsDate.formate(1528278558218, 'yyyy-MM-dd HH:mm:ss')); //=> 2018-06-06 17:49:18
  console.log(utilsDate.formate('Wed Jun 06 2018 17:55:31 GMT+0800', 'yyyy-MM-dd hh:mm:ss')); //=> 2018-06-07 01:55:31
  console.log(utilsDate.formate(new Date(), 'yyyy-MM-dd hh:mm:ss:ff')); //=> 2018-06-06 06:20:56:26
  console.log(`This is the ${ new Date().formate('w') } week`); //=> This is the 3 week
  console.log(`This is the ${ new Date().formate('Q') } Quarterly`); //=> This is the 2 Quarterly
```

3. Date calculation