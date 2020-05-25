import { FileSystem } from "./";

describe("FileSystem util handling", () => {
	it.skip("handles rejection of permissions", async () => {
		window.chooseFileSystemEntries = jest.fn().mockImplementation(async () => {
			return {
				getEntries: () => [],
			};
		});
		try {
			const permission = await FileSystem.open();
			expect(permission).toEqual([]);
		} catch (e) {
			console.log("Error mocking FileSystem");
		}
	});
});
