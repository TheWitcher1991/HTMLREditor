/* eslint-env node, mocha, es6 */

/**
 * HTMLREditor is a modern rich text editor built for compatibility and extensibility
 *
 * Third party libraries used when creating - [
 * 		https://highlightjs.org,
 * 		https://jquery.com/
 * ]
 * @author GitHub: TheWitcher1991
 * @version 2.1.0
 * @see https://github.com/TheWitcher1991/HTMLREditor
 */

import HTMLREditor from './core/HTMLREditor.js';

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
		define(() => factory(global));
	} else {
		factory(global);
	}

})(typeof window !== 'undefined' ? window : this, async function (window) {

	try {

		window.HTMLREditor = HTMLREditor;

		// eslint-disable-next-line no-empty
	} catch (e) {}

});
