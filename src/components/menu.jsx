import React, { Component } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import { fermentables, yeast, hops } from "../data";

export default class HomebrewMenu extends Component {
	state = { activeItem: 'inbox' }

	handleItemClick = (e, { name }) => this.setState({ activeItem: name })

	render() {
		const { activeItem } = this.state

		return (
			<Menu size='large' vertical style={{ position:"sticky", top: 0 }}>
				<Menu.Item name='recipes' active={activeItem === 'recipes'} onClick={this.handleItemClick}>
					<Label color='teal'>1</Label>
					Recipes
        		</Menu.Item>

				<Menu.Item name='fermentables' active={activeItem === 'spam'} onClick={this.handleItemClick}>
					<Label>{fermentables.length}</Label>
					Fermentables
       			</Menu.Item>

				<Menu.Item name='yeast' active={activeItem === 'yeast'} onClick={this.handleItemClick}>
					<Label>{yeast.length}</Label>
					Yeasts
        		</Menu.Item>

				<Menu.Item name='hops' active={activeItem === 'hops'} onClick={this.handleItemClick}>
					<Label>{hops.length}</Label>
					Hops
        		</Menu.Item>

				<Menu.Item>
					<Input icon='search' placeholder='Search items...' />
				</Menu.Item>
			</Menu>
		)
	}
}
