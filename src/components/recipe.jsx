import React, { useState } from "react";
import Stats from "./recipe/Stats";
import Uploader from "./Uploader";
import RecipeFermentables from "./recipe/RecipeFermentables";
import RecipeMiscs from "./recipe/RecipeMiscs";

export default function Recipe() {
	const [recipe, setRecipe] = useState(null);

	const onLoad = (data) => {
		setRecipe(data);
	};

	return (
		<>
			<div className="section">
				<Uploader onLoad={onLoad} />
			</div>

			{recipe ? (
				<div>
					<div className="section">
						<Stats recipe={recipe} />
					</div>
					<div className="section">
						<RecipeFermentables
							recipe={recipe}
							pagination={false}
							filter={false}
						/>
					</div>
					<div className="section">
						<RecipeMiscs recipe={recipe} pagination={false} filter={false} />
					</div>
				</div>
			) : null}
		</>
	);
}
