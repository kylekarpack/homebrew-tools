import { shallow } from "enzyme";
import React from "react";
import { Recipe } from "./Recipe";

describe("Recipe component", () => {
	it("renders without crashing", () => {
		shallow(<Recipe />);
	});
});