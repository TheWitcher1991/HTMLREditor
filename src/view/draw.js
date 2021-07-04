/* eslint-env node, mocha, es6 */

/**
 *	@module engine/view/draw
 */

'use strict';

import namespace from '../core/logger.js';


const debug = namespace('HTMLREditor:draw');

export default class Draw {

	/**
	 *
	 * @static
	 *
	 * @returns {String}
	 */
	static blockZero() {
		return `
			<button type="button" id="eraser-bth">
				<i class="fas fa-eraser" aria-hidden="true"></i>
				<span class="tooltip-tools">Удалить форматирование</span>
			</button>
			<div class="separator-tools" aria-orientation="vertical"></div>
		`;
	}

	/**
	 *
	 * @static
	 *
	 * @returns {String}
	 */
	static blockFirst() {
		return `
			<button type="button" id="undo-bth">
				<i class="fas fa-undo" aria-hidden="true"></i>
				<span class="tooltip-tools">Назад (Ctrl+Z)</span>
			</button>
			<button type="button" id="redo-bth">
				<i class="fas fa-redo" aria-hidden="true"></i>
				<span class="tooltip-tools">Повторить (Ctrl+Shift+Z)</span>
			</button>
			<div class="separator-tools" aria-orientation="vertical"></div>
		`;
	}

	/**
	 *
	 * @static
	 *
	 * @returns {String}
	 */
	static blockSecond() {
		return `
			<button type="button" id="heading-bth">
				<div>Heading<i class="fa fa-caret-down"></i></div>
				<span class="tooltip-tools">Заголовок</span>
			</button>
			<div id="tools-div-popup" class="pop-heading">
				<ul>
					<li><a href="javascript:void(0)" id="heading-1">Уровень 1</a></li>
					<li><a href="javascript:void(0)" id="heading-2">Уровень 2</a></li>
					<li><a href="javascript:void(0)" id="heading-3">Уровень 3</a></li>
					<li><a href="javascript:void(0)" id="heading-4">Уровень 4</a></li>
				</ul>
			</div>
			<button type="button" id="bold-bth">
				<i class="fas fa-bold" aria-hidden="true"></i>
				<span class="tooltip-tools">Жирный</span>
			</button>
			<button type="button" id="italic-bth">
				<i class="fas fa-italic" aria-hidden="true"></i>
				<span class="tooltip-tools">Курсив</span>
			</button>
			<button type="button" id="underline-bth">
				<i class="fas fa-underline" aria-hidden="true"></i>
				<span class="tooltip-tools">Подчёркнутый</span>
			</button>
			<div class="separator-tools" aria-orientation="vertical"></div>
		`;
	}

	/**
	 *
	 * @static
	 *
	 * @returns {String}
	 */
	static blockThree() {
		return `
			<button type="button" id="font-bth">
				<div><i class="fas fa-font" aria-hidden="true"></i><i class="fa fa-caret-down"></i></div>
				<span class="tooltip-tools">Шрифт</span>
			</button>
			<div id="tools-div-popup" class="pop-font">
				<ul>
					<li><a href="javascript:void(0)" title="Arial" id="font-1" style="font-family: Arial">Arial</a></li>
					<li><a href="javascript:void(0)" title="Times New Roman" id="font-2" style="font-family: 'Times New Roman'">Times New Roman</a></li>
					<li><a href="javascript:void(0)" title="Book Antiqua" id="font-3" style="font-family: 'Book Antiqua'">Book Antiqua</a></li>
					<li><a href="javascript:void(0)" title="Courier New" id="font-4" style="font-family: 'Courier New'">Courier New</a></li>
					<li><a href="javascript:void(0)" title="Georgia" id="font-5" style="font-family: 'Georgia'">Georgia</a></li>
					<li><a href="javascript:void(0)" title="Trebucher MS" id="font-6" style="font-family: 'Trebuchet MS'">Trebuchet MS</a></li>
					<li><a href="javascript:void(0)" title="Tahoma" id="font-7" style="font-family: Tahoma">Tahoma</a></li>
					<li><a href="javascript:void(0)" title="Verdana" id="font-8" style="font-family: 'Verdana'">Verdana</a></li>
				</ul>
			</div>
			<button type="button" id="size-bth">
				<div><i class="fas fa-text-height" aria-hidden="true"></i><i class="fa fa-caret-down" aria-hidden="true"></i></div>
				<span class="tooltip-tools">Размер шрифта</span>
			</button>
			<div id="tools-div-popup" class="pop-size">
				<ul>
					<li><a href="javascript:void(0)" title="10" id="size-10">10</a></li>
					<li><a href="javascript:void(0)" title="12" id="size-12">12</a></li>
					<li><a href="javascript:void(0)" title="15" id="size-15">15</a></li>
					<li><a href="javascript:void(0)" title="18" id="size-18">18</a></li>
					<li><a href="javascript:void(0)" title="21" id="size-21">21</a></li>
					<li><a href="javascript:void(0)" title="26" id="size-26">26</a></li>
				</ul>
			</div>
			<button type="button" id="tint-bth">
				<i class="fas fa-tint" aria-hidden="true"></i>
				<span class="tooltip-tools">Цвет текста</span>
			</button>
			<div id="tools-div-popup" class="pop-tint pop-hex-wp">
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#61BD6D" class="pop-tint-color pop-hex" tabindex="-1" style="background: #61BD6D;"><span>#61BD6D</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#1ABC9C" class="pop-tint-color pop-hex" tabindex="-1" style="background: #1ABC9C;"><span>#1ABC9C</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#54ACD2" class="pop-tint-color pop-hex" tabindex="-1" style="background: #54ACD2;"><span>#54ACD2</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#2C82C9" class="pop-tint-color pop-hex" tabindex="-1" style="background: #2C82C9;"><span>#2C82C9</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#9365B8" class="pop-tint-color pop-hex" tabindex="-1" style="background: #9365B8;"><span>#9365B8</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#475577" class="pop-tint-color pop-hex" tabindex="-1" style="background: #475577;"><span>#475577</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#CCCCCC" class="pop-tint-color pop-hex" tabindex="-1" style="background: #CCCCCC;"><span>#CCCCCC</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#41A85F" class="pop-tint-color pop-hex" tabindex="-1" style="background: #41A85F;"><span>#41A85F</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#00A885" class="pop-tint-color pop-hex" tabindex="-1" style="background: #00A885;"><span>#00A885</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#3D8EB9" class="pop-tint-color pop-hex" tabindex="-1" style="background: #3D8EB9;"><span>#3D8EB9</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#2969B0" class="pop-tint-color pop-hex" tabindex="-1" style="background: #2969B0;"><span>#2969B0</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#28324E" class="pop-tint-color pop-hex" tabindex="-1" style="background: #28324E;"><span>#28324E</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#000000" class="pop-tint-color pop-hex" tabindex="-1" style="background: #000000;"><span>#000000</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#F7DA64" class="pop-tint-color pop-hex" tabindex="-1" style="background: #F7DA64;"><span>#F7DA64</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#FBA026" class="pop-tint-color pop-hex" tabindex="-1" style="background: #FBA026;"><span>#FBA026</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#EB6B56" class="pop-tint-color pop-hex" tabindex="-1" style="background: #EB6B56;"><span>#EB6B56</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#E25041" class="pop-tint-color pop-hex" tabindex="-1" style="background: #E25041;"><span>#E25041</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#A38F84" class="pop-tint-color pop-hex" tabindex="-1" style="background: #A38F84;"><span>#A38F84</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#EFEFEF" class="pop-tint-color pop-hex" tabindex="-1" style="background: #EFEFEF;"><span>#EFEFEF</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#FFFFFF" class="pop-tint-color pop-hex" tabindex="-1" style="background: #FFFFFF;"><span>#FFFFFF</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#FAC51C" class="pop-tint-color pop-hex" tabindex="-1" style="background: #FAC51C;"><span>#FAC51C</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#F37934" class="pop-tint-color pop-hex" tabindex="-1" style="background: #F37934;"><span>#F37934</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#B8312F" class="pop-tint-color pop-hex" tabindex="-1" style="background: #B8312F;"><span>#B8312F</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#7C706B" class="pop-tint-color pop-hex" tabindex="-1" style="background: #7C706B;"><span>#7C706B</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#D1D5D8" class="pop-tint-color pop-hex" tabindex="-1" style="background: #D1D5D8;"><span>#D1D5D8</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#6E52C0" class="pop-tint-color pop-hex" tabindex="-1" style="background: #6e52c0;"><span>#6E52C0</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#FFCD00" class="pop-tint-color pop-hex" tabindex="-1" style="background: #ffcd00;"><span>#FFCD00</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#E8E8E8" class="pop-tint-color pop-hex" tabindex="-1" style="background: #e8e8e8;"><span>#E8E8E8</span></a>
			</div>
			<!--<button type="button" id="bgc-bth">
				<i class="fas fa-fill" aria-hidden="true"></i>
				<span class="tooltip-tools">Фон текста</span>
			</button>
			<div id="tools-div-popup" class="pop-bgc pop-hex-wp">
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#61BD6D" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #61BD6D;"><span>#61BD6D</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#1ABC9C" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #1ABC9C;"><span>#1ABC9C</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#54ACD2" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #54ACD2;"><span>#54ACD2</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#2C82C9" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #2C82C9;"><span>#2C82C9</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#9365B8" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #9365B8;"><span>#9365B8</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#475577" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #475577;"><span>#475577</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#CCCCCC" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #CCCCCC;"><span>#CCCCCC</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#41A85F" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #41A85F;"><span>#41A85F</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#00A885" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #00A885;"><span>#00A885</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#3D8EB9" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #3D8EB9;"><span>#3D8EB9</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#2969B0" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #2969B0;"><span>#2969B0</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#28324E" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #28324E;"><span>#28324E</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#000000" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #000000;"><span>#000000</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#F7DA64" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #F7DA64;"><span>#F7DA64</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#FBA026" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #FBA026;"><span>#FBA026</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#EB6B56" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #EB6B56;"><span>#EB6B56</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#E25041" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #E25041;"><span>#E25041</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#A38F84" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #A38F84;"><span>#A38F84</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#EFEFEF" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #EFEFEF;"><span>#EFEFEF</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#FFFFFF" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #FFFFFF;"><span>#FFFFFF</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#FAC51C" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #FAC51C;"><span>#FAC51C</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#F37934" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #F37934;"><span>#F37934</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#B8312F" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #B8312F;"><span>#B8312F</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#7C706B" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #7C706B;"><span>#7C706B</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#D1D5D8" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #D1D5D8;"><span>#D1D5D8</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#6E52C0" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #6e52c0;"><span>#6E52C0</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#FFCD00" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #ffcd00;"><span>#FFCD00</span></a>
				<a href="javascript:void(0)" data-cmd="textColor" aria-selected="false" data-param1="#E8E8E8" class="pop-bgc-color pop-hex" tabindex="-1" style="background: #e8e8e8;"><span>#E8E8E8</span></a>
			</div>-->
			<div class="separator-tools" aria-orientation="vertical"></div>
		`;
	}

	/**
	 *
	 * @static
	 *
	 * @returns {String}
	 */
	static blockFour() {
		return `
			<button type="button" id="link-bth">
				<i class="fas fa-link" aria-hidden="true"></i>
				<span class="tooltip-tools">Вставить ссылку</span>
			</button>
			<div id="tools-form-popup" class="pop-link">
				<span class="tools-pop-arrow"></span>
				<div class="toolsFP-content">
					<div class="toolsFP-inp">
						<input class="input" id="linkHref" style="margin: 0 0 16px 0;" type="text" name="link-href" placeholder="Ссылка...">
						<input class="input" id="linkText" type="text" name="link-text" placeholder="Текст...">
					</div>
					<div class="toolsFP-bth">
						<a href="javascript:void(0)" class="pop-link-bth">Вставить</a>
					</div>
				</div>
			</div>
			<button type="button" id="code-bth">
				<i class="fa fa-code" aria-hidden="true"></i>
				<span class="tooltip-tools">Вставить код</span>
			</button>
			<!--<button type="button" id="image-bth">
				<i class="fa fa-picture-o" aria-hidden="true"></i>
				<span class="tooltip-tools">Изображение</span>
			</button>-->
			<div id="tools-form-popup" class="pop-image">
				<span class="tools-pop-arrow"></span>
				<div class="toolsFP-content">
					<div class="toolsFP-inp">
						<input class="input" id="imageHref" type="text" name="link-href" placeholder="http://">
					</div>
					<div class="toolsFP-bth">
						<a href="javascript:void(0)" class="pop-image-bth">Вставить</a>
					</div>
				</div>
			</div>
			<button type="button" id="ellipsis-bth">
				<div>
					<i class="fa fa-ellipsis-h" aria-hidden="true"></i>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<span class="tooltip-tools">Вставить</span>
			</button>
			<div id="tools-div-popup" class="pop-ellipsis">
				<ul>
					<li><a href="javascript:void(0)" id="image"><i class="fa fa-picture-o" aria-hidden="true"></i> Изображение</a></li>
					<li><a href="javascript:void(0)" id="media"><i class="fas fa-video-camera" aria-hidden="true"></i> Медиа</a></li>
					<li><a href="javascript:void(0)" id="quote"><i class="fa fa-quote-right" aria-hidden="true"></i> Цитата</a></li>
					<li><a href="javascript:void(0)" id="spoiler"><i class="fa fa-flag" aria-hidden="true"></i> Спойлер</a></li>
					<li><a href="javascript:void(0)" id="user-add"><i class="fas fa-user" aria-hidden="true"></i> Пользователь по ID</a></li>
					<li><a href="javascript:void(0)" id="line-bth"><i class="fas fa-arrows-alt-h" aria-hidden="true"></i> Горизонтальная линия</a></li>
				</ul>
			</div>
			<div class="separator-tools" aria-orientation="vertical"></div>
		`;
	}

	/**
	 *
	 * @static
	 *
	 * @returns {String}
	 */
	static blockFive() {
		return `
			<button type="button" id="hide-bth">
				<div><i class="far fa-eye-slash" aria-hidden="true"></i><i class="fa fa-caret-down" aria-hidden="true"></i></div>
				<span class="tooltip-tools">Скрытый контент</span>
			</button>
			<div id="tools-div-popup" class="pop-hide">
				<ul>
					<li><a href="javascript:void(0)" id="user-hide"><i class="far fa-user" aria-hidden="true"></i> Скрыть содержимое для определенных пользователей</a></li>
					<li><a href="javascript:void(0)" id="thumbs-hide"><i class="far fa-thumbs-up"></i> Скрыть содержимое по количеству реакций</a></li>
					<li><a href="javascript:void(0)" id="comments-hide"><i class="far fa-comments" aria-hidden="true"></i> Скрыть содержимое по количеству сообщений</a></li>
					<li><a href="javascript:void(0)" id="guest-hide"><i class="far fa-eye-slash" aria-hidden="true"></i> Скрыть содержимое от гостей</a></li>
					<li><a href="javascript:void(0)" id="secret-hide"><i class="fas fa-user-secret" aria-hidden="true"></i> Скрыть содержимое для авторизованных пользователей</a></li>
					<li><a href="javascript:void(0)" id="heart-hide"><i class="far fa-heart" aria-hidden="true"></i> Скрыть содержимое, до реакции в теме</a></li>
				</ul>
			</div>
			<div class="separator-tools" aria-orientation="vertical"></div>
		`;
	}

	/**
	 *
	 * @static
	 *
	 * @returns {String}
	 */
	static blockSix() {
		return `
			<button type="button" id="align-bth">
				<div><i class="fas fa-align-left" aria-hidden="true"></i><i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<span class="tooltip-tools">Выравнивание</span>
			</button>
			<div id="tools-div-popup" class="pop-align">
				<ul>
					<li><a href="javascript:void(0)" title="По левому краю" id="left"><i class="fas fa-align-left" aria-hidden="true"></i></a></li>
					<li><a href="javascript:void(0)" title="По центру" id="center"><i class="fas fa-align-center" aria-hidden="true"></i></a></li>
					<li><a href="javascript:void(0)" title="По правому краю" id="right"><i class="fas fa-align-right" aria-hidden="true"></i></a></li>
					<li><a href="javascript:void(0)" title="Justify" id="justify"><i class="fas fa-align-left" aria-hidden="true"></i></a></li>
				</ul>
			</div>
			<button type="button" id="list-bth">
				<div>
					<i class="fas fa-list" aria-hidden="true"></i>
					<i class="fa fa-caret-down" aria-hidden="true"></i>
				</div>
				<span class="tooltip-tools">Список</span>
			</button>
			<div id="tools-div-popup" class="pop-list">
				<ul>
					<li><a href="javascript:void(0)" title="По левому краю" id="listn"><i class="fas fa-list-ol" aria-hidden="true"></i> Нумерованный список</a></li>
					<li><a href="javascript:void(0)" title="По центру" id="listm"><i class="fas fa-list-ul" aria-hidden="true"></i> Маркированный список</a></li>
					<li><a href="javascript:void(0)" title="Увеличить отступ" id="indent"><i class="fas fa-indent"></i> Увеличить отступ</a></li>
					<li><a href="javascript:void(0)" title="Уменьшить отступ" id="outdent"><i class="fas fa-outdent"></i> Уменьшить отступ</a></li>
				</ul>
			</div>
			<div class="separator-tools" aria-orientation="vertical"></div>
		`;
	}

	/**
	 *
	 * @static
	 *
	 * @returns {String}
	 */
	static blockSeven() {
		return `
			<button type="button" class="setting-red-bth tools-bth-last">
				<i class="fas fa-cog" aria-hidden="true"></i>
				<span class="tooltip-tools">Переключить режим работы редактора</span>
			</button>
		`;
	}

}
