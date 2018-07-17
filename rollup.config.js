'use strict';

const version = require('./package.json').version;
const path = require('path');
const babel = require('rollup-plugin-babel');
const cjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify').uglify;

const resolve = p => path.join(__dirname, '.', p);

// 打包后生成 js 的顶部注释说明
const banner =
	`/*!\n` +
	` * utils-date v${version}\n` +
	` * (c) 2018-${new Date().getFullYear()} Slience HVK\n` +
	` */`;

const builds = {
	"utils-date-dev": {
		entry: resolve('src/utils-date.js'),
		dest: resolve('dist/utils-date.js'),
		format: 'umd',
		env: 'development',
		banner
	},
	"utils-date-prod": {
		banner
	}
}

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