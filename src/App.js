import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Grid } from 'semantic-ui-react'
import { BrowserRouter as Router, Route } from "react-router-dom";


import HomebrewMenu from "./components/menu";
import HomebrewTable from "./components/table";
import HomebrewUploader from "./components/uploader";
import Recipe from './components/recipe';


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
			<Router>
				<div className="App">
					<Grid>
						<Grid.Row>
							<Grid.Column width={3}>
								<HomebrewMenu></HomebrewMenu>
							</Grid.Column>
							<Grid.Column width={13}>
								<Route path="/recipe" component={Recipe}></Route>
								<Route path="/fermentables" component={HomebrewTable}></Route>
								{/* <HomebrewUploader onRecipeSelected={this.handleRecipe}></HomebrewUploader>
								<HomebrewTable data={this.state.recipe ? this.state.recipe.fermentables.fermentable : []}></HomebrewTable> */}
								
							</Grid.Column>
						</Grid.Row>

					</Grid>

				</div>
			</Router>
		);
	}

}

export default App;
