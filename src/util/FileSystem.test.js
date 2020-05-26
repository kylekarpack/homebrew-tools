import { FileSystem } from "./";
import * as fs from "fs";
import * as path from "path";

// ToDo: mock fs per https://jestjs.io/docs/en/manual-mocks
const file = path.join(__dirname, "./__mocks__", "GuavaMilkshake.xml");
const content = fs.readFileSync(file).toString();

describe("FileSystem util handling", () => {
	it("handles rejection of permissions", async () => {
		window.chooseFileSystemEntries = jest.fn().mockImplementation(async () => {
			return {
				getEntries: () => [],
			};
		});
		const permission = await FileSystem.open();
		expect(permission).toEqual([]);
	});

	it("handles single file entries", async () => {
		window.chooseFileSystemEntries = jest.fn().mockImplementation(async () => {
			return {
				getEntries: () => [{
					isFile: true,
					name: "test.xml",
					getFile: async () => {
						return await {
							text: async () => {
								return content;
							}
						};
					}
				}]
			};
		});

		const files = await FileSystem.open();
		expect(files.length).toEqual(1);

	});

	it("handles permissions errors", async () => {
		window.chooseFileSystemEntries = jest.fn().mockImplementation(async () => {
			throw "This browser doesn't support filesystem access";
		});
		
		const files = await FileSystem.open();
		expect(files.length).toBe(0);
	});

});
