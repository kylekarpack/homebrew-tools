import React, { useState } from "react";
import { useFilters, useSortBy, useTable, usePagination } from "react-table";

export default function Table({ columns, data, filterColumn, pagination }) {
	const [filterInput, setFilterInput] = useState("");

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		setFilter,
		page,
		canPreviousPage,
		canNextPage,
		pageCount,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{ columns, data, initialState: { pageIndex: 0 } },
		useFilters,
		useSortBy,
		usePagination
	);

	let start = pageIndex;
	if (pageIndex <= 1) {
		start = 2;
	} else if (pageIndex >= pageCount - 2) {
		start = pageCount - 3;
	}
	const paginationMiddle = [start - 1, start, start + 1];

	const handleFilterChange = (e) => {
		const value = e.target.value || undefined;
		setFilter(filterColumn, value);
		setFilterInput(value);
	};

	return (
		<>
			<br />
			{filterColumn ? (
				<p className="control has-icons-left" style={{ marginBottom: "1em" }}>
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
			) : null}
			<table
				{...getTableProps()}
				className="table is-bordered is-striped is-fullwidth">
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render("Header")}
									<span className="icon">
										<i
											className={`fas ${
												column.isSorted
													? column.isSortedDesc
														? "fa-sort-down"
														: "fa-sort-up"
													: "fa-sort"
											}`}></i>
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
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
			{pagination ? (
				<nav className="pagination" role="navigation" aria-label="pagination">
					<ul className="pagination-list">
						<li>
							<button
								type="button"
								onClick={() => gotoPage(0)}
								className={`pagination-link ${
									pageIndex === 0 ? "is-current" : ""
								}`}
								aria-label="Goto page 1">
								1
							</button>
						</li>
						{start > 2 ? (
							<li>
								<span className="pagination-ellipsis">&hellip;</span>
							</li>
						) : null}
						{paginationMiddle.map((i) => {
							return (
								<li key={i}>
									<button
										type="button"
										onClick={() => gotoPage(i)}
										className={`pagination-link ${
											pageIndex === i ? "is-current" : ""
										}`}
										aria-label={`Page ${i + 1}`}>
										{i + 1}
									</button>
								</li>
							);
						})}

						{start < pageCount - 3 ? (
							<li>
								<span className="pagination-ellipsis">&hellip;</span>
							</li>
						) : null}
						<li>
							<button
								type="button"
								onClick={() => gotoPage(pageCount - 1)}
								className={`pagination-link ${
									pageIndex === pageCount - 1 ? "is-current" : ""
								}`}
								aria-label="Goto last page">
								{pageCount}
							</button>
						</li>
					</ul>
					<button
						type="button"
						className="pagination-previous"
						onClick={() => previousPage()}
						disabled={!canPreviousPage}>
						Previous
					</button>
					<button
						type="button"
						className="pagination-next"
						onClick={() => nextPage()}
						disabled={!canNextPage}>
						Next page
					</button>
					<select
						className="pagination-next"
						value={pageSize}
						onChange={(e) => {
							setPageSize(Number(e.target.value));
						}}>
						{[10, 25, 50, 100].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select>
				</nav>
			) : null}
		</>
	);
}
