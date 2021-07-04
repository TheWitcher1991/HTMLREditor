export default class Theme {
	constructor() {
	}

	static mod(el, type) {
		if (type == 'dark') {
			document.querySelector(el).classList.add('editor-dark');
		} else if (type == 'light') {
			document.querySelector(el).classList.add('editor-light');
		}
	}
}
