import { Layout } from "antd";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { HomebrewMenu } from "./components/Menu";
import { Fermentables, Hops, Recipe, RecipeList, Yeasts, Abv } from "./pages";

const { Content, Sider } = Layout;

export default function App() {
	return (
		<RecoilRoot>
			<Router>
				<Layout>
					<Sider width={200} className="site-layout-background">
						<HomebrewMenu />
					</Sider>
					<Layout style={{ padding: "20px" }}>
						<Content
							className="site-layout-background"
							style={{
								padding: 20,
								margin: 0,
								minHeight: 280,
							}}>
							<Switch>
								<Route path="/recipes/:id" component={Recipe} />
								<Route path="/recipes" component={RecipeList} />
								<Route path="/fermentables" component={Fermentables} />
								<Route path="/yeasts" component={Yeasts} />
								<Route path="/hops" component={Hops} />
								<Route path="/calculators/abv" component={Abv} />
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</Router>
		</RecoilRoot>
	);
}
