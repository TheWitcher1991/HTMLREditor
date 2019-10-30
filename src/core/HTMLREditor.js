/* eslint-env node, mocha, es6 */

/**
 * @module engine/core/HTMLREditor
 */


'use strict';

import Element from '../view/element.js';
import Other from '../utils/other.js';

import defaultStyle from "../theme/default.js";
import lightStyle from "../theme/light.js";
import darkStyle from "../theme/dark.js";

import mix from '../utils/mix.js';
import logger from './logger.js';

/**
 *
 * @type {{}}
 */
const debug = logger('HTMLREditor');

/**
 *
 * @type {string}
 */
export let editor = '#editor';

/**
 * @class HTMLREditor
 *
 * {@link module:engine/core/logger~Logger `logger(namespace)`}
 * {@link module:engine/view/element~Element.create `Element.create(element)`}
 *
 * @extends module:engine/view/element~Element
 */
export default class HTMLREditor {

	constructor() {

		/**
		 *
		 * @private
		 *
		 * @type {string}
		 */
		this.version = '@VERSION';
	}

	/**
	 *
	 * @static
	 *
	 * @link module:engine/core/logger~Logger `logger(namespace)`}
	 *
	 * @param {*} limit
	 */
	static debug(limit) {
		if (limit === true) {
			limit = 'log';
		}

		logger.level(limit);
	}

	/**
	 *
	 * @static
	 *
	 * {@link module:engine/view/element~Element.create `Element.create(element)`}
	 *
	 * @param {String} element
	 */
	static register(element) {
		return new Promise(function (resolve, reject) {
			editor = element;
			// success
			resolve(Element.create(element));
			// done
			reject(function () {
				throw new Error();
			})
		});
	}

	/**
	 *
	 * @static
	 */
	static setDefaultTheme() {
		$(editor).css(defaultStyle.editor);
		$('#editor-content').css(defaultStyle.content);
		$('#editor-tools').css(defaultStyle.tools);
	}

	/**
	 *
	 * @static
	 */
	static setDarkTheme() {
		$(editor).css(darkStyle.editor);
		$('#editor-content').css(darkStyle.content);
		$('#editor-tools').css(darkStyle.tools);
	}

	/**
	 *
	 * @static
	 */
	static setLightTheme() {
		$(editor).css(lightStyle.editor);
		$('#editor-content').css(lightStyle.content);
		$('#editor-tools').css(lightStyle.tools);
	}

	/**
	 *
	 * @static
	 *
	 * @returns {string}
	 */
	static getVersion() {
		return this.version;
	}


	/**
	 *
	 * @static
	 *
	 * @param {String} msg
	 * @returns {Error}
	 */
	static error(msg) {
		throw new Error(msg);
	}

}
