import { shallow } from "enzyme";
import React from "react";
import Table from "./Table";

describe("Table component", () => {
	it("renders without crashing", () => {
		const columns = [];
		shallow(<Table columns={columns} data={[]} />);
	});
});
