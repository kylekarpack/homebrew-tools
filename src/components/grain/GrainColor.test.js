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

	it("handles null values", () => {
		expect(srmToHex(null)).toEqual("#f0efb5");
		expect(srmToHex(undefined)).toEqual("#f0efb5");
	});

	const expectations = new Map([
		[-10, "#000000"],
		[0, "#f0efb5"],
		[0.5, "#f0efb5"],
		[1.5, "#e9d76c"],
		[3, "#e1c336"],
		[5, "#d4ac00"],
		[8, "#c38e0d"],
		[10, "#b87b1c"],
		[15, "#9d531f"],
		[20, "#85341d"],
		[25, "#701e18"],
		[30, "#5c1012"],
		[40, "#3c0c11"],
		[100, "#110c11"],
		[Infinity, "#110c11"]
	]);

	for (const [srm, hex] of expectations.entries()) {
		it(`converts ${srm} srm to ${hex} hex`, () => {
			expect(srmToHex(srm)).toEqual(hex);
		});
	}
});
