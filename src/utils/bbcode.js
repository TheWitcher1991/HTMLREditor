/**
 * @module engine/utils/bbCode
 */

'use strict';

/**
 *
 * @type {Array}
 */
export let bbCodeSearch = [
	'[B]$1[/B]',
	'[I]$1[/I]',
	'[U]$1[/U]',
	'[S]$1[/S]',

	'[SPOILER]$1[/SPOILER]',
	'[CODE]$1[/CODE]',

	'[H1]$1[/H1]',
	'[H2]$1[/H2]',
	'[H3]$1[/H3]',

	'[SIZE=9]$1[/SIZE]',
	'[SIZE=10]$1[/SIZE]',
	'[SIZE=12]$1[/SIZE]',
	'[SIZE=14]$1[/SIZE]',
	'[SIZE=16]$1[/SIZE]',
	'[SIZE=18]$1[/SIZE]',
	'[SIZE=22]$1[/SIZE]',
	'[SIZE=26]$1[/SIZE]',

	'[IMG]$1[/IMG]',
	'[MEDIA]$1[/MEDIA]',

	'[QUOTE]$1[/QUOTE]',

	'[FONT=Arial]$1[/FONT]',
	'[FONT=Times New Roman]$1[/FONT]',
	'[FONT=Book Antiqua]$1[/FONT]',
	'[FONT=Courier New]$1[/FONT]',
	'[FONT=Georgia]$1[/FONT]',
	'[FONT=Trebuchet MS]$1[/FONT]',
	'[FONT=Tahoma]$1[/FONT]',
	'[FONT=Verdana]$1[/FONT]',

	'[CENTER]$1[/CENTER]',
	'[LEFT]$1[/LEFT]',
	'[RIGHT]$1[/RIGHT]',
	'[JUSTIFY]$1[/JUSTIFY]',

	'[LIST]$[/LIST]',
	'[LIST=1]$[/LIST=1]'
];

/**
 *
 * @type {Array}
 */
export let bbCodeReplace = [
	'#bold',
	'#italic',
	'#underline',
	'#strikethrough',

	'#spoiler',
	'#code',

	'#heading-1',
	'#heading-2',
	'#heading-3',

	'#size-9',
	'#size-10',
	'#size-12',
	'#size-14',
	'#size-16',
	'#size-18',
	'#size-22',
	'#size-26',

	'#image',
	'#media',

	'#quote',

	'#font-1',
	'#font-2',
	'#font-3',
	'#font-4',
	'#font-5',
	'#font-6',
	'#font-7',
	'#font-8',

	'#center',
	'#left',
	'#right',
	'#justify',

	'#listm',
	'#listn'
];
