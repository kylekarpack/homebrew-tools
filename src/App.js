import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'


import HomebrewMenu from "./components/menu";
import HomebrewTable from "./components/table";
import HomebrewUploader from "./components/uploader";


export class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			recipe: null
		};
	}

	handleRecipe = (recipe) => {
		console.warn(recipe);
		this.setState({ recipe: recipe });
	}

	render() {
		return (
			<div className="App">
				<Grid>
					<Grid.Row>
						<Grid.Column width={3}>
							<HomebrewMenu></HomebrewMenu>
						</Grid.Column>
						<Grid.Column width={13}>
							<HomebrewUploader onRecipeSelected={this.handleRecipe}></HomebrewUploader>
							<HomebrewTable data={this.state.recipe ? this.state.recipe.fermentables.fermentable : []}></HomebrewTable>
							
						</Grid.Column>
					</Grid.Row>

				</Grid>

			</div>
		);
	}

}

export default App;
