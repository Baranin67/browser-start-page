import { v4 } from 'uuid';

export default class Bookmark {
	constructor(title, url, id = undefined) {
		this.id = id || v4();
		this.title = title;
		this.url = url;
	}

	getID() {
		return this.id;
	}

	getTitle() {
		return this.title;
	}

	getURL() {
		return this.url;
	}

	setID(newID) {
		this.id = newID;
	}

	setTitle(newTitle) {
		this.title = newTitle;
	}

	setURL(newURL) {
		this.url = newURL;
	}
}