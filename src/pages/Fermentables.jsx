import React, { useMemo } from "react";
import GrainColor from "../components/grain/GrainColor";
import Table from "../components/table";
import { fermentables } from "../data";

export function Fermentables() {
	const columns = useMemo(
		() => [
			{
				Header: "Grain",
				accessor: "grain",
			},
			{
				Header: "Color",
				accessor: "color",
				Cell: ({ cell: { value } }) => {
					return <><GrainColor color={value} /> {value}</>;
				}
			},

			{
				Header: "Origin",
				accessor: "origin",
			}
		],
		[]
	);

	return <Table columns={columns} data={fermentables} />;

	// 	return 	<Table sortable striped>
	// 	<Table.Body>
	// 		{state.data
	// 			.slice(
	// 				(state.page.activePage - 1) * state.page.size,
	// 				(state.page.activePage - 1) * state.page.size + state.page.size
	// 			)
	// 			.map((row, i) => (
	// 				<Table.Row key={i}>
	// 					<Table.Cell>
	// 						<Header as="h4">
	// 							<Header.Content>
	// 								{row.grain}
	// 								<Header.Subheader>{row.origin}</Header.Subheader>
	// 							</Header.Content>
	// 						</Header>
	// 					</Table.Cell>
	// 					<Table.Cell>
	// 						<Header as="h4" image>
	// 							<GrainColor color={row.color}></GrainColor>
	// 							<Header.Content>&nbsp; {row.color}</Header.Content>
	// 						</Header>
	// 					</Table.Cell>
	// 					<Table.Cell>{row.notes}</Table.Cell>
	// 				</Table.Row>
	// 			))}
	// 	</Table.Body>
	// </Table>
	// <Pagination
	// 	activePage={state.page.activePage}
	// 	boundaryRange={1}
	// 	onPageChange={this.handlePaginationChange}
	// 	siblingRange={1}
	// 	totalPages={Math.ceil(state.page.total / state.page.size)}
	// 	size="mini"
	// />;
}
