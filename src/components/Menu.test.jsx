import { mount } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HomebrewMenu } from "./Menu";
import { act } from "react-dom/test-utils";


describe("Menu component", () => {
	it("renders without crashing", async () => {
		// ToDo: move to global mocks
		window.chooseFileSystemEntries = jest.fn().mockImplementation(async () => {
			return {
				getEntries: () => [],
			};
		});
		const component = mount(
			<RecoilRoot>
				<MemoryRouter>
					<HomebrewMenu />
				</MemoryRouter>
			</RecoilRoot>
		);
		await act(async () => { 
			component.find("#fs").simulate("click");
		});
	});
});
