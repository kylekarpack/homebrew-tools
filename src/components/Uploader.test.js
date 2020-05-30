import { shallow, mount } from "enzyme";
import React from "react";
import Uploader, { fileChange } from "./Uploader";

describe("Uploader component", () => {

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

	it("renders without crashing", () => {
		shallow(<Uploader />);
	});

	it("triggers file logic on input change change", () => {
		const handleChangeSpy = jest.fn();
		handleChangeSpy.mockImplementation(() => {});
		const component = mount(<Uploader onLoad={handleChangeSpy} />);
		expect(handleChangeSpy).not.toHaveBeenCalled();
		component.find(".file-input").simulate("change", event);
		setTimeout(() => {
			expect(handleChangeSpy).toHaveBeenCalledTimes(1);
		});
	});

	it.skip("loads a file", () => {
		const fn = jest.fn();
		const readAsText = jest.spyOn(FileReader.prototype, "readAsText");
		fileChange(event, fn);
		expect(readAsText).toBeCalled();
	});
});
