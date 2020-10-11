import { Layout, Menu } from "antd";
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import { HomebrewMenu } from "./components/Menu";
import logo from "./img/logo.svg";
import { Fermentables, Hops, Recipe, RecipeList, Yeasts } from "./pages";

const { Header, Content, Sider } = Layout;

export default function App() {
	return (
		<RecoilRoot>
			<Router>
				<Layout>
					<Header className="header">
						<div className="logo" style={{ float: "left" }}>
							<Link to="/">
								<img
									alt="Homebrew Logo"
									src={logo}
									style={{
										display: "block",
										maxWidth: "100%",
										maxHeight: "32px",
										textAlign: "left",
									}}
								/>
							</Link>
						</div>
						<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
							<Menu.Item key="1">nav 1</Menu.Item>
							<Menu.Item key="2">nav 2</Menu.Item>
							<Menu.Item key="3">nav 3</Menu.Item>
						</Menu>
					</Header>
					<Layout>
						<Sider width={200} className="site-layout-background">
							<HomebrewMenu />
						</Sider>
						<Layout style={{ padding: "0 24px 24px" }}>
							<Content
								className="site-layout-background"
								style={{
									padding: 24,
									margin: 0,
									minHeight: 280,
								}}>
								<Switch>
									<Route path="/recipes/:id" component={Recipe} />
									<Route path="/recipes" component={RecipeList} />
									<Route path="/fermentables" component={Fermentables} />
									<Route path="/yeasts" component={Yeasts} />
									<Route path="/hops" component={Hops} />
								</Switch>
							</Content>
						</Layout>
					</Layout>
				</Layout>
			</Router>
		</RecoilRoot>
	);
}
