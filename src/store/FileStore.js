import { action, decorate, observable } from "mobx";

class FileStore {
	files = [];

	clearFiles() {
		this.files = [];
	}

	addFile(file) {
		this.files.push(file);
	}

	setFiles(files) {
		this.files = files;
	}

	getFile(fileName) {
		return this.files.find((el) => el.name === fileName);
	}
}

export default decorate(FileStore, {
	files: observable.shallow,
	clearFiles: action,
	addFile: action,
	setFiles: action,
	getFile: action
});
