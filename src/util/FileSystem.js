import { Xml } from ".";

export default class FileSystem {
	files = [];

	static async open() {
		window.fs = FileSystem;
		let fileHandle;
		try {
			fileHandle = await window.chooseFileSystemEntries({
				type: "open-directory",
			});
			const entries = await fileHandle.getEntries();
			this.files = [];
			for await (const entry of entries) {
				if (entry.isFile && entry.name?.endsWith(".xml")) {
					const file = await entry.getFile();
					const contents = await file.text();
					const recipe = Xml.parseXmlStringToObject(contents)?.recipes.recipe;
					console.warn(recipe);
					this.files.push({
						entry,
						file,
						contents,
						recipe
					});
				}
			}
		} catch (e) {
			console.log(e);
			//alert("Sorry, your browser doesn't support local filesystem");
		}
	}
}
