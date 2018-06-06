## Datetime Utils

Datetime-utils is a js toolkit for manipulating Date objects.

## Install

```bash
  $ npm install datetime-utils
```

## Features

- [x] Conversion date

## Usage

1. Conversion date
```javascript
  import datetimeUtils from 'datetime-utils'

  console.log(datetimeUtils.convertDate(1528278558218)); //=> 2018-06-06T09:49:18.218Z (Typeof Date)
  console.log(datetimeUtils.convertDate('2018-06-06T09:49:18.218Z')); //=> 2018-06-06T09:49:18.218Z (Typeof Date)
  console.log(datetimeUtils.convertDate('Wed Jun 06 2018 17:55:31 GMT+0800')); //=> 2018-06-06T17:55:31.000Z (Typeof Date)
```
