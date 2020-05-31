import React, { useMemo } from "react";
import GrainColor from "../components/grain/GrainColor";
import Table from "../components/Table";
import { fermentables } from "../data";

export const ColorCell = ({ cell: { value } }) => {
	return (
		<>
			<GrainColor color={value} /> {value}
		</>
	);
};

export const Fermentables = () => {
	const columns = useMemo(
		() => [
			{
				Header: "Grain",
				accessor: "grain",
			},
			{
				Header: "Color",
				accessor: "color",
				Cell: ColorCell
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
};
