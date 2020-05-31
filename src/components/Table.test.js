import { shallow } from "enzyme";
import React from "react";
import Table from "./Table";

describe("Table component", () => {
	it("renders without crashing", () => {
		const columns = [];
		shallow(<Table columns={columns} data={[]} />);
	});

	it("goes to the next page", () => {
		const component = shallow(<Table columns={[]} data={[]} pagination={true} />);
		component.find("button.pagination-next").simulate("click");
	});
});
