/* eslint-env node, mocha, es6 */

/**
 * @module engine/view/tools
 */

'use strict';

import Draw from './draw.js';

import namespace from '../core/logger.js';


const debug = namespace('HTMLREditor:tools');

export default class Tools {

	/**
	 *
	 * @static
	 *
	 * @param {String} element
	 * @returns {HTMLDivElement | ActiveX.IXMLDOMNode}
	 */
	static insertTools(element) {
		let content = document.createElement('div');
		content.id = 'editor-tools';
		content.className = 'editor-tools wrapper-editor';
		content.innerHTML = '<div class="tools-button flex"></div>';
		document.querySelector(element).appendChild(content);
		Tools.createButton();
	}

	/**
	 *
	 * @static
	 */
	static createButton() {
		let tools = document.querySelector('.tools-button');

		tools.innerHTML = Draw.blockZero() + Draw.blockFirst() + Draw.blockSecond()
							+ Draw.blockThree() + Draw.blockFour()
							+ Draw.blockFive() + Draw.blockSix();

	}


	/* static addBBCode(click, code) {
		document.querySelector(`.tools-button ${click}`).addEventListener('click', function (event) {
			event.preventDefault();

			$('#editor-content').val($('#editor-content').val() + code);
		}, false);
	}*/

}
