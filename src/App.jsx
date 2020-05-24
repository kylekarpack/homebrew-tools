import "@fortawesome/fontawesome-free/css/all.css";
import "bulma/css/bulma.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomebrewMenu from "./components/Menu";
import { Fermentables, Hops, Recipe, RecipeList, Yeasts } from "./pages";

export default function App() {
	return (
		<Router>
			<div className="container">
				<div className="columns">
					<div className="column is-one-fifth">
						<HomebrewMenu></HomebrewMenu>
					</div>
					<div className="column">
						<Switch>
							<Route path="/recipes/:id" component={Recipe} />
							<Route path="/recipes" component={RecipeList} />
							<Route path="/fermentables" component={Fermentables} />
							<Route path="/yeasts" component={Yeasts} />
							<Route path="/hops" component={Hops} />
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}
