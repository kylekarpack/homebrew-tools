import { observer } from "mobx-react-lite";
import React, { useMemo } from "react";
import Table from "../components/Table";
import { useStores } from "../hooks/useStores";

let RecipeList = () => {
	const { fileStore } = useStores();

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

	const files = fileStore.files || [];

	return (
		<div className="section">
			<Table
				columns={columns}
				data={files.map((el) => el.recipe) || []}
				className="is-hoverable"
			/>
		</div>
	);
};

RecipeList = observer(RecipeList);

export { RecipeList };
