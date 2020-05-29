import { shallow } from "enzyme";
import React from "react";
import Stats, { HeadingItem } from "./Stats";

describe("Stats display component", () => {
	it("renders without crashing", () => {
		shallow(<Stats />);
	});

	it("renders heading component without crashing", () => {
		shallow(<HeadingItem text="test" value="test value" />);
	});
});
