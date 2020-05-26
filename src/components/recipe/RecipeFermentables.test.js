import { shallow } from "enzyme";
import React from "react";
import RecipeFermentables from "./RecipeFermentables";

describe("Recipe fermentables list component", () => {
	it("renders without crashing", () => {
		const recipe = {
			fermentables: []
		};
		shallow(<RecipeFermentables recipe={recipe} />);
	});
});