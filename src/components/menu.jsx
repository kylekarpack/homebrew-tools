import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Input, Label, Menu } from "semantic-ui-react";
import { fermentables, yeast, hops } from "../data";

export default class HomebrewMenu extends Component {

	render() {
		return (
			<Menu size='large' vertical style={{ position: "sticky", top: 0 }}>
				<Menu.Item as={NavLink} to="/recipe">
					<Label color='teal'>1</Label>
					Recipes
				</Menu.Item>

				<Menu.Item as={NavLink} to="/fermentables">
					<Label>{fermentables.length}</Label>
					Fermentables
				</Menu.Item>

				<Menu.Item as={NavLink} to="/yeasts">
					<Label>{yeast.length}</Label>
					Yeasts
				</Menu.Item>

				<Menu.Item as={NavLink} to="hops">
					<Label>{hops.length}</Label>
					Hops
				</Menu.Item>

				<Menu.Item>
					<Input icon='search' placeholder='Search items...' />
				</Menu.Item>
			</Menu>
		);
	}
}
