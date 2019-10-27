/**
 *	@module engine/view/content
 */

'use strict';

import Other from '../utils/other.js';

import logger from '../core/logger.js'
import mix from '../utils/mix.js';

/**
 *
 * @type {{}}
 */
const debug = logger('HTMLREditor:content');

/**
 * @class Content
 */
export default class Content {

	/**
	 *
	 * @static
	 *
	 * @param {String} element
	 * @returns {HTMLTextAreaElement | ActiveX.IXMLDOMNode}
	 */
	static insertTextarea(element) {
		let textarea = document.createElement('textarea');
		textarea.id = 'editor-content';
		textarea.className = 'editor-textarea wrapper-editor';
		textarea.name = 'content';
		document.querySelector(element).appendChild(textarea);
	}

}
