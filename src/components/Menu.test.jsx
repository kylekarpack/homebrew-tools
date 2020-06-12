import { shallow } from "enzyme";
import React from "react";
import { HomebrewMenu } from "./Menu";
import { RecoilRoot } from "recoil";

describe("Menu component", () => {
	it("renders without crashing", () => {
		// ToDo: move to global mocks
		window.chooseFileSystemEntries = jest.fn().mockImplementation(async () => {
			return {
				getEntries: () => [],
			};
		});
		shallow(
			<RecoilRoot>
				<HomebrewMenu />
			</RecoilRoot>
		);
	});
});
