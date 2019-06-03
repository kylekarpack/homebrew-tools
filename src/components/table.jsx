import _ from 'lodash'
import React, { Component } from 'react'
import { Table, Header } from 'semantic-ui-react'
import fermentables from "../data/fermentables";
import GrainColor from "./grain/grain-color";

export default class HomebrewTable extends Component {
	state = {
		column: null,
		data: fermentables,
		direction: null,
		recipe: null
	}

	handleSort = clickedColumn => () => {
		const { column, data, direction } = this.state

		if (column !== clickedColumn) {
			this.setState({
				column: clickedColumn,
				data: _.sortBy(data, [clickedColumn]),
				direction: 'ascending',
			})

			return
		}

		this.setState({
			data: data.reverse(),
			direction: direction === 'ascending' ? 'descending' : 'ascending',
		})
	}

	render() {
		const { column, data, direction } = this.state

		return (
			<Table sortable celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell
							sorted={column === 'grain' ? direction : null}
							onClick={this.handleSort('grain')}
						>
							Name
            			</Table.HeaderCell>
						<Table.HeaderCell
							sorted={column === 'color' ? direction : null}
							onClick={this.handleSort('color')}
						>
							Color
            			</Table.HeaderCell>
						<Table.HeaderCell
							sorted={column === 'color' ? direction : null}
							onClick={this.handleSort('gender')}
						>
							Origin
            			</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{_.map(this.state.data, (row, i) => (
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
								<GrainColor color={row.color}></GrainColor>
								{row.color}

							</Table.Cell>
							<Table.Cell>{}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		)
	}
}
