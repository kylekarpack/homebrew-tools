import React, { useMemo } from "react";
import { useRecoilValue } from "recoil";
import Table from "../components/Table";
import { files } from "../state/files";

export const RecipeList = () => {

	const filesValue = useRecoilValue(files);

	const columns = useMemo(
		() => [
			{
				Header: "Name",
				accessor: "name",
			},
			{
				Header: "test",
				accessor: "test",
			},
		],
		[]
	);

	return (
		<div className="section">
			<Table
				columns={columns}
				data={filesValue.map((el) => el.recipe) || []}
				className="is-hoverable"
			/>
		</div>
	);
};
