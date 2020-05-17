import React from "react";
import { Link } from "react-router-dom";
import { fermentables, hops, yeast } from "../data";

export default function HomebrewMenu() {
	return (
		<aside className="menu" style={{ position: "sticky", top: 0 }}>
			<br />
			<br />
			<p className="menu-label">Your Brewing</p>
			<ul className="menu-list">
				<li>
					<Link to="/recipe">
						Recipes
						<span className="tag">1</span>
					</Link>
				</li>
			</ul>
			<p className="menu-label">Ingredients</p>
			<ul className="menu-list">
				<li>
					<Link to="/fermentables">
						Fermentables
						<span className="tag">{fermentables.length}</span>
					</Link>
				</li>
				<li>
					<Link to="/yeasts">
						Yeasts
						<span className="tag">{yeast.length}</span>
					</Link>
				</li>
				<li>
					<Link to="hops">
						Hops
						<span className="tag">{hops.length}</span>
					</Link>
				</li>
			</ul>
		</aside>
	);
}
