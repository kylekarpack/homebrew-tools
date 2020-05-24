import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomebrewMenu from "./components/Menu";
// import Recipe from "./components/Recipe";
import { Fermentables } from "./pages/Fermentables";
import { Hops } from "./pages/Hops";
import { Yeasts } from "./pages/Yeasts";
import RecipeList from "./pages/RecipeList";

export default function App() {
	return (
		<Router>
			<div className="container">
				<div className="columns">
					<div className="column is-one-fifth">
						<HomebrewMenu></HomebrewMenu>
					</div>
					<div className="column">
						<Route path="/recipes/:id" component={RecipeList} />
						<Route path="/recipes" component={RecipeList} />
						<Route path="/fermentables" component={Fermentables} />
						<Route path="/yeasts" component={Yeasts} />
						<Route path="/hops" component={Hops} />
					</div>
				</div>
			</div>
		</Router>
	);
}
