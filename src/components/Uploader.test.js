import { shallow } from "enzyme";
import React from "react";
import Uploader from "./Uploader";

describe.skip("Uploader component", () => {
	it("renders without crashing", () => {
		shallow(<Uploader />);
	});

	it("loads a file", () => {
		const fn = jest.fn();
		const blob = new Blob();
		const event = {
			target: {
				files: [blob],
				result: `<?xml version="1.0" encoding="UTF-8"?>
				<RECIPES>
					<RECIPE>
						<NAME>Guava Milkshake</NAME>
					</RECIPE>
				</RECIPES>`,
			},
		};

		const readAsText = jest.spyOn(FileReader.prototype, "readAsText");
		//fileChange(event, fn);
		expect(readAsText).toBeCalled();
	});
});
