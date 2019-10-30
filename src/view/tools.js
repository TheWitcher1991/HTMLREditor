/* eslint-env node, mocha, es6 */

/**
 * @module engine/view/tools
 */

'use strict';

import Other from '../utils/other.js';

import { bbCodeSearch, bbCodeReplace } from '../utils/bbcode.js';
import logger from '../core/logger.js';
import mix from '../utils/mix.js';

/**
 *
 * @type {{}}
 */
const debug = logger('HTMLREditor:tools');

/**
 * @class Tools
 */
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
		content.innerHTML = `<div class="tools-button flex"></div>`;
		document.querySelector(element).appendChild(content);
		Tools.createButton();
	}

	/**
	 *
	 * @static
	 */
	static createButton() {
		let tools = document.querySelector('.tools-button');

		tools.innerHTML = Tools.blockFirst() + Tools.blockSecond() + Tools.blockThird() + Tools.blockFourth();

		for (let index in bbCodeSearch) {
			if (bbCodeSearch.hasOwnProperty(index)) {
				Tools.addBBCode(bbCodeReplace[index], bbCodeSearch[index]);
			}
		}
	}

	/**
	 *
	 * @returns {String}
	 */
	static blockFirst() {
		return `
			<div id="tools-block-1">
				<ul>
					<li id="li-bold">
						<span id="bold"><i class="fas fa-bold" aria-hidden="true"></i></span>
						<span class="tooltip-tools">Жирный</span>
					</li>
					<li id="li-italic">
						<span id="italic"><i class="fas fa-italic" aria-hidden="true"></i></span>
						<span class="tooltip-tools">Курсив</span>
					</li>
					<li id="li-underline">
						<span id="underline"><i class="fas fa-underline" aria-hidden="true"></i></span>
						<span class="tooltip-tools">Подчёркнутый</span>
					</li>
					<li id="li-strikethrough">
						<span id="strikethrough"><i class="fas fa-strikethrough" aria-hidden="true"></i></span>
						<span class="tooltip-tools">Зачёркнутый</span>
					</li>
					<li id="li-heading">
						<span id="heading">
							<i class="fas fa-heading" aria-hidden="true"></i>
							<i class="fa fa-caret-down"></i>
						</span>
						<span class="tooltip-tools">Заголовок</span>
						<ul id="tools-ul-popup" class="pop-heading">
							<li><span id="heading-1">Уровень 1</span></li>
							<li><span id="heading-2">Уровень 2</span></li>
							<li><span id="heading-3">Уровень 3</span></li>
						</ul>
					</li>
				</ul>
			</div>
		`;
	}

	/**
	 *
	 * @returns {String}
	 */
	static blockSecond() {
		return `
		<div id="tools-block-2">
				<ul>
					<li id="li-tint">
						<span id="tint"><i class="fas fa-tint" aria-hidden="true"></i></span>
						<span class="tooltip-tools">Цвет текста</span>
						<ul id="tools-ul-popup" class="pop-font">
						
						</ul>
					</li>
					<li id="li-font">
						<span id="font">
							<i class="fas fa-font" aria-hidden="true"></i>
							<i class="fa fa-caret-down"></i>
						</span>
						<span class="tooltip-tools">Шрифт</span>
						<ul id="tools-ul-popup" class="pop-font">
							<li><span title="Arial" id="font-1" style="font-family: Arial">Arial</span></li>
							<li><span title="Times New Roman" id="font-2" style="font-family: 'Times New Roman'">Times New Roman</span></li>
							<li><span title="Book Antiqua" id="font-3" style="font-family: 'Book Antiqua'">Book Antiqua</span></li>
							<li><span title="Courier New" id="font-4" style="font-family: 'Courier New'">Courier New</span></li>
							<li><span title="Georgia" id="font-5" style="font-family: 'Georgia'">Georgia</span></li>
							<li><span title="Trebucher MS" id="font-6" style="font-family: 'Trebuchet MS'">Trebuchet MS</span></li>
							<li><span title="Tahoma" id="font-7" style="font-family: Tahoma">Tahoma</span></li>
							<li><span title="Verdana" id="font-8" style="font-family: 'Verdana'">Verdana</span></li>
						</ul>
					</li>
					<li id="li-size">
						<span id="size">
							<i class="fas fa-text-height" aria-hidden="true"></i>
							<i class="fa fa-caret-down" aria-hidden="true"></i>
						</span>
						<span class="tooltip-tools">Размер шрифта</span>
						<ul id="tools-ul-popup" class="pop-size">
							<li><span style="font-size: 9px" title="9" id="size-9">9</span></li>
							<li><span style="font-size: 10px" title="10" id="size-10">10</span></li>
							<li><span style="font-size: 12px" title="12" id="size-12">12</span></li>
							<li><span style="font-size: 14px" title="14" id="size-14">14</span></li>
							<li><span style="font-size: 16px" title="16" id="size-16">16</span></li>
							<li><span style="font-size: 18px" title="18" id="size-18">18</span></li>
							<li><span style="font-size: 22px" title="22" id="size-22">22</span></li>
							<li><span style="font-size: 24px" title="24" id="size-24">24</span></li>
							<li><span style="font-size: 26px" title="26" id="size-26">26</span></li>
						</ul>
					</li>
				</ul>
			</div>
		`;
	}

	/**
	 *
	 * @returns {String}
	 */
	static blockThird() {
		return `
			<div id="tools-block-3">
				<ul>
					<li id="li-link">
						<span id="link"><i class="fa fa-link" aria-hidden="true"></i></span>
						<span class="tooltip-tools">Вставить ссылку</span>
					</li>
					<li id="li-spoiler">
						<span id="spoiler"><i class="fa fa-flag" aria-hidden="true"></i></span>
						<span class="tooltip-tools">Спойлер</span>
					</li>
					<li id="li-code">
						<span id="code"><i class="fa fa-code" aria-hidden="true"></i></span>
						<span class="tooltip-tools">Вставить код</span>
					</li>
					<li id="li-ellipsis">
						<span id="ellipsis">
							<i class="fa fa-ellipsis-h" aria-hidden="true"></i>
							<i class="fa fa-caret-down" aria-hidden="true"></i>
						</span>
						<span class="tooltip-tools">Вставить</span>
						<ul id="tools-ul-popup" class="pop-ellipsis">
							<li><span id="image"><i class="fa fa-picture-o" aria-hidden="true"></i> Изображение</span></li>
							<li><span id="media"><i class="fa fa-video-camera" aria-hidden="true"></i> Медиа</span></li>
							<li><span id="quote"><i class="fa fa-quote-right" aria-hidden="true"></i> Цитата</span></li>
							<li><span id="spoiler-head"><i class="fa fa-flag" aria-hidden="true"></i> Спойлер с заголовком</span></li>
							<li><span id="user-add"><i class="fa fa-user" aria-hidden="true"></i> Пользователь по ID</span></li>
						</ul>
					</li>
				</ul>
			</div>
		`;
	}

	/**
	 *
	 * @returns {String}
	 */
	static blockFourth() {
		return `
			<div id="tools-block-4">
				<ul>
					<li id="li-align">
						<span id="align">
							<i class="fas fa-align-left" aria-hidden="true"></i>
							<i class="fa fa-caret-down" aria-hidden="true"></i>
						</span>
						<span class="tooltip-tools">Выравнивание</span>
						<ul id="tools-ul-popup" class="pop-align">
							<li><span title="По левому краю" id="left"><i class="fas fa-align-left" aria-hidden="true"></i></span></li>
							<li><span title="По центру" id="center"><i class="fas fa-align-center" aria-hidden="true"></i></span></li>
							<li><span title="По правому краю" id="right"><i class="fas fa-align-right" aria-hidden="true"></i></span></li>
							<li><span title="Jusify" id="justify"><i class="fas fa-align-justify" aria-hidden="true"></i></span></li>
						</ul>
					</li>
					<li id="li-list">
						<span id="list">
							<i class="fas fa-list" aria-hidden="true"></i>
							<i class="fa fa-caret-down" aria-hidden="true"></i>
						</span>
						<span class="tooltip-tools">Список</span>
						<ul id="tools-ul-popup" class="pop-list">
							<li><span title="По левому краю" id="listn"><i class="fas fa-list-ol" aria-hidden="true"></i> Нумерованный список</span></li>
							<li><span title="По центру" id="listm"><i class="fas fa-list-ul" aria-hidden="true"></i> Маркированный список</span></li>
						</ul>
					</li>
					<li id="li-table">
						<span id="table-bb"><i class="fa fa-table" aria-hidden="true"></i></span>
					</li>
				</ul>
			</div>
		`;
	}

	/**
	 *
	 * @param click
	 * @param code
	 */
	static addBBCode(click, code) {
		document.querySelector(`.tools-button ${click}`).addEventListener('click', function (event) {
			event.preventDefault();

			$('#editor-content').val($('#editor-content').val() + code);
		}, false);
	}

}
