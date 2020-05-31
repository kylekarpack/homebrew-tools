import FileStore from "./FileStore";

describe("FileStore store", () => {
	it("initializes with empty files", () => {
		const fs = new FileStore();
		expect(fs.files.length).toBe(0);
	});

	it("adds and clears files", () => {
		const fs = new FileStore();
		fs.addFile({ name: "test" });
		expect(fs.files.length).toBe(1);
		expect(fs.files[0].name).toBe("test");
		expect(fs.files[0]).toBe(fs.getFile("test"));
		fs.clearFiles();
		expect(fs.files.length).toBe(0);
	});

	it("sets files", () => {
		const fs = new FileStore();
		fs.setFiles([{ name: "test" }, { name: "test2" }]);
		expect(fs.files.length).toBe(2);
		expect(fs.files[1].name).toBe("test2");
		fs.clearFiles();
		expect(fs.files.length).toBe(0);
	});

});