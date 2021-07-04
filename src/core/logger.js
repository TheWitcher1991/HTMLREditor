/* eslint-env node, mocha, es6 */

/**
 * @module engine/core/namespace
 */

'use strict';

const levels = ['error', 'warn', 'log', 'info'];

let level = 'warn';

function debug(method, ...args) {
	if (levels.indexOf(method) <= levels.indexOf(level)) {
		console[method](...args);
	}
}

function namespace(ns) {
	return levels.reduce((logger, method) => {
		logger[method] = debug.bind(console, method, ns);
		return logger;
	}, {});
}

namespace.level = newLevel => {
	level = newLevel;
};

debug.level = namespace.level;

export default namespace;
