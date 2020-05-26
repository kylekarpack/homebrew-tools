import { shallow } from "enzyme";
import React from "react";
import { Hops } from "./Hops";

describe("Hops component", () => {
	it("renders without crashing", () => {
		shallow(<Hops />);
	});
});