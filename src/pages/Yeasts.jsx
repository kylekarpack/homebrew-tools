import React, { useMemo } from "react";
import Table from "../components/Table";
import { yeasts } from "../data";

export function Yeasts() {
	const columns = useMemo(
		() => [
			{
				title: "Name",
				dataIndex: "name",
			},
			{
				title: "Lab",
				dataIndex: "lab",
			},
			{
				title: "Form",
				dataIndex: "form",
			},
			{
				title: "Temp",
				dataIndex: "temp",
			},
			{
				title: "Att",
				dataIndex: "attenuationPercent",
			},
			{
				title: "Floc",
				dataIndex: "flocculation",
			},
		],
		[]
	);

	return (
		<Table
			columns={columns}
			data={yeasts}
			pagination={true}
		/>
	);
}
