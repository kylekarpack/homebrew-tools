
import { observable, decorate, action } from "mobx";

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

	setRandom() {
		this.random = Math.random();
	}

	random = Math.random();
}

export default decorate(FileStore, {
	files: observable.shallow,
	clearFiles: action,
	addFile: action,
	setFiles: action,
	setRandom: action
});