/* eslint-env node, mocha, es6 */

/**
 * @module engine/view/element
 */

'use strict';

import Other from '../utils/other.js';
import Content from './content.js';
import Tools from './tools.js';

import defaultStyle from '../theme/default.js';
import logger from '../core/logger.js';
import mix from '../utils/mix.js';

/**
 *
 * @type {{}}
 */
const debug = logger('HTMLREditor:element');

/**
 * @class Element
 *
 * {@link module:engine/view/content~Content.insertTextarea `Content.insertTextarea(element);`}
 * {@link module:engine/view/tools~Tools.insertTools `Tools.insertTools(element)`}
 */
export default class Element {

	/**
	 *
	 * @static
	 *
	 * @param {String} element
	 *
	 * @return {HTMLElement | ActiveX.IXMLDOMNode}
	 */
	static create(element) {
		if (Other.isset(element)) {
			Tools.insertTools(element);
			Content.insertTextarea(element);
			Element.setStyle(element, defaultStyle.editor);
		}
	}

	/**
	 *
	 * @static
	 *
	 * @param {String} element
	 * @param {{}} style
	 */
	static setStyle(element, style) {
		$(element).css(style);
	}

}

mix(Element, Content, Tools);
