import React, { useMemo } from "react";
import Table from "../components/Table";
import { hops } from "../data";

export function Hops() {
	const columns = useMemo(
		() => [
			{
				title: "Name",
				dataIndex: "hop",
			},
			{
				title: "Origin",
				dataIndex: "origin",
			},
			{
				title: "Type",
				dataIndex: "type",
			},
			{
				title: "A",
				dataIndex: "alpha",
			},
			{
				title: "B",
				dataIndex: "beta",
			},
		],
		[]
	);

	return <Table columns={columns} data={hops} pagination={true} />;
}
