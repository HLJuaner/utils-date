'use strict';

const path = require('path');

export default {
	input: path.join(__dirname, './src/index.js'),
	output: {
		file: path.join(__dirname, './utils-date.js'),
		format: 'umd'
	},
	plugins: {
	}
}