import { shallow } from "enzyme";
import React from "react";
import Table from "./Table";

describe("Table component", () => {
	it("renders without crashing", () => {
		const columns = [{ title: "Test", dataIndex: "test" }];
		shallow(<Table columns={columns} data={[{ test: "test" }]} />);
	});
});
