import * as fs from "fs";
import * as path from "path";
import { Xml } from "./";

// ToDo: mock fs per https://jestjs.io/docs/en/manual-mocks
const file = path.join(__dirname, "./__mocks__", "GuavaMilkshake.xml");
const content = fs.readFileSync(file).toString();

describe("XML utilities work", () => {
	it("parses XML string content", () => {
		const parsed = Xml.parse(content);
		expect(parsed).toBeInstanceOf(Document);
	});

	it("parses XML string to object", () => {
		const obj = Xml.parseXmlStringToObject(content);
		expect(typeof obj).toBe("object");
		const recipe = obj.recipes.recipe;
		expect(recipe.name).toBe("Guava Milkshake");
		expect(recipe.version).toBe("1");
	});
});
