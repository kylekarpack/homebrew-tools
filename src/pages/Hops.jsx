import React, { useMemo } from "react";
import Table from "../components/Table";
import { hops } from "../data";

export function Hops() {
	const columns = useMemo(
		() => [
			{
				Header: "Name",
				accessor: "hop",
			},
			{
				Header: "Origin",
				accessor: "origin",
			},
			{
				Header: "Type",
				accessor: "type",
			},
			{
				Header: "A",
				accessor: "alpha",
			},
			{
				Header: "B",
				accessor: "beta",
			},
		],
		[]
	);

	return (
		<Table columns={columns} data={hops} pagination={true} filterColumn="hop" />
	);
}
