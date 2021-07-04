/* eslint-env node, mocha, es6 */

/**
 * @module engine/utils/other
 */

'use strict';

export default class {

	/**
	 *
	 * @static
	 *
	 * @param {*} vars
	 * @returns {boolean}
	 */
	static isset(vars) {
		return typeof vars !== 'undefined' && vars !== null;
	}

	/**
	 *
	 * @static
	 *
	 * @param {*} vars
	 * @returns {boolean}
	 */
	static empty(vars) {
		return typeof vars === 'undefined' && vars === null
	}

	/**
	 *
	 * @static
	 *
	 * @param {Node|HTMLElement} parent
	 * @param {Node|HTMLElement} node
	 * @param {Node|HTMLElement} referenceNode
	 */
	static insertAfter(parent, node, referenceNode) {
		parent.insertBefore(node, referenceNode.nextSibling);
	}

	/**
	 *
	 * @static
	 *
	 * @param {Array} list
	 * @returns {*}
	 */
	static getRandomItem(list){
		return list[Math.floor(Math.random() * (list.length))];
	}

	/**
	 *
	 * @static
	 *
	 * @param {Array} a
	 * @param {Array} b
	 * @returns {*[]}
	 */
	static unionArray(a, b) {
		return Array.from(new Set([...a, ...b]));
	}

	/**
	 *
	 * @static
	 *
	 * @param {Array} a
	 * @param {Array} b
	 * @returns {*[]}
	 */
	static intersection(a, b) {
		return a.filter(Set.prototype.has, new Set(b))
	}

	/**
	 *
	 * @static
	 *
	 * @param {Object} obj
	 * @param {Object} obj2
	 * @returns {Object}
	 */
	static objectAssign(obj, obj2) {
		for (let key in obj2) {
			obj[key] = obj2[key];
		}

		return obj;
	}

	/**
	 *
	 * @static
	 *
	 * @param {Array} array
	 * @param {Function} callback
	 */
	static cycleArray(array, callback) {
		Array.from({length: array.length}, (v, k) => {
			callback(v, k);
		});
	}

	/**
	 *
	 * @static
	 *
	 * @param {Array} array
	 * @param {String|Number|Function} element
	 * @returns {boolean}
	 */
	static contains(array, element) {
		return array.indexOf(element) !== -1;
	}

	/**
	 *
	 * @static
	 *
	 * @param {Object} obj
	 * @param {Array|Object} attr
	 * @returns {boolean}
	 */
	static omit(obj, attr) {
		return delete obj[attr];
	}

	/**
	 *
	 * @static
	 *
	 * @param {Number} min
	 * @param {Number} max
	 * @returns {Number}
	 */
	static rand(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	/**
	 *
	 * @static
	 *
	 * @param {Object} obj
	 * @param {String|Array} attr
	 */
	static pluck(obj, attr) {
		return obj.map(book => book[attr]);
	}

	/**
	 *
	 * @static
	 *
	 * @param {String} string
	 * @returns {string}
	 */
	static capitalize(string) {
		return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
	}

	/**
	 *
	 * @static
	 *
	 * @param {Object} obj
	 * @param {String} path
	 * @returns {*}
	 */
	static get(obj, path) {
		if (typeof obj === 'undefined' || obj === null) {
			return;
		}

		path = path.split(/[\.\[\]\"\']{1,2}/);

		for (let i = 0, l = path.length; i < l; i += 1) {
			if (path[i] !== '') {
				obj = obj[path[i]];
				if (typeof obj === 'undefined' || obj === null) {
					return;
				}
			}
		}

		return obj;
	}

	/**
	 *
	 * @static
	 *
	 * @param {Array} array
	 * @param {Function} callback
	 * @returns {*}
	 *
	static each(array, callback) {
		if (Array.isArray(array)) {
			[...array].forEach(callback);
		} else {
			for (let key in array) {
				if (callback.call(array[key], key, array[key]) === false) {
					return array;
				}
			}
		}
	}*/

	/**
	 *
	 * @static
	 *
	 * @param {*} obj
	 * @returns {any}
	 */
	static type(obj) {
		return obj === null ? String(obj) : {}[toString.call(obj)] || 'object'
	}

	/**
	 *
	 * @static
	 *
	 * @param {String} str
	 * @returns {void|*|string}
	 */
	static camelize(str){
		return str.replace(/-+(.)?/g, function (match, chr) {
			return chr ? chr.toUpperCase() : '';
		});
	}

	/**
	 *
	 * @static
	 *
	 * @param {Object} obj
	 * @returns {boolean}
	 */
	static isWindow(obj) {
		return obj !== null && obj === obj.window;
	}

	/**
	 *
	 * @static
	 *
	 * @param {Array|[]} obj
	 * @returns {boolean}
	 */
	static likeArray(obj) {
		let length = !!obj && 'length' in obj && obj.length,
			type = this.type(obj);

		return 'function' !== type && !this.isWindow(obj) && (
			'array' === type || length === 0 ||
			(typeof length == 'number' && length > 0 && (length - 1) in obj)
		)
	}

	/**
	 *
	 * @static
	 *
	 * @param {Array|[]} elements
	 * @param {Function} callback
	 * @returns {*}
	 */
	static each(elements, callback){
		if (this.likeArray(elements)) {
			for (let i = 0; i < elements.length; i++)
				if (callback.call(elements[i], i, elements[i]) === false)
					return elements;
		} else {
			for (let key in elements)
				if (callback.call(elements[key], key, elements[key]) === false)
					return elements;
		}

		return elements;
	}

	/**
	 *
	 * @param {Array|Object} iter
	 * @returns {IterableIterator<*>}
	 */
	static *generator(iter = []) {
		try {
			for (let index in iter) {
				if (iter.hasOwnProperty(index)) {
					yield iter[index];
				}
			}
		} catch (_err) {}
	}

}
