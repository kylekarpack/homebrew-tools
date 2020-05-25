import React, { useMemo } from "react";
import GrainColor from "../components/grain/GrainColor";
import Table from "../components/Table";
import { fermentables } from "../data";

export function Fermentables() {
	const columns = useMemo(
		() => [
			{
				Header: "Grain",
				accessor: "grain",
			},
			{
				Header: "Color",
				accessor: "color",
				Cell: ({ cell: { value } }) => {
					return (
						<>
							<GrainColor color={value} /> {value}
						</>
					);
				},
			},
			{
				Header: "Origin",
				accessor: "origin",
			},
		],
		[]
	);

	return (
		<Table
			columns={columns}
			data={fermentables}
			pagination={true}
			filterColumn="grain"
		/>
	);
}
