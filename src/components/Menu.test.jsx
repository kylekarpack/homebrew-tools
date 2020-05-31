import { shallow } from "enzyme";
import React from "react";
import { HomebrewMenu } from "./Menu";

describe("Menu component", () => {
	it("renders without crashing", () => {
		// ToDo: move to global mocks
		window.chooseFileSystemEntries = jest.fn().mockImplementation(async () => {
			return {
				getEntries: () => [],
			};
		});
		const component = shallow(<HomebrewMenu />);
		component.find("#fs").simulate("click");
	});
});
