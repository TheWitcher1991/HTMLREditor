/* eslint-env node, mocha, es6 */

/**
 * @module engine/view/element
 */

'use strict';

import _ from '../utils/other.js';
import Content from './content.js';
import Tools from './tools.js';
import Theme from '../theme/theme.js'

import namespace from '../core/logger.js';
import mix from '../utils/mix.js';


const debug = namespace('HTMLREditor:element');

export default class Element {
	/**
	 *
	 * @static
	 *
	 * @param {String} element
	 * @param {String} theme
	 */
	static create(element, theme) {
		if (_.isset(element)) {
			Tools.insertTools(element);
			Content.insertContentEditable(element);
			Content.insertTextarea(element);
			Content.insertTextareaReset(element);
			Content.insertCode(element);
			Theme.mod(element, theme);
		}
	}
}

mix(Element, Content, Tools, Theme);
