import { shallow } from "enzyme";
import React from "react";
import { Yeasts } from "./Yeasts";

describe("Yeasts component", () => {
	it("renders without crashing", () => {
		shallow(<Yeasts />);
	});
});