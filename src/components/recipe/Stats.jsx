import React from "react";

export default function Stats({ recipe }) {
	console.log(recipe);

	if (!recipe) {
		return "Upload a BeerXML file to start";
	}

	return (
		<nav className="level">
			<div className="level-item has-text-centered">
				<div>
					<p className="heading">Original Gravity</p>
					<p className="title">{recipe.og}</p>
				</div>
			</div>
			<div className="level-item has-text-centered">
				<div>
					<p className="heading">Final Gravity</p>
					<p className="title">{recipe.fg}</p>
				</div>
			</div>
			<div className="level-item has-text-centered">
				<div>
					<p className="heading">ABV</p>
					<p className="title">{recipe.estAbv}%</p>
				</div>
			</div>
			<div className="level-item has-text-centered">
				<div>
					<p className="heading">IBU</p>
					<p className="title">{recipe.ibu}</p>
				</div>
			</div>
			<div className="level-item has-text-centered">
				<div>
					<p className="heading">SRM</p>
					<p className="title">{recipe.estColor}</p>
				</div>
			</div>
		</nav>
	);
}
