import { shallow } from "enzyme";
import React from "react";
import { RecipeList } from "./RecipeList";

describe("Recipe list component", () => {
	it("renders without crashing", () => {
		shallow(<RecipeList />);
	});
});
