import { shallow } from "enzyme";
import React from "react";
import { Fermentables, ColorCell } from "./Fermentables";

describe("Fermentables component", () => {
	it("renders without crashing", () => {
		shallow(<Fermentables />);
	});

	it("renders color cell", () => {
		shallow(<ColorCell cell={{ value: "#ffffff" }} />);
	});
});