<?php

namespace Engine\core;

/**
 * Interface LoggerParser
 * интерфейс для класса Parser
 *
 * @file /example/Parser.php
 * @package Engine\core
 */
interface LoggerParser {

	/**
	 *
	 * @param $content
	 * @return string|string[]|null
	 */
	public static function register($content);

}

/**
 * Class Parser
 *
 * @package Engine\core
 */
class Parser implements LoggerParser {

	/**
	 *
	 * @param $content
	 * @return string|string[]|null
	 */
	public static function register($content) {

		$content = htmlspecialchars($content);

		$search = [
			'/\[b\](.*?)\[\/b\]/is',
			'/\[i\](.*?)\[\/i\]/is',
			'/\[u\](.*?)\[\/u\]/is',

			'/\[line\]/is',

			'/\[h1\](.*?)\[\/h1\]/is',
			'/\[h2\](.*?)\[\/h2\]/is',
			'/\[h3\](.*?)\[\/h3\]/is',

			'/\[h4\](.*?)\[\/h4\]/is',
			'/\[h5\](.*?)\[\/h5\]/is',
			'/\[h6\](.*?)\[\/h6\]/is',

			'/\[img\](.*?)\[\/img\]/is',

			'/\[url\](.*?)\[\/url\]/is',
			'/\[url\=(.*?)\](.*?)\[\/url\]/is',

			'/\[center\](.*?)\[\/center\]/is',
			'/\[left\](.*?)\[\/left\]/is',
			'/\[right\](.*?)\[\/right\]/is',

			'/\[code\](.*?)\[\/code\]/is',

			'/\[indent\](.*?)\[\/indent\]/is',

			'/\[list\](.*?)\[\/list\]/is',
			'/\[list\=(.*?)](.*?)\[\/list\]/is',
			'/\[$\](.*?)\[\/$\]/is',
		];

		$replace = [
			'<strong>$1</strong>',
			'<em>$1</em>',
			'<u>$1</u>',

			'<hr />',

			'<h1>$1</h1>',
			'<h2>$1</h2>',
			'<h3>$1</h3>',
			'<h4>$1</h4>',
			'<h5>$1</h5>',
			'<h6>$1</h6>',

			'<img src="$1" />',

			'<a href="$1">$1</a>',
			'<a href="$1">$2</a>',

			'<div align="center">$1</div>',
			'<div align="left">$1</div>',
			'<div align="right">$1</div>',

			'<pre><code>$1</code></pre>',

			'<blockquote><div>$1</div></blockquote>',

			'<ul>$1</ul>',
			'<ul type="$1">$2</ul>',
			'<li>$1</li>',
		];

		$content = nl2br($content);

		$content = preg_replace($search, $replace, $content);

		return $content;

	}

}
