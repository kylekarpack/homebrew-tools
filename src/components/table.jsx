import _ from 'lodash'
import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'

export default class HomebrewTable extends Component {
	state = {
		column: null,
		data: this.props.data,
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
			<Table sortable celled fixed>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell
							sorted={column === 'name' ? direction : null}
							onClick={this.handleSort('name')}
						>
							Name
            			</Table.HeaderCell>
						<Table.HeaderCell
							sorted={column === 'age' ? direction : null}
							onClick={this.handleSort('age')}
						>
							Amount
            			</Table.HeaderCell>
						<Table.HeaderCell
							sorted={column === 'gender' ? direction : null}
							onClick={this.handleSort('gender')}
						>
							Origin
            			</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{_.map(this.props.data, ({ name, amount, origin }) => (
						<Table.Row key={name.text}>
							<Table.Cell>{name.text}</Table.Cell>
							<Table.Cell>{amount.text}</Table.Cell>
							<Table.Cell>{origin.text}</Table.Cell>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		)
	}
}
