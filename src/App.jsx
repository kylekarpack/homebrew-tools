import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import HomebrewMenu from "./components/menu";
import Recipe from "./components/recipe";
import HomebrewTable from "./components/table";

export default function App() {

	const [state, setState] = useState({ recipe: null });

	const handleRecipe = (recipe) => {
		setState({ recipe: recipe });
	};

	return (
		<Router>
			<div className="App">
				<div className="columns">
					<div className="column">
						<HomebrewMenu></HomebrewMenu>
						<div>
							<div className="column">
								<Route path="/recipe" component={Recipe}></Route>
								<Route path="/fermentables" component={HomebrewTable}></Route>
								{/* <HomebrewUploader onRecipeSelected={handleRecipe}></HomebrewUploader>
							<HomebrewTable data={this.state.recipe ? this.state.recipe.fermentables.fermentable : []}></HomebrewTable> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
}
