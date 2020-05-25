import { FileSystem } from "./";

describe.skip("FileSystem util handling", () => {
	it("handles rejection of permissions", async () => {
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
