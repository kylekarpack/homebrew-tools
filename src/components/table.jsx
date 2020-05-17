import React, { useState } from "react";
import { useFilters, useSortBy, useTable } from "react-table";

export default function Table({ columns, data }) {
	const [filterInput, setFilterInput] = useState("");

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		setFilter,
	} = useTable({ columns, data }, useFilters, useSortBy);

	const handleFilterChange = (e) => {
		const value = e.target.value || undefined;
		setFilter("grain", value);
		setFilterInput(value);
	};

	return (
		<>
			<br />
			<p className="control has-icons-left">
				<input
					className="input"
					placeholder="Search"
					value={filterInput}
					onChange={handleFilterChange}
				/>
				<span className="icon is-small is-left">
					<i className="fas fa-search"></i>
				</span>
			</p>
			<table
				{...getTableProps()}
				className="table is-bordered is-striped is-fullwidth">
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th
									{...column.getHeaderProps(column.getSortByToggleProps())}
									className={
										column.isSorted
											? column.isSortedDesc
												? "sort-desc"
												: "sort-asc"
											: ""
									}>
									{column.render("Header")}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
