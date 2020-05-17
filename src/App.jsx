import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import HomebrewMenu from "./components/menu";
import Recipe from "./components/recipe";
import { Fermentables } from "./pages/Fermentables";
import { Hops } from "./pages/Hops";
import { Yeasts } from "./pages/Yeasts";

export default function App() {
	return (
		<Router>
			<div className="container">
				<div className="columns">
					<div className="column is-one-fifth">
						<HomebrewMenu></HomebrewMenu>
					</div>
					<div className="column">
						<Route path="/recipe" component={Recipe} />
						<Route path="/fermentables" component={Fermentables} />
						<Route path="/yeasts" component={Yeasts} />
						<Route path="/hops" component={Hops} />
						{/* <HomebrewUploader onRecipeSelected={handleRecipe}></HomebrewUploader>
							<HomebrewTable data={this.state.recipe ? this.state.recipe.fermentables.fermentable : []}></HomebrewTable> */}
					</div>
				</div>
			</div>
		</Router>
	);
}
