'use strict';

const path = require('path');
const babel = require('rollup-plugin-babel');
const cjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify').uglify;
const resolve = p => path.join(__dirname, '.', p);

const VERSION = require('./package.json').version;
const TARGET = process.env.TARGET || 'prod';

// 打包后生成 js 的顶部注释说明
const banner =
	`/*!\n` +
	` * utils-date v${VERSION}\n` +
	` * (c) 2018-${new Date().getFullYear()} Slience HVK\n` +
	` */`;

const prodPlugins = TARGET === 'dev' ? [] : [uglify()];

export default {
	input: resolve('src/utils-date.js'),
	output: {
		file: resolve(`dist/utils-date${TARGET === 'dev' ? '' : '.min'}.js`),
		name: 'utilsDate',
		format: 'umd',
		banner: banner
	},
	plugins: [
		cjs(),
		babel({
			exclude: 'node_modules/**' // 忽略 node_modules 的代码
		})
	].concat(prodPlugins)
}