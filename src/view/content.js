/* eslint-env node, mocha, es6 */

/**
 *	@module engine/view/content
 */

'use strict';

import namespace from '../core/logger.js';


const debug = namespace('HTMLREditor:content');

export default class Content {

	/**
	 *
	 * @static
	 *
	 * @param {String} element
	 * @returns {HTMLTextAreaElement | ActiveX.IXMLDOMNode}
	 */
	static insertContentEditable(element) {
		let textarea = document.createElement('div');
		textarea.id = 'editor-content';
		textarea.className = 'editor-textarea wrapper-editor';
		textarea.contentEditable = true;
		textarea.spellcheck = true;
		document.querySelector(element).appendChild(textarea);
		$('#editor-content').attr('placeholder', 'Напишите Ваше сообщение...');
	}

	/**
	 *
	 * @static
	 *
	 * @param {String} element
	 * @returns {HTMLTextAreaElement | ActiveX.IXMLDOMNode}
	 */
	static insertTextarea(element) {
		let textarea = document.createElement('textarea');
		textarea.id = 'editor-content-out-area';
		textarea.name = 'content';
		textarea.spellcheck = true;
		textarea.placeholder = 'Напишите Ваше сообщение...';
		document.querySelector(element).appendChild(textarea);
	}

	/**
	 *
	 * @static
	 *
	 * @param {String} element
	 * @returns {HTMLTextAreaElement | ActiveX.IXMLDOMNode}
	 */
	static insertTextareaReset(element) {
		let textarea = document.createElement('textarea');
		textarea.id = 'editor-content-area';
		textarea.name = 'content-area-reset';
		textarea.spellcheck = true;
		textarea.placeholder = 'Напишите Ваше сообщение...';
		document.querySelector(element).appendChild(textarea);
	}

	/**
	 *
	 * @static
	 *
	 * @param {String} element
	 * @returns {HTMLTextAreaElement | ActiveX.IXMLDOMNode}
	 */
	static insertCode(element) {
		let div = document.createElement('div');
		div.id = 'editor-insertCode';
		div.className = 'editor-tools-insertCode';
		div.innerHTML = `
		<div class="editor-insertCodeCnt">
		<div class="titleIC">Вставить код<i class="fas fa-times closeIC"></i></div>
		<form enctype="multipart/form-data" action="" class="insertCode-form insertTools-form" method="GET">
			<label for="languageIC">
				<span class="exp-title">Язык:</span>
				  <input class="input" type="text" id="languageIC" name="title">
			  </label>
			  <label for="contentIC">
				  <span class="exp-title">Код:</span>
				  <textarea class="contentIC-area" id="contentIC" name="title"></textarea>
			  </label>
		  </form>
		  <div class="buttonIC"><input type="button" value="Вставить"></div>
	</div>
		`;
		document.querySelector(element).appendChild(div);
	}

}
