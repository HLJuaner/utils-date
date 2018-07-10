'use strict';

const version = require('./package.json').version;
const path = require('path');
const babel = require('rollup-plugin-babel');
const cjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify').uglify;

// console.log(uglify());
// 打包后生成 js 的顶部注释说明
const banner =
	`/*!\n` +
	` * utils-date v${version}\n` +
	` * (c) 2018-${new Date().getFullYear()} Slience HVK\n` +
	` */`;

export default {
	input: path.join(__dirname, './src/utils-date.js'),
	output: {
		file: path.join(__dirname, './dist/utils-date.min.js'),
		banner: banner,
		format: 'umd',
		sourceMap: 'inline',
		name: 'utilsDate'
	},
	plugins: [
		cjs(),
		babel({
			exclude: 'node_modules/**' // 忽略 node_modules 的代码
		}),
		uglify()
	]
}