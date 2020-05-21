import { Xml } from ".";

export default class FileSystem {

	static async open() {
		const files = [];
		let fileHandle;
		try {
			fileHandle = await window.chooseFileSystemEntries({
				type: "open-directory",
			});
			const entries = await fileHandle.getEntries();
			for await (const entry of entries) {
				if (entry.isFile && entry.name?.endsWith(".xml")) {
					const file = await entry.getFile();
					const contents = await file.text();
					const recipe = Xml.parseXmlStringToObject(contents)?.recipes.recipe;
					console.warn(recipe);
					files.push({
						entry,
						file,
						contents,
						recipe
					});
				}
			}
			return files;
		} catch (e) {
			console.log(e);
			//alert("Sorry, your browser doesn't support local filesystem");
		}
	}
}