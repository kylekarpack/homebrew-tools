import React from "react";

const HeadingItem = ({ text, value }) => {
	return (
		<div className="level-item has-text-centered">
			<div>
				<p className="heading">{text}</p>
				<p className="title">{value}</p>
			</div>
		</div>
	);
};

export default ({ recipe }) => {
	if (!recipe) {
		return "Upload a BeerXML file to start";
	}

	return (
		<nav className="level">
			<HeadingItem text="Original Gravity" value={recipe.og} />
			<HeadingItem text="Final Gravity" value={recipe.fg} />
			<HeadingItem text="ABV" value={recipe.estAbv} />
			<HeadingItem text="IBU" value={recipe.ibu} />
			<HeadingItem text="SRM" value={recipe.estColor} />
		</nav>
	);
};
