import React, { useState } from "react";
import { useFilters, useSortBy, useTable, usePagination } from "react-table";

export default function Table({ columns, data }) {
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

	const paginationMiddle = [pageIndex - 1, pageIndex, pageIndex + 1];

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
			<nav className="pagination" role="navigation" aria-label="pagination">
				<a
					className="pagination-previous"
					onClick={() => previousPage()}
					disabled={!canPreviousPage}>
					Previous
				</a>
				<ul className="pagination-list">
					<li>
						<a
							onClick={() => gotoPage(0)}
							className="pagination-link"
							aria-label="Goto page 1">
							1
						</a>
					</li>
					<li>
						<span className="pagination-ellipsis">&hellip;</span>
					</li>
					{paginationMiddle.map((i) => {
						return (
							<li>
								<a
									onClick={() => gotoPage(i)}
									className={`pagination-link ${
										i === pageIndex ? "is-current" : ""
									}`}
									aria-label={`Page ${i + 1}`}
									aria-current={`${i === pageIndex ? "page" : ""}`}>
									{i + 1}
								</a>
							</li>
						);
					})}

					<li>
						<span className="pagination-ellipsis">&hellip;</span>
					</li>
					<li>
						<a
							onClick={() => gotoPage(pageCount - 1)}
							className="pagination-link"
							aria-label="Goto last page">
							{pageCount}
						</a>
					</li>
				</ul>
				<a
					className="pagination-next"
					onClick={() => nextPage()}
					disabled={!canNextPage}>
					Next page
				</a>
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
		</>
	);
}
