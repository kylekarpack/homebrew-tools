import { shallow } from "enzyme";
import React from "react";
import RecipeMiscs from "./RecipeMiscs";

describe("Recipe miscellaneous list component", () => {
	it("renders without crashing", () => {
		const recipe = {
			miscs: []
		};
		shallow(<RecipeMiscs recipe={recipe} />);
	});
});