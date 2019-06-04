import React, { Component } from "react";
import { Header, Pagination, Table } from "semantic-ui-react";
import fermentables from "../data/fermentables";
import GrainColor from "./grain/grain-color";

export default class HomebrewTable extends Component {
	state = {
		column: null,
		data: fermentables,
		direction: null,
		recipe: null,
		page: {
			size: 10,
			activePage: 1,
			total: fermentables.length
		}
	}

	handleSort = clickedColumn => () => {
		const { column, data, direction } = this.state;

		if (column !== clickedColumn) {
			this.setState({
				column: clickedColumn,
				data: data.sort((a, b) => a[clickedColumn] - b[clickedColumn]),
				direction: "ascending",
			});

			return;
		}

		this.setState({
			data: data.reverse(),
			direction: direction === "ascending" ? "descending" : "ascending"
		});
	}

	handleSearch = (e) => {
		const newData = fermentables.filter(el => {
			for (let key in el) {
				if (typeof el[key] === "string") {
					if (el[key].toLowerCase().includes(e.target.value.toLowerCase())) {
						return true;
					}
				}
			}
			return false;
		});

		this.setState({
			data: newData,
			page: {
				...this.state.page,
				total: newData.length
			}
		});
	}

	handlePaginationChange = (e, { activePage }) => {
		this.setState({
			page: {
				...this.state.page,
				activePage: activePage
			}
		});
	}

	render() {
		const { column, direction } = this.state;

		return (
			<>
				<br />
				<div className="ui icon input">
					<input type="text" onKeyUp={this.handleSearch} placeholder="Search..." /><i
						aria-hidden="true"
						className="search icon"
					></i>
				</div>
				<Table sortable striped>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell
								sorted={column === "grain" ? direction : null}
								onClick={this.handleSort("grain")}
							>
								Name
							</Table.HeaderCell>
							<Table.HeaderCell
								sorted={column === "color" ? direction : null}
								onClick={this.handleSort("color")}
							>
								Color
							</Table.HeaderCell>
							<Table.HeaderCell
								sorted={column === "color" ? direction : null}
								onClick={this.handleSort("color")}
							>
								Origin
							</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{this.state.data.slice((this.state.page.activePage - 1) * this.state.page.size, ((this.state.page.activePage - 1) * this.state.page.size) + this.state.page.size).map((row, i) => (
							<Table.Row key={i}>
								<Table.Cell>
									<Header as='h4'>
										<Header.Content>
											{row.grain}
											<Header.Subheader>{row.origin}</Header.Subheader>
										</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>
									<Header as='h4' image>
										<GrainColor color={row.color}></GrainColor>
										<Header.Content>
											&nbsp; {row.color}
										</Header.Content>
									</Header>
								</Table.Cell>
								<Table.Cell>
									{row.notes}
								</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table>
				<Pagination
					activePage={this.state.page.activePage}
					boundaryRange={1}
					onPageChange={this.handlePaginationChange}
					siblingRange={1}
					totalPages={Math.ceil(this.state.page.total / this.state.page.size)}
					size="mini"
				/>
			</>
		);
	}
}
