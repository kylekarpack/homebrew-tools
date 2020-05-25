import { shallow } from "enzyme";
import React from "react";
import GrainColor, { doubleToHex, srmToHex, getStyle } from "./GrainColor";

describe("Grain color component", () => {
	it("renders without crashing", () => {
		shallow(<GrainColor />);
	});
	
	it("get style returns a style object", () => {
		expect(getStyle(1)).toHaveProperty("background");
	});

	it("srm converted to hex", () => {
		expect(srmToHex(3)).toEqual("#e1c336");
	});
});