import React from "react";
import { NavLink } from "react-router-dom";
import { fermentables, hops, yeast } from "../data";

export default function HomebrewMenu() {
	return (
		<aside className="menu" style={{ position: "sticky", top: 0 }}>
			<br />
			<br />
			<p className="menu-label">Your Brewing</p>
			<ul className="menu-list">
				<li>
					<NavLink to="/recipe" activeClassName="is-active">
						Recipes&nbsp;
						<span className="tag">1</span>
					</NavLink>
				</li>
			</ul>
			<p className="menu-label">Ingredients</p>
			<ul className="menu-list">
				<li>
					<NavLink to="/fermentables" activeClassName="is-active">
						Fermentables&nbsp;
						<span className="tag">{fermentables.length}</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/yeasts" activeClassName="is-active">
						Yeasts&nbsp;
						<span className="tag">{yeast.length}</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/hops" activeClassName="is-active">
						Hops&nbsp;
						<span className="tag">{hops.length}</span>
					</NavLink>
				</li>
			</ul>
		</aside>
	);
}
