import { shallow } from "enzyme";
import React from "react";
import GrainColor, { srmToHex, getStyle } from "./GrainColor";

describe("Grain color component", () => {
	it("renders without crashing", () => {
		shallow(<GrainColor />);
	});
	
	it("get style returns a style object", () => {
		expect(getStyle(1)).toHaveProperty("background");
	});

	it("converts 0 srm to hex", () => {
		expect(srmToHex(0)).toEqual("#f0efb5");
	});

	it("converts 0.5 srm to hex", () => {
		expect(srmToHex(0.5)).toEqual("#f0efb5");
	});

	it("converts 3 srm to hex", () => {
		expect(srmToHex(3)).toEqual("#e1c336");
	});
});