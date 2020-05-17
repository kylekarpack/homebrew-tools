import React, { useState } from "react";
import Stats from "./recipe/Stats";
import Uploader from "./Uploader";

export default function Recipe() {

	const [recipe, setRecipe] = useState({});

	const onLoad = (data) => {
		setRecipe(data);
	};

	return (
		<div className="section">
			<Uploader onLoad={onLoad} />
			<Stats recipe={recipe} />
		</div>
	);
}
