import { Xml } from "./";
import raw from "raw.macro";

const content = raw("../../recipes/GuavaMilkshake.xml");

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
