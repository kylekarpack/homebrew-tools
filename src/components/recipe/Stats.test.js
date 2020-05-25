import { shallow } from "enzyme";
import React from "react";
import Stats from "./Stats";

describe("Stats display component", () => {
	it("renders without crashing", () => {
		shallow(<Stats />);
	});
});