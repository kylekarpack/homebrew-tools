import React from "react";
import Table from "../Table";

export default ({ recipe }) => {
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

};