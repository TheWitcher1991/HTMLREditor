/* eslint-env node, mocha, es6 */

/**
 * HTMLREditor is a modern rich text editor built for compatibility and extensibility
 *
 * @author REENSQ Foundation
 * @version 1.0.0
 * @licence MIT
 * @copyright © 2019
 * @see https://github.com/TheWitcher1991/HTMLREditor
 */

(function(global, factory) {

	'use strict';

	if (typeof module === 'object' && typeof module.exports === 'object') {
		module.exports = global.document ? factory(global, true) : (w) => {
			if (!w.document) {
				throw new Error('HTMLREditor requires a window with a document');
			}

			return factory(w);
		};
	} else if (typeof define === 'function' && define.amd) {
		define(() => factory(global))
	} else {
		factory(global);
	}

})(typeof window !== 'undefined' ? window : this, async function (window) {

	import('./core/HTMLREditor.js')
		.then((module) => {
			window.HTMLREditor = module;
		})
		.catch(_err => console.log(_err))
		.finally(console.log('Editor load'));

});
