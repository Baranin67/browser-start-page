export default class Bookmark {
	id?: string;
	title: string;
	url: string;

	constructor(title: string, url: string, id?: string) {
		this.id = id;
		this.title = title;
		this.url = url;
	}

	getID(): string | undefined {
		return this.id;
	}

	getTitle(): string {
		return this.title;
	}

	getURL(): string {
		return this.url;
	}

	setID(newID: string) {
		this.id = newID;
	}

	setTitle(newTitle: string) {
		this.title = newTitle;
	}

	setURL(newURL: string) {
		this.url = newURL;
	}
}