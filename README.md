# Utils Date ![git start](https://img.shields.io/github/stars/silencehvk/utils-date.svg?style=social&label=Star) ![git fork](https://img.shields.io/github/forks/silencehvk/utils-date.svg?style=social&label=Fork) [![](https://img.shields.io/github/issues/silencehvk/utils-date.svg?style=social&label=Issues)](https://github.com/silencehvk/utils-date/issues)

![releases version](https://img.shields.io/badge/version-1.2.0-brightgreen.svg)
![node version](https://img.shields.io/badge/node-%3E%3D7.5.0-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm-%3E%3D4.1.2-brightgreen.svg)
![yarn version](https://img.shields.io/badge/yarn-1.7.0-blue.svg)
![rollup version](https://img.shields.io/badge/rollup-%3E%3D0.62.0-red.svg)


Utils Date is a toolkit for extending JavaScript Date objects and is designed to be lightweight, simple, and easy to use.

You can see more details by visiting the [Utils Date](https://htmlpreview.github.io/?https://github.com/SilenceHVK/utils-date/blob/master/example/index.html) website.

## Install

npm
```bash
	$ npm install utils-date
```

yarn
```bash
	$ yarn install utils-date
```

## Features

- [x] Conversion date
- [x] Date format
- [x] Date calculation

## How to use

Used in ES6 or ES6+
```javascript
	import utilsDate form 'utils-date';
```

Used in Web
```javascript
	<script src="https://unpkg.com/utils-date@1.2.0/dist/utils-date.min.js"></script>
```



- Conversion date

```javascript
	// Timestamp conversion
	utilsDate.parse(1528278558218); // Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)

	// Sql date conversion
	utilsDate.parse(/Date(1528278558218)/); // Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)

	// UTC time conversion
	utilsDate.parse("Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)"); // Thu Jun 07 2018 01:49:18 GMT+0800 (中国标准时间)

	// String date conversion
	utilsDate.parse("2018"); // Mon Jan 01 2018 08:00:00 GMT+0800 (中国标准时间)

	utilsDate.parse("2018-6"); // Fri Jun 01 2018 00:00:00 GMT+0800 (中国标准时间)

	utilsDate.parse("2018-6-7"); // Thu Jun 07 2018 00:00:00 GMT+0800 (中国标准时间)

	utilsDate.parse("2018-6-7 9"); // Fri Jun 01 2018 07:09:00 GMT+0800 (中国标准时间)

	utilsDate.parse("2018-6-7 9:00"); // Fri Jun 01 2018 07:09:00 GMT+0800 (中国标准时间)

	utilsDate.parse("2018-6-7 9:00:00"); // Fri Jun 01 2018 07:09:00 GMT+0800 (中国标准时间)

	utilsDate.parse("1528278558218"); // Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)

	utilsDate.parse("/Date(1528278558218)/"); // Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)
```

- Date format

```javascript
	// Used Date extend format 24 hours
	new Date().format("yyyy-MM-dd HH:mm:ss 星期 w"); // 2018-07-23 16:40:21 星期 一

	new Date().format("yyyy-MM-dd HH:mm:ss"); // 2018-07-23 16:17:21

	new Date().format("yy-M-d H:m:s"); // 18-7-23 16:17:21

	new Date().format("yy 年 M 月 d 日 H 时 m 分 s 秒"); // 18 年 7 月 23 日 16 时 17 分 21 秒

	new Date().format("yyyy-MM-dd"); // 2018-07-23

	new Date().format("yy"); // 18

	new Date().format("MM"); // 07

	new Date().format("M"); // 7

	// Used Date extend format 12 hours
	new Date().format("yyyy-MM-dd hh:mm:ss"); // 2018-07-23 04:20:43

	// Used utils-date
	utilsDate.format(new Date(),"yyyy-MM-dd HH:mm:ss"); // 2018-07-23 16:22:42

	utilsDate.format(1528278558218,"yyyy-MM-dd HH:mm:ss"); // 2018-06-06 17:49:18

	utilsDate.format(/Date(1528278558218)/,"yyyy-MM-dd HH:mm:ss"); // 2018-06-06 17:49:18

	utilsDate.format("Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)","yyyy-MM-dd HH:mm:ss"); // 2018-06-07 01:49:18

	utilsDate.format("2018","yyyy-MM-dd 00:00:00"); // 2018-01-01 00:00:00
```

- Date calculation
```javascript
	// Used Date extend add
	new Date().add(1,"year"); // Tue Jul 23 2019 21:59:33 GMT+0800 (中国标准时间)

	new Date().add(1,"month"); // Thu Aug 23 2018 22:00:19 GMT+0800 (中国标准时间)

	new Date().add(-1,"date"); // Sun Jul 22 2018 22:00:53 GMT+0800 (中国标准时间)

	new Date().add(-1,"hour"); // Mon Jul 23 2018 21:01:29 GMT+0800 (中国标准时间)

	new Date().add(-1,"minute"); // Mon Jul 23 2018 22:01:05 GMT+0800 (中国标准时间)

	new Date().add(-1,"second"); // Mon Jul 23 2018 22:02:33 GMT+0800 (中国标准时间)

	new Date().add(-1,"milisecond"); // Mon Jul 23 2018 22:01:33 GMT+0800 (中国标准时间)

	// Used Date extend method
	new Date().addYear(1); // Tue Jul 23 2019 22:03:24 GMT+0800 (中国标准时间)

	new Date().addMonth(1); // Thu Aug 23 2018 22:03:48 GMT+0800 (中国标准时间)

	new Date().addDate(-1); // Sun Jul 22 2018 22:04:20 GMT+0800 (中国标准时间)

	new Date().addHour(-1); // Mon Jul 23 2018 21:04:48 GMT+0800 (中国标准时间)

	new Date().addMinute(1); // Mon Jul 23 2018 22:06:37 GMT+0800 (中国标准时间)

	new Date().addSecond(1); // Mon Jul 23 2018 22:02:33 GMT+0800 (中国标准时间)

	new Date().addMilisecond(-1); // Mon Jul 23 2018 22:01:33 GMT+0800 (中国标准时间) 

	// Used utils-date
	utilsDate.add(1528278558218,1,"year"); // Tue Jul 23 2019 22:03:24 GMT+0800 (中国标准时间)

	utilsDate.add("1528278558218",1,utilsDate.YEAR); // Tue Jul 23 2019 22:03:24 GMT+0800 (中国标准时间)

	utilsDate.add(/Date(1528278558218)/, -1 , utilsDate.MONTH); // Sun May 06 2018 17:49:18 GMT+0800 (中国标准时间)

	utilsDate.add("Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)", 1 , utilsDate.DATE); // Fri Jun 08 2018 01:49:18 GMT+0800 (中国标准时间)

	utilsDate.add("2018", 1 , utilsDate.HOUR); // Mon Jan 01 2018 09:00:00 GMT+0800 (中国标准时间)

	utilsDate.add("2018-2-1", 1 , utilsDate.MINUTE); // Mon Jan 01 2018 00:01:00 GMT+0800 (中国标准时间)
```


## MIT

```
Copyright (c) 2018 Slience HVK

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


