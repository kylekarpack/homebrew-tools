import React from "react";
import Table from "../components/Table";
import { FileSystem } from "../util";

const RecipeList = () => {

	const columns = [
		{
			Header: "Name",
			accessor: "name"
		},
		{
			Header: "",
			accessor: ""
		}
	];

	return (
		<div className="section">
			Recipes here
			<Table columns={columns} data={FileSystem.files?.map(el => el.recipe) || []} />
		</div>
	);
};

export default RecipeList;
