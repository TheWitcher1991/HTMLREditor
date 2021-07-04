/* eslint-env node, mocha, es6 */

/**
 * @module engine/core/HTMLREditor
 */

'use strict';

import Element from '../view/element.js';
import namespace from './logger.js';


const debug = namespace('HTMLREditor');

export let editor = '#editor';


export default class HTMLREditor {

	constructor() {
		this.version = '2.1.0';
	}

	/**
	 *
	 * @static
	 *
	 * @param {*} limit
	 */
	static debug(limit) {
		if (limit === true) {
			limit = 'log';
		}

		namespace.level(limit);
	}

	/**
	 *
	 * @static
	 *
	 * @param {String} element
	 * @param {String} theme
	 */
	static register(element, theme = 'dark') {
		return new Promise(function (resolve, reject) {
			editor = element;
			resolve(Element.create(element, theme));
			reject(function () {
				this.error('Произошла ошибка!');
			});
		});
	}

	/**
	 *
	 * @static
	 *
	 * @returns {String}
	 */
	static getVersion() {
		return this.version;
	}


	/**
	 *
	 * @static
	 *
	 * @param  {String} msg
	 * @returns {Error}
	 */
	static error(msg) {
		throw new Error(msg);
	}

}


// ! MORE
$('form').on('submit', () => {
	$('#editor-content-out-area').val($('#editor-content').html());
	return true;
});

$('body').on('click', '.pop-image-bth', function() {
	let inp = $('#imageHref');
	let cnt = '<div class="imageBBWp"><img src="' + inp.val() + '" /></div>';

	if (inp.val()) {
		$('#editor-content').html($('#editor-content').html() + cnt);

		inp.val('');
		$('.pop-image').fadeOut(0);
	}

	// document.execCommand('insertHtml', false, cnt);

	return false;
});

const escapeText = function (text) {
	let map = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'};
	return text.replace(/[&<>"']/g, m => map[m]);
};

$('body').on('paste', '#editor-content', e => {
	e.preventDefault();
	let text = (e.originalEvent || e).clipboardData.getData('text/plain');
	document.execCommand('insertHtml', false, escapeText(text));
});

$('body').on('focusout', '#editor-content', function () {
	let element = $(this);
	if (!element.text().replace(' ', '').length) {
		element.empty();
	}
});

$('body').on('keydown', '#editor-content', function (e) {
	if (e.keyCode === 9) {
		e.preventDefault();
		let editor = this;
		let doc = editor.ownerDocument.defaultView;
		let sel = doc.getSelection();
		let range = sel.getRangeAt(0);
		let tabNode = document.createTextNode('\t');
		range.insertNode(tabNode);
		range.setStartAfter(tabNode);
		range.setEndAfter(tabNode);
		sel.removeAllRanges();
		sel.addRange(range);
	}
});

$('body').on('click', '#code-bth', function () {
	$('#editor-insertCode').fadeIn(200);
});

$('body').on('click', '.closeIC', function () {
	$('#editor-insertCode').fadeOut(200);
});

$('body').on('click', '.buttonIC', function () {
	let land = $("#languageIC").val(),
		cnt = $("#contentIC").val(),
		res = `[CODE=${land}]${cnt}[/CODE]`;

	return $('#editor-content').html($('#editor-content').html() + res),
			$('.insertCode-form').trigger('reset'),
			$('#editor-insertCode').fadeOut(0),
			false;
});

$('body').on('click', '.pop-link-bth', function () {
	let h = $("#linkHref"),
		t = $("#linkText"),
		res = `<div class="linkBBWp"><a href="${h.val()}">${t.val()}</a></div>`;

	if (h.val() && (h.val() || t.val())) {
		return $('#editor-content').html($('#editor-content').html() + res),
				h.val(''),
				t.val(''),
				$('.pop-link').fadeOut(0),
				false;
	} else {
		return h.val(''),
				t.val(''),
				$('.pop-link').fadeOut(0),
				false;
	}

});

const togglePopMenu = function () {

	let bth = ['#image', '#link-bth', '#heading-bth', '#font-bth', '#size-bth', '#ellipsis-bth', '#align-bth',
				'#list-bth', '#tint-bth', '#bgc-bth', '#hide-bth'];

	let	pop = ['.pop-image', '.pop-link', '.pop-heading', '.pop-font', '.pop-size', '.pop-ellipsis', '.pop-align',
				'.pop-list', '.pop-tint', '.pop-bgc', '.pop-hide'];

	bth.forEach((el, i) => {
		$('body').on('click', el, function () {

			if ($(pop[i]).css('display') === 'none') {
				$('#tools-div-popup').fadeOut();
				$('.tools-button > div').fadeOut();
				$(pop[i]).fadeIn(200);
			} else if ($(pop[i]).css('display') === 'block') {
				$(pop[i]).fadeOut(200);
			}

		});
	});
};

togglePopMenu();

$('body').on('click', '.tools-button #tools-div-popup > ul > li > a', function () {
	$('#tools-div-popup').fadeOut();
});

// ! DOCUMENT execCommand
document.execCommand('defaultParagraphSeparator', false, 'p');

$('body').on('click', '#bold-bth', () => {
	return document.execCommand('bold', false, null), false;
});

$('body').on('click', '#italic-bth', () => {
	return document.execCommand('italic', false, null), false;
});

$('body').on('click', '#underline-bth', () => {
	return document.execCommand('underline', false, null), false;
});

$('body').on('click', '#strikethrough-bth', () => {
	return document.execCommand('strikethrough', false, null), false;
});

$('body').on('click', '#listm', () => {
	return document.execCommand('insertUnorderedList', false, null), false;
});

$('body').on('click', '#listn', () => {
	return document.execCommand('insertOrderedList', false, null), false;
});

$('body').on('click', '#heading-1', () => {
	return document.execCommand('formatBlock', false, 'h1'), false;
});

$('body').on('click', '#heading-2', () => {
	return document.execCommand('formatBlock', false, 'h2'), false;
});

$('body').on('click', '#heading-3', () => {
	return document.execCommand('formatBlock', false, 'h3'), false;
});

$('body').on('click', '#heading-4', () => {
	return document.execCommand('formatBlock', false, 'h4'), false;
});

$('body').on('click', '#lines', () => {
	return document.execCommand('insertHorizontalRule', false, null), false;
});

$('body').on('click', '#left', () => {
	return document.execCommand('justifyLeft', false, null), false;
});

$('body').on('click', '#center', () => {
	return document.execCommand('justifyCenter', false, null), false;
});

$('body').on('click', '#right', () => {
	return document.execCommand('justifyRight', false, null), false;
});

$('body').on('click', '#justify', () => {
	return document.execCommand('justifyFull', false, null), false;
});

$('body').on('click', '#indent', () => {
	return document.execCommand('indent', false, null), false;
});

$('body').on('click', '#outdent', () => {
	return document.execCommand('outdent', false, null), false;
});

$('body').on('click', '#font-1', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontName', false, 'Arial');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#font-2', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontName', false, 'Times New Roman');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#font-3', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontName', false, 'Book Antiqua');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#font-4', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontName', false, 'Courier New');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#font-5', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontName', false, 'Georgia');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#font-6', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontName', false, 'Trebuchet MS');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#font-7', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontName', false, 'Tahoma');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#font-8', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontName', false, 'Verdana');
	document.execCommand('styleWithCSS', false, false);
});


$('body').on('click', '#size-10', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontSize', false, '1');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#size-12', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontSize', false, '2');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#size-15', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontSize', false, '3');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#size-18', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontSize', false, '5');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#size-21', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontSize', false, '6');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#size-26', () => {
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('fontSize', false, '7');
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '.pop-tint-color', function () {
	let val = $(this)[0].textContent;
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('foreColor', false, val);
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '.pop-bgc-colo', function () {
	let val = $(this)[0].textContent;
	document.execCommand('styleWithCSS', false, true);
	document.execCommand('hiliteColor', false, val);
	document.execCommand('styleWithCSS', false, false);
});

$('body').on('click', '#undo-bth', () => {
	return document.execCommand('undo', false, null) ,false;
});

$('body').on('click', '#redo-bth', () => {
	return document.execCommand('redo', false, null) ,false;
});

$('body').on('click', '#eraser-bth', () => {
	return document.execCommand('removeFormat', false, null) ,false;
});

$('body').on('click', '#line-bth', () => {
	return document.execCommand('insertHorizontalRule', false, null) ,false;
});

$('body').on('click', '#quote', () => {
	return document.execCommand('insertHTML', false,'[QUOTE][/QUOTE]') ,false;
});

$('body').on('click', '#spoiler', () => {
	return document.execCommand('insertHTML', false,'[SPOILER][/SPOILER]') ,false;
});

$('body').on('click', '#media', () => {
	return document.execCommand('insertHTML', false,'[MEDIA][/MEDIA]') ,false;
});
