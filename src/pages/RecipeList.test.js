import { shallow } from "enzyme";
import React from "react";
import { RecipeList } from "./RecipeList";

describe("RecipeList component", () => {
	it("renders without crashing", () => {
		shallow(<RecipeList />);
	});
});
