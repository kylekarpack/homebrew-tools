import React, { useMemo } from "react";
import Table from "../components/Table";
import { yeasts } from "../data";

export function Yeasts() {
	const columns = useMemo(
		() => [
			{
				Header: "Name",
				accessor: "name",
			},
			{
				Header: "Lab",
				accessor: "lab",
			},
			{
				Header: "Form",
				accessor: "form",
			},
			{
				Header: "Temp",
				accessor: "temp",
			},
			{
				Header: "Att",
				accessor: "attenuationPercent",
			},
			{
				Header: "Floc",
				accessor: "flocculation",
			},
		],
		[]
	);

	return (
		<Table
			columns={columns}
			data={yeasts}
			pagination={true}
			filterColumn="name"
		/>
	);
}
