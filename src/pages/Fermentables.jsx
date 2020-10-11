import React, { useMemo } from "react";
import GrainColor from "../components/grain/GrainColor";
import Table from "../components/Table";
import { fermentables } from "../data";

export const ColorCell = (value) => {
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
				title: "Grain",
				dataIndex: "grain",
			},
			{
				title: "Color",
				dataIndex: "color",
				render: ColorCell,
			},
			{
				title: "Origin",
				dataIndex: "origin",
			},
		],
		[]
	);

	return (
		<Table
			columns={columns}
			data={fermentables}
			pagination={true}
		/>
	);
};
