/**
 * @module engine/utils/mix
 */

'use strict';

/**
 * @function mix
 *
 * @param {Class|Object} baseClass
 * @param {Class|Object} mixins
 *
 * @return {Class|Object}
 */
export default function mix(baseClass, ...mixins) {
	mixins.forEach(mixin => {
		Object.getOwnPropertyNames(mixin).concat(Object.getOwnPropertySymbols(mixin))
			.forEach(key => {
				if (key in baseClass.prototype) {
					return;
				}

				const sourceDescriptor = Object.getOwnPropertyDescriptor(mixin, key);
				sourceDescriptor.enumerable = false;

				Object.defineProperty(baseClass.prototype, key, sourceDescriptor);
			});
	});
}

