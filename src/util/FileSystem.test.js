import { FileSystem } from "./";

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
});
