import React from "react";
import Table from "../Table";

export default ({ recipe }) => {
	const { miscs } = recipe;

	const columns = [
		{
			Header: "Amount",
			accessor: "amount"
		},
		{
			Header: "Name",
			accessor: "name"
		},
		{
			Header: "Type",
			accessor: "type"
		},
		{
			Header: "Use",
			accessor: "use"
		}
	];

	return <>
		<h4 className="is-3">Fermentables</h4>
		<Table columns={columns} data={miscs} />
	</>;

};