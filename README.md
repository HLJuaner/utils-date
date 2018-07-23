# Utils Date ![git start](https://img.shields.io/github/stars/silencehvk/utils-date.svg?style=social&label=Star) ![git fork](https://img.shields.io/github/forks/silencehvk/utils-date.svg?style=social&label=Fork) [![](https://img.shields.io/github/issues/silencehvk/utils-date.svg?style=social&label=Issues)](https://github.com/silencehvk/utils-date/issues)

![releases version](https://img.shields.io/badge/version-1.2.0-brightgreen.svg)
![node version](https://img.shields.io/badge/node-%3E%3D7.5.0-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm-%3E%3D4.1.2-brightgreen.svg)
![yarn version](https://img.shields.io/badge/yarn-1.7.0-blue.svg)
![rollup version](https://img.shields.io/badge/rollup-%3E%3D0.62.0-red.svg)


Utils Date is a toolkit for extending JavaScript Date objects and is designed to be lightweight, simple, and easy to use.

You can see more details by visiting the [Utils Date]() website.

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
	console.log(utilsDate.parse(1528278558218)); // Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)

	// Sql date conversion
	console.log(utilsDate.parse(/Date(1528278558218)/)); // Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)

	// UTC time conversion
	console.log(utilsDate.parse("Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)")); // Thu Jun 07 2018 01:49:18 GMT+0800 (中国标准时间)

	// String date conversion
	console.log(utilsDate.parse("2018")); // Mon Jan 01 2018 08:00:00 GMT+0800 (中国标准时间)
	console.log(utilsDate.parse("2018-6")); // Fri Jun 01 2018 00:00:00 GMT+0800 (中国标准时间)
	console.log(utilsDate.parse("2018-6-7")); // Thu Jun 07 2018 00:00:00 GMT+0800 (中国标准时间)
	console.log(utilsDate.parse("2018-6-7 9")); // Fri Jun 01 2018 07:09:00 GMT+0800 (中国标准时间)
	console.log(utilsDate.parse("2018-6-7 9:00")); // Fri Jun 01 2018 07:09:00 GMT+0800 (中国标准时间)
	console.log(utilsDate.parse("2018-6-7 9:00:00")); // Fri Jun 01 2018 07:09:00 GMT+0800 (中国标准时间)

	console.log(utilsDate.parse("1528278558218")); // Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)

	console.log(utilsDate.parse("/Date(1528278558218)/")); // Wed Jun 06 2018 17:49:18 GMT+0800 (中国标准时间)
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


