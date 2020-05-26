import { shallow } from "enzyme";
import React from "react";
import { Fermentables } from "./Fermentables";

describe("Fermentables component", () => {
	it("renders without crashing", () => {
		shallow(<Fermentables />);
	});
});