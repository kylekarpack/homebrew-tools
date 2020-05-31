import { shallow, mount } from "enzyme";
import React from "react";
import Uploader, { fileChange } from "./Uploader";

describe("Uploader component", () => {

	const result = `<?xml version="1.0" encoding="UTF-8"?>
	<RECIPES>
		<RECIPE>
			<NAME>Guava Milkshake</NAME>
		</RECIPE>
	</RECIPES>`;
	const blob = new Blob([result], { type: "text/xml" });
	const event = {
		target: {
			files: [blob],
			result: result,
		},
	};

	it("renders without crashing", () => {
		shallow(<Uploader />);
	});

	it("triggers file logic on input change change", async () => {
		const handleChangeSpy = jest.fn();
		handleChangeSpy.mockImplementation(() => {});
		const component = mount(<Uploader onLoad={handleChangeSpy} />);
		expect(handleChangeSpy).not.toHaveBeenCalled();
		component.find(".file-input").simulate("change", event);
		// ToDo: remove this line
		await fileChange(event, handleChangeSpy);
		expect(handleChangeSpy).toHaveBeenCalled();
	});

	it("loads a file", async () => {
		const fn = jest.fn();
		const readAsText = jest.spyOn(FileReader.prototype, "readAsText");
		await fileChange(event, fn);
		expect(readAsText).toHaveBeenCalledTimes(1);
	});
});
