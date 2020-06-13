import { shallow } from "enzyme";
import React from "react";
import { RecipeList } from "./RecipeList";
import { RecoilRoot } from "recoil";

describe("Recipe list component", () => {
	it("renders without crashing", () => {
		shallow(
			<RecoilRoot>
				<RecipeList />
			</RecoilRoot>
		);
	});
});
