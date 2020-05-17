import React from "react";
import Table from "../Table";

export default function RecipeFermentables({ recipe }) {
	console.log(recipe.fermentables);

	const columns = [
		{
			Header: "Amount",
			accessor: "amount"
		},
		{
			Header: "Name",
			accessor: "name"
		}
	];

	return <>
		<h4 className="is-3">Fermentables</h4>
		<Table columns={columns} data={recipe.fermentables} />
	</>;

}